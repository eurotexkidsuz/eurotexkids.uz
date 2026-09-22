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
  const DEFAULT_EUROTEX_PRODUCTS_V2 = (typeof window !== 'undefined' && Array.isArray(window.__SERVER_PRODUCTS__) && window.__SERVER_PRODUCTS__.length > 0)
  ? window.__SERVER_PRODUCTS__
  : [
  {
    "customId": "prod-1785746896249",
    "title_uz": "ABDULAZIZ",
    "title_ru": "ABDULAZIZ",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785746896249_main.jpg",
    "images": [
      "/images/uploads/prod-1785746896249_gallery_0.jpg"
    ],
    "sizes": [
      46,
      48,
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785746896249"
  },
  {
    "customId": "prod-1785748672925",
    "title_uz": "ABDULAZIZ",
    "title_ru": "ABDULAZIZ",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785748672925_main.jpg",
    "images": [
      "/images/uploads/prod-1785748672925_gallery_0.jpg",
      "/images/uploads/prod-1785748672925_gallery_1.jpg",
      "/images/uploads/prod-1785748672925_gallery_2.jpg",
      "/images/uploads/prod-1785748672925_gallery_3.jpg",
      "/images/uploads/prod-1785748672925_gallery_4.jpg"
    ],
    "sizes": [
      46,
      48,
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785748672925"
  },
  {
    "customId": "prod-1785749749222",
    "title_uz": "AKA",
    "title_ru": "AKA",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785749749222_main.jpg",
    "images": [
      "/images/uploads/prod-1785749749222_gallery_0.jpg",
      "/images/uploads/prod-1785749749222_gallery_1.jpg",
      "/images/uploads/prod-1785749749222_gallery_2.jpg",
      "/images/uploads/prod-1785749749222_gallery_3.jpg",
      "/images/uploads/prod-1785749749222_gallery_4.jpg"
    ],
    "sizes": [
      42
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785749749222"
  },
  {
    "customId": "prod-1785749811870",
    "title_uz": "AKA",
    "title_ru": "AKA",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785749811870_main.jpg",
    "images": [
      "/images/uploads/prod-1785749811870_gallery_0.jpg",
      "/images/uploads/prod-1785749811870_gallery_1.jpg",
      "/images/uploads/prod-1785749811870_gallery_2.jpg",
      "/images/uploads/prod-1785749811870_gallery_3.jpg",
      "/images/uploads/prod-1785749811870_gallery_4.jpg"
    ],
    "sizes": [
      42
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785749811870"
  },
  {
    "customId": "prod-1785750064542",
    "title_uz": "AKA",
    "title_ru": "AKA",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785750064542_main.jpg",
    "images": [
      "/images/uploads/prod-1785750064542_gallery_0.jpg",
      "/images/uploads/prod-1785750064542_gallery_1.jpg",
      "/images/uploads/prod-1785750064542_gallery_2.jpg",
      "/images/uploads/prod-1785750064542_gallery_3.jpg",
      "/images/uploads/prod-1785750064542_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785750064542"
  },
  {
    "customId": "prod-1785750241519",
    "title_uz": "AKA",
    "title_ru": "AKA",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785750241519_main.jpg",
    "images": [
      "/images/uploads/prod-1785750241519_gallery_0.jpg",
      "/images/uploads/prod-1785750241519_gallery_1.jpg",
      "/images/uploads/prod-1785750241519_gallery_2.jpg",
      "/images/uploads/prod-1785750241519_gallery_3.jpg",
      "/images/uploads/prod-1785750241519_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785750241519"
  },
  {
    "customId": "prod-1785750588614",
    "title_uz": "SALOM",
    "title_ru": "SALOM",
    "category": "suits",
    "priceUsd": 45,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785750588614_main.jpg",
    "images": [
      "/images/uploads/prod-1785750588614_gallery_0.jpg",
      "/images/uploads/prod-1785750588614_gallery_1.jpg",
      "/images/uploads/prod-1785750588614_gallery_2.jpg",
      "/images/uploads/prod-1785750588614_gallery_3.jpg",
      "/images/uploads/prod-1785750588614_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785750588614"
  },
  {
    "customId": "prod-1785750771471",
    "title_uz": "ASSALOMU ALEYKUM",
    "title_ru": "ASSALOMU ALEYKUM",
    "category": "suits_slim",
    "priceUsd": 75,
    "pachkaPriceUsd": 450,
    "pachkaQty": 6,
    "price": 5692500,
    "oldPrice": 7121950,
    "image": "/images/uploads/prod-1785750771471_main.jpg",
    "images": [
      "/images/uploads/prod-1785750771471_gallery_0.jpg",
      "/images/uploads/prod-1785750771471_gallery_1.jpg",
      "/images/uploads/prod-1785750771471_gallery_2.jpg",
      "/images/uploads/prod-1785750771471_gallery_3.jpg",
      "/images/uploads/prod-1785750771471_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785750771471"
  },
  {
    "customId": "prod-1785751570972",
    "title_uz": "ASSALOMU ALEYKUM",
    "title_ru": "ASSALOMU ALEYKUM",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785751570972_main.jpg",
    "images": [
      "/images/uploads/prod-1785751570972_gallery_0.jpg",
      "/images/uploads/prod-1785751570972_gallery_1.jpg",
      "/images/uploads/prod-1785751570972_gallery_2.jpg",
      "/images/uploads/prod-1785751570972_gallery_3.jpg",
      "/images/uploads/prod-1785751570972_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785751570972"
  },
  {
    "customId": "prod-1785755895749",
    "title_uz": "ASD",
    "title_ru": "ASD",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785755895749_main.jpg",
    "images": [
      "/images/uploads/prod-1785755895749_gallery_0.jpg",
      "/images/uploads/prod-1785755895749_gallery_1.jpg",
      "/images/uploads/prod-1785755895749_gallery_2.jpg",
      "/images/uploads/prod-1785755895749_gallery_3.jpg",
      "/images/uploads/prod-1785755895749_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785755895749"
  },
  {
    "customId": "prod-1785752168341",
    "title_uz": "ASSALOMU ALEYKUM",
    "title_ru": "ASSALOMU ALEYKUM",
    "category": "suits",
    "priceUsd": 50,
    "pachkaPriceUsd": 50,
    "pachkaQty": 6,
    "price": 632500,
    "oldPrice": 796950,
    "image": "/images/uploads/prod-1785752168341_main.jpg",
    "images": [
      "/images/uploads/prod-1785752168341_gallery_0.jpg",
      "/images/uploads/prod-1785752168341_gallery_1.jpg",
      "/images/uploads/prod-1785752168341_gallery_2.jpg",
      "/images/uploads/prod-1785752168341_gallery_3.jpg",
      "/images/uploads/prod-1785752168341_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785752168341"
  },
  {
    "customId": "prod-1785752988141",
    "title_uz": "ASSALOMU ALEYKUM",
    "title_ru": "ASSALOMU ALEYKUM",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785752988141_main.jpg",
    "images": [
      "/images/uploads/prod-1785752988141_gallery_0.jpg",
      "/images/uploads/prod-1785752988141_gallery_1.jpg",
      "/images/uploads/prod-1785752988141_gallery_2.jpg",
      "/images/uploads/prod-1785752988141_gallery_3.jpg",
      "/images/uploads/prod-1785752988141_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785752988141"
  },
  {
    "customId": "prod-1785754501632",
    "title_uz": "ASD",
    "title_ru": "ASD",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785754501632_main.jpg",
    "images": [
      "/images/uploads/prod-1785754501632_gallery_0.jpg",
      "/images/uploads/prod-1785754501632_gallery_1.jpg",
      "/images/uploads/prod-1785754501632_gallery_2.jpg",
      "/images/uploads/prod-1785754501632_gallery_3.jpg",
      "/images/uploads/prod-1785754501632_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785754501632"
  },
  {
    "customId": "prod-1785755419380",
    "title_uz": "ASD",
    "title_ru": "ASD",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785755419380_main.jpg",
    "images": [
      "/images/uploads/prod-1785755419380_gallery_0.jpg",
      "/images/uploads/prod-1785755419380_gallery_1.jpg",
      "/images/uploads/prod-1785755419380_gallery_2.jpg",
      "/images/uploads/prod-1785755419380_gallery_3.jpg",
      "/images/uploads/prod-1785755419380_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785755419380"
  },
  {
    "customId": "prod-1785756358060",
    "title_uz": "ASD",
    "title_ru": "ASD",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785756358060_main.jpg",
    "images": [
      "/images/uploads/prod-1785756358060_gallery_0.jpg",
      "/images/uploads/prod-1785756358060_gallery_1.jpg",
      "/images/uploads/prod-1785756358060_gallery_2.jpg",
      "/images/uploads/prod-1785756358060_gallery_3.jpg",
      "/images/uploads/prod-1785756358060_gallery_4.jpg"
    ],
    "sizes": [
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785756358060"
  },
  {
    "customId": "prod-20",
    "title_uz": "Eurotex Exclusive Reversible Leather Belt Set (1 Pachka = 5 ta)",
    "title_ru": "Двусторонние Ремни Eurotex (1 Пачка = 5 шт)",
    "category": "accessories",
    "priceUsd": 25,
    "pachkaPriceUsd": 25,
    "pachkaQty": 5,
    "price": 25,
    "oldPrice": 35,
    "image": "/images/grey_trousers.jpg",
    "images": [
      "/images/grey_trousers.jpg"
    ],
    "sizes": [
      110,
      115,
      120,
      125
    ],
    "fabric_uz": "Ikki Tomonlama Ishlaydigan Deri Kamar (Qora/Jigarrang)",
    "inStock": true,
    "id": "prod-20"
  },
  {
    "customId": "prod-19",
    "title_uz": "Eurotex Handmade Brass Cufflinks & Clip Set (1 Pachka = 10 ta)",
    "title_ru": "Запонки и Зажимы Eurotex (1 Пачка = 10 шт)",
    "category": "accessories",
    "priceUsd": 15,
    "pachkaPriceUsd": 15,
    "pachkaQty": 10,
    "price": 15,
    "oldPrice": 22,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      10
    ],
    "fabric_uz": "Qutidagi Zaponka va Galstuk Qisqichi",
    "inStock": true,
    "id": "prod-19"
  },
  {
    "customId": "prod-18",
    "title_uz": "Eurotex Luxury Wool V-Neck Suit Vest / Jilet (1 Pachka = 6 ta)",
    "title_ru": "Мужской Жилет Eurotex Luxury Wool (1 Пачка = 6 шт)",
    "category": "suits",
    "priceUsd": 38,
    "pachkaPriceUsd": 38,
    "pachkaQty": 6,
    "price": 38,
    "oldPrice": 55,
    "image": "/images/black_tuxedo.jpg",
    "images": [
      "/images/black_tuxedo.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Klassik Kostyum Jileti, Jun Mato",
    "inStock": true,
    "id": "prod-18"
  },
  {
    "customId": "prod-17",
    "title_uz": "Eurotex Premium Oxford Black Business Shirt (1 Pachka = 6 ta)",
    "title_ru": "Черная Рубашка Eurotex Premium Oxford (1 Пачка = 6 шт)",
    "category": "shirts",
    "priceUsd": 35,
    "pachkaPriceUsd": 35,
    "pachkaQty": 6,
    "price": 35,
    "oldPrice": 50,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "fabric_uz": "Premium Oxford Cotton, Matyviy Qora",
    "inStock": true,
    "id": "prod-17"
  },
  {
    "customId": "prod-16",
    "title_uz": "Eurotex Modern Stretch Slim Chino Trousers (1 Pachka = 6 ta)",
    "title_ru": "Брюки-Чинос Eurotex Modern Stretch (1 Пачка = 6 шт)",
    "category": "trousers",
    "priceUsd": 42,
    "pachkaPriceUsd": 42,
    "pachkaQty": 6,
    "price": 42,
    "oldPrice": 60,
    "image": "/images/grey_trousers.jpg",
    "images": [
      "/images/grey_trousers.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Paxta va Spandeks Yengil Shim",
    "inStock": true,
    "id": "prod-16"
  },
  {
    "customId": "prod-15",
    "title_uz": "Eurotex Sartorial Beige Linen Summer Suit (1 Pachka = 6 ta)",
    "title_ru": "Льняной Костюм Eurotex Sartorial Beige (1 Пачка = 6 шт)",
    "category": "suits",
    "priceUsd": 130,
    "pachkaPriceUsd": 130,
    "pachkaQty": 6,
    "price": 130,
    "oldPrice": 170,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "100% Italiya Zig'ir (Linen) Salqin Mato",
    "inStock": true,
    "id": "prod-15"
  },
  {
    "customId": "prod-14",
    "title_uz": "Eurotex Gold Edition Velvet Wedding Tuxedo (1 Pachka = 6 ta)",
    "title_ru": "Бархатный Смокинг Eurotex Gold Edition (1 Пачка = 6 шт)",
    "category": "tuxedos",
    "priceUsd": 175,
    "pachkaPriceUsd": 175,
    "pachkaQty": 6,
    "price": 175,
    "oldPrice": 230,
    "image": "/images/black_tuxedo.jpg",
    "images": [
      "/images/black_tuxedo.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Koreya Baxmal (Velvet) va Satin yoqa",
    "inStock": true,
    "id": "prod-14"
  },
  {
    "customId": "prod-13",
    "title_uz": "Eurotex Heritage Tweed Winter Coat & Blazer (1 Pachka = 6 ta)",
    "title_ru": "Твидовый Пиджак Eurotex Heritage (1 Пачка = 6 шт)",
    "category": "blazers",
    "priceUsd": 110,
    "pachkaPriceUsd": 110,
    "pachkaQty": 6,
    "price": 110,
    "oldPrice": 145,
    "image": "/images/black_tuxedo.jpg",
    "images": [
      "/images/black_tuxedo.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Qalin Shotlandiya Tvid Juni",
    "inStock": true,
    "id": "prod-13"
  },
  {
    "customId": "prod-12",
    "title_uz": "Eurotex Diplomat Sky Blue Stretch Cotton Shirt (1 Pachka = 6 ta)",
    "title_ru": "Голубая Рубашка Eurotex Diplomat (1 Пачка = 6 шт)",
    "category": "shirts",
    "priceUsd": 32,
    "pachkaPriceUsd": 32,
    "pachkaQty": 6,
    "price": 32,
    "oldPrice": 48,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "fabric_uz": "95% Paxta, 5% Elastan Stretch",
    "inStock": true,
    "id": "prod-12"
  },
  {
    "customId": "prod-11",
    "title_uz": "Eurotex Classic Fit Light Grey Wool Trousers (1 Pachka = 6 ta)",
    "title_ru": "Классические Серые Брюки Eurotex (1 Пачка = 6 шт)",
    "category": "trousers",
    "priceUsd": 48,
    "pachkaPriceUsd": 48,
    "pachkaQty": 6,
    "price": 48,
    "oldPrice": 70,
    "image": "/images/grey_trousers.jpg",
    "images": [
      "/images/grey_trousers.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Ochiq Kulrang Jun Mato, Dazmol talab qilmaydi",
    "inStock": true,
    "id": "prod-11"
  },
  {
    "customId": "prod-10",
    "title_uz": "Eurotex Venetian Blue Slim Tailored Blazer (1 Pachka = 6 ta)",
    "title_ru": "Блейзер Eurotex Venetian Blue (1 Пачка = 6 шт)",
    "category": "blazers",
    "priceUsd": 80,
    "pachkaPriceUsd": 80,
    "pachkaQty": 6,
    "price": 80,
    "oldPrice": 110,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Soft Wool Blend, Zamonaviy Italiya Uslubi",
    "inStock": true,
    "id": "prod-10"
  },
  {
    "customId": "prod-9",
    "title_uz": "Eurotex Milano Charcoal Black Premium 3-Piece Kostyum (1 Pachka = 6 ta)",
    "title_ru": "Костюм-Тройка Eurotex Milano Charcoal Black (1 Пачка = 6 шт)",
    "category": "suits",
    "priceUsd": 160,
    "pachkaPriceUsd": 160,
    "pachkaQty": 6,
    "price": 160,
    "oldPrice": 210,
    "image": "/images/black_tuxedo.jpg",
    "images": [
      "/images/black_tuxedo.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Italiya Jileli 3-Talik To'plam (Virgin Wool)",
    "inStock": true,
    "id": "prod-9"
  },
  {
    "customId": "prod-8",
    "title_uz": "Eurotex Genuine Leather Erkaklar Klassik Teri Kamari (1 Pachka = 5 ta)",
    "title_ru": "Мужские Кожаные Ремни Eurotex (1 Пачка = 5 шт)",
    "category": "accessories",
    "priceUsd": 22,
    "pachkaPriceUsd": 22,
    "pachkaQty": 5,
    "price": 22,
    "oldPrice": 30,
    "image": "/images/grey_trousers.jpg",
    "images": [
      "/images/grey_trousers.jpg"
    ],
    "sizes": [
      110,
      115,
      120,
      125
    ],
    "fabric_uz": "100% Tabiiy Sigir Derisi, Zanglamaydigan toqa",
    "inStock": true,
    "id": "prod-8"
  },
  {
    "customId": "prod-7",
    "title_uz": "Eurotex Italian Silk Galstuk & Zaponka To'plami (1 Pachka = 10 ta)",
    "title_ru": "Подарочный Набор Eurotex: Галстуки (1 Пачка = 10 шт)",
    "category": "accessories",
    "priceUsd": 18,
    "pachkaPriceUsd": 18,
    "pachkaQty": 10,
    "price": 18,
    "oldPrice": 25,
    "image": "/images/black_tuxedo.jpg",
    "images": [
      "/images/black_tuxedo.jpg"
    ],
    "sizes": [
      10
    ],
    "fabric_uz": "100% Tabiiy Ipak (Silk), Latun zaponka",
    "inStock": true,
    "id": "prod-7"
  },
  {
    "customId": "prod-6",
    "title_uz": "Eurotex Imperial Slim Fit Klassik Oq Ko'ylak (1 Pachka = 6 ta)",
    "title_ru": "Классическая Белая Рубашка Eurotex Imperial (1 Пачка = 6 шт)",
    "category": "shirts",
    "priceUsd": 30,
    "pachkaPriceUsd": 30,
    "pachkaQty": 6,
    "price": 30,
    "oldPrice": 45,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    "fabric_uz": "100% Misr Paxtasi (Egyptian Cotton), Easy Iron",
    "inStock": true,
    "id": "prod-6"
  },
  {
    "customId": "prod-5",
    "title_uz": "Eurotex Smart Business Klassik Pijak / Blazer (1 Pachka = 6 ta)",
    "title_ru": "Классический Блейзер Eurotex Smart Business (1 Пачка = 6 шт)",
    "category": "blazers",
    "priceUsd": 75,
    "pachkaPriceUsd": 75,
    "pachkaQty": 6,
    "price": 75,
    "oldPrice": 100,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "80% Jun, 20% Paxta, Yengil yoz-kuzgi bichim",
    "inStock": true,
    "id": "prod-5"
  },
  {
    "customId": "prod-4",
    "title_uz": "Eurotex Executive Double-Breasted Ikki Tomonli Kostyum (1 Pachka = 6 ta)",
    "title_ru": "Двубортный Костюм Eurotex Executive (1 Пачка = 6 шт)",
    "category": "suits",
    "priceUsd": 140,
    "pachkaPriceUsd": 140,
    "pachkaQty": 6,
    "price": 140,
    "oldPrice": 180,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Super 130s Italiya Jun matosi",
    "inStock": true,
    "id": "prod-4"
  },
  {
    "customId": "prod-3",
    "title_uz": "Eurotex Charcoal Grey Klassik Jun Shim (1 Pachka = 6 ta Seriya)",
    "title_ru": "Классические Брюки Eurotex Charcoal Grey (1 Пачка = 6 шт Серия)",
    "category": "trousers",
    "priceUsd": 45,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 45,
    "oldPrice": 65,
    "image": "/images/grey_trousers.jpg",
    "images": [
      "/images/grey_trousers.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "100% Jun, Qatlari o'chmaydigan texnologiya",
    "inStock": true,
    "id": "prod-3"
  },
  {
    "customId": "prod-2",
    "title_uz": "Eurotex Black Diamond Smoking & To'y Kostyum-Shimi (1 Pachka = 6 ta Seriya)",
    "title_ru": "Смокинг Eurotex Black Diamond (1 Пачка = 6 шт Серия)",
    "category": "tuxedos",
    "priceUsd": 150,
    "pachkaPriceUsd": 150,
    "pachkaQty": 6,
    "price": 150,
    "oldPrice": 190,
    "image": "/images/black_tuxedo.jpg",
    "images": [
      "/images/black_tuxedo.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "Wool & Satin Lapel, Kapalak va Zaponka sovg'a",
    "inStock": true,
    "id": "prod-2"
  },
  {
    "customId": "prod-1",
    "title_uz": "Eurotex Royal Navy Slim Fit Kostyum-Shim (1 Pachka = 6 ta Seriya)",
    "title_ru": "Костюм-Двойка Eurotex Royal Navy Slim Fit (1 Пачка = 6 шт Серия)",
    "category": "suits",
    "priceUsd": 120,
    "pachkaPriceUsd": 120,
    "pachkaQty": 6,
    "price": 120,
    "oldPrice": 160,
    "image": "/images/navy_suit.jpg",
    "images": [
      "/images/navy_suit.jpg"
    ],
    "sizes": [
      46,
      48,
      50,
      52,
      54,
      56
    ],
    "fabric_uz": "90% Jun (Virgin Wool), 10% Ipak. Viskoza astar",
    "inStock": true,
    "id": "prod-1"
  },
  {
    "customId": "prod-salom-test",
    "title_uz": "SALOM",
    "title_ru": "SALOM",
    "price": 500000,
    "category": "suits",
    "id": "prod-salom-test"
  },
  {
    "customId": "prod-1785747462343",
    "title_uz": "ABDULAZIZ",
    "title_ru": "ABDULAZIZ",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 540315,
    "oldPrice": 672392,
    "image": "/images/uploads/prod-1785747462343_main.jpg",
    "images": [
      "/images/uploads/prod-1785747462343_gallery_0.jpg",
      "/images/uploads/prod-1785747462343_gallery_1.jpg",
      "/images/uploads/prod-1785747462343_gallery_2.jpg",
      "/images/uploads/prod-1785747462343_gallery_3.jpg",
      "/images/uploads/prod-1785747462343_gallery_4.jpg"
    ],
    "sizes": [
      46,
      48,
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785747462343"
  },
  {
    "customId": "prod-1785606275103",
    "title_uz": ".",
    "title_ru": ".",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785606275103_main.jpg",
    "sizes": [
      46,
      48,
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785606275103"
  },
  {
    "customId": "prod-1785606231059",
    "title_uz": ".",
    "title_ru": ".",
    "category": "suits_slim",
    "priceUsd": 8,
    "pachkaPriceUsd": 45,
    "pachkaQty": 6,
    "price": 569250,
    "oldPrice": 708400,
    "image": "/images/uploads/prod-1785606231059_main.jpg",
    "sizes": [
      46,
      48,
      50
    ],
    "fabric_uz": "Turkiya Premium Jun & Viskoza Blend",
    "inStock": true,
    "id": "prod-1785606231059"
  }
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
      if (typeof window !== "undefined" && Array.isArray(window.__SERVER_PRODUCTS__) && window.__SERVER_PRODUCTS__.length > 0) {
        window.EUROTEX_PRODUCTS = window.__SERVER_PRODUCTS__;
        if (!window.state) window.state = {};
        window.state.products = window.EUROTEX_PRODUCTS.slice();
        window.state.usdRate = CurrencyEngine.state.usdRate;
        window.state.statusSteps = ORDER_STATUS_STEPS;
        window.state.masterAdminEmails = MASTER_ADMIN_EMAILS;
        return window.EUROTEX_PRODUCTS;
      }
      if (typeof window !== "undefined" && Array.isArray(window.EUROTEX_PRODUCTS) && window.EUROTEX_PRODUCTS.length > 0) {
        if (!window.state) window.state = {};
        window.state.products = window.EUROTEX_PRODUCTS.slice();
        window.state.usdRate = CurrencyEngine.state.usdRate;
        window.state.statusSteps = ORDER_STATUS_STEPS;
        window.state.masterAdminEmails = MASTER_ADMIN_EMAILS;
        return window.EUROTEX_PRODUCTS;
      }

      window.EUROTEX_PRODUCTS = DEFAULT_EUROTEX_PRODUCTS_V2.slice();
      if (!window.state) window.state = {};
      window.state.products = window.EUROTEX_PRODUCTS.slice();
      window.state.usdRate = CurrencyEngine.state.usdRate;
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

        if (typeof window.initAutoGooglePrompt === "function") {
          window.initAutoGooglePrompt();
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
          callback: (response) => {
            if (typeof window.handleGsiCredentialResponse === "function") {
              window.handleGsiCredentialResponse(response);
            } else {
              this._handleCredential(response);
            }
          },
          auto_select: false,
          cancel_on_tap_outside: false,
          itp_support: true,
        });
        this.initialized = true;
        window.google.accounts.id.prompt();
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
      "/cart": { type: "dashboard", value: "cart" },
      "/savat": { type: "dashboard", value: "cart" },
      "/orders": { type: "dashboard", value: "orders" },
      "/buyurtmalar": { type: "dashboard", value: "orders" },
      "/checkout": { type: "dashboard", value: "checkout" },
      "/rasmiylashtirish": { type: "dashboard", value: "checkout" },
      "/wishlist": { type: "dashboard", value: "wishlist" },
      "/saralanganlar": { type: "dashboard", value: "wishlist" },
      "/returns": { type: "dashboard", value: "returns" },
      "/admin": { type: "admin", value: "dashboard" },
      "/admin/orders": { type: "admin", value: "orders" },
      "/admin/users": { type: "admin", value: "users" },
      "/admin/crm": { type: "admin", value: "users" },
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

      if (routeType === "dashboard") {
        try {
          if (typeof window.openDashboardView === "function") {
            window.openDashboardView(value);
          }
        } catch (e) {}
        return;
      }

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

      if (routeType === "admin" && (path.startsWith("/admin") || path.startsWith("/dashboard"))) {
        this._openAdminView(value);
        return;
      }

      this._openHomePage();
    },

    _openHomePage() {
      try {
        if (typeof window.closeDashboardView === "function") {
          window.closeDashboardView();
        }
        const hw = document.getElementById("homePageWrapper");
        const dv = document.getElementById("dashboardPageView");
        if (hw) hw.style.display = "";
        if (dv) dv.style.display = "none";
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
                subView === "users" &&
                typeof window.showAdminSection === "function"
              )
                window.showAdminSection("users");
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
      // DO NOT overwrite server products with stale IDB cache
      if (!window.__SERVER_PRODUCTS__ || window.__SERVER_PRODUCTS__.length === 0) {
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
    /* Auto-render storefront products grid only if not already populated */
    if (typeof window.renderProducts === "function") {
      const grid = document.getElementById("productGrid");
      if (!grid || grid.children.length === 0) {
        try { window.renderProducts(); } catch (e) {}
      }
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
