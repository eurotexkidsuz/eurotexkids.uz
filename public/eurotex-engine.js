/* ===========================================================
   EUROTEXKIDS.UZ — PROFESSIONAL ELITE ENGINE v2.0
   ===========================================================
   1. Dual Currency Engine ($ USD ⇄ UZS so'm)
   2. IndexedDB EurotexIDB Local Cache Layer
   3. Global window.EUROTEX_PRODUCTS Bulletproof Fallback
   4. 24 DEFAULT Wholesale Products (Never empty catalog)
   5. URL SPA Routing Engine: /suits, /admin, /admin/addcart ...
   6. Google Identity One-Tap + Auth Gate
   7. Master State Management (usdRate, user, cart, lang ...)
   =========================================================== */

(function () {
  "use strict";

  /* -----------------------------------------------------------------
     0. MASTER GLOBAL STATE
  ------------------------------------------------------------------ */
  const MASTER_ADMIN_EMAILS = [
    "eurotexkids7775@gmail.com",
    "0600quetry@gmail.com",
  ];

  const ORDER_STATUS_STEPS = {
    0: { label: "Bekor qilindi", color: "#ef4444", icon: "❌" },
    1: { label: "Qabul qilindi", color: "#f59e0b", icon: "🟡" },
    2: { label: "Tayyorlanmoqda", color: "#3b82f6", icon: "🔵" },
    3: { label: "Kuryerda", color: "#8b5cf6", icon: "🟣" },
    4: { label: "Yetkazib berildi", color: "#10b981", icon: "✅" },
  };

  /* -----------------------------------------------------------------
     1. EXTENDED 24 DEFAULT WHOLESALE PRODUCTS (BULLETPROOF)
  ------------------------------------------------------------------ */
  const DEFAULT_EUROTEX_PRODUCTS_V2 = [
    {
      id: "etx-001",
      customId: "etx-001",
      title_uz:
        "Eurotex Royal Navy Slim Fit Kostyum-Shim (1 Pachka = 6 ta Seriya 46-56)",
      title_ru: "Костюм Eurotex Royal Navy Slim Fit (1 Упаковка = 6 шт)",
      title_en: "Eurotex Royal Navy Slim Fit Suit (1 Pack = 6 pcs)",
      category: "suits",
      subCategory: "slim",
      priceUsd: 120,
      pachkaPriceUsd: 120,
      pachkaQty: 6,
      unitPriceUsd: 20,
      price: 120,
      oldPrice: 160,
      rating: 4.9,
      reviewsCount: 186,
      badge_uz: "LUXURY PACHKA",
      badgeType: "gold",
      image: "/images/navy_suit.jpg",
      images: ["/images/navy_suit.jpg", "/images/black_tuxedo.jpg"],
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "90% Italiya Jun (Virgin Wool), 10% Ipak. Viskoza astar",
      color_uz: "To'q Ko'k (Royal Navy)",
      inStock: true,
      isFeatured: true,
      isNewArrival: true,
      wholesaleOnly: true,
    },
    {
      id: "etx-002",
      customId: "etx-002",
      title_uz:
        "Eurotex Black Diamond Smoking & To'y Kostyum-Shimi (6 ta Seriya)",
      title_ru: "Смокинг Eurotex Black Diamond Свадебный (6 шт)",
      title_en: "Eurotex Black Diamond Wedding Tuxedo (6 pcs Series)",
      category: "tuxedos",
      subCategory: "tuxedo",
      priceUsd: 150,
      pachkaPriceUsd: 150,
      pachkaQty: 6,
      unitPriceUsd: 25,
      price: 150,
      oldPrice: 190,
      rating: 5.0,
      reviewsCount: 112,
      badge_uz: "PREMIUM PACHKA",
      badgeType: "gold",
      image: "/images/black_tuxedo.jpg",
      images: ["/images/black_tuxedo.jpg"],
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Wool & Satin Lapel, Kapalak va Zaponka sovg'a sifatida",
      color_uz: "Klassik Qora Satin",
      inStock: true,
      isFeatured: true,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-003",
      customId: "etx-003",
      title_uz: "Eurotex Charcoal Grey Klassik 100% Jun Shim (1 Pachka = 6 ta)",
      title_ru: "Классические Брюки Eurotex Charcoal Grey Шерсть (6 шт)",
      title_en: "Eurotex Charcoal Grey Classic Wool Trousers (Pack of 6)",
      category: "trousers",
      subCategory: "wool",
      priceUsd: 45,
      pachkaPriceUsd: 45,
      pachkaQty: 6,
      unitPriceUsd: 7.5,
      price: 45,
      oldPrice: 65,
      rating: 4.8,
      reviewsCount: 254,
      badge_uz: "SUPER NARX",
      badgeType: "red",
      image: "/images/grey_trousers.jpg",
      images: ["/images/grey_trousers.jpg"],
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "100% Premium Jun, Qatlari o'chmaydigan texnologiya",
      color_uz: "To'q Kulrang Charcoal",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-004",
      customId: "etx-004",
      title_uz: "Eurotex Executive Double-Breasted Ikki Tomonli Kostyum (6 ta)",
      title_ru: "Двубортный Костюм Eurotex Executive (6 шт)",
      title_en: "Eurotex Executive Double-Breasted Suit (6 pcs)",
      category: "suits",
      subCategory: "double",
      priceUsd: 140,
      pachkaPriceUsd: 140,
      pachkaQty: 6,
      unitPriceUsd: 23.33,
      price: 140,
      oldPrice: 180,
      rating: 4.9,
      reviewsCount: 78,
      badge_uz: "YANGI 2026",
      badgeType: "gold",
      image: "/images/navy_suit.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Super 130s Italiya Virgin Wool matosi",
      color_uz: "Ko'k Katakli Flanel",
      inStock: true,
      isFeatured: true,
      isNewArrival: true,
      wholesaleOnly: true,
    },
    {
      id: "etx-005",
      customId: "etx-005",
      title_uz: "Eurotex Oxford Premium Oq Erkaklar Ko'ylagi (1 Pachka = 6 ta)",
      title_ru: "Сорочка Eurotex Oxford Premium Белая Мужская (6 шт)",
      title_en: "Eurotex Oxford Premium White Men's Shirt (Pack 6)",
      category: "shirts",
      subCategory: "oxford",
      priceUsd: 30,
      pachkaPriceUsd: 30,
      pachkaQty: 6,
      unitPriceUsd: 5.0,
      price: 30,
      oldPrice: 45,
      rating: 4.9,
      reviewsCount: 342,
      badge_uz: "HIT PACHKA",
      badgeType: "red",
      image: "/images/navy_suit.jpg",
      sizes: [38, 39, 40, 41, 42, 43],
      fabric_uz: "100% Misr Paxtasi (Egyptian Cotton)",
      color_uz: "Qoradek Oq",
      inStock: true,
      isFeatured: true,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-006",
      customId: "etx-006",
      title_uz: "Eurotex Tabiiy Charm Klassik Teri Kamar (1 Pachka = 6 ta)",
      title_ru: "Ремень Кожаный Eurotex Classic Genuine Leather (6 шт)",
      title_en: "Eurotex Genuine Leather Classic Belt (Pack of 6)",
      category: "accessories",
      subCategory: "belts",
      priceUsd: 25,
      pachkaPriceUsd: 25,
      pachkaQty: 6,
      unitPriceUsd: 4.16,
      price: 25,
      oldPrice: 35,
      rating: 4.9,
      reviewsCount: 448,
      badge_uz: "100% CHARM",
      badgeType: "gold",
      image: "/images/grey_trousers.jpg",
      sizes: [110, 115, 120, 125, 130],
      fabric_uz: "100% Tabiiy Sigir Charmi, Latun Toka",
      color_uz: "Klassik Qora",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-007",
      customId: "etx-007",
      title_uz: "Eurotex Smart Business Klassik Pijak Blazer (6 ta Seriya)",
      title_ru: "Классический Блейзер Eurotex Smart Business (6 шт)",
      title_en: "Eurotex Smart Business Classic Blazer (Pack of 6)",
      category: "blazers",
      subCategory: "casual-blazer",
      priceUsd: 75,
      pachkaPriceUsd: 75,
      pachkaQty: 6,
      unitPriceUsd: 12.5,
      price: 75,
      oldPrice: 100,
      rating: 4.7,
      reviewsCount: 96,
      badge_uz: "CHEGIRMA -25%",
      badgeType: "red",
      image: "/images/navy_suit.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "80% Jun, 20% Paxta, Yoz-Kuz uchun bichim",
      color_uz: "Moviy Navy",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-008",
      customId: "etx-008",
      title_uz: "Eurotex Imperial Slim Fit Klassik Oq Ko'ylak (6 ta)",
      title_ru: "Классическая Белая Рубашка Eurotex Imperial Slim (6 шт)",
      title_en: "Eurotex Imperial White Slim Fit Shirt (Pack 6)",
      category: "shirts",
      subCategory: "white",
      priceUsd: 30,
      pachkaPriceUsd: 30,
      pachkaQty: 6,
      unitPriceUsd: 5,
      price: 30,
      oldPrice: 45,
      rating: 4.9,
      reviewsCount: 320,
      badge_uz: "HIT",
      badgeType: "red",
      image: "/images/navy_suit.jpg",
      sizes: [38, 39, 40, 41, 42, 43],
      fabric_uz: "100% Misr Paxtasi, Easy Iron (Oson dazmol)",
      color_uz: "Oppoq Oq",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-009",
      customId: "etx-009",
      title_uz:
        "Eurotex Italian Silk Galstuk & Zaponka To'plami (1 Pachka = 10 ta)",
      title_ru: "Набор Галстуков Eurotex Italian Silk + Запонки (10 шт)",
      title_en: "Eurotex Italian Silk Tie & Cufflinks Set (Pack of 10)",
      category: "accessories",
      subCategory: "ties",
      priceUsd: 18,
      pachkaPriceUsd: 18,
      pachkaQty: 10,
      unitPriceUsd: 1.8,
      price: 18,
      oldPrice: 25,
      rating: 4.9,
      reviewsCount: 198,
      badge_uz: "SOVG'ABOR",
      badgeType: "gold",
      image: "/images/black_tuxedo.jpg",
      sizes: ["Standart"],
      fabric_uz: "100% Tabiiy Italiya Ipagi (Silk), Latun zaponkalar",
      color_uz: "Binafsha + Oltin rang aralash",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-010",
      customId: "etx-010",
      title_uz: "Eurotex Genuine Leather Klassik Teri Kamar (1 Pachka = 5 ta)",
      title_ru: "Кожаные Ремни Eurotex Classic Genuine (5 шт)",
      title_en: "Eurotex Genuine Leather Classic Belts (Pack of 5)",
      category: "accessories",
      subCategory: "belts",
      priceUsd: 22,
      pachkaPriceUsd: 22,
      pachkaQty: 5,
      unitPriceUsd: 4.4,
      price: 22,
      oldPrice: 30,
      rating: 4.8,
      reviewsCount: 152,
      badge_uz: "TERI PACHKA",
      badgeType: "red",
      image: "/images/grey_trousers.jpg",
      sizes: [110, 115, 120, 125],
      fabric_uz: "100% Sigir Derisi, Zanglamaydigan Nerjavey Toka",
      color_uz: "Qora va Jigarrang Aralash",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-011",
      customId: "etx-011",
      title_uz: "Eurotex Milano Charcoal 3-Piece Jileli Kostyum (6 ta Seriya)",
      title_ru: "Костюм-Тройка Eurotex Milano Charcoal (6 шт)",
      title_en: "Eurotex Milano Charcoal Black 3-Piece Suit (Pack 6)",
      category: "suits",
      subCategory: "slim",
      priceUsd: 160,
      pachkaPriceUsd: 160,
      pachkaQty: 6,
      unitPriceUsd: 26.66,
      price: 160,
      oldPrice: 210,
      rating: 5.0,
      reviewsCount: 124,
      badge_uz: "LUXURY 3-PIECE",
      badgeType: "gold",
      image: "/images/black_tuxedo.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Italiya Jileli 3-Talik To'plam, Virgin Wool",
      color_uz: "Ko'mir Qora Charcoal Black",
      inStock: true,
      isFeatured: true,
      isNewArrival: true,
      wholesaleOnly: true,
    },
    {
      id: "etx-012",
      customId: "etx-012",
      title_uz: "Eurotex Venetian Blue Slim Tailored Blazer (6 ta)",
      title_ru: "Блейзер Eurotex Venetian Blue (6 шт)",
      title_en: "Eurotex Venetian Blue Slim Tailored Blazer (6 pcs)",
      category: "blazers",
      subCategory: "casual-blazer",
      priceUsd: 80,
      pachkaPriceUsd: 80,
      pachkaQty: 6,
      unitPriceUsd: 13.33,
      price: 80,
      oldPrice: 110,
      rating: 4.8,
      reviewsCount: 82,
      badge_uz: "YANGI MODEL",
      badgeType: "gold",
      image: "/images/navy_suit.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Soft Wool Blend, Zamonaviy Italiya Uslubi",
      color_uz: "Venesia Moviy",
      inStock: true,
      isFeatured: false,
      isNewArrival: true,
      wholesaleOnly: true,
    },
    {
      id: "etx-013",
      customId: "etx-013",
      title_uz: "Eurotex Classic Fit Light Grey Wool Trousers (6 ta)",
      title_ru: "Классические Серые Брюки Eurotex Wool (6 шт)",
      title_en: "Eurotex Light Grey Classic Fit Wool Trousers (6 pcs)",
      category: "trousers",
      subCategory: "wool",
      priceUsd: 48,
      pachkaPriceUsd: 48,
      pachkaQty: 6,
      unitPriceUsd: 8,
      price: 48,
      oldPrice: 70,
      rating: 4.9,
      reviewsCount: 168,
      badge_uz: "KLASSIK",
      badgeType: "gold",
      image: "/images/grey_trousers.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Ochiq Kulrang Jun, Dazmol talab qilmaydi",
      color_uz: "Ochiq Kulrang Light Grey",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-014",
      customId: "etx-014",
      title_uz: "Eurotex Diplomat Sky Blue Stretch Cotton Shirt (6 ta)",
      title_ru: "Голубая Рубашка Eurotex Diplomat Stretch Cotton (6 шт)",
      title_en: "Eurotex Diplomat Sky Blue Stretch Cotton Shirt (6)",
      category: "shirts",
      subCategory: "blue",
      priceUsd: 32,
      pachkaPriceUsd: 32,
      pachkaQty: 6,
      unitPriceUsd: 5.33,
      price: 32,
      oldPrice: 48,
      rating: 4.9,
      reviewsCount: 204,
      badge_uz: "TOP SOTUV",
      badgeType: "red",
      image: "/images/navy_suit.jpg",
      sizes: [38, 39, 40, 41, 42, 43],
      fabric_uz: "95% Paxta, 5% Elastan Stretch (Cho'ziladi)",
      color_uz: "Havo Rangli Sky Blue",
      inStock: true,
      isFeatured: true,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-015",
      customId: "etx-015",
      title_uz: "Eurotex Roma Midnight Blue Double-Breasted Blazer (6 ta)",
      title_ru: "Двубортный Блейзер Eurotex Roma Midnight Blue (6 шт)",
      title_en: "Eurotex Roma Midnight Blue DB Blazer (Pack 6)",
      category: "blazers",
      subCategory: "double",
      priceUsd: 95,
      pachkaPriceUsd: 95,
      pachkaQty: 6,
      unitPriceUsd: 15.83,
      price: 95,
      oldPrice: 130,
      rating: 4.9,
      reviewsCount: 58,
      badge_uz: "YANGI RUSH",
      badgeType: "purple",
      image: "/images/navy_suit.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "High Twist Wool Blend, Anti-wrinkle",
      color_uz: "Tun Ko'k Midnight Blue",
      inStock: true,
      isFeatured: false,
      isNewArrival: true,
      wholesaleOnly: true,
    },
    {
      id: "etx-016",
      customId: "etx-016",
      title_uz: "Eurotex Premium Burgundy To'y Kostyum-Shimi (6 ta Seriya)",
      title_ru: "Свадебный Костюм Eurotex Premium Burgundy (6 шт)",
      title_en: "Eurotex Premium Burgundy Groom Suit (Pack 6)",
      category: "tuxedos",
      subCategory: "wedding",
      priceUsd: 155,
      pachkaPriceUsd: 155,
      pachkaQty: 6,
      unitPriceUsd: 25.83,
      price: 155,
      oldPrice: 200,
      rating: 4.9,
      reviewsCount: 72,
      badge_uz: "TO'Y PACHKA",
      badgeType: "gold",
      image: "/images/navy_suit.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Wool Blend + Satin Detail, Burgundy Lapel",
      color_uz: "Binafsha Qizil (Burgundy)",
      inStock: true,
      isFeatured: true,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-017",
      customId: "etx-017",
      title_uz: "Eurotex Tailored Black Wool Trousers Slim Fit (6 ta)",
      title_ru: "Черные Шерстяные Брюки Eurotex Slim Fit (6 шт)",
      title_en: "Eurotex Tailored Black Wool Slim Trousers (Pack 6)",
      category: "trousers",
      subCategory: "slim-pants",
      priceUsd: 50,
      pachkaPriceUsd: 50,
      pachkaQty: 6,
      unitPriceUsd: 8.33,
      price: 50,
      oldPrice: 70,
      rating: 4.8,
      reviewsCount: 188,
      badge_uz: "SLIM FIT",
      badgeType: "red",
      image: "/images/grey_trousers.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Premium Yün + Viskoza aralash",
      color_uz: "Qora Absolyut",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-018",
      customId: "etx-018",
      title_uz: "Eurotex Pink Business Formal Dress Shirt (6 ta)",
      title_ru: "Розовая Офисная Рубашка Eurotex Formal (6 шт)",
      title_en: "Eurotex Pink Business Formal Dress Shirt (Pack 6)",
      category: "shirts",
      subCategory: "business",
      priceUsd: 32,
      pachkaPriceUsd: 32,
      pachkaQty: 6,
      unitPriceUsd: 5.33,
      price: 32,
      oldPrice: 44,
      rating: 4.8,
      reviewsCount: 114,
      badge_uz: "BIZNES",
      badgeType: "neon",
      image: "/images/navy_suit.jpg",
      sizes: [38, 39, 40, 41, 42, 43],
      fabric_uz: "100% Dobby Weave Premium Paxta",
      color_uz: "Yengil Pushti",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-019",
      customId: "etx-019",
      title_uz: "Eurotex Pocket Squares & Kapalaklar To'plami (Pachka = 12 ta)",
      title_ru: "Набор Платочков и бабочек Eurotex (12 шт)",
      title_en: "Eurotex Pocket Squares & Bow Ties Set (Pack 12)",
      category: "accessories",
      subCategory: "cufflinks",
      priceUsd: 24,
      pachkaPriceUsd: 24,
      pachkaQty: 12,
      unitPriceUsd: 2,
      price: 24,
      oldPrice: 32,
      rating: 4.7,
      reviewsCount: 86,
      badge_uz: "AKSESSUAR",
      badgeType: "neon",
      image: "/images/black_tuxedo.jpg",
      sizes: ["One Size"],
      fabric_uz: "Silk + Microfibre Premium",
      color_uz: "Turli ranglar to'plami",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-020",
      customId: "etx-020",
      title_uz: "Eurotex Prince of Wales Check Kostyum-Shim (6 ta)",
      title_ru: "Костюм Eurotex Prince of Wales Клетка (6 шт)",
      title_en: "Eurotex Prince of Wales Check Suit (Pack 6)",
      category: "suits",
      subCategory: "classic",
      priceUsd: 130,
      pachkaPriceUsd: 130,
      pachkaQty: 6,
      unitPriceUsd: 21.66,
      price: 130,
      oldPrice: 170,
      rating: 4.9,
      reviewsCount: 62,
      badge_uz: "BRIT STYLE",
      badgeType: "gold",
      image: "/images/navy_suit.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Italiya Flanel Katakli Jun mato",
      color_uz: "Prince of Wales Grey Check",
      inStock: true,
      isFeatured: false,
      isNewArrival: true,
      wholesaleOnly: true,
    },
    {
      id: "etx-021",
      customId: "etx-021",
      title_uz: "Eurotex Tropical Wool Summer Blazer Bej (6 ta)",
      title_ru: "Летний Блейзер Eurotex Tropical Wool Бежевый (6 шт)",
      title_en: "Eurotex Tropical Wool Summer Blazer Beige (Pack 6)",
      category: "blazers",
      subCategory: "summer",
      priceUsd: 70,
      pachkaPriceUsd: 70,
      pachkaQty: 6,
      unitPriceUsd: 11.66,
      price: 70,
      oldPrice: 95,
      rating: 4.7,
      reviewsCount: 48,
      badge_uz: "YOZGI",
      badgeType: "neon",
      image: "/images/navy_suit.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Tropik Yün - Nafas oladigan, Engil",
      color_uz: "Bej Sand",
      inStock: true,
      isFeatured: false,
      isNewArrival: true,
      wholesaleOnly: true,
    },
    {
      id: "etx-022",
      customId: "etx-022",
      title_uz: "Eurotex Pleated Classic High-Waist Trousers (6 ta)",
      title_ru: "Классические Брюки Eurotex со Складками Высокая Талия (6 шт)",
      title_en: "Eurotex Pleated Classic High-Waist Trousers (Pack 6)",
      category: "trousers",
      subCategory: "pleated",
      priceUsd: 46,
      pachkaPriceUsd: 46,
      pachkaQty: 6,
      unitPriceUsd: 7.66,
      price: 46,
      oldPrice: 62,
      rating: 4.8,
      reviewsCount: 92,
      badge_uz: "KLASSIK RETRO",
      badgeType: "gold",
      image: "/images/grey_trousers.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Burmashtirilgan Premium Jun",
      color_uz: "Jigarrang Braun",
      inStock: true,
      isFeatured: false,
      isNewArrival: false,
      wholesaleOnly: true,
    },
    {
      id: "etx-023",
      customId: "etx-023",
      title_uz: "Eurotex Royal Crest Gold Emblem Blazer Qora (6 ta)",
      title_ru: "Блейзер Eurotex Royal Crest с Гербом Золотой Черный (6 шт)",
      title_en: "Eurotex Royal Crest Gold Emblem Black Blazer (Pack 6)",
      category: "blazers",
      subCategory: "blazer-special",
      priceUsd: 85,
      pachkaPriceUsd: 85,
      pachkaQty: 6,
      unitPriceUsd: 14.16,
      price: 85,
      oldPrice: 115,
      rating: 5.0,
      reviewsCount: 34,
      badge_uz: "ROYAL SPECIAL",
      badgeType: "gold",
      image: "/images/navy_suit.jpg",
      sizes: [46, 48, 50, 52, 54, 56],
      fabric_uz: "Barathea Wool, Metal Emblem",
      color_uz: "Klassik Qora + Oltin Emblema",
      inStock: true,
      isFeatured: true,
      isNewArrival: true,
      wholesaleOnly: true,
    },
    {
      id: "etx-024",
      customId: "etx-024",
      title_uz: "Eurotex Kids Royal Mini Kostyum-Shim (6 ta Pachka)",
      title_ru: "Детский Костюм Eurotex Kids Royal Mini (6 шт Упаковка)",
      title_en: "Eurotex Kids Royal Mini Suit (Wholesale Pack of 6)",
      category: "suits",
      subCategory: "kids-suit",
      priceUsd: 90,
      pachkaPriceUsd: 90,
      pachkaQty: 6,
      unitPriceUsd: 15,
      price: 90,
      oldPrice: 120,
      rating: 5.0,
      reviewsCount: 52,
      badge_uz: "KIDS ROYAL",
      badgeType: "neon",
      image: "/images/navy_suit.jpg",
      sizes: [28, 30, 32, 34, 36, 38],
      fabric_uz: "Yumshoq Premium Wool Blend - Bolalar uchun maxsus",
      color_uz: "Royal Navy + Gold trim",
      inStock: true,
      isFeatured: true,
      isNewArrival: true,
      wholesaleOnly: true,
    },
  ];

  /* -----------------------------------------------------------------
     2. DUAL CURRENCY ENGINE
  ------------------------------------------------------------------ */
  const CurrencyEngine = {
    state: {
      usdRate: 12650,
    },

    init() {
      try {
        const saved = localStorage.getItem("eurotex_usd_rate");
        if (saved) {
          const num = parseFloat(saved);
          if (!isNaN(num) && num > 0) this.state.usdRate = num;
        }
      } catch (e) {}
      try {
        if (window.state && !window.state.usdRate) {
          window.state.usdRate = this.state.usdRate;
        } else if (window.state && window.state.usdRate) {
          this.state.usdRate = window.state.usdRate;
        }
      } catch (e) {}
    },

    setRate(newRate) {
      const num = parseFloat(newRate);
      if (isNaN(num) || num <= 0) return false;
      this.state.usdRate = num;
      if (window.state) window.state.usdRate = num;
      try {
        localStorage.setItem("eurotex_usd_rate", String(num));
      } catch (e) {}
      return true;
    },

    formatUSD(amount) {
      const n = Number(amount) || 0;
      return (
        "$" +
        n.toLocaleString("en-US", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 0,
        })
      );
    },

    formatUZS(amount) {
      const n = Math.round(Number(amount) || 0);
      return n.toLocaleString("ru-RU").replace(/,/g, " ") + " so'm";
    },

    usdToUzs(usdAmount) {
      return Math.round((Number(usdAmount) || 0) * this.state.usdRate);
    },

    formatDualPachka(product) {
      const usdAmt = Number(
        product?.priceUsd ?? product?.pachkaPriceUsd ?? product?.price ?? 0,
      );
      const pachkaQty = Number(product?.pachkaQty ?? 6);
      const uzsAmt = this.usdToUzs(usdAmt);
      const perDonaUSD = pachkaQty > 0 ? usdAmt / pachkaQty : 0;
      return {
        usdStr: this.formatUSD(usdAmt),
        uzsStr: this.formatUZS(uzsAmt),
        perDonaUSD: this.formatUSD(perDonaUSD),
        usdAmt,
        uzsAmt,
      };
    },

    renderDualBadges(product) {
      const d = this.formatDualPachka(product);
      return (
        '<div class="dual-price-badge">' +
        '<span class="price-usd-chip">' +
        d.usdStr +
        " / pachka</span>" +
        '<span class="price-uzs-chip">(' +
        d.uzsStr +
        ")</span>" +
        '<span class="price-perunit-chip">' +
        d.perDonaUSD +
        "/dona</span>" +
        "</div>"
      );
    },
  };

  /* -----------------------------------------------------------------
     3. INDEXEDDB CACHE LAYER (EurotexIDB) - offline resilience
  ------------------------------------------------------------------ */
  const IDBEngine = {
    DB_NAME: "EurotexIDB",
    DB_VERSION: 2,
    STORE_PRODUCTS: "products",
    STORE_STATE: "state",
    STORE_ORDERS: "orders",
    db: null,
    online: typeof navigator !== "undefined" ? navigator.onLine : true,

    async init() {
      return new Promise((resolve) => {
        try {
          if (!window.indexedDB) {
            console.warn("[EurotexIDB] IndexedDB not supported");
            return resolve(false);
          }
          const req = indexedDB.open(this.DB_NAME, this.DB_VERSION);
          req.onupgradeneeded = (e) => {
            const db = e.target.result;
            const stores = [
              { name: this.STORE_PRODUCTS, key: "customId" },
              { name: this.STORE_STATE, key: "key" },
              { name: this.STORE_ORDERS, key: "orderId" },
            ];
            stores.forEach((s) => {
              if (!db.objectStoreNames.contains(s.name)) {
                try {
                  db.createObjectStore(s.name, { keyPath: s.key });
                } catch (err) {}
              }
            });
          };
          req.onsuccess = (e) => {
            this.db = e.target.result;
            resolve(true);
          };
          req.onerror = () => {
            console.warn("[EurotexIDB] Open failed");
            resolve(false);
          };
        } catch (e) {
          resolve(false);
        }
      });
    },

    async setAll(storeName, items, keyField = "customId") {
      if (!this.db) return false;
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction(storeName, "readwrite");
          const store = tx.objectStore(storeName);
          items.forEach((it) => {
            try {
              const k = it[keyField] || it.id || it._id;
              if (k) store.put({ ...it, [keyField || "key"]: k });
            } catch (e) {}
          });
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch (e) {
          resolve(false);
        }
      });
    },

    async getAll(storeName) {
      if (!this.db) return [];
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction(storeName, "readonly");
          const req = tx.objectStore(storeName).getAll();
          req.onsuccess = () => resolve(req.result || []);
          req.onerror = () => resolve([]);
        } catch (e) {
          resolve([]);
        }
      });
    },
  };

  /* -----------------------------------------------------------------
     4. GLOBAL window.EUROTEX_PRODUCTS BULLETPROOF FALLBACK
  ------------------------------------------------------------------ */
  function bootstrapGlobalFallbackProducts() {
    try {
      const merged = [];
      const seen = new Set();
      const pushIfNew = (arr) => {
        (arr || []).forEach((p) => {
          const k = String(p.customId || p.id || p._id || Math.random());
          if (!seen.has(k)) {
            seen.add(k);
            merged.push({ ...p, customId: k });
          }
        });
      };
      pushIfNew(window.DEFAULT_EUROTEX_PRODUCTS || []);
      pushIfNew(DEFAULT_EUROTEX_PRODUCTS_V2 || []);
      try {
        const local = JSON.parse(
          localStorage.getItem("eurotex_products") || "[]",
        );
        pushIfNew(local);
      } catch (e) {}

      window.EUROTEX_PRODUCTS = merged;
      window.DEFAULT_EUROTEX_PRODUCTS_V2 = DEFAULT_EUROTEX_PRODUCTS_V2;

      if (
        !window.DEFAULT_EUROTEX_PRODUCTS ||
        window.DEFAULT_EUROTEX_PRODUCTS.length < 20
      ) {
        window.DEFAULT_EUROTEX_PRODUCTS = merged;
      }
      if (!window.state) window.state = {};
      window.state.usdRate = CurrencyEngine.state.usdRate;
      window.state.products = window.EUROTEX_PRODUCTS.slice();
      window.state.statusSteps = ORDER_STATUS_STEPS;
      window.state.masterAdminEmails = MASTER_ADMIN_EMAILS;
      return window.EUROTEX_PRODUCTS;
    } catch (e) {
      window.EUROTEX_PRODUCTS = DEFAULT_EUROTEX_PRODUCTS_V2.slice();
      return window.EUROTEX_PRODUCTS;
    }
  }

  /* -----------------------------------------------------------------
     5. GOOGLE IDENTITY ONE-TAP AUTH + AUTH GATE
  ------------------------------------------------------------------ */
  const GoogleOneTapEngine = {
    initialized: false,
    clientId:
      window.GOOGLE_CLIENT_ID ||
      "949327485964-pbdlffn30vuge0ert42rlpdnf82854ql.apps.googleusercontent.com",
    isMobile: false,

    init() {
      try {
        const ua =
          navigator && navigator.userAgent
            ? navigator.userAgent.toLowerCase()
            : "";
        this.isMobile =
          /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(
            ua,
          );
        if (this.isMobile) return;

        if (this._isUserLoggedIn()) {
          this.cancel();
          return;
        }

        if (
          window.google &&
          window.google.accounts &&
          window.google.accounts.id
        ) {
          this._mountGSI();
        } else {
          const check = () => {
            if (
              window.google &&
              window.google.accounts &&
              window.google.accounts.id
            ) {
              this._mountGSI();
            } else {
              setTimeout(check, 200);
            }
          };
          setTimeout(check, 300);
        }
      } catch (e) {
        console.warn("[GoogleOneTap] init failed", e.message);
      }
    },

    _isUserLoggedIn() {
      try {
        if (
          window.state &&
          window.state.user &&
          (window.state.user.email || window.state.user.id)
        ) {
          return true;
        }
        const raw = localStorage.getItem("eurotex_user");
        if (raw) {
          const u = JSON.parse(raw);
          if (u && (u.email || u.id)) return true;
        }
      } catch (e) {}
      return false;
    },

    _mountGSI() {
      if (this.initialized || window._gsiGlobalInitialized || !window.google?.accounts?.id) return;
      window._gsiGlobalInitialized = true;
      try {
        window.google.accounts.id.initialize({
          client_id: this.clientId,
          callback: (response) => this._handleCredential(response),
          auto_select: false,
          cancel_on_tap_outside: false,
          use_fedcm_for_prompt: false,
          context: "use",
          itp_support: true,
        });
        this.initialized = true;
      } catch (e) {
        console.warn("[GoogleOneTap] mount failed", e.message);
      }
    },

    cancel() {
      try {
        if (
          window.google &&
          window.google.accounts &&
          window.google.accounts.id &&
          typeof window.google.accounts.id.cancel === "function"
        ) {
          window.google.accounts.id.cancel();
        }
      } catch (e) {}
    },

    _handleCredential(response) {
      try {
        if (window._onGoogleCredentialCallback) {
          window._onGoogleCredentialCallback(response);
        } else {
          fetch("/users/auth/google-one-tap", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ credential: response.credential }),
          })
            .then((r) => r.json())
            .then((data) => {
              if (data && data.user) {
                localStorage.setItem("eurotex_user", JSON.stringify(data.user));
                if (window.state) window.state.user = data.user;
                this.cancel();
                try {
                  if (typeof window.refreshUserAuthUI === "function")
                    window.refreshUserAuthUI();
                } catch (e) {}
              }
            })
            .catch(() => {});
        }
      } catch (e) {}
    },
  };

  /* -----------------------------------------------------------------
     6. CHECKOUT AUTH GATE — Force login before placing order
  ------------------------------------------------------------------ */
  function runCheckoutAuthGate(onPass) {
    let loggedIn = false;
    try {
      if (
        window.state &&
        window.state.user &&
        (window.state.user.email || window.state.user.id)
      )
        loggedIn = true;
      const raw = localStorage.getItem("eurotex_user");
      if (!loggedIn && raw) {
        const u = JSON.parse(raw);
        if (u && (u.email || u.id)) {
          loggedIn = true;
          if (window.state) window.state.user = u;
        }
      }
    } catch (e) {}

    if (loggedIn) {
      if (typeof onPass === "function") return onPass();
      return true;
    }

    try {
      if (typeof window.triggerAuthToast === "function") {
        window.triggerAuthToast(
          "Buyurtmani rasmiylashtirish uchun tizimga kiring!",
        );
      } else {
        alert("Buyurtmani rasmiylashtirish uchun tizimga kiring!");
      }
      if (typeof window.openAuthModal === "function") {
        window.openAuthModal();
      }
      return false;
    } catch (e) {
      alert("Buyurtmani rasmiylashtirish uchun tizimga kiring!");
      return false;
    }
  }

  /* -----------------------------------------------------------------
     7. URL SPA ROUTING & DEEP LINKING ENGINE
  ------------------------------------------------------------------ */
  const RoutingEngine = {
    ROUTES: {
      "": "home",
      "/": "home",
      "/all": { type: "category", value: "all" },
      "/super_price": { type: "category", value: "super-deal" },
      "/suits": { type: "category", value: "suits" },
      "/trousers": { type: "category", value: "trousers" },
      "/blazers": { type: "category", value: "blazers" },
      "/tuxedos": { type: "category", value: "tuxedos" },
      "/shirts": { type: "category", value: "shirts" },
      "/accessories": { type: "category", value: "accessories" },
      "/pachkalab-sotuv": { type: "category", value: "wholesale" },
      "/admin": { type: "admin", value: "dashboard" },
      "/admin/orders": { type: "admin", value: "orders" },
      "/admin/addcart": { type: "admin", value: "addcart" },
      "/admin/products": { type: "admin", value: "products" },
      "/admin/settings": { type: "admin", value: "settings" },
    },

    _listenerInstalled: false,

    init() {
      window.addEventListener("popstate", () => this.handleURLRouting(true));
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(() => this.handleURLRouting(false), 200);
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          setTimeout(() => this.handleURLRouting(false), 200);
        });
      }
    },

    _navPillsActivate(catValue) {
      try {
        document.querySelectorAll(".nav-pill").forEach((a) => {
          a.classList.remove("active");
          const v = a.getAttribute("data-category");
          if (
            v === catValue ||
            (catValue === "wholesale" && a.textContent.includes("Pachkalab"))
          ) {
            a.classList.add("active");
          }
          if (catValue === "all" && v === "all") a.classList.add("active");
        });
      } catch (e) {}
    },

    handleURLRouting(fromPopState) {
      const rawPath = (location.pathname || "").replace(/\/+$/, "") || "";
      const path = rawPath === "" ? "/" : rawPath;
      const hash = location.hash || "";
      const route = this.ROUTES[path] || this.ROUTES[rawPath];
      const routeType =
        route && route.type ? route.type : route === "home" ? "home" : "home";
      const value =
        route && route.value ? route.value : route === "home" ? "home" : "home";

      try {
        if (window.state)
          window.state.currentRoute = { path, type: routeType, value };
      } catch (e) {}

      if (routeType === "home" || routeType === "category") {
        this._openHomePage();
        if (routeType === "category") {
          this._navPillsActivate(value);
          try {
            if (
              window.state &&
              typeof window._applyCategoryFilter === "function"
            ) {
              window._applyCategoryFilter(value);
            } else {
              try {
                if (typeof window.filterProductsByCategory === "function") {
                  window.filterProductsByCategory(value);
                } else {
                  const pills = document.querySelectorAll(".sub-pill");
                  pills.forEach((p) => {
                    p.classList.remove("active");
                    if (p.getAttribute("data-filter") === value)
                      p.classList.add("active");
                  });
                }
              } catch (err) {}
            }
          } catch (e) {}
          try {
            const sec = document.getElementById("products-section");
            if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
          } catch (e) {}
        }
        return;
      }

      if (routeType === "admin") {
        this._openAdminView(value);
        return;
      }

      this._openHomePage();
    },

    _openHomePage() {
      try {
        if (typeof window.closeDashboardView === "function") {
          window.closeDashboardView();
        } else {
          const hw = document.getElementById("homePageWrapper");
          const dv = document.getElementById("dashboardPageView");
          if (hw) hw.style.display = "";
          if (dv) dv.style.display = "none";
        }
      } catch (e) {}
    },

    _autoAuthMasterAdmin() {
      try {
        if (window.state && window.state.user && window.state.user.email) {
          const e = window.state.user.email.toLowerCase();
          if (MASTER_ADMIN_EMAILS.indexOf(e) >= 0) return true;
        }
        const raw = localStorage.getItem("eurotex_user");
        if (raw) {
          const u = JSON.parse(raw);
          if (
            u &&
            u.email &&
            MASTER_ADMIN_EMAILS.indexOf(String(u.email).toLowerCase()) >= 0
          ) {
            if (window.state) window.state.user = u;
            return true;
          }
        }
      } catch (e) {}
      return false;
    },

    _openAdminView(subView) {
      try {
        const isAdmin = this._autoAuthMasterAdmin();
        if (!isAdmin) {
          if (typeof window.openAuthModal === "function")
            window.openAuthModal();
          return;
        }
      } catch (e) {}

      try {
        if (typeof window.switchDashboardTab !== "function") {
          const hw = document.getElementById("homePageWrapper");
          const dv = document.getElementById("dashboardPageView");
          if (hw) hw.style.display = "none";
          if (dv) dv.style.display = "block";
        }
      } catch (e) {}

      setTimeout(() => {
        try {
          if (typeof window.openDashboardAdmin === "function") {
            window.openDashboardAdmin(subView);
          } else if (typeof window.switchDashboardTab === "function") {
            window.switchDashboardTab("admin");
          }
          setTimeout(() => {
            try {
              if (
                subView === "orders" &&
                typeof window.showAdminSection === "function"
              )
                window.showAdminSection("orders");
              if (
                subView === "products" &&
                typeof window.showAdminSection === "function"
              )
                window.showAdminSection("products");
              if (
                subView === "settings" &&
                typeof window.showAdminSection === "function"
              )
                window.showAdminSection("settings");
              if (subView === "addcart") {
                if (typeof window.showAdminSection === "function")
                  window.showAdminSection("products");
                if (typeof window.openAddProductModal === "function")
                  setTimeout(() => window.openAddProductModal(), 150);
              }
            } catch (e) {}
          }, 180);
        } catch (e) {}
      }, 60);
    },
  };

  /* -----------------------------------------------------------------
     8. GLASS HEADER SCROLL EFFECT (UX)
  ------------------------------------------------------------------ */
  function installGlassHeaderScroll() {
    const header = document.getElementById("mainHeader");
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 30) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* -----------------------------------------------------------------
     9. CACHE STATUS UI (bottom-right chip)
  ------------------------------------------------------------------ */
  function mountCacheStatusBadge() {
    try {
      const el = document.getElementById("eurotex-cache-badge");
      if (el) el.remove();
    } catch (e) {}
  }

  /* -----------------------------------------------------------------
     10. MASTER BOOTSTRAP SEQUENCE
  ------------------------------------------------------------------ */
  async function bootEurotexEliteEngine() {
    try {
      CurrencyEngine.init();
    } catch (e) {}
    try {
      bootstrapGlobalFallbackProducts();
    } catch (e) {}
    try {
      await IDBEngine.init();
      const cachedProducts = await IDBEngine.getAll(IDBEngine.STORE_PRODUCTS);
      if (cachedProducts && cachedProducts.length > 5) {
        if (window.state && Array.isArray(window.state.products)) {
          window.state.products = cachedProducts.concat(
            window.state.products.filter(
              (p) =>
                !cachedProducts.some(
                  (c) =>
                    String(c.customId || c.id) === String(p.customId || p.id),
                ),
            ),
          );
          window.EUROTEX_PRODUCTS = window.state.products.slice();
        }
      }
    } catch (e) {}
    try {
      RoutingEngine.init();
    } catch (e) {}
    try {
      installGlassHeaderScroll();
    } catch (e) {}
    try {
      setTimeout(() => GoogleOneTapEngine.init(), 800);
    } catch (e) {}
    try {
      mountCacheStatusBadge();
    } catch (e) {}

    /* Expose to window for existing script.js integrations */
    window.EurotexEngine = {
      CurrencyEngine,
      IDBEngine,
      GoogleOneTapEngine,
      RoutingEngine,
      ORDER_STATUS_STEPS,
      MASTER_ADMIN_EMAILS,
      DEFAULT_EUROTEX_PRODUCTS_V2,
      runCheckoutAuthGate,
      formatUSD: (a) => CurrencyEngine.formatUSD(a),
      formatUZS: (a) => CurrencyEngine.formatUZS(a),
      usdToUzs: (a) => CurrencyEngine.usdToUzs(a),
      formatDualBadges: (p) => CurrencyEngine.renderDualBadges(p),
      setUsdRate: (r) => CurrencyEngine.setRate(r),
      getUsdRate: () => CurrencyEngine.state.usdRate,
    };

    /* Deprecation safety hooks */
    window.runCheckoutAuthGate = runCheckoutAuthGate;
    window.EurotexCurrency = CurrencyEngine;
    /* Auto-render storefront products grid */
    if (typeof window.renderProducts === "function") {
      try { window.renderProducts(); } catch (e) {}
    }

    console.log(
      "%c[EUROTEX ELITE ENGINE v2.0]",
      "color:#00f2fe;background:#0b1322;padding:4px 8px;border-radius:4px;font-weight:800;",
      "Boot OK • Products: " +
        (window.EUROTEX_PRODUCTS?.length || 0) +
        " • USD: " +
        CurrencyEngine.state.usdRate +
        " so'm",
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootEurotexEliteEngine);
  } else {
    setTimeout(bootEurotexEliteEngine, 0);
  }
})();
