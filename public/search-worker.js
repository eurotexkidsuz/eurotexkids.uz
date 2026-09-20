/**
 * EUROTEXKIDS.UZ — Background High-Speed Search & Indexing Web Worker
 * Runs fuzzy filtering, transliteration, and sorting off the main browser thread.
 */

let productsIndex = [];

function transliterate(str) {
  if (!str) return "";
  const map = {
    "sh": "ш", "ch": "ч", "yo": "ё", "yu": "ю", "ya": "я", "ye": "е", "o'": "ў", "g'": "ғ",
    "a": "а", "b": "б", "d": "д", "e": "е", "f": "ф", "g": "г", "h": "ҳ", "i": "и",
    "j": "ж", "k": "к", "l": "л", "m": "м", "n": "н", "o": "о", "p": "п", "q": "қ",
    "r": "р", "s": "с", "t": "т", "u": "у", "v": "в", "x": "х", "y": "й", "z": "з"
  };
  let res = str.toLowerCase();
  for (const [lat, cyr] of Object.entries(map)) {
    res = res.replaceAll(lat, cyr);
  }
  return res;
}

self.onmessage = function (e) {
  const { action, payload, requestId } = e.data || {};

  if (action === "SET_PRODUCTS") {
    productsIndex = Array.isArray(payload) ? payload : [];
    self.postMessage({ action: "PRODUCTS_SET", count: productsIndex.length, requestId });
    return;
  }

  if (action === "SEARCH") {
    const { query = "", category = "all", sort = "popular", lang = "uz" } = payload || {};
    const q = query.toLowerCase().trim();
    const qTranslit = transliterate(q);
    const tokens = [...new Set([...q.split(/[\s,;._\-+]+/), ...(qTranslit ? qTranslit.split(/[\s,;._\-+]+/) : [])])].filter((t) => t.length > 0);

    const filtered = productsIndex.filter((item) => {
      if (!item) return false;

      // Category filter
      if (category && category !== "all") {
        if (category === "super-deal") {
          if (!(item.oldPrice > item.price)) return false;
        } else {
          const cat = String(item.category || "").toLowerCase();
          if (!cat.includes(category.toLowerCase())) return false;
        }
      }

      // Query filter
      if (!q) return true;

      const titleUz = (item.title_uz || item.title || "").toLowerCase();
      const titleRu = (item.title_ru || item.title || "").toLowerCase();
      const titleEn = (item.title_en || item.title || "").toLowerCase();
      const colorUz = (item.color_uz || "").toLowerCase();
      const fabricUz = (item.fabric_uz || "").toLowerCase();
      const catUz = (item.category || "").toLowerCase();
      const itemId = String(item.id || item.customId || "").toLowerCase();

      const fullText = `${titleUz} ${titleRu} ${titleEn} ${colorUz} ${catUz} ${fabricUz} ${itemId}`;

      if (fullText.includes(q)) return true;
      if (qTranslit && fullText.includes(qTranslit)) return true;

      if (tokens.length > 0) {
        return tokens.some((t) => t.length >= 2 && fullText.includes(t));
      }

      return false;
    });

    // Sorting
    if (sort === "price-low") {
      filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sort === "price-high") {
      filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sort === "discount") {
      filtered.sort((a, b) => ((b.oldPrice || 0) - (b.price || 0)) - ((a.oldPrice || 0) - (a.price || 0)));
    } else if (sort === "rating") {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    // Return filtered IDs and full count
    const matchedIds = filtered.map((item) => String(item.id || item.customId));
    self.postMessage({
      action: "SEARCH_RESULTS",
      requestId,
      matchedIds,
      totalCount: matchedIds.length,
    });
  }
};
