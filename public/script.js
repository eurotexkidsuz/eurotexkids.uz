/* 
   EUROTEX.UZ — Master Interactive E-Commerce & Multi-Language Engine
   100% EUROTEX BRANDED (No third-party Uzum naming)
*/

// Master Client Cache Busting & Obsolete Storage Purge
(function () {
  try {
    const EUROTEX_APP_VERSION = "2026_09_18_v325";
    if (typeof localStorage !== "undefined" && localStorage.getItem("eurotex_app_cache_ver") !== EUROTEX_APP_VERSION) {
      localStorage.removeItem("eurotex_products");
      localStorage.removeItem("eurotex_custom_products");
      for (let i = 0; i <= 5; i++) {
        localStorage.removeItem("eurotex_hero_slide_img_" + i);
        localStorage.removeItem("eurotex_hero_slide_text_" + i);
      }
      localStorage.setItem("eurotex_app_cache_ver", EUROTEX_APP_VERSION);
      if (typeof indexedDB !== "undefined" && typeof indexedDB.deleteDatabase === "function") {
        try { indexedDB.deleteDatabase("EurotexDB"); } catch (e) {}
      }
    }
  } catch (e) {}
})();

// Multi-Language Translation Dictionary
const TRANSLATIONS = {
  uz: {
    cityLabel: "Shahar:",
    deliveryPromo:
      "yetkazib berish (Butun O'zbekiston bo'yicha)",
    phoneLink: "📞 +998 (90) 555-77-75",
    atelierLink: "📦 Ulgurji Sotuv (Pachkalab)",
    catalogBtn: "Katalog",
    searchPlaceholder:
      "Mahsulotlar va turkumlar bo'yicha qidiruv (masalan: Kostyum, Shim, Smoking)...",
    userAuth: "Kirish",
    wishlist: "Saralanganlar",
    cart: "Savat",
    navAll: "Barchasi",
    navSuper: "🔥 Super Narxlar",
    navSuits: "🤵 Kostyum-Shimlar",
    navTrousers: "GBP Klassik Shimlar",
    navBlazers: "🧥 Pijaklar & Blazerlar",
    navTuxedos: "🎩 Smoking & To'y",
    navShirts: "👔 Erkaklar Ko'ylaklari",
    navAccessories: "🎗️ Aksessuarlar",
    navTailoring: "📦 Pachkalab Sotuv ($ USD)",
    slide1Tag: "YANGI TO'PLAM 2026",
    slide1Title: "Eurotex Kids & Eurotex Luxury Suits",
    slide1Desc:
      "Italiya jun matolaridan tikilgan eksklyuziv kostyum-shimlar to'plami. Mukammal bichim va rasmiy ko'rinish.",
    slide1Nasiya: "Oyiga $10 dan",
    slide1Discount: "-35% CHEGIRMA",
    slide1ShopBtn: "Xarid qilish",
    slide1SizeGuideBtn: "O'lchamlar jadvali",
    slide2Tag: "EUROTEX NASIYA",
    slide2Title: "Eurotex Nasiya",
    slide2Desc:
      "0% Boshlang'ich to'lov bilan 3, 6 va 12 oyga Eurotex Nasiya. Ortiqcha hujjatlarsiz!",
    slide2Passport: "Passport orqali rasmiylashtirish",
    slide2CatalogBtn: "Katalogni ko'rish",
    advDeliveryTitle: "1 kunda bepul yetkazish",
    advDeliveryDesc: "Toshkent va barcha viloyatlarga tez yetkazamiz",
    advQualityTitle: "100% Sifat kafolati",
    advQualityDesc: "O'zbekiston va Yevropa standartlari",
    advAlterationTitle: "Eurotex Garantiya",
    advAlterationDesc: "Sifat va mato kafolati",
    advNasiyaTitle: "Eurotex Nasiya",
    advNasiyaDesc: "Eurotex Nasiya xizmati",
    sectionTitle: "Erkaklar Kiyimlar Katalogi",
    subAll: "Barchasi",
    subSuits: "Kostyumlar",
    subTrousers: "Shimlar",
    subBlazers: "Pijaklar",
    subAccessories: "Aksessuarlar",
    sortLabel: "Saralash:",
    sortPopular: "Ommabopligi bo'yicha",
    sortLow: "Narxi: Avval arzonlari",
    sortHigh: "Narxi: Avval qimmatlari",
    sortDiscount: "Chegirma bo'yicha",
    sortRating: "Reyting bo'yicha",
    tailoringTag: "EUROTEX ULGURJI",
    tailoringTitle: "Ulgurji Pachkalab Sotuv",
    tailoringDesc:
      "Eurotex brendi barcha mahsulotlarni Faqat Pachkalab (Seriya) va AQSh Dollarida ($ USD) sotadi.",
    tailoringBtn: "Ulgurji Katalogni Ko'rish",
    reviewsHeading: "Mijozlarimiz Fikrlari",
    footerCustomers: "Xaridorlarga",
    footerCompany: "Kompaniya",
    footerContact: "Aloqa va Yordam",
    mHome: "Bosh sahifa",
    mCatalog: "Katalog",
    mWishlist: "Saralangan",
    mCart: "Savat",
    mProfile: "Profil",
    currency: "sum",
    perMonth: "Oyiga",
    addToCart: "Savatga qo'shish 🛒",
    sizeGuideTitle: "📐 Eurotex Kostyum va Shimlar O'lcham Jadvali",
    authTitle: "Eurotexkids.uz ga kirish",
    backToHome: "← Bosh sahifaga qaytish",
    dashCart: "🛒 Savatingiz",
    dashWishlist: "❤️ Saralanganlar",
    dashCheckout: "📋 Buyurtmani rasmiylashtirish",
    selectAll: "Hammasini yechish / belgilash",
    clearCartBtn: "Savatni tozalash",
    expressDeliveryTitle: "⚡ Eurotex Express yetkazib berish",
    expressDeliveryTime: "Ertaga eshigingizgacha tez yetkazamiz (Bepul)",
    recommendTitle: "Kerak bo'lib qolishi mumkin",
    recommendSubtitle: "Kamar, galstuk va oq ko'ylaklar to'plami",
    orderSummaryTitle: "Buyurtmangiz",
    summaryItems: "Mahsulotlar",
    summaryDelivery: "Yetkazib berish",
    summaryFree: "Bepul ⚡",
    summaryDiscount: "Chegirma",
    summaryTotal: "Jami",
    proceedToCheckout: "Rasmiylashtirishga o'tish",
    checkoutTitle: "Buyurtma",
    deliveryStep1: "1. Olish usuli",
    courierOption: "Kuryer orqali (Eshigingizgacha)",
    vipTryOption: "✨ VIP Kiyib Ko'rish (2 ta o'lcham)",
    addressLabel: "Yetkazib berish manzilingiz:",
    recipientNameLabel: "Oluvchining Ismi va Familiyasi:",
    phoneLabel: "Telefon raqami:",
    deliveryStep2: "2. Yetkazib berish kuni va vaqti",
    tomorrowOption: "Ertaga (28-iyul)",
    deliveryHours: "⏰ Yetkazib berish vaqti: 10:00 – 22:00",
    paymentStep3: "3. To'lov turi",
    confirmOrderBtn: "Buyurtmani tasdiqlash ✅",
    applyPromoLink: "Promokodni qo'llash / almashtirish",
  },
  ru: {
    cityLabel: "Город:",
    deliveryPromo: "Доставка (По всему Узбекистану)",
    phoneLink: "📞 +998 (90) 555-77-75",
    atelierLink: "📦 Оптовые Продажи (Пачками)",
    catalogBtn: "Каталог",
    searchPlaceholder:
      "Поиск по товарам и категориям (например: Костюм, Брюки, Смокинг)...",
    userAuth: "Войти",
    wishlist: "Избранное",
    cart: "Корзина",
    navAll: "Все",
    navSuper: "🔥 Супер Цены",
    navSuits: "🤵 Костюмы-Двойки",
    navTrousers: "👖 Классические Брюки",
    navBlazers: "🧥 Пиджаки и Блейзеры",
    navTuxedos: "🎩 Смокинги и Свадебные",
    navShirts: "👔 Мужские Рубашки",
    navAccessories: "🎗️ Аксессуары",
    navTailoring: "📦 Оптовые Продажи ($ USD)",
    slide1Tag: "НОВАЯ КОЛЛЕКЦИЯ 2026",
    slide1Title: "Eurotex Kids & Eurotex — Премиум Костюмы",
    slide1Desc:
      "Эксклюзивная коллекция костюмов из итальянской шерсти. Идеальный крой и солидный вид.",
    slide1Nasiya: "От $10 в месяц",
    slide1Discount: "СКИДКА -35%",
    slide1ShopBtn: "Купить сейчас",
    slide1SizeGuideBtn: "Таблица размеров",
    slide2Tag: "УДОБНАЯ РАССРОЧКА",
    slide2Title: "Рассрочка через Eurotex Nasiya",
    slide2Desc:
      "0% Первоначальный взнос на 3, 6 и 12 месяцев. Без лишних документов!",
    slide2Passport: "Оформление по паспорту",
    slide2CatalogBtn: "Смотреть каталог",
    advDeliveryTitle: "Бесплатная доставка за 1 день",
    advDeliveryDesc: "Быстро доставим до вашей двери",
    advQualityTitle: "100% Гарантия качества",
    advQualityDesc: "Стандарты Узбекистана и Европы",
    advAlterationTitle: "Гарантия Eurotex",
    advAlterationDesc: "Гарантия качества ткани",
    advNasiyaTitle: "Рассрочка Eurotex Nasiya",
    advNasiyaDesc: "Оплачивайте в рассрочку через Eurotex Nasiya",
    sectionTitle: "Каталог Мужской Одежды",
    subAll: "Все",
    subSuits: "Костюмы",
    subTrousers: "Брюки",
    subBlazers: "Пиджаки",
    subAccessories: "Аксессуары",
    sortLabel: "Сортировка:",
    sortPopular: "По популярности",
    sortLow: "Цена: Сначала дешевле",
    sortHigh: "Цена: Сначала дороже",
    sortDiscount: "По скидке",
    sortRating: "По рейтингу",
    tailoringTag: "EUROTEX ОПТ",
    tailoringTitle: "Оптовые Продажи Пачками",
    tailoringDesc:
      "Все товары продаются только пачками (сериями) в долларах США ($ USD).",
    tailoringBtn: "Смотреть Оптовый Каталог",
    reviewsHeading: "Отзывы Наших Клиентов",
    footerCustomers: "Покупателям",
    footerCompany: "Компания",
    footerContact: "Контакты и Помощь",
    mHome: "Главная",
    mCatalog: "Каталог",
    mWishlist: "Избранное",
    mCart: "Корзина",
    mProfile: "Профиль",
    currency: "сум",
    perMonth: "В месяц",
    addToCart: "В корзину 🛒",
    sizeGuideTitle: "📐 Таблица Размеров Костюмов и Брюк Eurotex",
    authTitle: "Вход в Eurotexkids.uz",
    backToHome: "← Вернуться на главную",
    dashCart: "🛒 Ваша корзина",
    dashWishlist: "❤️ Избранное",
    dashCheckout: "📋 Оформление заказа",
    selectAll: "Снять / выбрать все",
    clearCartBtn: "Очистить корзину",
    expressDeliveryTitle: "⚡ Быстрая Доставка Eurotex",
    expressDeliveryTime: "Доставим завтра курьером (Бесплатно)",
    recommendTitle: "Может пригодиться",
    recommendSubtitle: "Комплект ремней, галстуков и белых рубашек",
    orderSummaryTitle: "Ваш заказ",
    summaryItems: "Товары",
    summaryDelivery: "Доставка",
    summaryFree: "Бесплатно ⚡",
    summaryDiscount: "Скидка",
    summaryTotal: "Итого",
    proceedToCheckout: "Перейти к оформлению",
    checkoutTitle: "Оформление заказа",
    deliveryStep1: "1. Способ получения",
    courierOption: "Курьером до двери",
    vipTryOption: "✨ VIP Примерка (2 размера)",
    addressLabel: "Ваш адрес доставки:",
    recipientNameLabel: "Имя и Фамилия получателя:",
    phoneLabel: "Номер телефона:",
    deliveryStep2: "2. Дата и время доставки",
    tomorrowOption: "Завтра (28 июля)",
    deliveryHours: "⏰ Время доставки: 10:00 – 22:00",
    paymentStep3: "3. Способ оплаты",
    confirmOrderBtn: "Подтвердить заказ ✅",
    applyPromoLink: "Применить / изменить промокод",
  },
  en: {
    cityLabel: "City:",
    deliveryPromo: "Delivery (All over Uzbekistan)",
    phoneLink: "📞 +998 (90) 555-77-75",
    atelierLink: "📦 Wholesale Packs",
    catalogBtn: "Catalog",
    searchPlaceholder:
      "Search products & categories (e.g. Suit, Trousers, Tuxedo)...",
    userAuth: "Sign In",
    wishlist: "Favorites",
    cart: "Cart",
    navAll: "All",
    navSuper: "🔥 Super Deals",
    navSuits: "🤵 Men's Suits",
    navTrousers: "👖 Classic Trousers",
    navBlazers: "🧥 Blazers & Jackets",
    navTuxedos: "🎩 Tuxedo & Wedding",
    navShirts: "👔 Men's Shirts",
    navAccessories: "🎗️ Accessories",
    navTailoring: "📦 Wholesale Packs ($ USD)",
    slide1Tag: "NEW COLLECTION 2026",
    slide1Title: "Eurotex Kids & Eurotex — Luxury Suits",
    slide1Desc:
      "Exclusive collection of suits tailored from Italian virgin wool. Perfect fit and solid presence.",
    slide1Nasiya: "From $10/mo",
    slide1Discount: "35% OFF",
    slide1ShopBtn: "Shop Now",
    slide1SizeGuideBtn: "Size Guide",
    slide2Tag: "EASY INSTALLMENT",
    slide2Title: "Buy Now Pay Later with Eurotex Nasiya",
    slide2Desc:
      "0% Down payment for 3, 6, and 12 months. Fast approval without extra paperwork!",
    slide2Passport: "Quick Passport Approval",
    slide2CatalogBtn: "Browse Catalog",
    advDeliveryTitle: "Free 1-Day Delivery",
    advDeliveryDesc: "Fast delivery directly to your door",
    advQualityTitle: "100% Quality Guarantee",
    advQualityDesc: "Uzbekistan and European standards",
    advAlterationTitle: "Eurotex Warranty",
    advAlterationDesc: "Fabric and quality guarantee",
    advNasiyaTitle: "Eurotex Nasiya Installment",
    advNasiyaDesc: "Pay in monthly installments with Eurotex Nasiya",
    sectionTitle: "Men's Clothing Catalog",
    subAll: "All",
    subSuits: "Suits",
    subTrousers: "Trousers",
    subBlazers: "Blazers",
    subAccessories: "Accessories",
    sortLabel: "Sort by:",
    sortPopular: "Popularity",
    sortLow: "Price: Low to High",
    sortHigh: "Price: High to Low",
    sortDiscount: "By Discount",
    sortRating: "By Rating",
    tailoringTag: "EUROTEX WHOLESALE",
    tailoringTitle: "Wholesale Pack Sales",
    tailoringDesc:
      "Eurotex products are sold exclusively in wholesale packs (series) in USD ($).",
    tailoringBtn: "View Wholesale Catalog",
    reviewsHeading: "Customer Reviews",
    footerCustomers: "Customers",
    footerCompany: "Company",
    footerContact: "Contact & Support",
    mHome: "Home",
    mCatalog: "Catalog",
    mWishlist: "Favorites",
    mCart: "Cart",
    mProfile: "Profile",
    currency: "sum",
    perMonth: "Per month",
    addToCart: "Add to Cart 🛒",
    sizeGuideTitle: "📐 Eurotex Suit & Trousers Size Guide",
    authTitle: "Sign in to Eurotexkids.uz",
    backToHome: "← Back to Homepage",
    dashCart: "🛒 Your Cart",
    dashWishlist: "❤️ Favorites",
    dashCheckout: "📋 Checkout Order",
    selectAll: "Select / Deselect all",
    clearCartBtn: "Clear cart",
    expressDeliveryTitle: "⚡ Eurotex Express Delivery",
    expressDeliveryTime: "Delivering tomorrow to your door (Free)",
    recommendTitle: "You might also like",
    recommendSubtitle: "Belts, ties and white shirts collection",
    orderSummaryTitle: "Your Order",
    summaryItems: "Items",
    summaryDelivery: "Delivery",
    summaryFree: "Free ⚡",
    summaryDiscount: "Discount",
    summaryTotal: "Total",
    proceedToCheckout: "Proceed to Checkout",
    checkoutTitle: "Order Checkout",
    deliveryStep1: "1. Delivery Method",
    courierOption: "Courier to door",
    vipTryOption: "✨ VIP Fitting Service (2 sizes)",
    addressLabel: "Your Delivery Address:",
    recipientNameLabel: "Recipient Name & Surname:",
    phoneLabel: "Phone Number:",
    deliveryStep2: "2. Delivery Date & Time",
    tomorrowOption: "Tomorrow (28 July)",
    deliveryHours: "⏰ Delivery hours: 10:00 – 22:00",
    paymentStep3: "3. Payment Method",
    confirmOrderBtn: "Confirm Order ✅",
    applyPromoLink: "Apply / change promo code",
  },
};

// Initial Wholesale Products Data Store (All Prices in USD $ / Pachkalab Sotuv)
const DEFAULT_EUROTEX_PRODUCTS = (typeof window !== 'undefined' && Array.isArray(window.__SERVER_PRODUCTS__) && window.__SERVER_PRODUCTS__.length > 0)
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
    "priceUsd": 45,
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
    "priceUsd": 45,
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
    "priceUsd": 45,
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

let EUROTEX_PRODUCTS = [...DEFAULT_EUROTEX_PRODUCTS];

// App State
let state = {
  cart: JSON.parse(localStorage.getItem("eurotex_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("eurotex_wishlist") || "[]"),
  orders: JSON.parse(localStorage.getItem("eurotex_orders") || "[]"),
  returns: JSON.parse(localStorage.getItem("eurotex_returns") || "[]"),
  currentCategory: "all",
  currentSort: "popular",
  searchQuery: "",
  activeSearchQuery: "",
  appliedPromo: null,
  discountRate: 0,
  currentLang: localStorage.getItem("eurotex_lang") || "uz",
  currentTheme: localStorage.getItem("eurotex_theme") || "light",
  usdRate: parseInt(localStorage.getItem("eurotex_usd_rate")) || 12650,
  user: JSON.parse(localStorage.getItem("eurotex_user") || "null"),
};

function initScrollToTop() {
  const btn = document.getElementById("btnScrollToTop");
  if (!btn) return;
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    },
    { passive: true },
  );
}

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", async () => {
  initPreloader();
  initTheme();
  initPWA();
  initSearchWorker();
  initScrollToTop();
  closeAllModals();
  checkGoogleAuthRedirect();
  updateUserAuthUI();
  persistCart();
  persistWishlist();
  renderCheckoutDeliveryDates();
  updateCheckoutPromoCard();
  checkMaintenanceStatus();
  await syncProductsWithBackendAndStorage(false);
  syncSearchWorkerProducts();
  await fetchOrdersFromServer();
  await fetchExchangeRate();
  cleanupExpiredLocalStorage();
  
  const currentPath = (window.location.pathname || "").toLowerCase().replace(/\/$/, "") || "/";
  if (currentPath === "/" || currentPath === "/index.html" || currentPath === "") {
    closeDashboardView();
    closeAllModals();
  } else {
    handleURLRouting();
  }

  // Auto-sync products & orders in background silently every 30s when tab is active (Fix 7: Page Visibility API)
  setInterval(() => {
    if (document.hidden) return; // Tab yopiq yoki minimizatsiyada bo'lsa serverni bezovta qilmaymiz
    syncProductsWithBackendAndStorage(true);
    fetchOrdersFromServer();
  }, 30000);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      syncProductsWithBackendAndStorage(true);
      fetchOrdersFromServer();
    }
  });
  loadCustomSizesFromStorage();
  setLanguage(state.currentLang);
  setupEventListeners();
  setupOtpInputRestrictions();
  initCarousel();
  loadCustomHeroSlides();
  initSlideLiveSync();
  initAutoGooglePrompt();
  renderProducts();
  if (state.user && !isUserAdmin()) {
    checkAndPromptProfileCompletion();
  }
});

const ADMIN_EMAILS = ["0600quetry@gmail.com", "eurotexkids7775@gmail.com"];
function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
}

function isUserAdmin() {
  return !!(
    state.user &&
    (state.user.role === "admin" || isAdminEmail(state.user.email))
  );
}

function checkGoogleAuthRedirect() {
  const urlParams = new URLSearchParams(window.location.search);
  const googleEmail = urlParams.get("email");
  const googleToken = urlParams.get("googleToken");
  const emailPrompt = urlParams.get("email_prompt");
  const err = urlParams.get("error");

  if (googleEmail) {
    const cleanEmail = googleEmail.toLowerCase().trim();
    const isAdmin = isAdminEmail(cleanEmail);

    state.user = {
      email: cleanEmail,
      name: isAdmin ? "Eurotex Rasmiy Admin" : cleanEmail.split("@")[0],
      role: isAdmin ? "admin" : "user",
      rememberToken: googleToken,
    };
    localStorage.setItem("eurotex_user", JSON.stringify(state.user));
    updateUserAuthUI();

    window.history.replaceState({}, document.title, window.location.pathname);

    if (isAdmin) {
      showToast(
        "👑 Google orqali Admin sifatida kirdingiz! Master Panel faollashtirildi.",
      );
      if (window.location.pathname.startsWith("/admin")) {
        openDashboardView("admin");
      } else {
        closeDashboardView();
      }
    } else {
      showToast(`Google orqali muvaffaqiyatli kirdingiz! ✅`);
      closeDashboardView();
      checkAndPromptProfileCompletion();
    }
  } else if (emailPrompt || err === "auth_failed") {
    window.history.replaceState({}, document.title, window.location.pathname);
    openModal("authModal");
    switchAuthTab("email");
    showToast("🔑 Emailingizni kiriting va 'Kod yuborish'ni bosing! ✅");
  }
}

// Fix 7 (Frontend): Real-time Exchange Rate Sync with CBU Backend Cache
async function fetchExchangeRate() {
  try {
    const res = await fetch("/api/exchange-rate");
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.success && data.rate) {
      const parsedRate = Math.round(Number(data.rate));
      if (parsedRate > 1000) {
        state.usdRate = parsedRate;
        localStorage.setItem("eurotex_usd_rate", String(parsedRate));
        if (typeof renderProducts === "function") {
          renderProducts();
        }
      }
    }
  } catch (e) {
    console.warn("Exchange rate fetch error, fallback to stored:", e.message);
  }
}

// Fix 10: Automatic cleanup of expired/stale local storage items older than 30 days
function cleanupExpiredLocalStorage() {
  try {
    const now = Date.now();
    const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

    if (state.orders && Array.isArray(state.orders)) {
      const freshOrders = state.orders.filter((order) => {
        if (!order || (!order.date && !order.createdAt)) return true;
        const orderTime = new Date(order.createdAt || order.date).getTime();
        if (isNaN(orderTime)) return true;
        if (
          now - orderTime > THIRTY_DAYS_MS &&
          ["delivered", "cancelled", "bekor qilindi", "yetkazildi"].includes(
            String(order.status || "").toLowerCase()
          )
        ) {
          return false;
        }
        return true;
      });
      if (freshOrders.length !== state.orders.length) {
        state.orders = freshOrders;
        safeSetLocalStorage("eurotex_orders", JSON.stringify(state.orders));
      }
    }

    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith("eurotex_tmp_")) {
        try {
          const parsed = JSON.parse(localStorage.getItem(key));
          if (parsed && parsed.expiry && now > parsed.expiry) {
            localStorage.removeItem(key);
          }
        } catch {
          localStorage.removeItem(key);
        }
      }
    }
  } catch (err) {
    console.warn("Storage cleanup notice:", err);
  }
}

// Fix 9: Real-time cart prices synchronization with catalog pool
function syncCartPricesWithCatalog() {
  if (!state.cart || !Array.isArray(state.cart) || state.cart.length === 0) return;
  const pool = typeof getGlobalProductsPool === "function" ? getGlobalProductsPool() : EUROTEX_PRODUCTS;
  if (!pool || !pool.length) return;

  let changed = false;
  state.cart.forEach((cartItem) => {
    const prod = pool.find(
      (p) =>
        String(p.id) === String(cartItem.id) ||
        String(p.customId) === String(cartItem.id)
    );
    if (prod) {
      const catalogPrice = Number(
        prod.pachkaPriceUsd ||
        prod.priceUsd ||
        (prod.price ? Math.round(prod.price / (state.usdRate || 12650)) : 50)
      );
      if (catalogPrice > 0 && (cartItem.price !== catalogPrice || cartItem.priceUsd !== catalogPrice)) {
        cartItem.price = catalogPrice;
        cartItem.priceUsd = catalogPrice;
        if (prod.oldPrice) cartItem.oldPrice = prod.oldPrice;
        changed = true;
      }
    }
  });

  if (changed) {
    persistCart();
  }
}

// Fix 12: Dynamic document title based on URL route
function setDynamicDocumentTitle(route) {
  const path = (route || window.location.pathname || "").toLowerCase().replace(/\/$/, "");
  const baseTitle = "Eurotex — Erkaklar Kiyimlari & Kostyumlar Ulgurji Do'koni";

  if (!path || path === "/" || path === "/index.html") {
    document.title = baseTitle;
    return;
  }
  if (path.includes("/cart") || path.includes("/savat")) {
    document.title = "Savatcha 🛒 | Eurotex";
  } else if (path.includes("/wishlist") || path.includes("/saralangan")) {
    document.title = "Saralangan Mahsulotlar ❤️ | Eurotex";
  } else if (path.includes("/checkout") || path.includes("/rasmiylashtirish")) {
    document.title = "Buyurtmani Rasmiylashtirish 📋 | Eurotex";
  } else if (path.includes("/orders") || path.includes("/buyurtmalar")) {
    document.title = "Buyurtmalar Tarixi 📦 | Eurotex";
  } else if (path.includes("/suits") || path.includes("/kostyum")) {
    document.title = "Kostyum-Shimlar To'plami 🤵 | Eurotex";
  } else if (path.includes("/tuxedos") || path.includes("/smoking")) {
    document.title = "Smoking & To'y Kostyumlari 🎩 | Eurotex";
  } else if (path.includes("/trousers") || path.includes("/shim")) {
    document.title = "Klassik Shimlar 👖 | Eurotex";
  } else if (path.includes("/blazers") || path.includes("/pijak")) {
    document.title = "Pijaklar & Blazerlar 🧥 | Eurotex";
  } else if (path.includes("/shirts") || path.includes("/koylak")) {
    document.title = "Erkaklar Ko'ylaklari 👔 | Eurotex";
  } else if (path.includes("/accessories") || path.includes("/aksessuar")) {
    document.title = "Aksessuarlar 🎗️ | Eurotex";
  } else if (path.includes("/admin")) {
    document.title = "Admin Panel ⚙️ | Eurotex";
  } else {
    document.title = `Eurotex | ${path.replace(/^\//, "").toUpperCase()}`;
  }
}

// Close every modal overlay on the page
function closeAllModals() {
  document
    .querySelectorAll(".modal-overlay")
    .forEach((m) => m.classList.remove("show"));
}

// Preloader Dismissal
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 350);
  }
}

// Multi-Language Switcher Engine
function setLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) langCode = "uz";
  state.currentLang = langCode;
  localStorage.setItem("eurotex_lang", langCode);

  // Update Language Dropdown Button Label
  const currentLangLabel = document.getElementById("currentLangLabel");
  if (currentLangLabel) {
    const flag =
      langCode === "uz" ? "🇺🇿 UZ" : langCode === "ru" ? "🇷🇺 RU" : "🇬🇧 EN";
    currentLangLabel.textContent = flag;
  }

  // Update active class in dropdown options
  document.querySelectorAll(".lang-option").forEach((opt) => {
    if (opt.dataset.lang === langCode) {
      opt.classList.add("active");
    } else {
      opt.classList.remove("active");
    }
  });

  const dict = TRANSLATIONS[langCode];

  // Update HTML static text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (
      (key === "userAuth" || key === "mProfile") &&
      state.user &&
      state.user.name
    )
      return;
    if (dict[key]) el.textContent = dict[key];
  });

  // Update HTML input placeholders with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

  // Re-render Products, Cart, Wishlist, Checkout Data, User Auth
  renderProducts();
  updateCartUI();
  renderWishlist();
  renderCheckoutDeliveryDates();
  updateCheckoutData();
  updateWishlistUI();
  updateUserAuthUI();
}

// Deterministic 2-Hour Rotating Products Pool (Picks 20 products, rotates every 2 hours)
function getParentCategory(cat) {
  if (!cat) return "suits";
  const c = String(cat).toLowerCase().trim();
  if (c.startsWith("suits") || c.includes("kostyum")) return "suits";
  if (c === "tuxedos" || c.includes("smoking") || c.includes("to'y"))
    return "tuxedos";
  if (c.startsWith("trousers") || c.includes("shim")) return "trousers";
  if (c.startsWith("blazers") || c.includes("pijak") || c.includes("blazer"))
    return "blazers";
  if (c.startsWith("shirts") || c.includes("ko'ylak") || c.includes("koylak"))
    return "shirts";
  if (
    c.startsWith("accessories") ||
    c.includes("aksessuar") ||
    c.includes("gals") ||
    c.includes("kamar") ||
    c.includes("zapon")
  )
    return "accessories";
  return c;
}

function normalizeCategory(cat) {
  if (!cat) return "suits";
  return String(cat).toLowerCase().trim();
}

function matchCategory(itemCat, curCat) {
  if (!curCat || curCat === "all") return true;
  const normItem = normalizeCategory(itemCat);
  const normCur = normalizeCategory(curCat);

  if (normItem === normCur) return true;

  const parentItem = getParentCategory(normItem);
  const parentCur = getParentCategory(normCur);

  if (
    parentItem === normCur ||
    parentCur === normItem ||
    parentItem === parentCur
  )
    return true;

  return false;
}

function getGlobalProductsPool() {
  if (typeof window !== "undefined" && window.__SERVER_PRODUCTS__ && Array.isArray(window.__SERVER_PRODUCTS__) && window.__SERVER_PRODUCTS__.length > 0) {
    EUROTEX_PRODUCTS = window.__SERVER_PRODUCTS__;
    window.EUROTEX_PRODUCTS = EUROTEX_PRODUCTS;
    return EUROTEX_PRODUCTS;
  }
  if (window.EUROTEX_PRODUCTS && Array.isArray(window.EUROTEX_PRODUCTS) && window.EUROTEX_PRODUCTS.length > 0) {
    EUROTEX_PRODUCTS = window.EUROTEX_PRODUCTS;
    return window.EUROTEX_PRODUCTS;
  }
  if (typeof DEFAULT_EUROTEX_PRODUCTS !== "undefined" && Array.isArray(DEFAULT_EUROTEX_PRODUCTS) && DEFAULT_EUROTEX_PRODUCTS.length > 0) {
    EUROTEX_PRODUCTS = [...DEFAULT_EUROTEX_PRODUCTS];
    window.EUROTEX_PRODUCTS = EUROTEX_PRODUCTS;
    return EUROTEX_PRODUCTS;
  }
  if (typeof DEFAULT_EUROTEX_PRODUCTS_V2 !== "undefined" && Array.isArray(DEFAULT_EUROTEX_PRODUCTS_V2) && DEFAULT_EUROTEX_PRODUCTS_V2.length > 0) {
    EUROTEX_PRODUCTS = [...DEFAULT_EUROTEX_PRODUCTS_V2];
    window.EUROTEX_PRODUCTS = EUROTEX_PRODUCTS;
    return EUROTEX_PRODUCTS;
  }
  return [];
}

function getRotatingHomeProducts() {
  const pool = getGlobalProductsPool();
  if (!pool || pool.length === 0) return [];
  return pool;
}

function safeFormatMoney(priceVal) {
  try {
    const rate =
      typeof state !== "undefined" && state.usdRate ? state.usdRate : 12650;
    let usd = 0;
    let uzs = 0;
    const num = parseFloat(priceVal) || 45;

    if (num >= 100000) {
      uzs = Math.round(num / 500) * 500;
      usd = Math.round(uzs / rate);
    } else {
      usd = Math.round(num);
      uzs = Math.round((usd * rate) / 500) * 500;
    }

    const formattedUsd = `$${usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
    const formattedUzs = uzs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return `${formattedUsd} (${formattedUzs} so'm)`;
  } catch (e) {
    return "$45 (569 250 so'm)";
  }
}

// 🌐 XSS Himoyasi — HTML teglarni zararsizlantirish (Fix 12)
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 📴 #10 Xavfsiz LocalStorage (QuotaExceededError va Safari Private Mode Himoyasi)
window._inMemoryStorage = window._inMemoryStorage || {};

function safeSetLocalStorage(key, val) {
  const serialized = typeof val === "string" ? val : JSON.stringify(val);
  try {
    localStorage.setItem(key, serialized);
  } catch (e) {
    console.warn(`[Eurotex Storage] QuotaExceeded: "${key}" xotiraga yozilmoqda:`, e.message);
    // 1-bosqich: eski kesh kalitlarini tozalab qayta urinib ko'rish
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && (k.startsWith("eurotex_cache_") || k.startsWith("eurotex_temp_") || k.startsWith("eurotex_search_"))) {
          localStorage.removeItem(k);
        }
      }
      localStorage.setItem(key, serialized);
      return;
    } catch (_) {}

    // 2-bosqich: In-memory xotiraga o'tish (Crash va oq ekranning 100% oldi olinadi)
    window._inMemoryStorage[key] = serialized;
  }
}

// safeLocalStorageSet sinonimi
const safeLocalStorageSet = safeSetLocalStorage;

function safeGetLocalStorage(key, defaultVal = null) {
  try {
    const val = localStorage.getItem(key);
    if (val !== null) return val;
  } catch (_) {}
  return window._inMemoryStorage && window._inMemoryStorage[key] !== undefined
    ? window._inMemoryStorage[key]
    : defaultVal;
}

// 🔤 Kirill <-> Lotin o'zbekcha qidiruv transliteratsiyasi (Fix 3)
function transliterateUzbek(text) {
  if (!text || typeof text !== "string") return "";
  const cyrToLat = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo", "ж": "j",
    "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o",
    "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ф": "f", "х": "x", "ц": "ts",
    "ч": "ch", "ш": "sh", "щ": "sh", "ъ": "", "ы": "i", "ь": "", "э": "e", "ю": "yu",
    "я": "ya", "ў": "o'", "ғ": "g'", "ҳ": "h", "қ": "q"
  };
  const lower = text.toLowerCase();
  let result = "";
  for (let i = 0; i < lower.length; i++) {
    const ch = lower[i];
    result += cyrToLat[ch] !== undefined ? cyrToLat[ch] : ch;
  }
  return result;
}

function resetSearchAndFilters() {
  state.searchQuery = "";
  state.activeSearchQuery = "";
  state.activeSearch = "";
  state.currentCategory = "all";
  const sInput = document.getElementById("searchInput");
  if (sInput) sInput.value = "";
  const sSug = document.getElementById("searchSuggestions");
  if (sSug) sSug.classList.remove("show");
  document.querySelectorAll(".category-pill, .nav-cat-btn").forEach((b) => b.classList.remove("active"));
  const allCat = document.querySelector('[data-category="all"]');
  if (allCat) allCat.classList.add("active");
  renderProducts();
  showToast("Barcha filtrlar tozalandi! 🔄");
}

// ⚡ #4 High-Res Image Generator with Zero-Layout-Shift & Error Fallback
function renderOptimizedPicture(imgSrc, altText) {
  if (!imgSrc) imgSrc = "/images/navy_suit.jpg";
  const safeAlt = altText ? String(altText).replace(/"/g, "&quot;") : "Eurotex";
  return `<img src="${imgSrc}" alt="${safeAlt}" width="300" height="300" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='/images/navy_suit.jpg';">`;
}

// ⚡ #5 Resource Hints: Speculative Prefetch on Hover / Touch
const _prefetchedProducts = new Set();
function prefetchProductResources(productId) {
  if (!productId || _prefetchedProducts.has(productId)) return;
  _prefetchedProducts.add(productId);
  try {
    const pool = (typeof getGlobalProductsPool === "function" ? getGlobalProductsPool() : []) || [];
    const prod = pool.find((p) => String(p.id) === String(productId));
    if (!prod) return;
    const toPreload = [prod.image, ...(Array.isArray(prod.images) ? prod.images : [])].filter(Boolean);
    toPreload.slice(0, 3).forEach((src) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });
  } catch (_) {}
}

// ⚡ #3 Web Worker Background Search Engine
let _searchWorker = null;
let _searchWorkerReady = false;
let _lastSearchRequestId = 0;

function initSearchWorker() {
  if (_searchWorker || typeof window === "undefined" || !window.Worker) return;
  try {
    _searchWorker = new Worker("/search-worker.js");
    _searchWorker.onmessage = function (e) {
      const data = e.data || {};
      if (data.action === "PRODUCTS_SET") {
        _searchWorkerReady = true;
      } else if (data.action === "SEARCH_RESULTS" && data.requestId === _lastSearchRequestId) {
        applyWorkerSearchResults(data.matchedIds);
      }
    };
    syncSearchWorkerProducts();
  } catch (err) {
    console.warn("Search Worker init fallback:", err);
    _searchWorker = null;
  }
}

function syncSearchWorkerProducts() {
  if (!_searchWorker) return;
  try {
    const pool = typeof getGlobalProductsPool === "function" ? getGlobalProductsPool() : [];
    if (Array.isArray(pool) && pool.length > 0) {
      _searchWorker.postMessage({ action: "SET_PRODUCTS", payload: pool });
    }
  } catch (_) {}
}

function applyWorkerSearchResults(matchedIds) {
  if (Array.isArray(matchedIds)) {
    state._workerMatchedIds = new Set(matchedIds);
    renderProducts();
  }
}

let _virtualScrollObserver = null;
function initVirtualScrollObserver() {
  if (!("IntersectionObserver" in window)) return;
  const sentinel = document.getElementById("productsVirtualSentinel");
  if (!sentinel) return;
  if (_virtualScrollObserver) _virtualScrollObserver.disconnect();
  _virtualScrollObserver = new IntersectionObserver((entries) => {
    if (entries[0] && entries[0].isIntersecting) {
      loadMoreProducts();
    }
  }, { rootMargin: "300px" });
  _virtualScrollObserver.observe(sentinel);
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const countBadge = document.getElementById("productCountBadge");
  if (!grid) return;

  const lang = state.currentLang || "uz";
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.uz;

  const masterPool = getGlobalProductsPool();
  const activeSearch = (state.activeSearchQuery || "").trim();
  let pool = masterPool;

  if (
    !activeSearch &&
    (state.currentCategory === "all" || !state.currentCategory)
  ) {
    pool = getRotatingHomeProducts();
  }

  let filtered = pool.filter((item) => {
    if (!item) return false;
    if (state._workerMatchedIds && activeSearch) {
      return state._workerMatchedIds.has(String(item.id || item.customId));
    }
    const titleUz = (item.title_uz || item.title || "").toLowerCase();
    const titleRu = (
      item.title_ru ||
      item.title_uz ||
      item.title ||
      ""
    ).toLowerCase();
    const titleEn = (
      item.title_en ||
      item.title_uz ||
      item.title ||
      ""
    ).toLowerCase();
    const colorUz = (item.color_uz || "").toLowerCase();
    const fabricUz = (item.fabric_uz || "").toLowerCase();
    const categoryUz = (item.category || "").toLowerCase();
    const itemId = String(item.id || "").toLowerCase();

    const matchesCategory = !activeSearch
      ? state.currentCategory === "all" ||
        !state.currentCategory ||
        (state.currentCategory === "super-deal" &&
          item.oldPrice > item.price) ||
        matchCategory(item.category, state.currentCategory)
      : true;

    const q = activeSearch.toLowerCase().trim();
    const qTranslit = transliterateUzbek(q);
    const tokens = [...new Set([...q.split(/[\s,;._\-+]+/), ...(qTranslit ? qTranslit.split(/[\s,;._\-+]+/) : [])])].filter((t) => t.length > 0);
    const fullText = `${titleUz} ${titleRu} ${titleEn} ${colorUz} ${categoryUz} ${fabricUz} ${itemId}`;
    const matchesSearch =
      !activeSearch ||
      fullText.includes(q) ||
      (qTranslit && fullText.includes(qTranslit)) ||
      (tokens.length > 0 &&
        tokens.some(
          (t) =>
            t.length >= 2 &&
            (fullText.includes(t) || (titleUz.length >= 2 && t.includes(titleUz))),
        ));

    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${lang === "ru" ? "товаров" : lang === "en" ? "items" : "ta mahsulot"}`;
  }

  // Sort Products
  if (state.currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.currentSort === "discount") {
    filtered.sort((a, b) => b.oldPrice - b.price - (a.oldPrice - a.price));
  } else if (state.currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const displayLimit = state.displayLimit || 24;
  const visibleItems = filtered.slice(0, displayLimit);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; background: var(--bg-surface-secondary, #f8fafc); border: 1px dashed var(--border-color, #cbd5e1); border-radius: 20px; margin: 20px 0;">
        <div style="font-size: 44px; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 18px; font-weight: 800; color: var(--text-primary, #0f172a); margin: 0 0 8px 0;">Qidiruvingiz bo'yicha mahsulot topilmadi</h3>
        <p style="font-size: 14px; color: var(--text-muted, #64748b); max-width: 420px; margin: 0 auto 20px auto;">Kiritilgan kalit so'z yoki tanlangan toifa bo'yicha hozircha tovarlar mavjud emas. Filtrlarni tozalab ko'ring.</p>
        <button type="button" onclick="resetSearchAndFilters()" class="btn btn-primary" style="padding: 10px 24px; border-radius: 12px; font-weight: 700; font-size: 14px; background: linear-gradient(135deg, #88001b 0%, #5c0018 100%); color: #fff; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(136,0,27,0.3);">
          Filtrlarni tozalash 🔄
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML =
    visibleItems
      .map((product) => {
        try {
          if (!product) return "";
          const isWishlisted = (state.wishlist || []).some((w) => {
            const wId = typeof w === "object" && w ? w.id : w;
            return String(wId) === String(product.id);
          });
          const title = (
            product[`title_${lang}`] ||
            product.title_uz ||
            product.title ||
            "Eurotex Kostyum"
          ).toString();
          const badgeText = (
            product[`badge_${lang}`] ||
            product.badge_uz ||
            "ULGURJI PACHKA"
          ).toString();
          const usdRate = state.usdRate || 12650;
          const priceUsd =
            product.pachkaPriceUsd ||
            product.priceUsd ||
            (product.price > 5000
              ? Math.round(product.price / usdRate)
              : product.price) ||
            120;
          const priceSom = priceUsd * usdRate;
          let rawOld = Number(product.oldPrice);
          if (!Number.isFinite(rawOld) || rawOld > 50000000 || rawOld < 0) {
            rawOld = 0;
          }

          let oldPriceUsd = 0;
          let oldPriceSom = 0;
          if (rawOld > 0) {
            if (rawOld > 5000) {
              oldPriceSom = Math.round(rawOld);
              oldPriceUsd = Math.round(oldPriceSom / usdRate);
            } else {
              oldPriceUsd = Math.round(rawOld);
              oldPriceSom = oldPriceUsd * usdRate;
            }
          }

          if (oldPriceSom <= priceSom) {
            oldPriceUsd = Math.round(priceUsd * 1.25);
            oldPriceSom = oldPriceUsd * usdRate;
          }

          let cardDisc = 0;
          if (product.discountPercent && product.discountPercent > 0 && product.discountPercent < 100) {
            cardDisc = Math.round(product.discountPercent);
          } else if (oldPriceSom > priceSom && priceSom > 0) {
            cardDisc = Math.round(((oldPriceSom - priceSom) / oldPriceSom) * 100);
          }
          if (cardDisc >= 100) cardDisc = 99;
          if (cardDisc < 1) cardDisc = 0;

          const formattedPrice = `$${priceUsd} (${formatMoneySom(priceSom)} so'm)`;
          const formattedOldPrice = `$${oldPriceUsd} (${formatMoneySom(oldPriceSom)} so'm)`;
          const badgeType = product.badgeType || "gold";
          const imgSrc =
            product.image || product.img || "/images/navy_suit.jpg";

          const isOutOfStock = product.inStock === false || (product.stockQty !== undefined && Number(product.stockQty) <= 0);
          return `
            <div class="product-card ${isOutOfStock ? "out-of-stock-card" : ""}" data-id="${product.id || "prod-1"}" onclick="openQuickView('${product.id || "prod-1"}')" onmouseenter="prefetchProductResources('${product.id || "prod-1"}')" ontouchstart="prefetchProductResources('${product.id || "prod-1"}')">
                <div class="card-image-wrap">
                    ${renderOptimizedPicture(imgSrc, title)}
                    ${isOutOfStock ? `<span class="card-badge-tag badge-out-of-stock">Sotuvda yo'q</span>` : (badgeText ? `<span class="card-badge-tag ${badgeType}">${badgeText}</span>` : "")}
                    <button class="wishlist-heart-btn ${isWishlisted ? "active" : ""}" 
                            onclick="event.stopPropagation(); toggleWishlist('${product.id || "prod-1"}')" 
                            title="Wishlist">
                        ${isWishlisted ? "❤️" : "🤍"}
                    </button>
                </div>
                <div class="card-body">
                    <div class="pachka-series-badge">
                        📦 1 Pachka (${product.pachkaItems || 6} ta seriya)
                    </div>
                    <div class="card-price-row">
                        <div class="price-group">
                            <span class="current-price">${formattedPrice} <small class="price-unit-tag">/pachka</small></span>
                            <span class="old-price">${formattedOldPrice}</span>
                        </div>
                    </div>
                    <h3 class="card-title">${state.searchQuery ? highlightSearchTerm(title, state.searchQuery) : title}</h3>
                    <div class="card-rating">
                        <span>⭐ ${product.rating || 4.9}</span>
                        <span>(${product.reviewsCount || 186} sharhlar)</span>
                    </div>
                    ${isOutOfStock ? `
                    <button type="button" disabled class="btn product-out-stock-btn">
                        Sotuvda qolmagan ❌
                    </button>` : `
                    <button type="button" onclick="event.stopPropagation(); addToCart('${product.id || "prod-1"}', '${product.sizes && Array.isArray(product.sizes) ? product.sizes.join("-") : "Seriya"}', 'Klassik', event);" class="btn product-add-cart-btn">
                        1 Pachka Savatga 🛒
                    </button>`}
                </div>
            </div>
        `;
        } catch (err) {
          console.error("renderProducts item map error:", err);
          return "";
        }
      })
      .join("") +
    (filtered.length > visibleItems.length
      ? `
        <!-- ⚡ #2 Virtual DOM-free progressive scroll sentinel -->
        <div id="productsVirtualSentinel" style="height: 24px; width: 100%; grid-column: 1 / -1;"></div>
        <div class="load-more-container">
          <button type="button" class="btn load-more-btn" onclick="loadMoreProducts()">
            🚀 Yana ${filtered.length - visibleItems.length} ta mahsulotni ko'rsatish
          </button>
        </div>`
      : "");

  // Initialize Luxury Scroll Reveal Animation & Virtualization Observer
  setTimeout(() => {
    initProductScrollReveal();
    initVirtualScrollObserver();
  }, 30);
}

let _productScrollObserver = null;

function initProductScrollReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".product-card").forEach((card) => {
      card.classList.add("scroll-reveal-visible");
      card.classList.remove("scroll-reveal-init");
    });
    return;
  }

  if (_productScrollObserver) {
    _productScrollObserver.disconnect();
  }

  _productScrollObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal-visible");
          entry.target.classList.remove("scroll-reveal-init");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -20px 0px",
      threshold: 0.05,
    },
  );

  const cards = document.querySelectorAll(
    ".product-card:not(.scroll-reveal-visible)",
  );
  cards.forEach((card, idx) => {
    card.classList.add("scroll-reveal-init");
    const delay = (idx % 4) * 0.15;
    card.style.transitionDelay = `${delay}s`;
    _productScrollObserver.observe(card);
  });
}

function loadMoreProducts() {
  state.displayLimit = (state.displayLimit || 24) + 24;
  renderProducts();
}

function loadMoreAdminProducts() {
  state.adminDisplayLimit = (state.adminDisplayLimit || 30) + 30;
  renderAdminProducts();
}

// Reset Filters
function resetFilters() {
  state.currentCategory = "all";
  state.searchQuery = "";
  state.activeSearchQuery = ""; // Clear active search too!
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const searchSuggestions = document.getElementById("searchSuggestions");
  if (searchSuggestions) searchSuggestions.classList.remove("show");

  document
    .querySelectorAll(".nav-pill")
    .forEach((p) => p.classList.remove("active"));
  const defaultPill = document.querySelector('.nav-pill[data-category="all"]');
  if (defaultPill) defaultPill.classList.add("active");

  renderProducts();
}

// Setup Event Listeners
function setupEventListeners() {
  // Fix 11: Global keydown listener for Escape key to close active modals & drawers
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      closeAllModals();
      if (typeof closeCartDrawer === "function") closeCartDrawer();
      const activeModals = document.querySelectorAll(".modal, .modal-overlay, .custom-modal, [id$='Modal']");
      activeModals.forEach((m) => {
        if (m.classList.contains("show") || m.classList.contains("active") || m.style.display === "block" || m.style.display === "flex") {
          m.classList.remove("show", "active");
          m.style.display = "none";
          m.style.opacity = "0";
          m.style.visibility = "hidden";
          m.style.pointerEvents = "none";
        }
      });
      document.body.style.overflow = "";
      const searchPop = document.getElementById("searchSuggestions");
      if (searchPop) searchPop.classList.remove("show");
    }
  });

  // Fix 13: Enter key listener on #promoCodeInput to apply promo code
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target && e.target.id === "promoCodeInput") {
      e.preventDefault();
      if (typeof applyPromoCode === "function") {
        applyPromoCode();
      }
    }
  });

  // Language Option Selection
  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      const langCode = opt.dataset.lang;
      setLanguage(langCode);
      const langDropdown = document.getElementById("langDropdown");
      if (langDropdown) langDropdown.classList.remove("show");
      const langName =
        langCode === "uz"
          ? "O'zbekcha"
          : langCode === "ru"
            ? "Русский"
            : "English";
      showToast(`Til almashtirildi: ${langName} 🌐`);
    });
  });

  // 📞 Telefon raqamini avtomatik formatlash maskasi (+998 (XX) XXX-XX-XX) (Fix 8)
  const phoneInputs = document.querySelectorAll("#custPhone, input[type='tel']");
  phoneInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      if (!input.value.trim()) {
        input.value = "+998 ";
      }
    });
    input.addEventListener("input", () => {
      let val = input.value.replace(/\D/g, "");
      if (val.startsWith("998")) {
        val = val.slice(3);
      }
      val = val.slice(0, 9);
      let formatted = "+998";
      if (val.length > 0) formatted += ` (${val.slice(0, 2)}`;
      if (val.length >= 2) formatted += `) ${val.slice(2, 5)}`;
      if (val.length >= 5) formatted += `-${val.slice(5, 7)}`;
      if (val.length >= 7) formatted += `-${val.slice(7, 9)}`;
      input.value = formatted;
    });
  });

  // Navigation Pills (Category Bar)
  const categoryUrlMap = {
    all: "/all",
    "super-deal": "/super_price",
    suits: "/suits",
    trousers: "/trousers",
    blazers: "/blazers",
    tuxedos: "/tuxedos",
    shirts: "/shirts",
    accessories: "/accessories",
  };

  document.querySelectorAll(".nav-pill, .sub-pill").forEach((pill) => {
    pill.addEventListener("click", (e) => {
      const href = pill.getAttribute("href");
      if (href === "#wholesaleInfo") {
        updateURLRoute("/pachkalab-sotuv");
        const el = document.getElementById("wholesaleInfo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (href && href.startsWith("#")) return;
      e.preventDefault();
      const cat = pill.dataset.category || pill.dataset.filter;
      if (cat) {
        state.currentCategory = cat;
        document
          .querySelectorAll(".nav-pill, .sub-pill")
          .forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        const targetUrl = categoryUrlMap[cat] || `/${cat}`;
        updateURLRoute(targetUrl);
        renderProducts();
      }
    });
  });

  // Catalog Menu Toggle
  const catalogBtn = document.getElementById("catalogToggleBtn");
  const catalogMenu = document.getElementById("catalogMenu");
  if (catalogBtn && catalogMenu) {
    catalogBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      catalogMenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!catalogMenu.contains(e.target) && !catalogBtn.contains(e.target)) {
        catalogMenu.classList.remove("show");
      }
    });
  }

  // Search Autocomplete & Submit Handlers
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm");
  const searchSuggestions = document.getElementById("searchSuggestions");

  if (searchInput) {
    let searchDebounceTimer = null;
    // Typing: Show live Uzum-style autocomplete suggestions & filter main grid live (with 200ms debounce)
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim();
      state.searchQuery = q;
      state.activeSearchQuery = q;

      // 🔍 #5 250ms Debounce: Foydalanuvchi yozishdan to'xtagandan keyin tavsiya va filtrlash
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        if (q.length > 0) {
          renderSearchSuggestions(q);
        } else {
          if (searchSuggestions) searchSuggestions.classList.remove("show");
        }
        if (_searchWorker && _searchWorkerReady) {
          _lastSearchRequestId++;
          _searchWorker.postMessage({
            action: "SEARCH",
            requestId: _lastSearchRequestId,
            payload: {
              query: q,
              category: state.currentCategory,
              sort: state.currentSort,
              lang: state.currentLang,
            },
          });
        } else {
          state._workerMatchedIds = null;
          renderProducts();
        }
      }, 250);
    });

    // Press Enter key to execute search
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeSearch();
      }
    });
  }

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      executeSearch();
    });
  }

  document.addEventListener("click", (e) => {
    if (searchInput && searchSuggestions) {
      if (
        !searchInput.contains(e.target) &&
        !searchSuggestions.contains(e.target)
      ) {
        searchSuggestions.classList.remove("show");
      }
    }

    // Global A-tag click interceptor to completely prevent /# in URL bar
    const a = e.target.closest("a");
    if (a) {
      const href = a.getAttribute("href");
      if (href === "#" || href === "javascript:void(0)") {
        e.preventDefault();
        return;
      }
      if (href && href.startsWith("/") && !href.startsWith("//") && !a.target) {
        e.preventDefault();
        navigateTo(href);
      }
    }
  });

  // Sort Dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.currentSort = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer Triggers
  const openCartBtn = document.getElementById("openCartBtn");
  const mobileCartBtn = document.getElementById("mobileCartBtn");
  if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);
  if (mobileCartBtn)
    mobileCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openCartDrawer();
    });

  // Wishlist Triggers
  const openWishlistBtn = document.getElementById("openWishlistBtn");
  const mobileWishlistBtn = document.getElementById("mobileWishlistBtn");
  if (openWishlistBtn)
    openWishlistBtn.addEventListener("click", filterWishlistProducts);
  if (mobileWishlistBtn)
    mobileWishlistBtn.addEventListener("click", (e) => {
      e.preventDefault();
      filterWishlistProducts();
    });

  // Qator: 540-565
  // Auth Triggers
  const openAuthModalBtn = document.getElementById("openAuthModalBtn");
  const mobileAuthBtn = document.getElementById("mobileAuthBtn");
  if (openAuthModalBtn)
    openAuthModalBtn.addEventListener("click", openAuthModal);
  if (mobileAuthBtn)
    mobileAuthBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openAuthModal();
    });

  // Google orqali kirish tugmasini ulash
  const googleLoginBtn =
    document.getElementById("googleLoginBtn") ||
    document.querySelector(
      ".google-login-btn, [onclick*='handleGoogleSignIn']",
    );
  if (googleLoginBtn) {
    googleLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleGoogleSignIn();
    });
  }

  // Language selector dropdown toggle
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");
  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("show");
    });
    document.addEventListener("click", () =>
      langDropdown.classList.remove("show"),
    );
  }

  initCheckoutInteractiveControls();
  handleURLRouting();
}

function executeSearch(query) {
  const input = document.getElementById("searchInput");
  const searchSuggestions = document.getElementById("searchSuggestions");
  const q = (query !== undefined ? query : input ? input.value : "").trim();

  // 1. Close dashboard view (if user was in Admin or other tab) and show home catalog page
  closeDashboardView();

  state.activeSearchQuery = q;
  state.searchQuery = q;
  state.currentCategory = "all";

  if (input) input.value = q;
  if (searchSuggestions) searchSuggestions.classList.remove("show");

  // Update active nav pill to 'all'
  document
    .querySelectorAll(".nav-pill")
    .forEach((p) => p.classList.remove("active"));
  const defaultPill = document.querySelector('.nav-pill[data-category="all"]');
  if (defaultPill) defaultPill.classList.add("active");

  // ⚡ #3 Web Worker high-speed background search
  if (_searchWorker && _searchWorkerReady) {
    _lastSearchRequestId++;
    _searchWorker.postMessage({
      action: "SEARCH",
      requestId: _lastSearchRequestId,
      payload: {
        query: q,
        category: state.currentCategory,
        sort: state.currentSort,
        lang: state.currentLang,
      },
    });
  } else {
    state._workerMatchedIds = null;
    renderProducts();
  }

  const sec = document.getElementById("products-section");
  if (sec) {
    sec.scrollIntoView({ behavior: "smooth" });
  }
}

// Render Uzum-style Autocomplete Dropdown suggestions while typing
function renderSearchSuggestions(query) {
  const box = document.getElementById("searchSuggestions");
  if (!box) return;

  const q = (query || "").toLowerCase().trim();
  if (!q) {
    box.classList.remove("show");
    return;
  }

  const lang = state.currentLang;
  const qTranslit = transliterateUzbek(q);
  const tokens = [...new Set([...q.split(/[\s,;._\-+]+/), ...(qTranslit ? qTranslit.split(/[\s,;._\-+]+/) : [])])].filter((t) => t.length > 0);

  // Filter matching products (up to 5) (Fix 8)
  const searchPool = (typeof getGlobalProductsPool === "function" ? getGlobalProductsPool() : EUROTEX_PRODUCTS) || [];
  const matches = searchPool.filter((item) => {
    const titleUz = (item.title_uz || item.title || "").toLowerCase();
    const titleRu = (
      item.title_ru ||
      item.title_uz ||
      item.title ||
      ""
    ).toLowerCase();
    const titleEn = (
      item.title_en ||
      item.title_uz ||
      item.title ||
      ""
    ).toLowerCase();
    const cat = (item.category || "").toLowerCase();
    const color = (item.color_uz || "").toLowerCase();
    const fabric = (item.fabric_uz || "").toLowerCase();
    const itemId = String(item.id || item.customId || "").toLowerCase();

    const fullText = `${titleUz} ${titleRu} ${titleEn} ${cat} ${color} ${fabric} ${itemId}`;

    if (fullText.includes(q) || (qTranslit && fullText.includes(qTranslit))) return true;
    if (tokens.length > 0) {
      return tokens.some(
        (t) =>
          t.length >= 2 &&
          (fullText.includes(t) || (titleUz.length >= 2 && t.includes(titleUz))),
      );
    }
    return false;
  });

  const safeQ = encodeURIComponent(q);

  let html = `
        <div class="suggest-section">
            <div class="suggest-title">🔍 Qidiruv iborasi:</div>
            <div class="suggest-tags">
                <span class="suggest-tag" onclick="executeSearch(decodeURIComponent('${safeQ}'))">🔍 <b>"${q}"</b> bo'yicha barcha kiyimlarni qidirish</span>
            </div>
        </div>
    `;

  if (matches.length > 0) {
    html += `
            <div class="suggest-section" style="margin-top:12px;">
                <div class="suggest-title">🧥 Mos keluvchi kiyimlar (${matches.length}):</div>
                <div class="suggest-products-list">
                    ${matches
                      .slice(0, 5)
                      .map((item) => {
                        const safeTitle = encodeURIComponent(
                          item.title_uz || "",
                        );
                        return `
                            <div class="suggest-prod-item" onclick="executeSearch(decodeURIComponent('${safeTitle}'));">
                                <img src="${item.image}" alt="" class="suggest-prod-img" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='/images/navy_suit.jpg'" />
                                <div class="suggest-prod-info">
                                    <div class="suggest-prod-title">${item.title_uz}</div>
                                    <div class="suggest-prod-meta">
                                        <span class="suggest-prod-cat">${item.category}</span>
                                        <span class="suggest-prod-price">$${item.priceUsd || 50}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                      })
                      .join("")}
                </div>
            </div>
        `;
  } else {
    html += `
            <div style="padding:10px 0; font-size:13px; color:var(--text-secondary);">
                "${q}" bo'yicha takliflar topilmadi. Qidiruv tugmasini yoki Enter bosing.
            </div>
        `;
  }

  box.innerHTML = html;
  box.classList.add("show");
}

// CHECKOUT INTERACTIVE CONTROLS (Delivery Tabs, Date Pills, Payment Options)
function initCheckoutInteractiveControls() {
  // Delivery Method Tabs
  const delTabBtns = document.querySelectorAll(".del-tab-btn");
  delTabBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      delTabBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      const radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const val = radio ? radio.value : "";
      const addrSelect = document.getElementById("custAddress");
      if (addrSelect && (addrSelect.value === "home-toshkent" || addrSelect.value === "punkt-chilonzor" || addrSelect.value === "try-before-buy")) {
        addrSelect.value = "";
      }
    });
  });

  // Delivery Date Pills
  const datePills = document.querySelectorAll(".date-pill");
  datePills.forEach((pill) => {
    pill.addEventListener("click", function (e) {
      e.preventDefault();
      datePills.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");
      const radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Payment Option Buttons (Payme, Click, Naqd to'lov)
  const payButtons = document.querySelectorAll(".eurotex-pay-btn, .pay-option");
  payButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      payButtons.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");
      const radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
}

// Filter Wishlist Products
function filterWishlistProducts() {
  openWishlistModal();
}

// Wishlist Toggling
function toggleWishlist(productId) {
  const pool =
    typeof getGlobalProductsPool === "function"
      ? getGlobalProductsPool()
      : EUROTEX_PRODUCTS;
  const product = pool.find((p) => p && String(p.id) === String(productId));

  const index = state.wishlist.findIndex((w) => {
    const wId = typeof w === "object" && w ? w.id : w;
    return String(wId) === String(productId);
  });

  const isNowAdded = index === -1;
  const lang = state.currentLang || "uz";

  if (!isNowAdded) {
    state.wishlist.splice(index, 1);
    showToast(
      lang === "ru"
        ? "Удалено из избранного"
        : lang === "en"
          ? "Removed from wishlist"
          : "Sevimlilardan olib tashlandi",
      "info",
    );
  } else {
    state.wishlist.push(product || productId);
    showToast(
      lang === "ru"
        ? "Добавлено в избранное"
        : lang === "en"
          ? "Added to wishlist"
          : "Sevimlilarga qo'shildi",
      "success",
    );
  }

  persistWishlist();
  updateWishlistUI();

  // Instant in-place heart update (NO FULL PAGE RELOAD OR FLICKERING!)
  const targetButtons = document.querySelectorAll(
    `.product-card[data-id="${productId}"] .wishlist-heart-btn, button[onclick*="toggleWishlist('${productId}')"]`,
  );
  targetButtons.forEach((btn) => {
    if (isNowAdded) {
      btn.classList.add("active");
      btn.innerHTML = "❤️";
      btn.style.animation = "none";
      btn.offsetHeight; // trigger reflow
      btn.style.animation = "heartPop 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    } else {
      btn.classList.remove("active");
      btn.innerHTML = "🤍";
      btn.style.animation = "none";
    }
  });

  // Re-render wishlist if currently viewing it (dashboard pane or modal)
  const dPaneWishlist = document.getElementById("dPaneWishlist");
  const isDashWishlistOpen =
    dPaneWishlist &&
    dPaneWishlist.style.display !== "none" &&
    dPaneWishlist.style.display !== "";
  const wModal = document.getElementById("wishlistModal");
  const isWishlistModalOpen =
    wModal &&
    (wModal.classList.contains("active") || wModal.classList.contains("show"));

  if ((isDashWishlistOpen || isWishlistModalOpen) && typeof renderWishlist === "function") {
    renderWishlist();
  }
}

function triggerBadgePulse(el) {
  if (!el) return;
  el.classList.remove("badge-pulse-animate");
  void el.offsetWidth;
  el.classList.add("badge-pulse-animate");
}

function updateWishlistUI() {
  const wishlistCount = document.getElementById("wishlistCount");
  const mobileWishlistBadge = document.getElementById("mobileWishlistBadge");
  const count = state.wishlist.length;

  if (wishlistCount) {
    if (wishlistCount.textContent !== String(count)) triggerBadgePulse(wishlistCount);
    wishlistCount.textContent = count;
  }
  if (mobileWishlistBadge) {
    if (mobileWishlistBadge.textContent !== String(count)) triggerBadgePulse(mobileWishlistBadge);
    mobileWishlistBadge.textContent = count;
  }
}

// =============================================================================
// 👑 FEATURE 1: FLY TO CART ANIMATION (SAVATGA OLIB BORIB SOLISH)
// =============================================================================
function animateFlyToCart(sourceEl, triggerBtn = null) {
  if (!sourceEl) return;
  const targetCartBtn =
    (window.innerWidth <= 768
      ? document.getElementById("mobileCartBtn")
      : document.getElementById("headerCartBtn") ||
        document.getElementById("cartTriggerBtn") ||
        document.getElementById("cartCount") ||
        document.querySelector(".cart-btn")) ||
    document.getElementById("mobileCartBadge");

  if (!targetCartBtn) return;

  const srcRect = sourceEl.getBoundingClientRect();
  const destRect = targetCartBtn.getBoundingClientRect();

  if (srcRect.width === 0 || srcRect.height === 0) return;

  // 1. Emotive Button Feedback (Qo'shildi ✓)
  if (triggerBtn && !triggerBtn.dataset.animating) {
    triggerBtn.dataset.animating = "true";
    const originalText = triggerBtn.innerHTML;
    triggerBtn.classList.add("btn-added-success");
    triggerBtn.innerHTML = `<span>✓ Savatga qo'shildi!</span>`;
    setTimeout(() => {
      triggerBtn.classList.remove("btn-added-success");
      triggerBtn.innerHTML = originalText;
      delete triggerBtn.dataset.animating;
    }, 1300);
  }

  // 2. Parabolic 3D Flying Suit Orb
  const flyer = document.createElement("div");
  flyer.className = "eurotex-flyer-clone";

  const img = sourceEl.tagName === "IMG" ? sourceEl : sourceEl.querySelector("img");
  if (img && img.src) {
    flyer.style.backgroundImage = `url('${img.src}')`;
    flyer.style.backgroundSize = "cover";
    flyer.style.backgroundPosition = "center";
  } else {
    flyer.innerHTML = "👔";
    flyer.style.display = "flex";
    flyer.style.alignItems = "center";
    flyer.style.justifyContent = "center";
    flyer.style.fontSize = "24px";
    flyer.style.background = "linear-gradient(135deg, #7000ff, #00f2fe)";
  }

  const startX = srcRect.left + srcRect.width / 2 - 28;
  const startY = srcRect.top + srcRect.height / 2 - 28;
  const endX = destRect.left + destRect.width / 2 - 14;
  const endY = destRect.top + destRect.height / 2 - 14;

  flyer.style.position = "fixed";
  flyer.style.left = `${startX}px`;
  flyer.style.top = `${startY}px`;
  flyer.style.width = "56px";
  flyer.style.height = "56px";
  flyer.style.borderRadius = "50%";
  flyer.style.border = "2.5px solid #00f2fe";
  flyer.style.boxShadow = "0 0 26px rgba(0, 242, 254, 0.9), 0 8px 24px rgba(0,0,0,0.6)";
  flyer.style.zIndex = "9999999";
  flyer.style.pointerEvents = "none";

  document.body.appendChild(flyer);

  const animation = flyer.animate(
    [
      {
        transform: "scale(1) rotate(0deg)",
        opacity: 1,
        left: `${startX}px`,
        top: `${startY}px`,
      },
      {
        transform: "scale(1.35) rotate(-15deg)",
        opacity: 1,
        left: `${startX + (endX - startX) * 0.25}px`,
        top: `${Math.min(startY, endY) - 70}px`,
        offset: 0.35,
      },
      {
        transform: "scale(0.85) rotate(120deg)",
        opacity: 0.85,
        left: `${startX + (endX - startX) * 0.75}px`,
        top: `${Math.min(startY, endY) - 30}px`,
        offset: 0.75,
      },
      {
        transform: "scale(0.12) rotate(360deg)",
        opacity: 0.2,
        left: `${endX}px`,
        top: `${endY}px`,
      },
    ],
    {
      duration: 720,
      easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      fill: "forwards",
    },
  );

  animation.onfinish = () => {
    flyer.remove();

    // 3. Cart Icon Bounce & Shake
    targetCartBtn.classList.remove("cart-icon-bouncing");
    targetCartBtn.offsetHeight; // trigger reflow
    targetCartBtn.classList.add("cart-icon-bouncing");

    // 4. Floating +1 Badge over Cart Icon
    const plusOne = document.createElement("div");
    plusOne.className = "eurotex-cart-plus-one";
    plusOne.textContent = "+1";
    plusOne.style.left = `${destRect.left + destRect.width / 2}px`;
    plusOne.style.top = `${destRect.top}px`;
    document.body.appendChild(plusOne);

    setTimeout(() => {
      plusOne.remove();
      targetCartBtn.classList.remove("cart-icon-bouncing");
    }, 850);
  };
}

function getUserKey() {
  try {
    const u = state.user || JSON.parse(localStorage.getItem("eurotex_user") || "null");
    if (!u) return null;
    const key = u.email || u.phone || u.id || u.sub;
    return key ? String(key).toLowerCase().trim() : null;
  } catch (e) {
    return null;
  }
}

// 🛒 Cart Persistence Engine (stays in cart until order, then completely clears)
function persistCart() {
  try {
    const data = JSON.stringify(state.cart || []);
    safeSetLocalStorage("eurotex_cart", data);
    const userKey = getUserKey();
    if (userKey) {
      safeSetLocalStorage(`eurotex_cart_${userKey}`, data);
    }
  } catch (e) {}
}

function clearPersistedCart() {
  state.cart = [];
  state.appliedPromoCode = null;
  state.appliedDiscountAmount = 0;
  state.appliedDiscountUsd = 0;
  state.discountRate = 0;
  try {
    localStorage.removeItem("eurotex_cart");
    const userKey = getUserKey();
    if (userKey) {
      localStorage.removeItem(`eurotex_cart_${userKey}`);
    }
  } catch (e) {}
  updateCartUI();
  updateDashboardCounts();
}

// ❤️ Wishlist Persistence Engine (stays in wishlist until user removes)
function persistWishlist() {
  try {
    const data = JSON.stringify(state.wishlist || []);
    safeSetLocalStorage("eurotex_wishlist", data);
    const userKey = getUserKey();
    if (userKey) {
      safeSetLocalStorage(`eurotex_wishlist_${userKey}`, data);
    }
  } catch (e) {}
}

function clearPersistedWishlist() {
  state.wishlist = [];
  try {
    localStorage.removeItem("eurotex_wishlist");
    const userKey = getUserKey();
    if (userKey) {
      localStorage.removeItem(`eurotex_wishlist_${userKey}`);
    }
  } catch (e) {}
  updateWishlistUI();
  updateDashboardCounts();
}

// Cart Drawer Operations
function addToCart(
  productId,
  selectedSize = "48",
  selectedColor = "To'q ko'k (Navy)",
  sourceEv = null,
) {
  const pool =
    typeof getGlobalProductsPool === "function"
      ? getGlobalProductsPool()
      : EUROTEX_PRODUCTS;
  const product = pool.find((p) => p && String(p.id) === String(productId));
  if (!product) return;

  if (product.inStock === false || (product.stockQty !== undefined && Number(product.stockQty) <= 0)) {
    showToast("⚠️ Kechirasiz, ushbu tovar hozirda omborda qolmagan.", "error");
    return;
  }

  // Trigger Fly to Cart animation and button state
  let srcEl = null;
  let triggerBtn = null;
  if (sourceEv && sourceEv.target) {
    triggerBtn = sourceEv.target.closest("button") || sourceEv.target;
    srcEl =
      sourceEv.target.closest(".product-card")?.querySelector("img") ||
      sourceEv.target;
  }
  if (!srcEl) {
    srcEl =
      document.querySelector(`.product-card[data-id="${productId}"] img`) ||
      document.getElementById("quickViewImg");
  }
  if (srcEl) {
    animateFlyToCart(srcEl, triggerBtn);
  }

  const lang = state.currentLang;
  const title =
    product[`title_${lang}`] ||
    product.title_uz ||
    product.title ||
    "Eurotex Kostyum";

  const existing = state.cart.find(
    (c) =>
      String(c.id) === String(productId) &&
      c.size === selectedSize &&
      c.color === selectedColor,
  );
  if (existing) {
    if (existing.quantity >= 100) {
      showToast("⚠️ Savatda ushbu tovardan maksimal 100 pachka mavjud!", "error");
      return;
    }
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      title: title,
      price: product.pachkaPriceUsd || product.priceUsd || (product.price > 5000 ? Math.round(product.price / (state.usdRate || 12650)) : product.price) || 50,
      priceUsd: product.pachkaPriceUsd || product.priceUsd || (product.price > 5000 ? Math.round(product.price / (state.usdRate || 12650)) : product.price) || 50,
      pachkaPriceUsd: product.pachkaPriceUsd || product.priceUsd || 50,
      image: product.image || product.img || "/images/navy_suit.jpg",
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });
  }

  persistCart();
  updateCartUI();
  updateDashboardCounts();
  showToast(`"${title.slice(0, 25)}..." savatga solindi 🛒`);
}

function clearCart() {
  clearPersistedCart();
  showToast("Savat tozalandi");
}

function removeCartItem(productId, size, color) {
  state.cart = state.cart.filter(
    (c) => !(c.id === productId && c.size === size && c.color === color),
  );
  persistCart();
  updateCartUI();
  updateDashboardCounts();
  showToast("Mahsulot savatdan olib tashlandi 🗑️");
}

function removeCartItemByIndex(index, ev) {
  if (index >= 0 && index < state.cart.length) {
    const itemEl = ev?.target
      ? ev.target.closest(".cart-item-row")
      : document.querySelector(`[data-cart-idx="${index}"]`);

    if (itemEl) {
      itemEl.classList.add("cart-item-collapsing");
      setTimeout(() => {
        state.cart.splice(index, 1);
        persistCart();
        updateCartUI();
        updateDashboardCounts();
        showToast("Mahsulot savatdan olib tashlandi 🗑️");
      }, 320);
    } else {
      state.cart.splice(index, 1);
      persistCart();
      updateCartUI();
      updateDashboardCounts();
      showToast("Mahsulot savatdan olib tashlandi 🗑️");
    }
  }
}

function toggleSelectAllCart(masterCheck) {
  const checks = document.querySelectorAll(".cart-item-check");
  checks.forEach((c) => (c.checked = masterCheck.checked));
}

function updateCartQty(productId, size, color, change) {
  const item = state.cart.find(
    (c) => c.id === productId && c.size === size && c.color === color,
  );
  if (change > 0 && item.quantity >= 100) {
    showToast("⚠️ Bitta tovar uchun maksimal 100 pachka! Katta ulgurji hajm uchun fabrika bilan bog'laning.", "error");
    return;
  }

  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(
      (c) => !(c.id === productId && c.size === size && c.color === color),
    );
  }

  persistCart();
  updateCartUI();
  updateDashboardCounts();
}

function updateCartTotalsOnly() {
  const cartCount = document.getElementById("cartCount");
  const mobileCartBadge = document.getElementById("mobileCartBadge");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartTotal = document.getElementById("cartTotal");
  const cartHeaderCount = document.getElementById("cartHeaderCount");
  const cartItemQty = document.getElementById("cartItemQty");
  const dashCartCount = document.getElementById("dashCartCount");
  const cartPopHeaderCount = document.getElementById("cartPopHeaderCount");
  const cartPopTotal = document.getElementById("cartPopTotal");
  const discountRow = document.getElementById("discountRow");
  const cartDiscount = document.getElementById("cartDiscount");

  const totalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  const rawSubtotalUsd = state.cart.reduce(
    (sum, i) => sum + (i.priceUsd || i.price || 120) * i.quantity,
    0,
  );

  const rate = state.usdRate || 12650;
  let discountUsd = 0;
  let discountSom = 0;

  // Fix 14: Promokodni qayta tekshirish — agar savat summasi minimal talabdan kamayib ketsa
  if (state.appliedPromoCode && state.appliedPromoMinPrice && state.appliedPromoMinPrice > 0) {
    const currentSubtotalSom = Math.round(rawSubtotalUsd * rate);
    if (currentSubtotalSom < state.appliedPromoMinPrice) {
      const oldCode = state.appliedPromoCode;
      state.appliedPromoCode = null;
      state.appliedPromoMinPrice = 0;
      state.appliedDiscountAmount = 0;
      state.appliedDiscountUsd = 0;
      state.discountRate = 0;
      showToast(`⚠️ Savat summasi kamaygani uchun "${oldCode}" promokodi bekor qilindi`);
    }
  }

  if (state.discountRate && state.discountRate > 0) {
    discountUsd = Math.round(rawSubtotalUsd * state.discountRate);
    discountSom = Math.round(discountUsd * rate);
  } else if (state.appliedDiscountUsd && state.appliedDiscountUsd > 0) {
    discountUsd = Math.min(state.appliedDiscountUsd, rawSubtotalUsd);
    discountSom = state.appliedDiscountAmount || Math.round(discountUsd * rate);
  } else if (state.appliedDiscountAmount && state.appliedDiscountAmount > 0) {
    discountSom = state.appliedDiscountAmount;
    discountUsd = Math.min(rawSubtotalUsd, Math.round(discountSom / rate));
  }

  discountUsd = Math.min(discountUsd, rawSubtotalUsd);
  const finalTotalUsd = Math.max(0, rawSubtotalUsd - discountUsd);

  if (cartCount) {
    if (cartCount.textContent !== String(totalCount)) triggerBadgePulse(cartCount);
    cartCount.textContent = totalCount;
  }
  if (mobileCartBadge) {
    if (mobileCartBadge.textContent !== String(totalCount)) triggerBadgePulse(mobileCartBadge);
    mobileCartBadge.textContent = totalCount;
  }
  if (dashCartCount) dashCartCount.textContent = totalCount;
  if (cartHeaderCount) cartHeaderCount.textContent = `${totalCount} ta mahsulot`;
  if (cartItemQty) cartItemQty.textContent = totalCount;
  if (cartPopHeaderCount) cartPopHeaderCount.textContent = `${totalCount} ta mahsulot`;
  if (cartSubtotal) cartSubtotal.textContent = formatMoney(rawSubtotalUsd);
  if (cartTotal) cartTotal.textContent = formatMoney(finalTotalUsd);
  if (cartPopTotal) cartPopTotal.textContent = safeFormatMoney(finalTotalUsd);

  // Fix 10: Eurotex Nasiya oylik to'lovini dinamik hisoblash
  const nasiyaEst = document.getElementById("nasiyaEst");
  if (nasiyaEst) {
    if (finalTotalUsd > 0) {
      const finalTotalSom = Math.round(finalTotalUsd * rate);
      const monthlySom = Math.round(finalTotalSom / 12);
      nasiyaEst.innerHTML = `⚡ Eurotex Nasiya: Oyiga <b>${formatMoneySom(monthlySom)} so'mdan</b> (12 oy bo'lib to'lash)`;
      nasiyaEst.style.display = "block";
    } else {
      nasiyaEst.style.display = "none";
    }
  }

  if (discountUsd > 0 || discountSom > 0) {
    if (discountRow) discountRow.style.display = "flex";
    if (cartDiscount) {
      if (discountUsd > 0) {
        cartDiscount.textContent = `-${formatMoney(discountUsd)}`;
      } else {
        cartDiscount.textContent = `-${formatMoneySom(discountSom)} so'm`;
      }
    }
  } else if (discountRow) {
    discountRow.style.display = "none";
  }
}

function updateCartQtyByIndex(index, change, ev) {
  if (ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }
  if (index >= 0 && index < state.cart.length) {
    if (state.cart[index].quantity + change <= 0) {
      removeCartItemByIndex(index, ev);
      return;
    }
    if (change > 0 && state.cart[index].quantity >= 100) {
      showToast("⚠️ Bitta tovar uchun maksimal 100 pachka! Katta ulgurji hajm uchun fabrika bilan bog'laning.", "error");
      return;
    }
    state.cart[index].quantity += change;
    persistCart();
    updateDashboardCounts();

    const qtySpan = document.getElementById(`cartItemQtyVal_${index}`);
    if (qtySpan) {
      qtySpan.textContent = state.cart[index].quantity;
    }
    const popQtySpan = document.getElementById(`cartPopQtyVal_${index}`);
    if (popQtySpan) {
      popQtySpan.textContent = state.cart[index].quantity;
    }

    updateCartTotalsOnly();
  }
}

function updateCartUI() {
  // Fix 9: Sync cart items with fresh catalog pricing before rendering
  syncCartPricesWithCatalog();

  const lang = state.currentLang;
  const dict = TRANSLATIONS[lang];

  updateCartTotalsOnly();

  const cartPopItemsList = document.getElementById("cartPopItemsList");
  const cartItemsList = document.getElementById("cartItemsList");

  if (cartPopItemsList) {
    if (state.cart.length === 0) {
      cartPopItemsList.innerHTML = `
        <div style="text-align:center; padding: 40px 10px; color: #94a3b8;">
            <div style="font-size: 48px; margin-bottom: 12px;">🛒</div>
            <h3 style="font-size: 18px; color: #ffffff; margin-bottom: 6px;">Savatingiz hozircha bo'sh</h3>
            <p style="font-size: 14px;">Bosh sahifadagi mahsulotlardan birini tanlang va savatga qo'shing</p>
        </div>
      `;
    } else {
      cartPopItemsList.innerHTML = state.cart
        .map(
          (item, idx) => `
            <div class="cart-item-row" data-cart-idx="${idx}" style="display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; margin-bottom: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="${item.image}" style="width: 60px; height: 75px; object-fit: cover; border-radius: 10px;" alt="${item.title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='/images/navy_suit.jpg'">
                <div>
                  <div style="font-weight: 700; font-size: 14px; color: #ffffff; margin-bottom: 4px;">${item.title}</div>
                  <div style="font-size: 12px; color: #94a3b8;">Seriya: <b style="color: #00f2fe;">${item.size}</b> | Rangi: <b style="color: #00f2fe;">${item.color || "Klassik"}</b></div>
                  <div style="font-size: 14px; font-weight: 800; color: #00f2fe; margin-top: 4px;">${safeFormatMoney(item.price * item.quantity)}</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <div style="display: flex; align-items: center; background: rgba(255,255,255,0.08); border-radius: 8px; padding: 2px 6px;">
                  <button type="button" onclick="updateCartQtyByIndex(${idx}, -1, event)" style="background: none; border: none; color: #fff; font-weight: 700; font-size: 16px; width: 24px; cursor: pointer;">–</button>
                  <span id="cartPopQtyVal_${idx}" style="font-weight: 800; font-size: 14px; color: #00f2fe; padding: 0 8px;">${item.quantity}</span>
                  <button type="button" onclick="updateCartQtyByIndex(${idx}, 1, event)" style="background: none; border: none; color: #fff; font-weight: 700; font-size: 16px; width: 24px; cursor: pointer;">+</button>
                </div>
                <button type="button" onclick="removeCartItemByIndex(${idx}, event)" style="background: rgba(239,68,68,0.2); border: none; color: #ef4444; width: 32px; height: 32px; border-radius: 8px; cursor: pointer; font-size: 14px;">🗑️</button>
              </div>
            </div>
          `,
        )
        .join("");
    }
  }

  if (cartItemsList) {
    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align:center; padding: 50px 10px;">
            <div style="font-size: 48px; margin-bottom: 12px;">🛒</div>
            <h3 style="font-size: 18px; color: var(--color-navy); margin-bottom: 6px;">${lang === "ru" ? "Корзина пуста" : lang === "en" ? "Cart is empty" : "Savatingiz hozircha bo'sh"}</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">Bosh sahifadagi mahsulotlardan birini tanlang va savatga qo'shing</p>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = `
        <div class="cart-cards-grid">
          ${state.cart.map((item, idx) => {
            const usdRate = state.usdRate || 12650;
            const priceUsd =
              item.pachkaPriceUsd ||
              item.priceUsd ||
              (item.price > 5000 ? Math.round(item.price / usdRate) : item.price) ||
              45;
            const totalSom = priceUsd * usdRate * (item.quantity || 1);
            const category = item.category_uz || item.category || "Kostyum-Shimlar";
            const pakQty = (item.pachkaItems || item.itemsPerPachka || 6) * (item.quantity || 1);

            return `
              <div class="ci-card cart-item-row" data-cart-idx="${idx}" data-id="${item.id}">
                <!-- Image + badge -->
                <div class="ci-img-wrap">
                  <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async" onerror="this.src='/images/navy_suit.jpg'">
                  <span class="ci-pachka-badge">📦 PACHKA: ${pakQty} DONA</span>
                </div>
                <!-- Body -->
                <div class="ci-body">
                  <div class="ci-name-row">
                    <span class="ci-name">${escapeHtml(item.title)}</span>
                    <div class="ci-icon-row">
                      <button type="button" class="ci-icon-btn ci-icon-edit" onclick="openProductDetail('${item.id}')" title="Ko'rish">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </button>
                      <button type="button" class="ci-icon-btn ci-icon-delete" onclick="removeCartItemByIndex(${idx}, event)" title="O'chirish">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                      </button>
                    </div>
                  </div>
                  <div class="ci-cat-row">
                    <span class="ci-cat-label">Turkumi:</span>
                    <span class="ci-cat-chip">${escapeHtml(category)}</span>
                  </div>
                  <div class="ci-size-row">
                    <span class="ci-cat-label">O'lcham:</span>
                    <span class="ci-size-val">${escapeHtml(item.size || '46-48-50')}</span>
                    <span class="ci-cat-label" style="margin-left:10px;">Rang:</span>
                    <span class="ci-color-dot" style="background:${getEurotexColorCode(item.color)};"></span>
                    <span class="ci-size-val">${escapeHtml(item.color || 'Klassik')}</span>
                  </div>
                  <div class="ci-price-row">
                    <span class="ci-price-label">Pachka ($ USD):</span>
                    <div class="ci-price-input-wrap">
                      <input type="number" class="ci-price-input" value="${priceUsd}" min="1" readonly>
                      <span class="ci-currency">$</span>
                    </div>
                  </div>
                  <div class="ci-qty-row">
                    <span class="ci-price-label">Pachka soni:</span>
                    <div class="ci-qty-pill">
                      <button type="button" onclick="updateCartQtyByIndex(${idx}, -1, event)" class="ci-qty-btn">–</button>
                      <span id="cartItemQtyVal_${idx}" class="ci-qty-val">${item.quantity || 1}</span>
                      <button type="button" onclick="updateCartQtyByIndex(${idx}, 1, event)" class="ci-qty-btn">+</button>
                    </div>
                  </div>
                  <div class="ci-total-row">
                    <span class="ci-total-label">Jami so'mda:</span>
                    <span class="ci-total-val">${Math.round(totalSom).toLocaleString('uz-UZ')} so'm</span>
                  </div>
                </div>
              </div>`;
          }).join('')}
        </div>
      `;
    }
  }
}


// Promo Code Logic is handled below by async applyPromoCode()

// =============================================================================
// 🎨 EUROTEX 12 PRESET COLORS PALETTE & COLOR CODE RESOLVER
// =============================================================================
const EUROTEX_12_COLORS = [
  { name: "Qora", code: "#111827", label_ru: "Черный", label_en: "Black" },
  { name: "To'q ko'k (Navy)", code: "#1e3a8a", label_ru: "Темно-синий", label_en: "Navy Blue" },
  { name: "Kulrang", code: "#64748b", label_ru: "Серый", label_en: "Grey" },
  { name: "Grafit", code: "#334155", label_ru: "Графит", label_en: "Graphite" },
  { name: "Och kulrang", code: "#cbd5e1", label_ru: "Светло-серый", label_en: "Light Grey" },
  { name: "Shokolad", code: "#451a03", label_ru: "Шоколадный", label_en: "Chocolate" },
  { name: "Qumrang (Bej)", code: "#d4b996", label_ru: "Бежевый", label_en: "Beige" },
  { name: "Havorang", code: "#38bdf8", label_ru: "Голубой", label_en: "Sky Blue" },
  { name: "Moviy", code: "#2563eb", label_ru: "Синий", label_en: "Royal Blue" },
  { name: "Zaytun (Xaki)", code: "#3f4a3c", label_ru: "Хаки", label_en: "Olive / Khaki" },
  { name: "Bordo", code: "#881337", label_ru: "Бордовый", label_en: "Burgundy" },
  { name: "Oq / Qaymoqrang", code: "#f8fafc", label_ru: "Белый", label_en: "White" }
];

function getEurotexColorCode(colorName) {
  if (!colorName) return "#64748b";
  const lower = String(colorName).toLowerCase();
  if (lower.includes("qora") || lower.includes("черн") || lower.includes("black")) return "#111827";
  if (lower.includes("to'q ko'k") || lower.includes("navy") || lower.includes("темно-син")) return "#1e3a8a";
  if (lower.includes("to'q molochn") || lower.includes("темно-молочн")) return "#a8a294";
  if (lower.includes("molochn") || lower.includes("молочн") || lower.includes("sutrang") || lower.includes("ivory")) return "#e6ded1";
  if (lower.includes("och kul") || lower.includes("светло-сер") || lower.includes("light grey")) return "#cbd5e1";
  if (lower.includes("grafit") || lower.includes("antratsit") || lower.includes("графит") || lower.includes("dark grey")) return "#334155";
  if (lower.includes("kulrang") || lower.includes("серый") || lower.includes("grey") || lower.includes("gray")) return "#64748b";
  if (lower.includes("shokolad") || lower.includes("jigarrang") || lower.includes("шоколад") || lower.includes("коричн") || lower.includes("brown")) return "#451a03";
  if (lower.includes("qum") || lower.includes("bej") || lower.includes("беж") || lower.includes("песоч") || lower.includes("beige") || lower.includes("camel")) return "#d4b996";
  if (lower.includes("havo") || lower.includes("голуб") || lower.includes("sky")) return "#38bdf8";
  if (lower.includes("moviy") || lower.includes("ko'k") || lower.includes("син") || lower.includes("blue")) return "#2563eb";
  if (lower.includes("zaytun") || lower.includes("xaki") || lower.includes("yashil") || lower.includes("хаки") || lower.includes("оливк") || lower.includes("green") || lower.includes("olive")) return "#3f4a3c";
  if (lower.includes("bordo") || lower.includes("qizil") || lower.includes("бордо") || lower.includes("burgundy") || lower.includes("wine")) return "#881337";
  if (lower.includes("oq") || lower.includes("qaymoq") || lower.includes("бел") || lower.includes("white") || lower.includes("cream")) return "#f8fafc";
  return "#64748b";
}

// =============================================================================
// 👑 DEDICATED FULL-PAGE PRODUCT DETAILS VIEW (PDP) — 100% STANDALONE PAGE
// =============================================================================
function openProductPage(productId) {
  let pool = [];
  if (typeof EUROTEX_PRODUCTS !== "undefined" && Array.isArray(EUROTEX_PRODUCTS) && EUROTEX_PRODUCTS.length > 0) {
    pool.push(...EUROTEX_PRODUCTS);
  }
  if (window.EUROTEX_PRODUCTS && Array.isArray(window.EUROTEX_PRODUCTS)) {
    pool.push(...window.EUROTEX_PRODUCTS);
  }
  if (typeof DEFAULT_EUROTEX_PRODUCTS !== "undefined" && Array.isArray(DEFAULT_EUROTEX_PRODUCTS)) {
    pool.push(...DEFAULT_EUROTEX_PRODUCTS);
  }
  if (window.EUROTEX_CONFIG && Array.isArray(window.EUROTEX_CONFIG.DEFAULT_PRODUCTS)) {
    pool.push(...window.EUROTEX_CONFIG.DEFAULT_PRODUCTS);
  }
  if (window.EUROTEX_ENGINE && window.EUROTEX_ENGINE.state && Array.isArray(window.EUROTEX_ENGINE.state.products)) {
    pool.push(...window.EUROTEX_ENGINE.state.products);
  }
  if (typeof getGlobalProductsPool === "function") {
    const gp = getGlobalProductsPool();
    if (Array.isArray(gp)) pool.push(...gp);
  }

  const targetStr = String(productId || "").trim().toLowerCase();
  const targetDigits = targetStr.replace(/\D/g, "");
  const targetNum = targetDigits ? parseInt(targetDigits, 10) : null;

  const product = (pool || []).find((p) => {
    if (!p) return false;
    const pId = String(p.id || "").trim().toLowerCase();
    const pCust = String(p.customId || "").trim().toLowerCase();
    const pDb = String(p.dbId || p._id || "").trim().toLowerCase();

    // 1. Exact string match
    if (pId === targetStr || pCust === targetStr || pDb === targetStr) {
      return true;
    }

    // 2. Numeric match
    const pDigits = (pId || pCust).replace(/\D/g, "");
    if (pDigits && targetNum !== null) {
      const pNum = parseInt(pDigits, 10);
      if (pNum === targetNum && targetNum > 0 && targetNum < 1000) {
        return true;
      }
    }

    return false;
  });

  if (!product) {
    console.error("Mahsulot topilmadi:", productId);
    return;
  }

  window.currentPdpProduct = product;

  // 1. Switch Page Views (Hide storefront & dashboard, Show PDP)
  const homeWrapper = document.getElementById("homePageWrapper");
  const dashView = document.getElementById("dashboardPageView");
  const pdpView = document.getElementById("productDetailPageView");

  if (homeWrapper) homeWrapper.style.display = "none";
  if (dashView) dashView.style.display = "none";
  if (pdpView) pdpView.style.display = "block";

  closeAllModals();
  document.body.style.overflow = "auto";
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 2. Populate Breadcrumbs
  const lang = state.currentLang || "uz";
  const title = product[`title_${lang}`] || product.title_uz || product.title || "Klassik Kostyum";
  const cat = formatCategoryUz(product.category || "suits");

  const bcCat = document.getElementById("pdpBreadcrumbCategory");
  const bcTitle = document.getElementById("pdpBreadcrumbTitle");
  if (bcCat) bcCat.textContent = cat;
  if (bcTitle) bcTitle.textContent = title;

  // 3. Populate Gallery
  const imgs =
    product.images && Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.image || product.img || "/images/navy_suit.jpg"];

  window.currentPdpImages = imgs;
  window.currentPdpIndex = 0;

  const mainDisplayImg = document.getElementById("pdpMainDisplayImg");
  const thumbsStrip = document.getElementById("pdpThumbsStrip");
  const counterEl = document.getElementById("pdpImgCounter");
  const prevArrow = document.querySelector(".pdp-stage-arrow.prev");
  const nextArrow = document.querySelector(".pdp-stage-arrow.next");

  if (mainDisplayImg) mainDisplayImg.src = imgs[0];

  if (imgs.length <= 1) {
    if (prevArrow) prevArrow.style.display = "none";
    if (nextArrow) nextArrow.style.display = "none";
    if (counterEl) counterEl.style.display = "none";
    if (thumbsStrip) {
      thumbsStrip.style.display = "none";
      thumbsStrip.innerHTML = "";
    }
  } else {
    if (prevArrow) prevArrow.style.display = "flex";
    if (nextArrow) nextArrow.style.display = "flex";
    if (counterEl) {
      counterEl.textContent = `1/${imgs.length}`;
      counterEl.style.display = "block";
    }
    if (thumbsStrip) {
      thumbsStrip.style.display = "flex";
      thumbsStrip.innerHTML = imgs
        .map(
          (src, idx) => `
          <button type="button" class="pdp-thumb-item ${idx === 0 ? "active" : ""}" onclick="selectPdpGalleryImage(${idx})">
            <img src="${src}" alt="${title} rasm-${idx + 1}" onerror="this.onerror=null;this.src='/images/navy_suit.jpg'">
          </button>
        `,
        )
        .join("");
    }
  }

  // 4. Populate Info & Prices
  const titleEl = document.getElementById("pdpTitle");
  if (titleEl) titleEl.textContent = title;

  const usdRate = state.usdRate || 12650;
  const priceUsdVal = product.pachkaPriceUsd || product.priceUsd || (product.price ? Math.round(product.price / usdRate) : 50);
  const priceSomRaw = priceUsdVal * usdRate;

  let rawOld = Number(product.oldPrice);
  if (!Number.isFinite(rawOld) || rawOld > 50000000 || rawOld < 0) {
    rawOld = 0;
  }

  let oldPriceUsdVal = 0;
  let oldPriceSomRaw = 0;
  if (rawOld > 0) {
    if (rawOld > 5000) {
      oldPriceSomRaw = Math.round(rawOld);
      oldPriceUsdVal = Math.round(oldPriceSomRaw / usdRate);
    } else {
      oldPriceUsdVal = Math.round(rawOld);
      oldPriceSomRaw = oldPriceUsdVal * usdRate;
    }
  }

  if (oldPriceSomRaw <= priceSomRaw) {
    oldPriceUsdVal = Math.round(priceUsdVal * 1.25);
    oldPriceSomRaw = oldPriceUsdVal * usdRate;
  }

  const priceCurrentEl = document.getElementById("pdpPriceCurrent");
  const priceOldEl = document.getElementById("pdpPriceOld");
  if (priceCurrentEl) {
    priceCurrentEl.innerHTML = `${formatMoneySom(priceSomRaw)} so'm (${priceUsdVal}$) <small style="font-size: 14px; font-weight: 600; color: #94a3b8; margin-left: 4px;">/ 1 pachka</small>`;
  }
  if (priceOldEl) {
    priceOldEl.textContent = `${formatMoneySom(oldPriceSomRaw)} so'm`;
  }

  // Populate stage discount pill (Image 2 -17% style, strictly 1% to 99%)
  const stageDiscEl = document.getElementById("pdpStageDiscount");
  const pdpDiscountBadge = document.querySelector(".pdp-discount-badge");

  let pct = 0;
  if (product.discountPercent && product.discountPercent > 0 && product.discountPercent < 100) {
    pct = Math.round(product.discountPercent);
  } else if (oldPriceSomRaw > priceSomRaw && priceSomRaw > 0) {
    pct = Math.round(((oldPriceSomRaw - priceSomRaw) / oldPriceSomRaw) * 100);
  }
  if (pct >= 100) pct = 99;
  if (pct < 1) pct = 0;

  if (pct > 0) {
    if (stageDiscEl) {
      stageDiscEl.textContent = `-${pct}%`;
      stageDiscEl.style.display = "inline-flex";
    }
    if (pdpDiscountBadge) {
      pdpDiscountBadge.textContent = `-${pct}%`;
      pdpDiscountBadge.style.display = "inline-block";
    }
  } else {
    if (stageDiscEl) stageDiscEl.style.display = "none";
    if (pdpDiscountBadge) pdpDiscountBadge.style.display = "none";
  }

  // 5. Populate Colors (12 ta tayyor rang qo'llab-quvvatlash)
  let colorsList = product.colors;
  if (!colorsList || !Array.isArray(colorsList) || colorsList.length === 0) {
    if (product.color_uz && typeof product.color_uz === "string" && product.color_uz.includes(",")) {
      colorsList = product.color_uz.split(",").map((c) => c.trim()).filter(Boolean);
    } else if (product.color_uz && typeof product.color_uz === "string" && product.color_uz.trim()) {
      const primaryCol = product.color_uz.trim();
      const otherCols = EUROTEX_12_COLORS.filter((c) => c.name.toLowerCase() !== primaryCol.toLowerCase()).map((c) => c.name);
      colorsList = [primaryCol, ...otherCols];
    } else {
      colorsList = EUROTEX_12_COLORS.map((c) => c.name);
    }
  }

  window.currentPdpColor = typeof colorsList[0] === "string" ? colorsList[0] : (colorsList[0].name || "Qora");

  const selectedColorNameEl = document.getElementById("pdpSelectedColorName");
  if (selectedColorNameEl) selectedColorNameEl.textContent = window.currentPdpColor;

  const colorSwatchesEl = document.getElementById("pdpColorSwatches");
  if (colorSwatchesEl) {
    colorSwatchesEl.innerHTML = colorsList
      .map((c, idx) => {
        const cName = typeof c === "string" ? c : (c.name || "Qora");
        const cCode = typeof c === "object" && c.code ? c.code : getEurotexColorCode(cName);
        return `
          <button type="button" class="pdp-color-swatch ${idx === 0 ? "active" : ""}" onclick="selectPdpColor('${cName.replace(/'/g, "\\'")}', this)" title="${cName}" aria-label="${cName}">
            <span class="pdp-color-dot" style="background: ${cCode}; ${cCode.toLowerCase() === '#f8fafc' || cCode.toLowerCase() === '#ffffff' ? 'border: 1px solid #cbd5e1;' : ''}"></span>
          </button>
        `;
      })
      .join("");
  }

  // 6. Populate Sizes (Pachka Seriya tarkibi va individual o'lcham tanlash)
  const sizesList = product.sizes && product.sizes.length > 0
    ? product.sizes
    : [30, 32, 34, 36, 38, 40, 42, 44];
  const allSeriesVal = sizesList.join("-");
  window.currentPdpSize = allSeriesVal;

  const sizeBoxesEl = document.getElementById("pdpSizeBoxes");
  if (sizeBoxesEl) {
    sizeBoxesEl.innerHTML = `
      <div style="display: flex; flex-wrap: wrap; gap: 8px; width: 100%;">
        <button type="button" class="pdp-size-box active pdp-size-all" onclick="selectPdpSize('${allSeriesVal}', this)" title="To'liq seriya (barcha o'lchamlar)">
          📦 To'liq pachka (${sizesList.length} dona)
        </button>
        ${sizesList
          .map(
            (s) => `
            <button type="button" class="pdp-size-box" onclick="selectPdpSize('${s}', this)" title="O'lcham: ${s}">
              ${s}
            </button>
          `,
          )
          .join("")}
      </div>
      <div id="pdpSizeSelectionNote" class="pdp-size-selection-note" style="font-size: 12.5px; color: #10b981; font-weight: 600; margin-top: 8px; width: 100%;">
        ✓ <b>To'liq pachka</b> tanlangan: seriyadagi barcha ${sizesList.length} ta o'lcham (${sizesList.join(", ")}) birgalikda yetkaziladi.
      </div>
    `;
  }

  // 7. Update Favorite Button state
  updatePdpFavBtn(product.id);

  // 8. Populate Tabs (Description & Specs)
  const descTextEl = document.getElementById("pdpDescText");
  const specBrandEl = document.getElementById("pdpSpecBrand");
  const specCatEl = document.getElementById("pdpSpecCategory");
  const specSizesEl = document.getElementById("pdpSpecSizes");
  const specColorsEl = document.getElementById("pdpSpecColors");
  const specFabricEl = document.getElementById("pdpSpecFabric");

  if (descTextEl) {
    descTextEl.textContent =
      product[`desc_${lang}`] ||
      product.description ||
      `Eurotex Kids tomonidan ishlab chiqarilgan premium bolalar kostyum-shimi. 
      Mato Turkiyaning yuqori sifatli jun va viskoza aralashmasidan tayyorlangan bo'lib, nafas oluvchi, g'ijimlanmaydigan va bolalar harakati uchun juda qulay. 
      Maktab formasi, bayramlar va tantanalar uchun eng nafis tanlov.`;
  }
  if (specBrandEl) specBrandEl.textContent = "EUROTEX KIDS";
  if (specCatEl) specCatEl.textContent = cat;
  if (specSizesEl) specSizesEl.textContent = sizesList.join(", ");
  if (specColorsEl) {
    specColorsEl.textContent = colorsList.map((c) => (typeof c === "string" ? c : c.name)).join(", ");
  }
  if (specFabricEl) {
    specFabricEl.textContent = product[`fabric_${lang}`] || product.fabric_uz || "Turkiya Premium Jun & Viskoza Blend";
  }

  // Default to Tab 1 (Tavsif)
  switchPdpTab("desc");

  // 9. Populate Related Products
  renderPdpRelatedProducts(product);

  // 10. Sync URL
  updateURLRoute(`/product/${product.id}`);
}

function selectPdpGalleryImage(idx) {
  if (!window.currentPdpImages || !window.currentPdpImages[idx]) return;
  window.currentPdpIndex = idx;
  const mainImg = document.getElementById("pdpMainDisplayImg");
  const counterEl = document.getElementById("pdpImgCounter");
  const lbImg = document.getElementById("pdpLightboxImg");
  const lbCounter = document.getElementById("pdpLightboxCounter");

  if (mainImg) mainImg.src = window.currentPdpImages[idx];
  if (counterEl) counterEl.textContent = `${idx + 1}/${window.currentPdpImages.length}`;
  if (lbImg) lbImg.src = window.currentPdpImages[idx];
  if (lbCounter) lbCounter.textContent = `${idx + 1}/${window.currentPdpImages.length}`;

  document
    .querySelectorAll("#pdpThumbsStrip .pdp-thumb-item")
    .forEach((item, i) => {
      if (i === idx) item.classList.add("active");
      else item.classList.remove("active");
    });
}

function navigatePdpGallery(step) {
  if (!window.currentPdpImages || window.currentPdpImages.length <= 1) return;
  let nextIdx = window.currentPdpIndex + step;
  if (nextIdx < 0) nextIdx = window.currentPdpImages.length - 1;
  if (nextIdx >= window.currentPdpImages.length) nextIdx = 0;
  selectPdpGalleryImage(nextIdx);
}

function selectPdpColor(colorName, el) {
  window.currentPdpColor = colorName;
  const nameEl = document.getElementById("pdpSelectedColorName");
  if (nameEl) {
    nameEl.textContent = colorName;
    nameEl.style.transition = "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)";
    nameEl.style.color = "#88001b";
    nameEl.style.transform = "scale(1.05)";
    setTimeout(() => {
      if (nameEl) {
        nameEl.style.color = "";
        nameEl.style.transform = "";
      }
    }, 300);
  }

  document.querySelectorAll("#pdpColorSwatches .pdp-color-swatch").forEach((s) => {
    s.classList.remove("active");
  });
  if (el) el.classList.add("active");

  // Sync image: If gallery images contain matching color keyword, switch display
  if (window.currentPdpImages && window.currentPdpImages.length > 1) {
    const cLower = String(colorName).toLowerCase();
    const matchIdx = window.currentPdpImages.findIndex((imgSrc) => {
      const srcLower = String(imgSrc).toLowerCase();
      if ((cLower.includes("qora") || cLower.includes("black")) && (srcLower.includes("black") || srcLower.includes("qora"))) return true;
      if ((cLower.includes("ko'k") || cLower.includes("navy")) && (srcLower.includes("navy") || srcLower.includes("blue") || srcLower.includes("kok"))) return true;
      if ((cLower.includes("kulrang") || cLower.includes("grafit") || cLower.includes("grey") || cLower.includes("gray")) && (srcLower.includes("grey") || srcLower.includes("gray") || srcLower.includes("grafit"))) return true;
      return false;
    });
    if (matchIdx !== -1) {
      selectPdpGalleryImage(matchIdx);
    }
  }
}

function selectPdpSize(sizeVal, el) {
  window.currentPdpSize = String(sizeVal);
  document.querySelectorAll("#pdpSizeBoxes .pdp-size-box").forEach((b) => {
    b.classList.remove("active");
  });
  if (el) el.classList.add("active");

  const noteEl = document.getElementById("pdpSizeSelectionNote");
  const cartBtn = document.getElementById("pdpAddToCartBtn");
  const cartBtnSpan = cartBtn ? cartBtn.querySelector("span") : null;
  const oneClickBtn = document.querySelector(".pdp-btn-one-click");

  const isAll = String(sizeVal).includes("-") || String(sizeVal).toLowerCase() === "all";
  if (isAll) {
    if (noteEl) {
      noteEl.innerHTML = `✓ <b>To'liq pachka</b> tanlangan: seriyadagi barcha o'lchamlar to'plami birgalikda yetkaziladi.`;
      noteEl.style.color = "#10b981";
    }
    if (cartBtnSpan) {
      cartBtnSpan.textContent = `1 Pachka Savatga Qo'shish 🛒`;
    }
    if (oneClickBtn) {
      oneClickBtn.textContent = `⚡ 1 Pachka Tezkor Xarid`;
    }
  } else {
    if (noteEl) {
      noteEl.innerHTML = `✓ Tanlangan o'lcham: <b style="color: #38bdf8; font-size: 13.5px;">${sizeVal}</b> (Yagona o'lcham buyurtmasi)`;
      noteEl.style.color = "#38bdf8";
    }
    if (cartBtnSpan) {
      cartBtnSpan.textContent = `O'lcham ${sizeVal} — Savatga Qo'shish 🛒`;
    }
    if (oneClickBtn) {
      oneClickBtn.textContent = `⚡ O'lcham ${sizeVal} — Tezkor Xarid`;
    }
  }
}

function switchPdpTab(tabName) {
  const tabs = ["desc", "specs", "reviews"];
  tabs.forEach((t) => {
    const btn = document.getElementById(`pdpTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const pane = document.getElementById(`pdpPane${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) {
      if (t === tabName) btn.classList.add("active");
      else btn.classList.remove("active");
    }
    if (pane) {
      if (t === tabName) pane.classList.add("active");
      else pane.classList.remove("active");
    }
  });
}

function handlePdpAddToCart(e) {
  if (!window.currentPdpProduct) return;
  addToCart(
    window.currentPdpProduct.id,
    window.currentPdpSize || "36",
    window.currentPdpColor || "Qora",
    e,
  );
}

function handlePdpOneClickBuy() {
  if (!window.currentPdpProduct) return;
  openOneClickBuyModal(
    window.currentPdpProduct,
    window.currentPdpSize || "36",
    window.currentPdpColor || "Qora",
  );
}

function handlePdpShare() {
  const prod = window.currentPdpProduct;
  if (!prod) return;
  const shareUrl = `${window.location.origin}/product/${prod.id}`;
  const shareTitle = prod.title_uz || prod.title || "Eurotex Bolalar Kostyumi";
  const shareText = `${shareTitle} - Eurotex do'konidan oliy sifatli bolalar kiyimi!`;

  if (navigator.share) {
    navigator
      .share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      })
      .catch(() => {});
  } else if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        showToast("Mahsulot havolasi nusxalandi! 📋", "success");
      })
      .catch(() => {
        window.eurotexPrompt("Mahsulot havolasidan nusxa oling:", shareUrl, "Havoladan nusxa olish", { icon: "📋" });
      });
  } else {
    window.eurotexPrompt("Mahsulot havolasidan nusxa oling:", shareUrl, "Havoladan nusxa olish", { icon: "📋" });
  }
}

function openOneClickBuyModal(product, size, color) {
  if (!product) return;
  window._ocbCurrentProduct = product;
  window._ocbCurrentSize = size;
  window._ocbCurrentColor = color;

  const ocbImg = document.getElementById("ocbImg");
  const ocbTitle = document.getElementById("ocbTitle");
  const ocbPrice = document.getElementById("ocbPrice");
  const ocbVariant = document.getElementById("ocbVariant");

  const pTitle = product.title_uz || product.title || "Kostyum";
  const rate = state.usdRate || 12650;
  const pUsd = product.pachkaPriceUsd || product.priceUsd || 50;
  const pSom = product.price || pUsd * rate;

  if (ocbImg) ocbImg.src = product.image || "/images/navy_suit.jpg";
  if (ocbTitle) ocbTitle.textContent = pTitle;
  if (ocbPrice) ocbPrice.textContent = `${formatMoneySom(pSom)} so'm ($${pUsd})`;
  if (ocbVariant) ocbVariant.textContent = `O'lcham: ${size} | Rang: ${color}`;

  openModal("oneClickBuyModal");
}

async function submitOneClickBuy(e) {
  e.preventDefault();
  const name = document.getElementById("ocbName").value.trim();
  const phone = document.getElementById("ocbPhone").value.trim();
  const notes = document.getElementById("ocbNotes").value.trim();

  if (!phone || phone.length < 9) {
    showToast("❌ Iltimos, to'liq telefon raqamingizni kiriting!");
    return;
  }

  const p = window._ocbCurrentProduct || window.currentPdpProduct || {};
  const rate = state.usdRate || 12650;
  const pUsd = p.pachkaPriceUsd || p.priceUsd || 50;
  const pSom = p.price || pUsd * rate;

  const leadData = {
    name,
    phone,
    productTitle: p.title_uz || p.title || "Eurotex Kostyum",
    size: window._ocbCurrentSize || "36",
    color: window._ocbCurrentColor || "Qora",
    price: `${formatMoneySom(pSom)} so'm ($${pUsd})`,
    notes,
  };

  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });
    const data = await res.json();
    if (data.success) {
      closeModal("oneClickBuyModal");
      showToast("✓ Buyurtmangiz qabul qilindi! Operator 10 daqiqada bog'lanadi.");
      document.getElementById("oneClickBuyForm").reset();
    } else {
      showToast(data.message || "Xatolik yuz berdi");
    }
  } catch (err) {
    closeModal("oneClickBuyModal");
    showToast("✓ Buyurtmangiz qabul qilindi! Operator 10 daqiqada bog'lanadi.");
  }
}

function handlePdpToggleFav() {
  if (!window.currentPdpProduct) return;
  toggleWishlist(window.currentPdpProduct.id);
  updatePdpFavBtn(window.currentPdpProduct.id);
}

function updatePdpFavBtn(productId) {
  const favBtn = document.getElementById("pdpFavBtn");
  if (!favBtn) return;
  const isFav = state.wishlist.some((w) => {
    const wId = typeof w === "object" && w ? w.id : w;
    return String(wId) === String(productId);
  });
  favBtn.innerHTML = isFav ? "❤️" : "🤍";
  favBtn.style.color = isFav ? "#ef4444" : "#1e293b";
}

function showStorefrontHomePage() {
  const pdpView = document.getElementById("productDetailPageView");
  const dashView = document.getElementById("dashboardPageView");
  const homeWrapper = document.getElementById("homePageWrapper");

  if (pdpView) pdpView.style.display = "none";
  if (dashView) dashView.style.display = "none";
  if (homeWrapper) homeWrapper.style.display = "block";

  closeAllModals();
  document.body.style.overflow = "auto";
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") {
    history.pushState({}, document.title, "/");
  }
}

function showStorefrontCategory(catKey) {
  showStorefrontHomePage();
  state.currentCategory = catKey;
  document.querySelectorAll(".nav-pill").forEach((p) => p.classList.remove("active"));
  const matchPill = document.querySelector(`.nav-pill[data-category="${catKey}"]`);
  if (matchPill) matchPill.classList.add("active");
  renderProducts();
  const el = document.getElementById("products-section");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function renderPdpRelatedProducts(currentProduct) {
  const grid = document.getElementById("pdpRelatedGrid");
  if (!grid) return;
  const pool = typeof getGlobalProductsPool === "function" ? getGlobalProductsPool() : EUROTEX_PRODUCTS;
  const related = pool
    .filter((p) => p && String(p.id) !== String(currentProduct.id))
    .slice(0, 4);

  const lang = state.currentLang || "uz";
  const usdRate = state.usdRate || 12650;

  grid.innerHTML = related
    .map((p) => {
      const pTitle = p[`title_${lang}`] || p.title_uz || p.title;
      const pPriceUsd = p.priceUsd || (p.price ? Math.round(p.price / usdRate) : 50);
      const pPriceSom = pPriceUsd * usdRate;
      const pImg = p.image || p.img || "/images/navy_suit.jpg";

      return `
        <div class="product-card" data-id="${p.id}" onclick="openProductPage('${p.id}')">
          <div class="card-image-wrap">
            <img src="${pImg}" alt="${pTitle}" loading="lazy" onerror="this.onerror=null;this.src='/images/navy_suit.jpg'" />
          </div>
          <div class="card-body">
            <h3 class="card-title">${pTitle}</h3>
            <div class="card-price-row">
              <span class="price-usd">${formatMoneySom(pPriceSom)} so'm</span>
            </div>
            <button type="button" class="btn product-add-cart-btn" onclick="event.stopPropagation(); addToCart('${p.id}', '36', 'Qora', event);">
              Savatga 🛒
            </button>
          </div>
        </div>
      `;
    })
    .join("");
}

function openPdpImgZoom() {
  if (!window.currentPdpImages || window.currentPdpImages.length === 0) return;
  const currentIdx = typeof window.currentPdpIndex === "number" ? window.currentPdpIndex : 0;
  const currentSrc = window.currentPdpImages[currentIdx] || window.currentPdpImages[0];
  const modal = document.getElementById("pdpImageLightboxModal");
  const lbImg = document.getElementById("pdpLightboxImg");
  const lbCounter = document.getElementById("pdpLightboxCounter");
  const prevBtn = document.getElementById("pdpLightboxPrevBtn");
  const nextBtn = document.getElementById("pdpLightboxNextBtn");
  if (!modal || !lbImg) return;

  lbImg.src = currentSrc;
  const total = window.currentPdpImages.length;
  if (total <= 1) {
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
    if (lbCounter) lbCounter.style.display = "none";
  } else {
    if (prevBtn) prevBtn.style.display = "flex";
    if (nextBtn) nextBtn.style.display = "flex";
    if (lbCounter) {
      lbCounter.style.display = "block";
      lbCounter.textContent = `${currentIdx + 1}/${total}`;
    }
  }

  modal.classList.add("show");
  document.body.style.overflow = "hidden";

  if (!window._pdpLightboxListenersAttached) {
    window._pdpLightboxListenersAttached = true;
    window.addEventListener("keydown", (e) => {
      const m = document.getElementById("pdpImageLightboxModal");
      if (!m || !m.classList.contains("show")) return;
      if (e.key === "Escape") {
        closePdpImgLightbox();
      } else if (e.key === "ArrowLeft") {
        navigatePdpGallery(-1);
      } else if (e.key === "ArrowRight") {
        navigatePdpGallery(1);
      }
    });

    let touchStartX = 0;
    modal.addEventListener("touchstart", (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchStartX = e.changedTouches[0].screenX;
      }
    }, { passive: true });

    modal.addEventListener("touchend", (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 45) {
          if (diff > 0) navigatePdpGallery(-1);
          else navigatePdpGallery(1);
        }
      }
    }, { passive: true });
  }
}

function closePdpImgLightbox() {
  const modal = document.getElementById("pdpImageLightboxModal");
  if (modal) modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

async function openAddReviewPrompt() {
  const name = await window.eurotexPrompt("Ismingizni kiriting:", "", "Sharh qoldirish", { icon: "✍️", placeholder: "Ismingiz..." });
  if (!name) return;
  const text = await window.eurotexPrompt("Mahsulot haqida fikringizni yozing:", "", "Sharh matni", { icon: "💬", placeholder: "Fikringiz..." });
  if (!text) return;
  showToast("Rahmat! Sharhingiz tekshiruvdan so'ng e'lon qilinadi ⭐");
}

// Quick View alias redirects to standalone full-page PDP
function openQuickView(productId) {
  openProductPage(productId);
}

function switchMobileNavTab(tab) {
  document.querySelectorAll(".mobile-bottom-nav .mobile-nav-item").forEach((item) => {
    item.classList.remove("active");
  });

  if (tab === "home") {
    const homeBtn = document.getElementById("mobileHomeBtn");
    if (homeBtn) homeBtn.classList.add("active");
    closeDashboardView();
    closeAllModals();
    state.currentCategory = "all";
    state.activeSearchQuery = "";
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (tab === "catalog") {
    const catBtn = document.getElementById("mobileCatalogBtn");
    if (catBtn) catBtn.classList.add("active");
    closeDashboardView();
    closeAllModals();
    const el = document.getElementById("products-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    renderProducts();
  } else if (tab === "wishlist") {
    const wishBtn = document.getElementById("mobileWishlistBtn");
    if (wishBtn) wishBtn.classList.add("active");
    openWishlistModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (tab === "cart") {
    const cartBtn = document.getElementById("mobileCartBtn");
    if (cartBtn) cartBtn.classList.add("active");
    openCartDrawer();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (tab === "profile") {
    const authBtn = document.getElementById("mobileAuthBtn");
    if (authBtn) authBtn.classList.add("active");
    openAuthModal();
  }
}

// URL ROUTING CONTROLLER (HTML5 History API — Full SPA Routing)
// Supported routes:
//   /             → Bosh sahifa
//   /login        → Kirish modali
//   /catalog      → Mahsulotlar katalogi
//   /cart, /savat → Savat
//   /wishlist, /saralanganlar → Saralanganlar
//   /checkout, /rasmiylashtirish → Buyurtma rasmiylashtirish
//   /profile      → Foydalanuvchi profili
//   /nasiya       → Eurotex Nasiya
//   /tailoring    → Individuallashtirish
//   /about        → Kompaniya haqida
//   /product/:id  → Mahsulot sahifasi (Quick View)

function updateURLRoute(path) {
  if (window.location.pathname !== path) {
    history.pushState({ route: path }, document.title, path);
  }
  setDynamicDocumentTitle(path);
}

function navigateTo(path) {
  history.pushState({ route: path }, document.title, path);
  handleURLRouting();
}

function handleURLRouting() {
  const raw = window.location.pathname.toLowerCase().replace(/\/$/, "") || "/";
  setDynamicDocumentTitle(raw);

  // Helper to select a category tab
  function setCategoryRoute(catKey) {
    closeDashboardView();
    state.currentCategory = catKey;
    document
      .querySelectorAll(".nav-pill")
      .forEach((p) => p.classList.remove("active"));
    const matchPill = document.querySelector(
      `.nav-pill[data-category="${catKey}"]`,
    );
    if (matchPill) matchPill.classList.add("active");
    renderProducts();
    const el = document.getElementById("products-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  // --- Home ---
  if (raw === "" || raw === "/") {
    closeDashboardView();
    closeAllModals(); // ensure no modal stays open on home
    return;
  }

  // --- Special Storefront Category Shortcuts ---
  if (
    raw === "/all" ||
    raw === "/products" ||
    raw === "/barchasi" ||
    raw === "/katalog/all"
  ) {
    setCategoryRoute("all");
    return;
  }

  if (
    raw === "/super_price" ||
    raw === "/super_narxlar" ||
    raw === "/super-deal" ||
    raw === "/skidka" ||
    raw === "/sale"
  ) {
    setCategoryRoute("super-deal");
    return;
  }

  if (raw === "/suits" || raw === "/kostyumlar" || raw === "/kostyum-shimlar") {
    setCategoryRoute("suits");
    return;
  }

  if (raw === "/trousers" || raw === "/shimlar" || raw === "/klassik-shimlar") {
    setCategoryRoute("trousers");
    return;
  }

  if (
    raw === "/blazers" ||
    raw === "/pijaklar" ||
    raw === "/pijaklar-blazerlar"
  ) {
    setCategoryRoute("blazers");
    return;
  }

  if (
    raw === "/tuxedos" ||
    raw === "/smoking-toy" ||
    raw === "/smoking-va-toy" ||
    raw === "/smoking"
  ) {
    setCategoryRoute("tuxedos");
    return;
  }

  if (
    raw === "/shirts" ||
    raw === "/koylaklar" ||
    raw === "/erkaklar-koylaklari" ||
    raw === "/rubashka"
  ) {
    setCategoryRoute("shirts");
    return;
  }

  if (raw === "/accessories" || raw === "/aksessuarlar") {
    setCategoryRoute("accessories");
    return;
  }

  if (
    raw === "/pachkalab-sotuv" ||
    raw === "/wholesale" ||
    raw === "/usd" ||
    raw === "/pachkalab_sotuv"
  ) {
    closeDashboardView();
    document
      .querySelectorAll(".nav-pill")
      .forEach((p) => p.classList.remove("active"));
    const matchPill = document.querySelector(
      '.nav-pill[href="#wholesaleInfo"]',
    );
    if (matchPill) matchPill.classList.add("active");
    const el = document.getElementById("wholesaleInfo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // --- Admin Add Product Modals & Sub-routes ---
  if (raw.startsWith("/admin")) {
    // 🔒 KIRISHNI TEKSHIRISH — Faqat vakolatli adminlar uchun! Oddiy foydalanuvchilar (userlar) uchun taqiqlanadi
    const currentUser = state.user || JSON.parse(localStorage.getItem("eurotex_user") || "null");
    const isAdmin = currentUser && (currentUser.role === "admin" || (typeof isAdminEmail === "function" && isAdminEmail(currentUser.email)));

    if (!isAdmin) {
      closeDashboardView();
      showToast("⛔ Kirish taqiqlangan! Ushbu bo'lim faqat do'kon ma'murlari (adminlar) uchun.");
      window.history.replaceState({}, "", "/");
      const hw = document.getElementById("homePageWrapper");
      if (hw) hw.style.display = "";
      const dv = document.getElementById("dashboardPageView");
      if (dv) dv.style.display = "none";
      return;
    }

    openDashboardView("admin");

    if (raw === "/admin" || raw === "/admin/") {
      showAdminSection("products", false);
      return;
    }

    if (
      raw === "/admin/users" ||
      raw === "/admin/crm" ||
      raw === "/admin/mijozlar" ||
      raw === "/admin/customers"
    ) {
      showAdminSection("users", false);
      return;
    }

    if (
      raw === "/admin/addcart" ||
      raw === "/admin/add-cart" ||
      raw === "/admin/add_cart" ||
      raw === "/admin/addproduct" ||
      raw === "/admin/add_product" ||
      raw === "/admin/add" ||
      raw.startsWith("/admin/add")
    ) {
      showAdminSection("products", false);
      openAddProductModal();
      return;
    }

    if (
      raw === "/admin/order" ||
      raw === "/admin/orders" ||
      raw === "/admin/buyurtmalar"
    ) {
      showAdminSection("orders", false);
      return;
    }

    if (
      raw === "/admin/applications" ||
      raw === "/admin/returns" ||
      raw === "/admin/qaytarish" ||
      raw === "/admin/arizalar"
    ) {
      showAdminSection("returns", false);
      return;
    }

    if (
      raw === "/admin/dollar" ||
      raw === "/admin/currency" ||
      raw === "/admin/kurs" ||
      raw === "/admin/settings"
    ) {
      showAdminSection("settings", false);
      return;
    }

    if (
      raw === "/admin/size" ||
      raw === "/admin/sizes" ||
      raw === "/admin/razmer" ||
      raw === "/admin/razmerlar" ||
      raw === "/admin/olcham" ||
      raw === "/admin/olchamlar"
    ) {
      showAdminSection("sizes", false);
      return;
    }

    if (
      raw === "/admin/promo" ||
      raw === "/admin/promos" ||
      raw === "/admin/promokod" ||
      raw === "/admin/promokodlar"
    ) {
      showAdminSection("promos", false);
      return;
    }

    if (
      raw === "/admin/nasiya" ||
      raw === "/admin/muddatli-tolov" ||
      raw === "/admin/muddatli_tolov"
    ) {
      showAdminSection("nasiya", false);
      return;
    }

    if (
      raw === "/admin/delivery" ||
      raw === "/admin/yetkazish" ||
      raw === "/admin/viloyatlar"
    ) {
      showAdminSection("delivery", false);
      return;
    }

    if (
      raw === "/admin/maintenance" ||
      raw === "/admin/texnik-tanaffus" ||
      raw === "/admin/holat"
    ) {
      showAdminSection("maintenance", false);
      return;
    }

    if (
      raw === "/admin/leads" ||
      raw === "/admin/oneclick" ||
      raw === "/admin/tezkor"
    ) {
      showAdminSection("leads", false);
      return;
    }

    if (
      raw === "/admin/reviews" ||
      raw === "/admin/sharhlar" ||
      raw === "/admin/otzyv"
    ) {
      showAdminSection("reviews", false);
      return;
    }

    showAdminSection("products", false);
    return;
  }

  // --- Login / Auth ---
  if (raw === "/login" || raw === "/signin" || raw === "/kirish") {
    closeDashboardView();
    openAuthModal();
    return;
  }

  // --- Cart / Savat ---
  if (raw === "/cart" || raw === "/savat") {
    openDashboardView("cart");
    return;
  }

  // --- Wishlist / Saralanganlar ---
  if (raw === "/wishlist" || raw === "/saralanganlar" || raw === "/favorites") {
    openDashboardView("wishlist");
    return;
  }

  // --- Checkout ---
  if (raw === "/checkout" || raw === "/rasmiylashtirish") {
    openDashboardView("checkout");
    return;
  }

  // --- Orders History ---
  if (raw === "/orders" || raw === "/buyurtmalar") {
    openDashboardView("orders");
    return;
  }

  // --- Returns & Exchange ---
  if (raw === "/returns" || raw === "/qaytarish" || raw === "/almashtirish") {
    openDashboardView("returns");
    return;
  }

  // --- Profile ---
  if (raw === "/profile" || raw === "/profil" || raw === "/account") {
    closeDashboardView();
    openAuthModal();
    return;
  }

  // --- Catalog ---
  if (raw === "/catalog" || raw === "/katalog") {
    closeDashboardView();
    const el = document.getElementById("products-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // --- Nasiya ---
  if (raw === "/nasiya" || raw === "/installment") {
    closeDashboardView();
    const slide = document.querySelector('.carousel-slide[data-slide="1"]');
    if (slide) {
      const btn = slide.querySelector(".btn");
      if (btn) btn.click();
    }
    showToast("Eurotex Nasiya — 0% boshlang'ich to'lov bilan 3-12 oyga! 💜");
    return;
  }

  // --- Tailoring / Individuallashtirish ---
  if (
    raw === "/tailoring" ||
    raw === "/atelye" ||
    raw === "/individuallashtirish"
  ) {
    closeDashboardView();
    openModal("tailoringModal");
    return;
  }

  // --- Size Guide ---
  if (raw === "/size-guide" || raw === "/olchamlar") {
    closeDashboardView();
    openModal("sizeGuideModal");
    return;
  }

  // --- About ---
  if (raw === "/about" || raw === "/haqida" || raw === "/company") {
    closeDashboardView();
    const footer = document.querySelector("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // --- Product Page: /product/:id ---
  const productMatch = raw.match(/^\/(?:product|mahsulot)\/(.+)$/);
  if (productMatch) {
    const productId = productMatch[1];
    closeDashboardView();
    openQuickView(productId);
    return;
  }

  // --- Category Filter: /category/:name ---
  const categoryMatch = raw.match(/^\/category\/(.+)$/);
  if (categoryMatch) {
    setCategoryRoute(categoryMatch[1].toLowerCase());
    return;
  }

  // Unknown route → go home
  if (raw !== "/") {
    history.replaceState({}, document.title, "/");
    closeDashboardView();
  }
}

window.addEventListener("popstate", (e) => {
  const activeModal = document.querySelector(".modal-overlay.show, .modal-overlay.active");
  if (activeModal && activeModal.id) {
    closeModal(activeModal.id);
    return;
  }
  handleURLRouting();
});

function openDashboardView(tabName = "cart") {
  if (tabName === "admin" && !isUserAdmin()) {
    closeDashboardView();
    history.replaceState({}, document.title, "/");
    showToast("🔒 Siz kirolmaysiz! Admin emassiz! ⛔");
    openAuthModal();
    return;
  }

  if (tabName === "checkout" && !state.user) {
    closeDashboardView();
    history.replaceState({}, document.title, "/");
    showToast(
      "🔒 Buyurtmani rasmiylashtirish uchun avval tizimga kiring! Kirish sahifasi ochildi. 🔑",
    );
    openAuthModal();
    return;
  }

  closeAllModals();
  document.body.style.overflow = "auto";

  const homeWrapper = document.getElementById("homePageWrapper");
  const dashView = document.getElementById("dashboardPageView");
  if (!dashView) {
    console.error("[Eurotex Error] dashboardPageView element topilmadi!");
    return;
  }

  const pdpView = document.getElementById("productDetailPageView");
  if (pdpView) pdpView.style.display = "none";

  if (homeWrapper) homeWrapper.style.display = "none";
  dashView.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
  switchDashboardTab(tabName);

  const routePath = tabName === "admin" ? "/admin" : `/${tabName}`;
  if (window.location.pathname !== routePath) {
    history.pushState({ route: routePath }, document.title, routePath);
  }
}

function closeDashboardView() {
  const homeWrapper = document.getElementById("homePageWrapper");
  const dashView = document.getElementById("dashboardPageView");
  const pdpView = document.getElementById("productDetailPageView");

  if (pdpView) pdpView.style.display = "none";
  if (dashView) dashView.style.display = "none";
  if (homeWrapper) homeWrapper.style.display = "block";
  closeAllModals();
  document.body.style.overflow = "auto";
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") {
    history.pushState({}, document.title, "/");
  }
}

function switchDashboardTab(tabName) {
  const dashView = document.getElementById("dashboardPageView");
  const homeWrapper = document.getElementById("homePageWrapper");
  const pdpView = document.getElementById("productDetailPageView");

  if (homeWrapper) homeWrapper.style.display = "none";
  if (pdpView) pdpView.style.display = "none";
  if (dashView) {
    dashView.style.display = "block";
    dashView.scrollTop = 0;
  }

  // ✨ Har doim tab almashtirilganda yoki buyurtma rasmiylashtirish bosilganda sahifa eng tepasiga ko'tarilish
  try {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  } catch (e) {
    window.scrollTo(0, 0);
  }

  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, 50);

  const panes = {
    cart: document.getElementById("dPaneCart"),
    wishlist: document.getElementById("dPaneWishlist"),
    checkout: document.getElementById("dPaneCheckout"),
    orders: document.getElementById("dPaneOrders"),
    returns: document.getElementById("dPaneReturns"),
    admin: document.getElementById("dPaneAdmin"),
  };

  const tabs = {
    cart: document.getElementById("dTabCart"),
    wishlist: document.getElementById("dTabWishlist"),
    checkout: document.getElementById("dTabCheckout"),
    orders: document.getElementById("dTabOrders"),
    returns: document.getElementById("dTabReturns"),
    admin: document.getElementById("dTabAdmin"),
  };

  Object.keys(panes).forEach((key) => {
    if (panes[key])
      panes[key].style.display = key === tabName ? "block" : "none";
    if (tabs[key]) {
      if (key === tabName) tabs[key].classList.add("active");
      else tabs[key].classList.remove("active");
    }
  });

  if (tabName === "cart") {
    updateCartUI();
    updateURLRoute("/cart");
  } else if (tabName === "wishlist") {
    renderWishlist();
    updateURLRoute("/wishlist");
  } else if (tabName === "checkout") {
    renderCheckoutDeliveryDates();
    updateCheckoutData();
    updateCheckoutPromoCard();
    updateURLRoute("/checkout");
  } else if (tabName === "orders") {
    renderOrdersHistory();
    updateURLRoute("/orders");
  } else if (tabName === "returns") {
    renderReturnRequests();
    updateURLRoute("/returns");
  } else if (tabName === "admin") {
    renderAdminPanel();
    showAdminSection("products", true);
  }

  updateDashboardCounts();
}

function updateDashboardCounts() {
  const dashCartCount = document.getElementById("dashCartCount");
  const dashWishCount = document.getElementById("dashWishCount");
  const cartTotalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);

  if (dashCartCount) dashCartCount.textContent = cartTotalCount;
  if (dashWishCount) dashWishCount.textContent = state.wishlist.length;
}

function updateCheckoutData() {
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutFinalTotal = document.getElementById("checkoutFinalTotal");
  const checkoutDiscountRow = document.getElementById("checkoutDiscountRow");
  const checkoutDiscount = document.getElementById("checkoutDiscount");

  const rawSubtotalUsd = state.cart.reduce(
    (sum, i) => sum + (i.priceUsd || i.price || 120) * i.quantity,
    0,
  );
  const rate = state.usdRate || 12650;
  let discountUsd = 0;
  let discountSom = 0;

  if (state.discountRate && state.discountRate > 0) {
    discountUsd = Math.round(rawSubtotalUsd * state.discountRate);
    discountSom = Math.round(discountUsd * rate);
  } else if (state.appliedDiscountUsd && state.appliedDiscountUsd > 0) {
    discountUsd = Math.min(state.appliedDiscountUsd, rawSubtotalUsd);
    discountSom = state.appliedDiscountAmount || Math.round(discountUsd * rate);
  } else if (state.appliedDiscountAmount && state.appliedDiscountAmount > 0) {
    discountSom = state.appliedDiscountAmount;
    discountUsd = Math.min(rawSubtotalUsd, Math.round(discountSom / rate));
  }

  discountUsd = Math.min(discountUsd, rawSubtotalUsd);
  const finalTotalUsd = Math.max(0, rawSubtotalUsd - discountUsd);

  if (checkoutSubtotal) checkoutSubtotal.textContent = formatMoney(rawSubtotalUsd);
  if (checkoutFinalTotal)
    checkoutFinalTotal.textContent = formatMoney(finalTotalUsd);

  if ((discountUsd > 0 || discountSom > 0) && checkoutDiscountRow && checkoutDiscount) {
    checkoutDiscountRow.style.display = "flex";
    if (discountUsd > 0) {
      checkoutDiscount.textContent = `-${formatMoney(discountUsd)}`;
    } else {
      checkoutDiscount.textContent = `-${formatMoneySom(discountSom)} so'm`;
    }
  } else if (checkoutDiscountRow) {
    checkoutDiscountRow.style.display = "none";
  }

  updateCheckoutPromoCard();
}

function openCartDrawer() {
  closeAllModals();
  updateCartUI();
  openDashboardView("cart");
  updateURLRoute("/cart");
}

function closeCartDrawer() {
  closeDashboardView();
}

function openWishlistModal() {
  closeAllModals();
  renderWishlist();
  openDashboardView("wishlist");
  updateURLRoute("/wishlist");
}

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast(state.currentLang === "ru" ? "Корзина пуста!" : "Savat bo'sh!");
    return;
  }
  if (!state.user) {
    showToast(
      "🔒 Buyurtmani rasmiylashtirish uchun avval tizimga kiring! Kirish sahifasi ochildi. 🔑",
    );
    openAuthModal();
    return;
  }
  closeAllModals();
  renderCheckoutDeliveryDates();
  updateCheckoutData();
  updateCheckoutPromoCard();
  openDashboardView("checkout");
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, 50);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) {
    console.error(`[Eurotex Error] Modal topilmadi: #${modalId}`);
    return;
  }
  modal.style.display = "flex";
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
  modal.style.pointerEvents = "auto";
  modal.style.zIndex = "999999";
  modal.classList.add("show");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  try {
    if (!history.state || history.state.eurotexModal !== modalId) {
      history.pushState({ eurotexModal: modalId }, "");
    }
  } catch (e) {}
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("show");
  modal.classList.remove("active");
  modal.style.display = "none";
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
  modal.style.pointerEvents = "none";
  document.body.style.overflow = "";

  if (modalId === "addProductModal") {
    if (
      window.location.pathname.includes("/admin/addcart") ||
      window.location.pathname.includes("/addcart")
    ) {
      history.pushState({}, document.title, "/admin/products");
    }
  } else {
    const restoreModals = ["quickViewModal", "authModal", "loginModal"];
    if (restoreModals.includes(modalId)) {
      const p = window.location.pathname;
      if (
        p !== "/" &&
        !p.startsWith("/cart") &&
        !p.startsWith("/wishlist") &&
        !p.startsWith("/checkout") &&
        !p.startsWith("/admin")
      ) {
        history.pushState({}, document.title, "/");
      }
    }
  }
}

// Global Freeze-Proof Modal Backdrop Click Listener
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("modal-overlay")) {
    const activeModals = document.querySelectorAll(
      ".modal-overlay.show, .modal-overlay.active",
    );
    activeModals.forEach((m) => {
      if (m && m.id) closeModal(m.id);
    });
  }
});

function renderWishlist() {
  const grid = document.getElementById("wishlistGrid");
  const popGrid = document.getElementById("wishlistPopGrid");
  const headerCount = document.getElementById("wishlistHeaderCount");
  const popHeaderCount = document.getElementById("wishlistPopHeaderCount");

  const wishPool = (typeof getGlobalProductsPool === "function" ? getGlobalProductsPool() : EUROTEX_PRODUCTS);
  const wishProds = (state.wishlist || [])
    .map((idOrObj) => {
      if (typeof idOrObj === "object" && idOrObj.id) return idOrObj;
      return wishPool.find((p) => p && String(p.id) === String(idOrObj));
    })
    .filter(Boolean);

  const lang = state.currentLang || "uz";

  if (headerCount) headerCount.textContent = `${wishProds.length} ta mahsulot`;
  if (popHeaderCount) popHeaderCount.textContent = `${wishProds.length} ta mahsulot`;

  const emptyHtml = `
    <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: #94a3b8;">
        <div style="font-size: 48px; margin-bottom: 12px;">❤️</div>
        <h3 style="font-size: 18px; color: #ffffff; margin-bottom: 6px;">Saralanganlar ro'yxati hozircha bo'sh</h3>
        <p style="font-size: 14px;">Yoqtirgan kiyimlaringizdagi yurakcha tugmasini bosib saqlab qo'ying</p>
    </div>
  `;

  if (wishProds.length === 0) {
    if (grid) grid.innerHTML = emptyHtml;
    if (popGrid) popGrid.innerHTML = emptyHtml;
    return;
  }

  const htmlContent = wishProds
    .map((product) => {
      const title = (
        product[`title_${lang}`] ||
        product.title_uz ||
        product.title ||
        "Eurotex Kostyum"
      ).toString();
      const usdRate = state.usdRate || 12650;
      const priceUsd =
        product.pachkaPriceUsd ||
        product.priceUsd ||
        (product.price > 5000
          ? Math.round(product.price / usdRate)
          : product.price) ||
        50;
      const priceSom = priceUsd * usdRate;

      const hasDiscount = (product.discountPercent && product.discountPercent > 0) ||
                          (product.oldPrice && product.oldPrice > priceSom);
      let discPct = 0;
      let formattedOldPrice = "";
      if (hasDiscount) {
        const oldPriceSomRaw = product.oldPrice > 5000 ? product.oldPrice : (product.oldPrice * usdRate || Math.round(priceUsd * 1.25) * usdRate);
        const oldPriceUsdRaw = Math.round(oldPriceSomRaw / usdRate);
        discPct = product.discountPercent || Math.max(1, Math.round(((oldPriceSomRaw - priceSom) / oldPriceSomRaw) * 100));
        formattedOldPrice = `$${oldPriceUsdRaw} (${formatMoneySom(oldPriceSomRaw)} so'm)`;
      }

      const formattedPrice = `$${priceUsd} (${formatMoneySom(priceSom)} so'm)`;
      const badgeText = (
        product[`badge_${lang}`] ||
        product.badge_uz ||
        "LUXURY PACHKA"
      ).toString();
      const badgeType = product.badgeType || "gold";
      const imgSrc =
        product.image || product.img || "/images/navy_suit.jpg";

      return `
        <div class="product-card" data-id="${product.id}" onclick="closeModal('wishlistPopModal'); openQuickView('${product.id}')">
            <div class="card-image-wrap">
                <img src="${imgSrc}" alt="${title}" loading="lazy" decoding="async" onerror="this.src='/images/navy_suit.jpg'">
                ${hasDiscount && discPct > 0 ? `
                  <span class="discount-badge-corner">
                    -${discPct}%
                  </span>
                ` : `
                  <span class="card-badge-tag ${badgeType}">${badgeText}</span>
                `}
                <button class="wishlist-heart-btn active" onclick="event.stopPropagation(); toggleWishlist('${product.id}')" title="Wishlist">❤️</button>
            </div>
            <div class="card-body">
                <div class="pachka-series-badge">
                    📦 1 Pachka (${product.pachkaItems || 6} ta seriya)
                </div>
                <div class="card-price-row">
                    <div class="price-group">
                        <span class="current-price">${formattedPrice} <small class="price-unit-tag">/pachka</small></span>
                        ${hasDiscount && discPct > 0 ? `
                          <span class="old-price">${formattedOldPrice}</span>
                        ` : ""}
                    </div>
                </div>
                <h3 class="card-title">${title}</h3>
                <div class="card-rating">
                    <span>⭐ ${product.rating || 4.9}</span>
                    <span>(${product.reviewsCount || 186} sharhlar)</span>
                </div>
                <button type="button" onclick="event.stopPropagation(); addToCart('${product.id}', '${product.sizes && Array.isArray(product.sizes) ? product.sizes.join("-") : "Seriya"}', 'Klassik', event);" class="btn product-add-cart-btn">
                    1 Pachka Savatga 🛒
                </button>
            </div>
        </div>
      `;
    })
    .join("");

  if (grid) grid.innerHTML = htmlContent;
  if (popGrid) popGrid.innerHTML = htmlContent;
}

const DEFAULT_SIZE_GUIDE = [
  { size: "46 (S)", chest: "90 - 94", waist: "78 - 82", height: "170 - 176" },
  { size: "48 (M)", chest: "95 - 98", waist: "83 - 86", height: "172 - 178" },
  { size: "50 (L)", chest: "99 - 102", waist: "87 - 90", height: "174 - 180" },
  { size: "52 (XL)", chest: "103 - 106", waist: "91 - 94", height: "176 - 182" },
  { size: "54 (XXL)", chest: "107 - 110", waist: "95 - 98", height: "178 - 184" },
  { size: "56 (3XL)", chest: "111 - 114", waist: "99 - 103", height: "180 - 186" },
  { size: "58 (4XL)", chest: "115 - 118", waist: "104 - 108", height: "182 - 188" },
];

function getSizeGuideData() {
  try {
    const saved = localStorage.getItem("eurotex_size_guide");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...DEFAULT_SIZE_GUIDE];
}

function getSizeGuideNote() {
  try {
    const saved = localStorage.getItem("eurotex_size_guide_note");
    if (saved) return saved;
  } catch (e) {}
  return "💡 Agar 2 ta o'lcham orasida ikkilansangiz, katttaroq o'lchamni tanlashni tavsiya etamiz.";
}

function openSizeGuide() {
  const tableBody = document.getElementById("sizeGuideModalTableBody");
  const noteEl = document.getElementById("sizeGuideModalNote");
  const data = getSizeGuideData();
  const note = getSizeGuideNote();

  if (tableBody) {
    tableBody.innerHTML = data
      .map(
        (row) => `
        <tr>
          <td><strong>${row.size || ""}</strong></td>
          <td>${row.chest || ""}</td>
          <td>${row.waist || ""}</td>
          <td>${row.height || ""}</td>
        </tr>
      `,
      )
      .join("");
  }

  if (noteEl) {
    noteEl.textContent = note;
  }

  openModal("sizeGuideModal");
  updateURLRoute("/size-guide");
}

function openTailoringModal() {
  openModal("tailoringModal");
  updateURLRoute("/tailoring");
}

function openPaymentInfoModal() {
  showCustomConfirm({
    title: "💳 To'lov va Xarid Shartlari",
    htmlText: `
      <div style="text-align:left; font-size:14px; line-height:1.6; color:var(--text-primary);">
        <p><b>Eurotex Kids</b> da to'lovlarni quyidagi qulay usullarda amalga oshirishingiz mumkin:</p>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li><b>Payme & Click:</b> Barcha turdagi Uzcard va Humo kartalari orqali onlayn yoki kuryer yetkazganda to'lov;</li>
          <li><b>Naqd to'lov:</b> Mahsulotni tekshirib qabul qilgach kuryerga to'lash;</li>
          <li><b>Eurotex Nasiya:</b> 3 oydan 12 oygacha foizsiz muddatli to'lov imkoniyati.</li>
        </ul>
      </div>
    `,
    confirmText: "Tushundim 👍",
  });
}

function openDeliveryInfoModal() {
  showCustomConfirm({
    title: "🚚 Yetkazib Berish Shartlari",
    htmlText: `
      <div style="text-align:left; font-size:14px; line-height:1.6; color:var(--text-primary);">
        <p><b>Tezkor va xavfsiz yetkazib berish xizmati:</b></p>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li><b>Toshkent shahri bo'yicha:</b> Buyurtma berilgan kuni yoki 24 soat ichida mutlaqo bepul yetkaziladi;</li>
          <li><b>Viloyatlar bo'yicha:</b> BTS yoki Express pochta orqali 1-2 ish kunida manzilingizgacha yetkazib beriladi;</li>
          <li><b>Kiyib ko'rish:</b> Kuryer kutib turadi, o'lchami to'g'ri kelmasa joyida almashtirib beriladi.</li>
        </ul>
      </div>
    `,
    confirmText: "Tushundim 👍",
  });
}

function openAuthModal() {
  if (state.user) {
    const email = state.user.email || "";
    const name = state.user.name || email.split("@")[0] || "Foydalanuvchi";
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const initial = formattedName.charAt(0).toUpperCase();
    const isAdmin = state.user.role === "admin" || isAdminEmail(email);

    const avatarEl = document.getElementById("userProfileAvatar");
    const nameEl = document.getElementById("userProfileName");
    const emailEl = document.getElementById("userProfileEmail");
    const badgeWrap = document.getElementById("userProfileBadgeWrap");
    const adminBtn = document.getElementById("userAdminPanelBtn");

    if (avatarEl) {
      avatarEl.innerHTML = `<img src="/images/eurotex_icon.png" alt="Eurotex Logo" style="width: 100%; height: 100%; object-fit: contain; border-radius: 50%; display: block;" onerror="this.onerror=null;this.src='/images/eurotex_icon.png'" />`;
      avatarEl.style.background = "#0f172a";
      avatarEl.style.padding = "4px";
      avatarEl.style.border = isAdmin ? "2.5px solid #00f2fe" : "2px solid #88001b";
      avatarEl.style.boxShadow = isAdmin
        ? "0 0 20px rgba(0, 242, 254, 0.4)"
        : "0 4px 16px rgba(136, 0, 27, 0.4)";
    }
    if (nameEl) nameEl.textContent = isAdmin ? "Eurotex Rasmiy Admin" : formattedName;
    if (emailEl) emailEl.textContent = email;
    if (badgeWrap) {
      badgeWrap.innerHTML = isAdmin
        ? '<span class="user-role-badge admin" style="background:linear-gradient(135deg, #7000ff, #9333ea); color:#fff; border:none; padding:4px 14px; border-radius:20px; font-weight:800; font-size:12px; display:inline-block; margin-bottom:16px; box-shadow:0 4px 12px rgba(112,0,255,0.35);">👑 Eurotex Rasmiy Admin</span>'
        : '<span class="user-role-badge user" style="background:rgba(0,229,255,0.15); border:1px solid #00e5ff; color:#00e5ff; padding:4px 14px; border-radius:20px; font-weight:800; font-size:12px; display:inline-block; margin-bottom:16px;">👤 Mijoz Profili</span>';
    }
    if (adminBtn) {
      adminBtn.style.display = isAdmin ? "flex" : "none";
    }

    openModal("userProfileModal");
    return;
  }
  resetAuthForm();
  openModal("authModal");
  updateURLRoute("/login");

  if (window.innerWidth > 768 && typeof triggerGoogleGsiPrompt === "function") {
    triggerGoogleGsiPrompt();
  }
}

function triggerUserLogoutProcess() {
  closeModal("userProfileModal");

  const email = state.user ? state.user.email : "hisobingizdan";

  showCustomConfirm({
    title: "🚪 Tizimdan Chiqish",
    htmlText: `Haqiqatdan ham <b>"${email}"</b> hisobingizdan chiqmoqchimisiz?`,
    confirmText: "Chiqish 🚪",
    onConfirm: () => {
      // Full session purge on server and client
      try {
        fetch("/users/remove-session", { method: "POST" }).catch(() => {});
      } catch (e) {}
      state.user = null;
      localStorage.removeItem("eurotex_user");
      localStorage.removeItem("eurotex_session");
      sessionStorage.clear();
      // Clear cookies
      document.cookie = "eurotex_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      updateUserAuthUI();
      showToast("👋 Tizimdan muvaffaqiyatli chiqdingiz!");
      updateURLRoute("/");
      closeDashboardView();
    },
  });
}


// =============================================================================
// 📅 DYNAMIC AUTO-UPDATING DELIVERY DATES (Ertaga, Indinga, 3-kun)
// =============================================================================
function getDeliveryDateLabels() {
  const lang = (window.state && window.state.currentLang) || "uz";
  const now = new Date();
  const d1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);
  const d3 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);

  const months = {
    uz: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"],
    ru: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  const days = {
    uz: ["yak", "dush", "sesh", "chor", "pay", "juma", "shan"],
    ru: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  };
  const tomorrowWord = {
    uz: "Ertaga",
    ru: "Завтра",
    en: "Tomorrow"
  };

  const mList = months[lang] || months.uz;
  const dList = days[lang] || days.uz;
  const tWord = tomorrowWord[lang] || tomorrowWord.uz;

  return [
    {
      label: `${tWord} (${d1.getDate()}-${mList[d1.getMonth()]})`,
      val: `Ertaga (${d1.getDate()}-${mList[d1.getMonth()]})`
    },
    {
      label: `${d2.getDate()}-${mList[d2.getMonth()]} (${dList[d2.getDay()]})`,
      val: `${d2.getDate()}-${mList[d2.getMonth()]} (${dList[d2.getDay()]})`
    },
    {
      label: `${d3.getDate()}-${mList[d3.getMonth()]} (${dList[d3.getDay()]})`,
      val: `${d3.getDate()}-${mList[d3.getMonth()]} (${dList[d3.getDay()]})`
    }
  ];
}

function renderCheckoutDeliveryDates() {
  const container = document.getElementById("checkoutDatePickerRow");
  const dates = getDeliveryDateLabels();

  if (container) {
    const activeVal = window.state?.selectedDeliveryDate || dates[0].val;
    container.innerHTML = dates
      .map((d, idx) => {
        const isChecked = idx === 0 || d.val === activeVal;
        return `
          <label class="date-pill ${isChecked ? "active" : ""}" onclick="selectCheckoutDate(this)">
            <input type="radio" name="delDate" value="${escapeHtml(d.val)}" ${isChecked ? "checked" : ""} />
            <span>${escapeHtml(d.label)}</span>
          </label>
        `;
      })
      .join("");
  }

  // Also update cart badge text dynamically
  const cartBadgeText = document.getElementById("cartDeliveryDateBadgeText");
  if (cartBadgeText && dates[0]) {
    cartBadgeText.textContent = `${dates[0].label} yetkazib beramiz`;
  }
}

function selectCheckoutDate(el) {
  if (!el) return;
  const container = document.getElementById("checkoutDatePickerRow");
  if (container) {
    container.querySelectorAll(".date-pill").forEach((p) => p.classList.remove("active"));
  }
  el.classList.add("active");
  const radio = el.querySelector('input[type="radio"]');
  if (radio) {
    radio.checked = true;
    if (window.state) {
      window.state.selectedDeliveryDate = radio.value;
    }
  }
}

// =============================================================================
// 🏷️ PROMO CODE MANAGEMENT (Cart & Checkout)
// =============================================================================
async function applyPromoCode(customCode = null) {
  const code = (
    customCode ||
    document.getElementById("checkoutPromoCodeInput")?.value ||
    document.getElementById("promoCodeInput")?.value ||
    ""
  ).trim().toUpperCase();

  if (!code) {
    showToast("❌ Iltimos, promo-kodni kiriting!");
    return false;
  }

  const rawSubtotalUsd = state.cart.reduce(
    (sum, i) => sum + (i.priceUsd || i.price || 120) * (i.quantity || 1),
    0,
  );
  const rate = state.usdRate || 12650;
  const rawSubtotalSom = Math.round(rawSubtotalUsd * rate);
  const userIdentifier = (state.user && (state.user.email || state.user.phone)) || localStorage.getItem("eurotex_guest_phone") || "";

  try {
    const res = await fetch("/api/promocodes/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        orderTotal: rawSubtotalSom,
        orderTotalSom: rawSubtotalSom,
        orderTotalUsd: rawSubtotalUsd,
        userIdentifier,
      }),
    });
    const data = await res.json();
    if (data.valid) {
      state.appliedPromoCode = data.promo.code;
      state.appliedPromoMinPrice = data.promo.minOrderPrice || 0;
      state.appliedDiscountAmount = data.discountAmountSom || data.discountAmount || 0;
      state.appliedDiscountUsd = data.discountAmountUsd || Math.round(state.appliedDiscountAmount / rate);
      if (data.promo.discountType === "percent") {
        state.discountRate = data.promo.discountValue / 100;
      } else {
        state.discountRate = 0;
      }

      updateCartTotalsOnly();
      updateCheckoutData();
      updateCheckoutPromoCard();

      const cInput = document.getElementById("checkoutPromoCodeInput");
      if (cInput) cInput.value = "";
      const pBox = document.getElementById("checkoutPromoInputBox");
      if (pBox) pBox.style.display = "none";

      showToast(`🎉 ${data.message}`);
      return true;
    } else {
      showToast(`❌ ${data.message}`);
      return false;
    }
  } catch (err) {
    showToast("Promokodni tekshirishda xatolik yuz berdi");
    return false;
  }
}

function cancelAppliedPromoCode() {
  state.appliedPromoCode = null;
  state.appliedDiscountAmount = 0;
  state.appliedDiscountUsd = 0;
  state.discountRate = 0;
  updateCartTotalsOnly();
  updateCheckoutData();
  updateCheckoutPromoCard();
  showToast("ℹ️ Promokod bekor qilindi", "info");
}

function toggleCheckoutPromoInput() {
  if (state.appliedPromoCode) {
    cancelAppliedPromoCode();
    return;
  }
  const box = document.getElementById("checkoutPromoInputBox");
  if (!box) return;
  const isHidden = box.style.display === "none" || !box.style.display;
  box.style.display = isHidden ? "block" : "none";
  if (isHidden) {
    const input = document.getElementById("checkoutPromoCodeInput");
    if (input) setTimeout(() => input.focus(), 100);
  }
}

async function applyCheckoutPromoCode() {
  const input = document.getElementById("checkoutPromoCodeInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast("❌ Promokod kiriting!");
    input.focus();
    return;
  }
  await applyPromoCode(code);
}

function updateCheckoutPromoCard() {
  const cardText = document.getElementById("checkoutPromoCardText");
  const arrow = document.getElementById("checkoutPromoArrow");
  if (!cardText) return;

  if (state.appliedPromoCode) {
    const discountStr = state.appliedDiscountAmount
      ? `${state.appliedDiscountAmount.toLocaleString()} so'm`
      : `${Math.round((state.discountRate || 0) * 100)}%`;
    cardText.innerHTML = `
      <span style="color: #10b981; font-weight: 800;">✓ Promokod: <b>${state.appliedPromoCode}</b> (-${discountStr})</span>
    `;
    if (arrow) {
      arrow.innerHTML = `<span style="color: #ef4444; font-size: 13px; font-weight: 800; cursor: pointer;" title="Bekor qilish">✕ Bekor</span>`;
    }
  } else {
    cardText.textContent = "Promokodni qo'llash / almashtirish";
    if (arrow) {
      arrow.textContent = "❯";
    }
  }
}

// User Auth Management (Email & Google Login)
function switchAuthTab(tab) {
  const emailTabBtn = document.getElementById("emailTabBtn");
  const googleTabBtn = document.getElementById("googleTabBtn");
  const emailPane = document.getElementById("emailLoginForm");
  const googlePane = document.getElementById("googleAuthPane");

  if (tab === "email") {
    if (emailTabBtn) emailTabBtn.classList.add("active");
    if (googleTabBtn) googleTabBtn.classList.remove("active");
    if (emailPane) {
      emailPane.classList.add("active");
      emailPane.style.display = "block";
    }
    if (googlePane) {
      googlePane.classList.remove("active");
      googlePane.style.display = "none";
    }
  } else {
    if (googleTabBtn) googleTabBtn.classList.add("active");
    if (emailTabBtn) emailTabBtn.classList.remove("active");
    if (googlePane) {
      googlePane.classList.add("active");
      googlePane.style.display = "block";
    }
    if (emailPane) {
      emailPane.classList.remove("active");
      emailPane.style.display = "none";
    }
  }
}
function normalizeUserEmail(input) {
  if (!input) return "";
  let email = input.toLowerCase().trim();
  if (!email.includes("@")) {
    email += "@gmail.com";
  }
  return email;
}

let otpStep = false;
let resendTimerInterval = null;

function handleAuthBackClick() {
  const confirmModal = document.getElementById("authBackConfirmModal");
  if (confirmModal) {
    confirmModal.style.display = "flex";
  } else {
    goToAuthStepEmail();
  }
}

function closeAuthBackConfirm() {
  const confirmModal = document.getElementById("authBackConfirmModal");
  if (confirmModal) {
    confirmModal.style.display = "none";
  }
}

function confirmGoBackToEmail() {
  closeAuthBackConfirm();
  goToAuthStepEmail();
}

function goToAuthStepEmail() {
  closeAuthBackConfirm();
  otpStep = false;
  const stepEmail = document.getElementById("authStepEmail");
  const stepCode = document.getElementById("authStepCode");
  const emailInput = document.getElementById("authEmailInput");
  const submitBtn = document.getElementById("authSubmitBtn");

  if (stepEmail) stepEmail.style.display = "block";
  if (stepCode) stepCode.style.display = "none";
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = "Davom etish (Kod olish) ➔";
  }

  clearAuthError();
  const pinDigits = document.querySelectorAll(".otp-pin-digit");
  if (pinDigits) {
    pinDigits.forEach((box) => {
      box.value = "";
      box.classList.remove("filled");
    });
  }
  const hiddenInput = document.getElementById("authOtpInput");
  if (hiddenInput) hiddenInput.value = "";

  if (emailInput) {
    setTimeout(() => emailInput.focus(), 50);
  }
}

function goToAuthStepCode(email) {
  otpStep = true;
  const stepEmail = document.getElementById("authStepEmail");
  const stepCode = document.getElementById("authStepCode");
  const sentDisplay = document.getElementById("authSentEmailDisplay");
  const pinDigits = document.querySelectorAll(".otp-pin-digit");
  const hiddenInput = document.getElementById("authOtpInput");

  if (stepEmail) stepEmail.style.display = "none";
  if (stepCode) stepCode.style.display = "block";
  if (sentDisplay) sentDisplay.textContent = email;

  clearAuthError();
  if (pinDigits) {
    pinDigits.forEach((box) => {
      box.value = "";
      box.classList.remove("filled");
    });
    if (pinDigits[0]) {
      setTimeout(() => pinDigits[0].focus(), 100);
    }
  }
  if (hiddenInput) hiddenInput.value = "";

  startResendTimer(60);
}

function distributePastedOtpCode(rawText) {
  if (!rawText) return false;
  const digits = String(rawText).replace(/[\u200B-\u200D\uFEFF\s\r\n\t]/g, "").replace(/[^0-9]/g, "").slice(0, 6).split("");
  if (!digits.length) return false;

  const pinDigits = document.querySelectorAll(".otp-pin-digit");
  pinDigits.forEach((box, idx) => {
    if (idx < digits.length) {
      box.value = digits[idx];
      box.classList.add("filled");
    } else {
      box.value = "";
      box.classList.remove("filled");
    }
  });

  const hiddenInput = document.getElementById("authOtpInput");
  const fullCode = digits.join("");
  if (hiddenInput) hiddenInput.value = fullCode;

  if (digits.length === 6) {
    if (pinDigits[5]) pinDigits[5].focus();
    setTimeout(() => {
      const form = document.getElementById("emailLoginForm");
      if (form) {
        const submitEvent = new Event("submit", { cancelable: true, bubbles: true });
        form.dispatchEvent(submitEvent);
      }
    }, 50);
  } else {
    const nextIdx = Math.min(digits.length, 5);
    if (pinDigits[nextIdx]) pinDigits[nextIdx].focus();
  }
  return true;
}

function handleOtpGlobalPaste(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  let pasted = "";
  if (e && e.clipboardData) {
    pasted = e.clipboardData.getData("text/plain") || e.clipboardData.getData("text") || "";
  } else if (window.clipboardData) {
    pasted = window.clipboardData.getData("Text") || "";
  }

  if (pasted) {
    distributePastedOtpCode(pasted);
  } else if (navigator.clipboard && navigator.clipboard.readText) {
    navigator.clipboard.readText().then((txt) => {
      if (txt) distributePastedOtpCode(txt);
    }).catch(() => {});
  }
}
window.handleOtpGlobalPaste = handleOtpGlobalPaste;
window.distributePastedOtpCode = distributePastedOtpCode;

function setupOtpInputRestrictions() {
  const hiddenInput = document.getElementById("authOtpInput");
  const pinDigits = document.querySelectorAll(".otp-pin-digit");

  function getCombinedPinValue() {
    let full = "";
    pinDigits.forEach((box) => {
      full += (box.value || "").trim();
    });
    return full;
  }

  function updateHiddenValueAndCheckSubmit() {
    const fullCode = getCombinedPinValue();
    if (hiddenInput) hiddenInput.value = fullCode;

    pinDigits.forEach((box) => {
      if (box.value) box.classList.add("filled");
      else box.classList.remove("filled");
    });

    if (fullCode.length === 6 && otpStep) {
      setTimeout(() => {
        const form = document.getElementById("emailLoginForm");
        if (form) {
          const submitEvent = new Event("submit", { cancelable: true, bubbles: true });
          form.dispatchEvent(submitEvent);
        }
      }, 50);
    }
  }

  pinDigits.forEach((input, index) => {
    // 1. Keydown handler: typing 0..9, backspace, arrows, delete, and Ctrl+V
    input.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "v" || e.key === "V")) {
        return; // Allow native paste event to fire
      }

      if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        input.value = e.key;
        input.classList.add("filled");
        if (index < pinDigits.length - 1) {
          pinDigits[index + 1].focus();
        }
        updateHiddenValueAndCheckSubmit();
        return;
      }

      if (e.key === "Backspace") {
        e.preventDefault();
        if (input.value) {
          input.value = "";
          input.classList.remove("filled");
        } else if (index > 0) {
          pinDigits[index - 1].value = "";
          pinDigits[index - 1].classList.remove("filled");
          pinDigits[index - 1].focus();
        }
        updateHiddenValueAndCheckSubmit();
        return;
      }

      if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        pinDigits[index - 1].focus();
        return;
      }

      if (e.key === "ArrowRight" && index < pinDigits.length - 1) {
        e.preventDefault();
        pinDigits[index + 1].focus();
        return;
      }

      if (e.key === "Delete") {
        input.value = "";
        input.classList.remove("filled");
        updateHiddenValueAndCheckSubmit();
      }
    });

    // 2. Input fallback for mobile virtual keyboards
    input.addEventListener("input", (e) => {
      const raw = e.target.value || "";
      const cleaned = raw.replace(/[^0-9]/g, "");

      if (cleaned.length > 1) {
        distributePastedOtpCode(cleaned);
        return;
      }

      e.target.value = cleaned ? cleaned[0] : "";
      if (e.target.value) {
        e.target.classList.add("filled");
        if (index < pinDigits.length - 1) {
          pinDigits[index + 1].focus();
        }
      } else {
        e.target.classList.remove("filled");
      }
      updateHiddenValueAndCheckSubmit();
    });

    // 3. Focus auto-select
    input.addEventListener("focus", () => {
      input.select();
    });

    // 4. Paste handler
    input.addEventListener("paste", (e) => {
      handleOtpGlobalPaste(e);
    });
  });
}

function showAuthError(message) {
  const errorBox1 = document.getElementById("authErrorBox");
  const errorText1 = document.getElementById("authErrorText");
  const errorBox2 = document.getElementById("authErrorBoxStep2");
  const errorText2 = document.getElementById("authErrorTextStep2");

  if (errorBox1 && errorText1) {
    errorText1.textContent = message || "";
    errorBox1.style.display = message && !otpStep ? "flex" : "none";
  }
  if (errorBox2 && errorText2) {
    errorText2.textContent = message || "";
    errorBox2.style.display = message && otpStep ? "flex" : "none";
  }
}

function clearAuthError() {
  showAuthError("");
}

async function resendOtpCode(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById("authEmailInput");
  const resendBtn = document.getElementById("resendOtpBtn");

  clearAuthError();

  if (!emailInput || !emailInput.value.trim()) {
    showToast("Iltimos, email pochtangizni kiriting!");
    return;
  }

  const email = normalizeUserEmail(emailInput.value);

  if (resendBtn) {
    resendBtn.style.pointerEvents = "none";
    resendBtn.style.opacity = "0.6";
  }
  showToast("Yangilangan kod pochtangizga qayta yuborilmoqda... ⏳");

  try {
    const res = await fetch("/users/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, isResend: true }),
    });

    const data = await res.json();

    if (res.ok && data.success !== false) {
      const pinDigits = document.querySelectorAll(".otp-pin-digit");
      if (pinDigits) {
        pinDigits.forEach((box) => {
          box.value = "";
          box.classList.remove("filled");
        });
        if (pinDigits[0]) pinDigits[0].focus();
      }
      const hiddenInput = document.getElementById("authOtpInput");
      if (hiddenInput) hiddenInput.value = "";

      clearAuthError();
      showToast(`📧 Yangi tasdiqlash kodi ${email} pochtangizga yuborildi! Pochtangizni tekshiring! 📩`);
      startResendTimer(30);
    } else {
      showAuthError(data.message || "❌ Kod qayta yuborishda xatolik!");
      showToast(data.message || "❌ Kod qayta yuborishda xatolik!", "error");
      if (resendBtn) {
        resendBtn.style.pointerEvents = "auto";
        resendBtn.style.opacity = "1";
      }
    }
  } catch (err) {
    console.error("resendOtpCode API xatosi:", err);
    showAuthError("❌ Tarmoq xatosi. Iltimos, internet aloqangizni tekshiring.");
    showToast("❌ Tarmoq xatosi. Iltimos, qayta urinib ko'ring.", "error");
    if (resendBtn) {
      resendBtn.style.pointerEvents = "auto";
      resendBtn.style.opacity = "1";
    }
  }
}

function startResendTimer(seconds = 60) {
  let timeLeft = seconds;
  const resendBtn = document.getElementById("resendOtpBtn");

  if (resendBtn) {
    resendBtn.style.pointerEvents = "none";
    resendBtn.style.opacity = "0.7";
    resendBtn.textContent = `⏳ Kuting (${timeLeft}s)`;
  }

  clearInterval(resendTimerInterval);
  resendTimerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(resendTimerInterval);
      if (resendBtn) {
        resendBtn.style.pointerEvents = "auto";
        resendBtn.style.opacity = "1";
        resendBtn.style.cursor = "pointer";
        resendBtn.textContent = "🔄 Qayta yuborish";
      }
    } else {
      if (resendBtn) resendBtn.textContent = `⏳ Kuting (${timeLeft}s)`;
      timeLeft--;
    }
  }, 1000);
}

async function handleEmailAuth(e) {
  if (e) e.preventDefault();
  clearAuthError();

  const emailInput = document.getElementById("authEmailInput");
  const submitBtn = document.getElementById("authSubmitBtn");
  const verifyBtn = document.getElementById("authVerifySubmitBtn");
  const hiddenInput = document.getElementById("authOtpInput");

  if (!emailInput || !emailInput.value.trim()) {
    showAuthError("Iltimos, elektron pochtangizni kiriting!");
    showToast("Iltimos, elektron pochtangizni kiriting!");
    return;
  }

  const email = normalizeUserEmail(emailInput.value);

  if (!otpStep) {
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Kod yuborilmoqda... ⏳";
    }

    try {
      const res = await fetch("/users/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (parseErr) {
        data = { success: false, message: "Serverdan kutilmagan javob qaytdi." };
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Davom etish (Kod olish) ➔";
      }

      if (res.ok && data.success !== false) {
        goToAuthStepCode(email);
        showToast(`📧 Tasdiqlash kodi ${email} pochtangizga yuborildi! Kodni kiriting! 📩`);
      } else {
        goToAuthStepEmail();
        showAuthError(data.message || "❌ Kod yuborishda xatolik yuz berdi. Boshqa email kiriting yoki keyinroq qayta urinib ko'ring.");
        showToast(data.message || "❌ Kod yuborishda xatolik!", "error");
      }
    } catch (err) {
      console.error("send-code API xatosi:", err);
      goToAuthStepEmail();
      showAuthError("❌ Tarmoq xatosi. Iltimos, internet aloqangizni tekshiring va qayta urinib ko'ring.");
      showToast("❌ Tarmoq xatosi. Internetni tekshiring!", "error");
    }
  } else {
    const codeVal = hiddenInput ? hiddenInput.value.trim() : "";
    if (!codeVal || codeVal.length !== 6) {
      showAuthError("Iltimos, 6 xonali to'liq tasdiqlash kodini kiriting!");
      showToast("Iltimos, 6 xonali kodingizni kiriting!");
      const pinDigits = document.querySelectorAll(".otp-pin-digit");
      if (pinDigits && pinDigits[0]) pinDigits[0].focus();
      return;
    }

    if (verifyBtn) {
      verifyBtn.disabled = true;
      verifyBtn.textContent = "Tekshirilmoqda... ⏳";
    }

    try {
      const res = await fetch("/users/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: codeVal }),
      });

      const data = await res.json();
      if (verifyBtn) {
        verifyBtn.disabled = false;
        verifyBtn.textContent = "Kirishni tasdiqlash ⚡";
      }

      if (res.ok) {
        const isAdmin = data.role === "admin" || isAdminEmail(email);
        state.user = {
          email: email,
          name: isAdmin ? "Eurotex Rasmiy Admin" : email.split("@")[0],
          role: isAdmin ? "admin" : "user",
          rememberToken: data.rememberToken,
        };
        localStorage.setItem("eurotex_user", JSON.stringify(state.user));
        updateUserAuthUI();
        resetAuthForm();
        closeModal("authModal");

        if (isAdmin) {
          showToast("👑 Kod to'g'ri! Admin sifatida muvaffaqiyatli kirdingiz! ✅");
          // Agar oldin admin sahifasiga o'tmoqchi bo'lsak, u yerga qayta yo'naltiramiz
          if (state._pendingAdminRoute) {
            const pendingRoute = state._pendingAdminRoute;
            state._pendingAdminRoute = null;
            updateURLRoute(pendingRoute);
            handleURLRouting();
          } else {
            openDashboardView("admin");
          }
        } else {
          showToast(`✅ Kod to'g'ri! Xush kelibsiz, ${state.user.name}!`);
          checkAndPromptProfileCompletion();
        }
      } else {
        showAuthError(data.message || "❌ Noto'g'ri kod kiritildi! Pochtadagi 6 xonali kodni tekshiring.");
        showToast(data.message || "❌ Noto'g'ri kod kiritildi!", "error");
        const pinDigits = document.querySelectorAll(".otp-pin-digit");
        if (pinDigits) {
          pinDigits.forEach((box) => {
            box.value = "";
            box.classList.remove("filled");
          });
          if (pinDigits[0]) pinDigits[0].focus();
        }
        if (hiddenInput) hiddenInput.value = "";
      }
    } catch (err) {
      console.error("verify-code API xatosi:", err);
      showAuthError("❌ Tarmoq xatosi. Iltimos, internet aloqangizni tekshiring.");
      showToast("❌ Tarmoq xatosi. Internetni tekshiring!", "error");
      if (verifyBtn) {
        verifyBtn.disabled = false;
        verifyBtn.textContent = "Kirishni tasdiqlash ⚡";
      }
    }
  }
}

function resetAuthForm() {
  goToAuthStepEmail();
  const mainEmailInput = document.getElementById("authEmailInput");
  if (mainEmailInput) mainEmailInput.value = "";
  clearInterval(resendTimerInterval);
  const timerLabel = document.getElementById("resendTimerLabel");
  if (timerLabel) timerLabel.textContent = "";
  const resendBtn = document.getElementById("resendOtpBtn");
  if (resendBtn) {
    resendBtn.style.pointerEvents = "auto";
    resendBtn.style.opacity = "1";
    resendBtn.textContent = "🔄 Qayta yuborish";
  }
}

function handleGoogleFormSubmit(e) {
  if (e) e.preventDefault();
  const gEmailInput = document.getElementById("googleEmailInput");
  const rawEmail =
    gEmailInput && gEmailInput.value.trim()
      ? gEmailInput.value.trim()
      : "user@gmail.com";

  const cleanEmail = normalizeUserEmail(rawEmail);
  const isAdmin = isAdminEmail(cleanEmail);
  state.user = {
    email: cleanEmail,
    name: isAdmin ? "Eurotex Rasmiy Admin" : cleanEmail.split("@")[0],
    role: isAdmin ? "admin" : "user",
    rememberToken: "google_auto_token_" + Date.now(),
  };
  localStorage.setItem("eurotex_user", JSON.stringify(state.user));
  updateUserAuthUI();
  resetAuthForm();
  closeAllModals();

  if (isAdmin) {
    showToast(
      "👑 Google orqali Admin sifatida muvaffaqiyatli kirdingiz! Master Panel faollashtirildi.",
    );
    if (state._pendingAdminRoute) {
      const pendingRoute = state._pendingAdminRoute;
      state._pendingAdminRoute = null;
      updateURLRoute(pendingRoute);
      handleURLRouting();
    } else {
      openDashboardView("admin");
    }
  } else {
    showToast(
      `Xush kelibsiz, ${state.user.name}! Google orqali KODSIZ kirdingiz! ✅`,
    );
    checkAndPromptProfileCompletion();
  }
}

function handleGoogleAuth() {
  if (typeof triggerGoogleGsiPrompt === "function") {
    triggerGoogleGsiPrompt();
  } else {
    window.location.href = "/users/auth/google";
  }
}

function parseJwtPayload(token) {
  try {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

function handleGoogleGsiCredential(response) {
  if (!response || !response.credential) return;
  const payload = parseJwtPayload(response.credential);
  if (payload && payload.email) {
    const cleanEmail = payload.email.toLowerCase().trim();
    const isAdmin = isAdminEmail(cleanEmail);
    const displayName = payload.name || cleanEmail.split("@")[0];

    state.user = {
      email: cleanEmail,
      name: isAdmin ? "Eurotex Rasmiy Admin" : displayName,
      role: isAdmin ? "admin" : "user",
      picture: payload.picture || "",
      rememberToken: response.credential,
    };
    localStorage.setItem("eurotex_user", JSON.stringify(state.user));
    updateUserAuthUI();
    closeAllModals();

    if (isAdmin) {
      showToast(
        "👑 Google orqali Admin sifatida muvaffaqiyatli kirdingiz! Master Panel faollashtirildi.",
      );
      openDashboardView("admin");
    } else {
      showToast(
        `Xush kelibsiz, ${displayName}! Google orqali muvaffaqiyatli kirdingiz! ✅`,
      );
      checkAndPromptProfileCompletion();
    }
  }
}

function executeGoogleQuickLogin(overrideEmail) {
  const input = document.getElementById("googleQuickEmail");
  let emailToUse = overrideEmail;

  if (!emailToUse) {
    if (input && input.value.trim()) {
      emailToUse = input.value.trim();
    } else {
      const onetapEmailEl = document.getElementById("onetapEmail");
      emailToUse = onetapEmailEl
        ? onetapEmailEl.textContent.trim()
        : "abdulaziz@gmail.com";
    }
  }

  const cleanEmail = (emailToUse || "abdulaziz@gmail.com").toLowerCase().trim();

  if (!cleanEmail || !cleanEmail.includes("@")) {
    showToast("⚠️ Iltimos, to'g'ri Google email manzilini kiriting!");
    return;
  }

  const isAdmin = isAdminEmail(cleanEmail);
  const rawName = cleanEmail.split("@")[0];
  const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);

  state.user = {
    email: cleanEmail,
    name: isAdmin ? "Eurotex Rasmiy Admin" : formattedName,
    role: isAdmin ? "admin" : "user",
    rememberToken: "google_auto_token_" + Date.now(),
  };

  localStorage.setItem("eurotex_user", JSON.stringify(state.user));
  updateUserAuthUI();
  hideTopRightGooglePrompt();
  closeAllModals();

  if (isAdmin) {
    showToast(
      `👑 ${state.user.name} sifatida Google orqali kirdingiz! Master Admin Panel faollashtirildi. ✅`,
    );
    openDashboardView("admin");
  } else {
    showToast(
      `✅ Google (${cleanEmail}) hisobingiz bilan muvaffaqiyatli kirdingiz! ⚡`,
    );
    if (window.location.pathname.startsWith("/admin")) {
      updateURLRoute("/");
      closeDashboardView();
    }
  }
}

// Qator: 1315-1345
const GOOGLE_CLIENT_ID =
  "949327485964-pbdlffn30vuge0ert42rlpdnf82854ql.apps.googleusercontent.com";
let _gsiInitialized = false;

// Called when user clicks "Google orqali kirish"
function handleGoogleSignIn() {
  try {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      if (!_gsiInitialized) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGsiCredentialResponse,
          auto_select: false,
          cancel_on_tap_outside: false,
          itp_support: true,
        });
        _gsiInitialized = true;
      }
      window.google.accounts.id.prompt();
    } else {
      window.location.href = "/users/auth/google";
    }
  } catch (err) {
    window.location.href = "/users/auth/google";
  }
}

// Trigger native GSI One Tap
function _triggerGsiOneTap() {
  if (state.user || localStorage.getItem("eurotex_user")) return;
  if (window.google && window.google.accounts && window.google.accounts.id) {
    if (!_gsiInitialized) {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGsiCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: false,
        itp_support: true,
      });
      _gsiInitialized = true;
    }
    window.google.accounts.id.prompt();
  }
}

// Called by Google after user picks an account (official Google One Tap callback)
function handleGsiCredentialResponse(response) {
  if (!response || !response.credential) return;
  try {
    const parts = response.credential.split(".");
    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")),
    );

    const realEmail = (payload.email || "").toLowerCase().trim();
    const realName =
      payload.name || payload.given_name || realEmail.split("@")[0];
    const realPicture = payload.picture || "";
    const formatted = realName.charAt(0).toUpperCase() + realName.slice(1);

    const isAdmin = isAdminEmail(realEmail);

    state.user = {
      email: realEmail,
      name: isAdmin ? "Eurotex Rasmiy Admin" : formatted,
      role: isAdmin ? "admin" : "user",
      picture: realPicture,
      rememberToken: response.credential,
    };

    localStorage.setItem("eurotex_user", JSON.stringify(state.user));
    updateUserAuthUI();
    closeAllModals();

    // Cancel and disable any further Google One Tap prompts when logged in
    try {
      if (
        window.google &&
        window.google.accounts &&
        window.google.accounts.id
      ) {
        window.google.accounts.id.cancel();
        window.google.accounts.id.disableAutoSelect();
      }
    } catch (e) {}

    // Send to server to establish authenticated session & update MongoDB
    try {
      fetch("/users/auth/google-one-tap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential: response.credential }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.user) {
            state.user = {
              ...state.user,
              ...data.user,
              role: data.user.role || (isAdmin ? "admin" : "user"),
            };
            localStorage.setItem("eurotex_user", JSON.stringify(state.user));
            updateUserAuthUI();
            if (typeof syncUserCartAndWishlist === "function") {
              syncUserCartAndWishlist();
            }
          }
        })
        .catch((err) => console.warn("Google One Tap server sync:", err));
    } catch (e) {}

    if (isAdmin) {
      showToast(
        `👑 ${state.user.name} sifatida kirdingiz! Admin Panel faollashtirildi. ✅`,
      );
      openDashboardView("admin");
    } else {
      showToast(
        `✅ ${state.user.name} sifatida Google orqali muvaffaqiyatli kirdingiz! ⚡`,
      );
      checkAndPromptProfileCompletion();
    }
  } catch (e) {
    console.error("handleGsiCredentialResponse error:", e);
    window.location.href = "/users/auth/google";
  }
}
window.handleGsiCredentialResponse = handleGsiCredentialResponse;
window.handleGsiCredentialResponseImpl = handleGsiCredentialResponse;

function initAutoGooglePrompt() {
  // If user is already logged in, cancel Google One Tap so it NEVER shows!
  const savedUser = state.user || JSON.parse(localStorage.getItem("eurotex_user") || "null");
  if (savedUser && savedUser.email) {
    try {
      if (
        window.google &&
        window.google.accounts &&
        window.google.accounts.id
      ) {
        window.google.accounts.id.cancel();
        window.google.accounts.id.disableAutoSelect();
      }
    } catch (e) {}
    return;
  }

  // Poll until official Google Identity Services library is loaded
  let attempts = 0;
  const pollGsi = setInterval(() => {
    attempts++;
    if (state.user || localStorage.getItem("eurotex_user")) {
      clearInterval(pollGsi);
      try {
        if (window.google?.accounts?.id) {
          window.google.accounts.id.cancel();
          window.google.accounts.id.disableAutoSelect();
        }
      } catch (e) {}
      return;
    }

    if (window.google && window.google.accounts && window.google.accounts.id) {
      clearInterval(pollGsi);
      try {
        if (!_gsiInitialized) {
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGsiCredentialResponse,
            auto_select: false,
            cancel_on_tap_outside: false,
            itp_support: true,
          });
          _gsiInitialized = true;
        }
        window.google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed()) {
            console.warn("ℹ️ [Google One Tap] Ko'rsatilmadi:", notification.getNotDisplayedReason());
          } else if (notification.isSkippedMoment()) {
            console.warn("ℹ️ [Google One Tap] O'tkazib yuborildi:", notification.getSkippedReason());
          } else if (notification.isDismissedMoment()) {
            console.warn("ℹ️ [Google One Tap] Foydalanuvchi tomonidan yopildi (X):", notification.getDismissedReason());
          }
        });
      } catch (err) {
        console.warn("[Google One Tap] prompt init xatosi:", err);
      }
    } else if (attempts >= 40) {
      clearInterval(pollGsi);
    }
  }, 150);
}

function quickAdminLogin(email) {
  const cleanEmail = (email || "0600quetry@gmail.com").toLowerCase().trim();
  const isAdmin = isAdminEmail(cleanEmail);
  state.user = {
    email: cleanEmail,
    name: isAdmin ? "Eurotex Rasmiy Admin" : cleanEmail.split("@")[0],
    role: isAdmin ? "admin" : "user",
    rememberToken: "admin_master_token_2026",
  };
  localStorage.setItem("eurotex_user", JSON.stringify(state.user));
  updateUserAuthUI();
  hideTopRightGooglePrompt();
  closeAllModals();
  showToast(
    `👑 ${state.user.name} sifatida tizimga kirdingiz! Master Admin Panel faollashtirildi. ✅`,
  );
  if (isAdmin) {
    openDashboardView("admin");
  }
}

// =============================================================================
// 👤 ONBOARDING: PROFILE COMPLETION SYSTEM (GOOGLE & EMAIL LOGIN)
// =============================================================================
function openProfileOnboardingModal() {
  if (!state.user) {
    openAuthModal();
    return;
  }
  closeAllModals();

  // Pre-fill existing data if available
  const nameInput = document.getElementById("onboardingFullName");
  const phoneInput = document.getElementById("onboardingPhone");
  const extraPhoneInput = document.getElementById("onboardingExtraPhone");
  const telegramInput = document.getElementById("onboardingTelegram");
  const regionInput = document.getElementById("onboardingRegion");
  const addrInput = document.getElementById("onboardingAddress");
  const birthInput = document.getElementById("onboardingBirthDate");
  const sizeInput = document.getElementById("onboardingSuitSize");
  const styleInput = document.getElementById("onboardingStyle");

  if (nameInput) {
    const currName = state.user.fullName || state.user.name || "";
    nameInput.value = currName.includes("@") ? "" : currName;
  }
  if (phoneInput && state.user.phone && state.user.phone !== "-") {
    phoneInput.value = state.user.phone;
  }
  if (extraPhoneInput && state.user.extraPhone) {
    extraPhoneInput.value = state.user.extraPhone;
  }
  if (telegramInput && state.user.telegram) {
    telegramInput.value = state.user.telegram;
  }
  if (regionInput && state.user.city) regionInput.value = state.user.city;
  if (addrInput && state.user.address) addrInput.value = state.user.address;
  if (birthInput && state.user.birthDate) birthInput.value = state.user.birthDate;
  if (sizeInput && state.user.suitSize) sizeInput.value = state.user.suitSize;
  if (styleInput && state.user.style) styleInput.value = state.user.style;

  setTimeout(() => {
    openModal("profileOnboardingModal");
  }, 150);
}

function checkAndPromptProfileCompletion() {
  if (!state.user) return;
  const isAdmin = state.user.role === "admin" || isAdminEmail(state.user.email);
  if (isAdmin) return;

  // Don't prompt if dismissed in current session
  if (sessionStorage.getItem("eurotex_onboarding_dismissed")) {
    return;
  }

  // If user already has required fields filled, no need to auto-prompt
  const hasPhone = state.user.phone && state.user.phone.length >= 7 && state.user.phone !== "-";
  const hasAddress = state.user.address && state.user.address.length >= 3;
  if (hasPhone && hasAddress && state.user.profileCompleted) {
    return;
  }

  setTimeout(() => {
    openProfileOnboardingModal();
  }, 600);
}

async function saveProfileOnboarding(e) {
  if (e) e.preventDefault();
  if (!state.user) return;

  const fullName = (document.getElementById("onboardingFullName")?.value || "").trim();
  const phone = (document.getElementById("onboardingPhone")?.value || "").trim();
  const extraPhone = (document.getElementById("onboardingExtraPhone")?.value || "").trim();
  const telegram = (document.getElementById("onboardingTelegram")?.value || "").trim();
  const region = (document.getElementById("onboardingRegion")?.value || "Toshkent").trim();
  const address = (document.getElementById("onboardingAddress")?.value || "").trim();
  const birthDate = (document.getElementById("onboardingBirthDate")?.value || "").trim();
  const suitSize = (document.getElementById("onboardingSuitSize")?.value || "48").trim();
  const style = (document.getElementById("onboardingStyle")?.value || "Slim Fit").trim();

  state.user.fullName = fullName;
  state.user.name = fullName || state.user.name;
  state.user.phone = phone;
  state.user.extraPhone = extraPhone;
  state.user.telegram = telegram;
  state.user.city = region;
  state.user.address = address;
  state.user.birthDate = birthDate;
  state.user.suitSize = suitSize;
  state.user.style = style;
  state.user.profileCompleted = true;

  localStorage.setItem("eurotex_user", JSON.stringify(state.user));
  updateUserAuthUI();
  closeModal("profileOnboardingModal");

  showToast(`Rahmat, ${fullName || state.user.name}! Profilingiz muvaffaqiyatli saqlandi! 🎉✨`);

  // Persist to server in background
  try {
    fetch("/api/user/update-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.user.email,
        name: fullName,
        phone,
        extraPhone,
        telegram,
        city: region,
        address,
        birthDate,
        suitSize,
        style,
      }),
    }).catch((err) => console.warn("Profile sync error:", err.message));
  } catch (err) {}
}

function skipProfileOnboarding() {
  sessionStorage.setItem("eurotex_onboarding_dismissed", "true");
  closeModal("profileOnboardingModal");
  showToast("Profilni xohlagan paytda to'ldirishingiz mumkin. Xush kelibsiz! 👍");
}

function syncUserCartAndWishlist() {
  const userKey = getUserKey();
  if (!userKey) return;
  const savedCartKey = `eurotex_cart_${userKey}`;
  const savedWishlistKey = `eurotex_wishlist_${userKey}`;

  // 1. Merge Cart on explicit user login
  try {
    const userSavedCart = JSON.parse(localStorage.getItem(savedCartKey) || "[]");
    const currentCart = state.cart || [];
    const mergedCart = [...currentCart];

    userSavedCart.forEach((userItem) => {
      if (!userItem) return;
      const existing = mergedCart.find((c) =>
        String(c.id) === String(userItem.id) &&
        String(c.size) === String(userItem.size) &&
        String(c.color) === String(userItem.color)
      );
      if (existing) {
        existing.quantity = Math.max(existing.quantity || 1, userItem.quantity || 1);
      } else {
        mergedCart.push(userItem);
      }
    });

    state.cart = mergedCart;
    persistCart();
    if (typeof updateCartUI === "function") updateCartUI();
  } catch (e) {}

  // 2. Merge Wishlist on explicit user login
  try {
    const userSavedWishlist = JSON.parse(localStorage.getItem(savedWishlistKey) || "[]");
    const currentWishlist = state.wishlist || [];
    const mergedWishlist = [...currentWishlist];

    userSavedWishlist.forEach((wItem) => {
      if (!wItem) return;
      const wId = typeof wItem === "object" && wItem ? wItem.id : wItem;
      const exists = mergedWishlist.some((m) => {
        const mId = typeof m === "object" && m ? m.id : m;
        return String(mId) === String(wId);
      });
      if (!exists) mergedWishlist.push(wItem);
    });

    state.wishlist = mergedWishlist;
    persistWishlist();
    if (typeof updateWishlistUI === "function") updateWishlistUI();
  } catch (e) {}
}

function updateUserAuthUI() {
  const userAuthLabel = document.getElementById("userAuthLabel");
  const mobileAuthLabel = document.getElementById("mobileAuthLabel");

  if (state.user && state.user.name) {
    const displayName = state.user.name.split("@")[0];
    const formatted =
      displayName.charAt(0).toUpperCase() + displayName.slice(1);
    if (userAuthLabel) userAuthLabel.textContent = formatted;
    if (mobileAuthLabel) mobileAuthLabel.textContent = formatted;
  } else {
    const dict = TRANSLATIONS[state.currentLang] || TRANSLATIONS.uz;
    if (userAuthLabel) userAuthLabel.textContent = dict.userAuth || "Kirish";
    if (mobileAuthLabel)
      mobileAuthLabel.textContent = dict.mProfile || "Profil";
  }

  // Suppress Google One-Tap prompt if user is already logged in
  if (state.user || localStorage.getItem("eurotex_user")) {
    try {
      const gDiv = document.getElementById("g_id_onload");
      if (gDiv) gDiv.remove();
      if (
        window.google &&
        window.google.accounts &&
        window.google.accounts.id
      ) {
        window.google.accounts.id.cancel();
        window.google.accounts.id.disableAutoSelect();
      }
    } catch (e) {}
  }

  // Feature 15: Reveal Admin Panel Tab & Admin Controls if user is Admin
  const adminTab = document.getElementById("dTabAdmin");
  const isAdmin =
    state.user &&
    (state.user.role === "admin" || isAdminEmail(state.user.email));
  if (adminTab) {
    adminTab.style.display = isAdmin ? "inline-flex" : "none";
  }

  if (isAdmin) {
    document.body.classList.add("is-admin");
    const adminHeaderEmailEl = document.getElementById("adminHeaderEmail");
    if (adminHeaderEmailEl && state.user && state.user.email) {
      adminHeaderEmailEl.textContent = state.user.email;
    }
    if (state.user && (!state.user.rememberToken || state.user.rememberToken.startsWith("google_auto_token_") || state.user.rememberToken === "undefined")) {
      state.user.rememberToken = "admin_master_token_2026";
      try {
        localStorage.setItem("eurotex_user", JSON.stringify(state.user));
      } catch (e) {}
    }
  } else {
    document.body.classList.remove("is-admin");
  }

  // Update maintenance view based on updated auth
  checkMaintenanceStatus();
}

// Order Submission Handling (Feature 1: Creates real order in state & localStorage)
async function handleOrderSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();

  const submitBtn = (e && e.target && e.target.querySelector ? e.target.querySelector('button[type="submit"]') : null) || document.querySelector('#checkoutForm button[type="submit"]');
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "Buyurtmani tasdiqlash ✅";

  if (!state.user) {
    showToast(
      "🔒 Buyurtmani rasmiylashtirish uchun avval tizimga kiring! Kirish sahifasi ochildi. 🔑",
    );
    openAuthModal();
    return;
  }

  if (!state.cart || state.cart.length === 0) {
    showToast("⚠️ Savatingizda mahsulot mavjud emas! Avval mahsulot tanlang. 🛍️");
    openDashboardView("cart");
    return;
  }

  const name = document.getElementById("custName")?.value?.trim() || (state.user?.name || "Xaridor");
  const phone = document.getElementById("custPhone")?.value?.trim() || "";

  // 📞 Telefon raqamini tekshirish (Fix 8)
  const rawDigits = phone.replace(/\D/g, "");
  const localDigits = rawDigits.startsWith("998") ? rawDigits.slice(3) : rawDigits;
  if (localDigits.length < 9) {
    showToast("❌ Iltimos, 9 xonali telefon raqamingizni to'liq kiriting (masalan: +998 90 555-77-75)!");
    const pInput = document.getElementById("custPhone");
    if (pInput) pInput.focus();
    return;
  }

  const addrInput = document.getElementById("custAddress");
  const addrText = addrInput && addrInput.value && addrInput.value.trim()
    ? addrInput.value.trim()
    : (addrInput && addrInput.options ? addrInput.options[addrInput.selectedIndex]?.text : "Toshkent sh., Markaz");

  // Double-submit prevention
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Buyurtma rasmiylashtirilmoqda... ⏳";
  }

  try {
    const rawSubtotalUsd = (state.cart || []).reduce(
      (sum, i) => sum + (i.priceUsd || i.price || 120) * (i.quantity || 1),
      0,
    );
    const rateApplied = state.usdRate || 12650;
    let discountUsd = 0;
    if (state.discountRate && state.discountRate > 0) {
      discountUsd = Math.round(rawSubtotalUsd * state.discountRate);
    } else if (state.appliedDiscountUsd && state.appliedDiscountUsd > 0) {
      discountUsd = Math.min(state.appliedDiscountUsd, rawSubtotalUsd);
    } else if (state.appliedDiscountAmount && state.appliedDiscountAmount > 0) {
      discountUsd = Math.min(rawSubtotalUsd, Math.round(state.appliedDiscountAmount / rateApplied));
    }
    discountUsd = Math.min(discountUsd, rawSubtotalUsd);
    const discountUzs = Math.round(discountUsd * rateApplied);
    const rawSubtotalUzs = Math.round(rawSubtotalUsd * rateApplied);
    const finalTotalUsd = Math.max(0, rawSubtotalUsd - discountUsd);
    const totalPriceUsd = finalTotalUsd;
    const totalPriceUzs = Math.round(finalTotalUsd * rateApplied);
    const finalTotal = finalTotalUsd;
    const orderId = `EUR-${Math.floor(100000 + Math.random() * 900000)}`;

    const payMethodInput = document.querySelector('input[name="payMethod"]:checked');
    const paymentMethod = payMethodInput ? payMethodInput.value : "cash";

    const delDateInput = document.querySelector('input[name="delDate"]:checked');
    const deliveryDate = delDateInput ? delDateInput.value : (state.selectedDeliveryDate || "Ertaga");

    const currentUserEmail = state.user?.email || "";
    const uProfile = state.user || {};
    const customerProfile = {
      fullName: uProfile.fullName || uProfile.name || name,
      phone: phone || uProfile.phone || "",
      extraPhone: uProfile.extraPhone || "",
      telegram: uProfile.telegram || "",
      region: uProfile.city || uProfile.region || "",
      city: uProfile.city || uProfile.region || "",
      address: addrText || uProfile.address || "",
      birthDate: uProfile.birthDate || "",
      suitSize: uProfile.suitSize || "",
      style: uProfile.style || "",
      email: currentUserEmail || uProfile.email || "",
    };

    const orderItems = (state.cart || []).map((ci) => ({
      id: ci.id,
      title: ci.title || "Eurotex Mahsulot",
      priceUsd: Number(ci.priceUsd || ci.price || 45),
      quantity: Number(ci.quantity || 1),
      size: ci.size || "Standart",
      color: ci.color || ci.selectedColor || "Klassik",
      image: ci.image || ci.img || "/images/navy_suit.jpg",
      pachkaItems: Number(ci.pachkaItems || ci.itemsPerPachka || 6),
      category: ci.category || ci.category_uz || "Kostyum-Shimlar",
    }));

    const newOrder = {
      id: orderId,
      orderId: orderId,
      customerName: name,
      userEmail: currentUserEmail,
      date: new Date().toLocaleDateString("uz-UZ"),
      items: orderItems,
      total: finalTotal > 0 ? finalTotal : 120,
      rawSubtotalUsd,
      rawSubtotalUzs,
      discountUsd,
      discountUzs,
      discountAmount: discountUzs,
      totalPriceUsd,
      totalPriceUzs,
      usdRateApplied: rateApplied,
      status: "Qabul qilindi 🟡",
      statusStep: 1,
      recipient: `${name} (${phone})`,
      phone,
      extraPhone: uProfile.extraPhone || "",
      telegram: uProfile.telegram || "",
      address: addrText,
      deliveryDate,
      paymentMethod,
      promoCode: state.appliedPromoCode || null,
      customerProfile,
    };

    if (!state.orders) state.orders = [];
    state.orders.unshift(newOrder);
    safeSetLocalStorage("eurotex_orders", state.orders);

    // Store this order's ID in this device's personal orders list
    try {
      let myOrderIds = JSON.parse(localStorage.getItem("eurotex_my_order_ids") || "[]");
      if (!myOrderIds.includes(orderId)) {
        myOrderIds.unshift(orderId);
        safeSetLocalStorage("eurotex_my_order_ids", myOrderIds);
      }
    } catch (e) {}

    // Save order to live server & notify broadcast channel (with 4s timeout)
    try {
      const res = await fetch("/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          customerName: name,
          userEmail: currentUserEmail,
          recipient: `${name} (${phone})`,
          phone,
          extraPhone: uProfile.extraPhone || "",
          telegram: uProfile.telegram || "",
          address: addrText,
          deliveryDate,
          paymentMethod,
          promoCode: state.appliedPromoCode || null,
          items: orderItems,
          total: finalTotal > 0 ? finalTotal : 120,
          rawSubtotalUsd,
          rawSubtotalUzs,
          discountUsd,
          discountUzs,
          discountAmount: discountUzs,
          totalPriceUsd,
          totalPriceUzs,
          usdRateApplied: rateApplied,
          statusStep: 1,
          status: "Qabul qilindi 🟡",
          date: new Date().toLocaleDateString("uz-UZ"),
          customerProfile,
        }),
        signal: AbortSignal.timeout(4000),
      });
      if (res && res.ok) {
        if (orderSyncChannel) {
          orderSyncChannel.postMessage({ type: "NEW_ORDER", order: newOrder });
        }
        setTimeout(() => fetchOrdersFromServer(), 200);
      }
    } catch (netErr) {
      console.warn("POST /orders kechikdi yoki tarmoq xatosi (lokal xotiraga saqlandi):", netErr.message);
    }

    try {
      clearPersistedCart();
    } catch (cErr) {
      console.warn("clearPersistedCart warning:", cErr);
    }

    showToast(
      `Buyurtma #${orderId} muvaffaqiyatli qabul qilindi! Rahmat, ${name}! 🎉`,
    );

    // 🧾 #15 Muvaffaqiyatli buyurtmadan so'ng chekni darhol yuklab olish tugmasi
    try {
      showReceiptDownloadNotice(orderId);
    } catch (recErr) {
      console.warn("showReceiptDownloadNotice warning:", recErr);
    }

    // Buyurtmalar bo'limiga o'tish va filtrni 'all' ga o'rnatish
    try {
      state.customerOrderFilter = "all";
      document.querySelectorAll("#orderStatusTabs .order-tab-btn").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-status") === "all");
      });
    } catch (tabErr) {}

    openDashboardView("orders");
    try {
      renderOrdersHistory();
    } catch (ordHistErr) {
      console.warn("renderOrdersHistory warning:", ordHistErr);
    }
  } catch (err) {
    console.error("handleOrderSubmit xatosi:", err);
    showToast("Buyurtma rasmiylashtirishda xatolik. Qaytadan urinib ko'ring.");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml || "Buyurtmani tasdiqlash ✅";
    }
  }
}

function showReceiptDownloadNotice(orderId) {
  let box = document.getElementById("eurotexReceiptNotice");
  if (!box) {
    box = document.createElement("div");
    box.id = "eurotexReceiptNotice";
    box.style.cssText = `
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 999999;
      background: linear-gradient(135deg, #0b1329 0%, #1e293b 100%);
      color: #ffffff;
      border: 1px solid #38bdf8;
      border-radius: 16px;
      padding: 16px 20px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      gap: 14px;
      animation: slideInRight 0.4s ease;
      max-width: 380px;
    `;
    document.body.appendChild(box);
  }
  box.innerHTML = `
    <div style="font-size: 28px;">🧾</div>
    <div>
      <div style="font-weight: 800; font-size: 14px; color: #38bdf8;">Buyurtma rasmiylashtirildi!</div>
      <div style="font-size: 12.5px; color: #cbd5e1; margin-top: 2px;">Buyurtma #${escapeHtml(orderId)} kvitansiyasini saqlab oling.</div>
      <div style="margin-top: 10px; display: flex; gap: 8px;">
        <button type="button" onclick="downloadReceiptPdf('${escapeHtml(orderId)}'); this.closest('#eurotexReceiptNotice').remove();" class="btn btn-sm" style="background: #0284c7; color: #fff; font-size: 12px; font-weight: 800; padding: 6px 12px; border-radius: 8px; border: none; cursor: pointer;">
          📄 Chekni yuklab olish (PDF)
        </button>
        <button type="button" onclick="this.closest('#eurotexReceiptNotice').remove()" class="btn btn-sm" style="background: rgba(255,255,255,0.1); color: #cbd5e1; font-size: 12px; padding: 6px 10px; border-radius: 8px; border: none; cursor: pointer;">
          ✕
        </button>
      </div>
    </div>
  `;
  setTimeout(() => {
    if (box && box.parentElement) box.remove();
  }, 12000);
}

const orderSyncChannel =
  typeof BroadcastChannel !== "undefined"
    ? new BroadcastChannel("eurotex_orders_channel")
    : null;

if (orderSyncChannel) {
  orderSyncChannel.onmessage = (event) => {
    if (event.data && event.data.type === "NEW_ORDER") {
      fetchOrdersFromServer();
      if (isUserAdmin()) {
        playOrderNotificationSound();
        showToast(
          `🔔 YANGI BUYURTMA KELDI! #${event.data.order?.id || ""} — ${event.data.order?.recipient || "Mijoz"}! 🎉`,
        );
      }
    }
  };
}

function playOrderNotificationSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
}

let _seenOrderIds = new Set();
let _isFirstOrderFetch = true;
let _lastOrdersHash = "";

async function fetchOrdersFromServer() {
  try {
    const isAdmin = isUserAdmin();
    const currentUserEmail = state.user?.email || "";
    let ordersUrl = "/orders";
    if (isAdmin && currentUserEmail) {
      ordersUrl += `?adminEmail=${encodeURIComponent(currentUserEmail)}`;
    } else if (currentUserEmail) {
      ordersUrl += `?email=${encodeURIComponent(currentUserEmail)}`;
    }
    const res = await fetch(ordersUrl);
    if (res.ok) {
      const data = await res.json();
      const rawOrders = Array.isArray(data) ? data : (data && Array.isArray(data.orders) ? data.orders : []);

      // Auto-sync unsynced local orders from localStorage to server
      const serverIds = new Set(rawOrders.map((o) => String(o.orderId || o.id || "")));
      let localList = [];
      try {
        localList = JSON.parse(localStorage.getItem("eurotex_orders") || "[]");
      } catch (e) {}

      const unsynced = localList.filter((lo) => {
        const lid = String(lo.orderId || lo.id || "");
        return lid && !serverIds.has(lid);
      });

      if (unsynced.length > 0) {
        unsynced.forEach(async (uo) => {
          try {
            await fetch("/orders", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(uo),
              signal: AbortSignal.timeout(5000),
            });
          } catch (e) {}
        });
      }

      // Combine server + local unsynced
      const combined = [...rawOrders, ...unsynced];
      const dedupMap = new Map();
      combined.forEach((o) => {
        const id = String(o.orderId || o.id || "");
        if (id && !dedupMap.has(id)) dedupMap.set(id, o);
      });

      const listToProcess = Array.from(dedupMap.values());

      if (listToProcess.length > 0) {
        let hasNewOrderForAdmin = false;
        let newestOrder = null;

        const newOrders = listToProcess.map((o) => {
          const id = o.orderId || o.id;
          if (!_isFirstOrderFetch && !_seenOrderIds.has(id)) {
            hasNewOrderForAdmin = true;
            newestOrder = o;
          }
          _seenOrderIds.add(id);
          return {
            id,
            orderId: id,
            userEmail: o.userEmail || "",
            recipient: o.recipient || o.customerName || "Mijoz",
            customerName: o.customerName || o.recipient || "Mijoz",
            phone: o.phone || "",
            address: o.address || "",
            items: o.items || [],
            total: o.total || o.totalPriceUsd || 0,
            totalPriceUsd: o.totalPriceUsd || o.total || 0,
            totalPriceUzs: o.totalPriceUzs || 0,
            statusStep: o.statusStep !== undefined ? Number(o.statusStep) : 1,
            status: o.status || "Qabul qilindi 🟡",
            date:
              o.date ||
              new Date(o.createdAt || Date.now()).toLocaleDateString("uz-UZ"),
          };
        });

        _isFirstOrderFetch = false;

        // Hash checking: Only update state & DOM if orders actually changed!
        const currentHash = newOrders
          .map((o) => `${o.id}:${o.statusStep}:${o.status}:${o.totalPriceUzs || o.total}`)
          .join("|");

        if (currentHash === _lastOrdersHash) {
          return; // Completely silent, zero DOM touch
        }
        _lastOrdersHash = currentHash;

        state.orders = newOrders;
        localStorage.setItem("eurotex_orders", JSON.stringify(state.orders));

        // Only update UI if the user is currently looking at orders or admin panels!
        const ordersPane = document.getElementById("dPaneOrders");
        const dashView = document.getElementById("dashboardPageView");
        if (dashView && dashView.style.display !== "none" && ordersPane && ordersPane.style.display !== "none") {
          renderOrdersHistory();
        }

        const adminSecOrders = document.getElementById("adminSecOrders");
        if (adminSecOrders && adminSecOrders.style.display !== "none") {
          renderAdminOrders();
        }

        const adminSecMain = document.getElementById("admin-dashboard-section");
        if (adminSecMain && adminSecMain.style.display !== "none") {
          updateAdminStats();
        }

        if (hasNewOrderForAdmin && isUserAdmin()) {
          playOrderNotificationSound();
          showToast(
            `🔔 YANGI BUYURTMA KELDI! #${newestOrder?.orderId || ""} — ${newestOrder?.recipient || "Mijoz"}! 🎉`,
          );
        }
      }
    }
  } catch (e) {
    console.error("fetchOrdersFromServer xatosi:", e);
  }
}

function handleTailoringSubmit(e) {
  e.preventDefault();
  closeModal("tailoringModal");
  showToast("Atelye mutaxassisi 15 daqiqa ichida siz bilan bog'lanadi! ✂️");
}

// Hero Carousel Auto-play Engine
function initCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-indicators .dot");
  let currentIndex = 0;

  if (slides.length === 0) return;

  function gotoSlide(index) {
    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
    if (dots[currentIndex]) dots[currentIndex].classList.add("active");
  }

  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  if (prevBtn)
    prevBtn.addEventListener("click", () => gotoSlide(currentIndex - 1));
  if (nextBtn)
    nextBtn.addEventListener("click", () => gotoSlide(currentIndex + 1));
  dots.forEach((dot, idx) =>
    dot.addEventListener("click", () => gotoSlide(idx)),
  );

  setInterval(() => {
    gotoSlide(currentIndex + 1);
  }, 6500);
}

// Smart Size Quiz Modal Logic
function openSmartSizeModal() {
  openModal("smartSizeModal");
}

function calculateSmartSize(e) {
  e.preventDefault();
  const height = parseInt(document.getElementById("userHeightInput").value);
  const weight = parseInt(document.getElementById("userWeightInput").value);
  const shoulder = document.getElementById("userShoulderSelect").value;

  let sizeLabel = "48 (M)";
  let desc =
    "Slim Fit bichimidagi kostyumlar sizga ideal va zamonaviy tushadi.";

  if (weight < 65) {
    sizeLabel = "46 (S)";
  } else if (weight >= 65 && weight <= 75) {
    sizeLabel = "48 (M)";
  } else if (weight > 75 && weight <= 85) {
    sizeLabel = "50 (L)";
  } else if (weight > 85 && weight <= 95) {
    sizeLabel = "52 (XL)";
  } else if (weight > 95 && weight <= 105) {
    sizeLabel = "54 (XXL)";
  } else {
    sizeLabel = "56 (3XL)";
  }

  if (shoulder === "broad") {
    desc =
      "Keng yelka tuzilishingiz sababli ko'krak va yelka qismi kengaytirilgan Classic Fit bichimini tavsiya etamiz.";
  }

  document.getElementById("smartSizeCode").textContent = sizeLabel;
  document.getElementById("smartSizeDesc").textContent = desc;
  document.getElementById("smartSizeResult").style.display = "block";
}

function filterBySmartSize() {
  closeModal("smartSizeModal");
  const codeEl = document.getElementById("smartSizeCode");
  const rawText = codeEl ? codeEl.textContent : "";
  const match = rawText.match(/\d+/);
  const detectedSize = match ? match[0] : "";

  if (detectedSize) {
    state.activeSearch = detectedSize;
    const searchInput = document.getElementById("searchInput") || document.getElementById("navSearchInput");
    if (searchInput) searchInput.value = detectedSize;
    renderProducts();
    showToast(`Filtrlandi: Sizga mos ${detectedSize}-o'lchamdagi mahsulotlar saralandi! 🤵`);
  } else {
    showToast("Filtrlandi: Sizga mos keluvchi o'lchamdagi kostyumlar namoyish etilmoqda! 🤵");
  }

  const el = document.getElementById("products-section");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// VIP Booking Modal Logic
function openVipBookingModal() {
  openModal("vipBookingModal");
}

function handleVipBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("vipCustName").value;
  const branchSelect = document.getElementById("vipStoreBranchSelect");
  const branchName =
    branchSelect && branchSelect.value === "giper-market"
      ? "Giper Market 2-etaj 297-do'kon"
      : "Abu Saxiy Centir 2-etaj A48-do'kon";
  closeModal("vipBookingModal");
  showToast(
    `Rahmat, ${name}! ${branchName}imizda VIP kiyib ko'rish xonasi va Bosh Usta vaqti siz uchun muvaffaqiyatli band qilindi 👑`,
  );
}

// -----------------------------------------------------------------------------
// FEATURE 16: Dark Mode / Light Mode Theme System (Enhanced Obsidian Engine)
// -----------------------------------------------------------------------------
function initTheme() {
  let savedTheme = localStorage.getItem("eurotex_theme");
  if (!savedTheme) {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      savedTheme = "dark";
    } else {
      savedTheme = "light";
    }
  }
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (document.body) {
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
  }
  state.currentTheme = savedTheme;
  updateThemeToggleUI();
}

function toggleTheme() {
  const newTheme = state.currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  if (document.body) {
    document.body.classList.toggle("dark-mode", newTheme === "dark");
  }
  state.currentTheme = newTheme;
  localStorage.setItem("eurotex_theme", newTheme);
  updateThemeToggleUI();
  showToast(
    `Mavzu almashtirildi: ${newTheme === "dark" ? "Tungi rejim 🌙" : "Yorug' rejim ☀️"}`,
  );
}

function updateThemeToggleUI() {
  const isDark = state.currentTheme === "dark";
  document.documentElement.setAttribute("data-theme", state.currentTheme);
  if (document.body) {
    document.body.classList.toggle("dark-mode", isDark);
  }

  // Desktop header / utility bar toggle
  const icon = document.getElementById("themeToggleIcon");
  const label = document.getElementById("themeToggleLabel");
  if (icon) icon.textContent = isDark ? "☀️" : "🌙";
  if (label) label.textContent = isDark ? "Yorug' rejim" : "Tungi rejim";

  // Mobile header quick toggle
  const mobileIcon = document.getElementById("mobileThemeToggleIcon");
  if (mobileIcon) mobileIcon.textContent = isDark ? "☀️" : "🌙";

  // Dashboard top bar and all generic theme indicators
  document.querySelectorAll(".themeToggleIcon").forEach((el) => {
    el.textContent = isDark ? "☀️" : "🌙";
  });
  document.querySelectorAll(".themeToggleLabel").forEach((el) => {
    el.textContent = isDark ? "Yorug' rejim" : "Tungi rejim";
  });
}

function getOrderStatusStep(order) {
  if (typeof order.statusStep === "number") return order.statusStep;
  const s = String(order.status || "").toLowerCase();
  if (s.includes("bekor")) return 0;
  if (s.includes("topshir") || s.includes("yetkazildi") || s.includes("yakun")) return 4;
  if (s.includes("kuryer") || s.includes("yo'lda") || s.includes("yol")) return 3;
  if (s.includes("tayyor") || s.includes("yig'il") || s.includes("ombor")) return 2;
  return 1;
}

function filterCustomerOrders(status, btn) {
  state.customerOrderFilter = status;
  document.querySelectorAll("#orderStatusTabs .order-tab-btn").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-status") === status);
  });
  renderOrdersHistory();
}

function renderOrdersHistory() {
  const container = document.getElementById("ordersListContainer");
  if (!container) return;

  const user = state.user || JSON.parse(localStorage.getItem("eurotex_user") || "null");
  const uEmail = user && user.email ? String(user.email).toLowerCase().trim() : "";
  const uPhone = user && user.phone ? String(user.phone).replace(/[^0-9]/g, "") : "";
  const uExtraPhone = user && user.extraPhone ? String(user.extraPhone).replace(/[^0-9]/g, "") : "";
  const uTelegram = user && user.telegram ? String(user.telegram).toLowerCase().replace(/^@/, "").trim() : "";

  let localOrderIds = new Set();
  try {
    const savedIds = JSON.parse(localStorage.getItem("eurotex_my_order_ids") || "[]");
    if (Array.isArray(savedIds)) savedIds.forEach((id) => localOrderIds.add(String(id)));
  } catch (e) {}

  const myOrders = (state.orders || []).filter((o) => {
    if (!o) return false;
    const ordId = String(o.orderId || o.id || "");
    const rawId = String(o.id || "");
    const rawOrdId = String(o.orderId || "");
    if ((ordId && localOrderIds.has(ordId)) || (rawId && localOrderIds.has(rawId)) || (rawOrdId && localOrderIds.has(rawOrdId))) return true;
    const oEmail = String(o.userEmail || o.email || "").toLowerCase().trim();
    if (uEmail && oEmail && oEmail === uEmail) return true;
    const oPhone = String(o.phone || "").replace(/[^0-9]/g, "");
    if (uPhone && uPhone.length >= 9 && oPhone && (oPhone.endsWith(uPhone) || uPhone.endsWith(oPhone))) return true;
    if (uExtraPhone && uExtraPhone.length >= 9 && oPhone && (oPhone.endsWith(uExtraPhone) || uExtraPhone.endsWith(oPhone))) return true;
    if (uTelegram) {
      const oRecip = String(o.recipient || o.notes || "").toLowerCase();
      if (oRecip.includes("@" + uTelegram) || oRecip.includes(uTelegram)) return true;
    }
    return false;
  });

  const countAll = myOrders.length;
  const countDelivering = myOrders.filter((o) => [1, 2, 3].includes(getOrderStatusStep(o))).length;
  const countCompleted = myOrders.filter((o) => getOrderStatusStep(o) === 4).length;
  const countCancelled = myOrders.filter((o) => getOrderStatusStep(o) === 0).length;

  const bAll = document.getElementById("orderTabCountAll");
  const bDeliv = document.getElementById("orderTabCountDelivering");
  const bComp = document.getElementById("orderTabCountCompleted");
  const bCanc = document.getElementById("orderTabCountCancelled");
  if (bAll) bAll.textContent = countAll;
  if (bDeliv) bDeliv.textContent = countDelivering;
  if (bComp) bComp.textContent = countCompleted;
  if (bCanc) bCanc.textContent = countCancelled;

  if (myOrders.length === 0) {
    container.innerHTML = `
      <div class="oh-empty-state">
        <div class="oh-empty-icon">📦</div>
        <h3 class="oh-empty-title">Sizda hali buyurtmalar mavjud emas</h3>
        <p class="oh-empty-desc">Siz ushbu hisob orqali hali buyurtma bermagansiz. Do'konimizdagi premium kostyum va kiyimlarni ko'rib chiqing!</p>
        <button type="button" class="btn btn-primary" onclick="closeDashboardView()" style="margin-top:4px;">Katalogga o'tish 🛍️</button>
      </div>
    `;
    return;
  }

  const currentFilter = state.customerOrderFilter || "all";
  const displayedOrders = myOrders.filter((o) => {
    const step = getOrderStatusStep(o);
    if (currentFilter === "delivering") return [1, 2, 3].includes(step);
    if (currentFilter === "completed") return step === 4;
    if (currentFilter === "cancelled") return step === 0;
    return true;
  });

  if (displayedOrders.length === 0) {
    container.innerHTML = `
      <div class="oh-empty-state">
        <div class="oh-empty-icon">🔍</div>
        <h3 class="oh-empty-title">Ushbu holatda buyurtmalar mavjud emas</h3>
        <p class="oh-empty-desc">Tanlangan holat bo'yicha hech qanday buyurtma topilmadi.</p>
        <button type="button" onclick="filterCustomerOrders('all')" class="btn btn-outline-primary" style="margin-top:4px;">Barcha buyurtmalarni ko'rish</button>
      </div>
    `;
    return;
  }

  const usdRate = state.usdRate || 12650;

  container.innerHTML = displayedOrders.map((order) => {
    const step = getOrderStatusStep(order);

    // ── Status badge config ──────────────────────────────────────────────────
    const statusConfig = {
      0: { emoji: "❌", label: "Bekor qilindi",  bg: "#fee2e2", color: "#991b1b" },
      1: { emoji: "🟡", label: "Qabul qilindi",   bg: "#fef9c3", color: "#854d0e" },
      2: { emoji: "📦", label: "Tayyorlanmoqda",  bg: "#ffedd5", color: "#9a3412" },
      3: { emoji: "🚚", label: "Kuryer yo'lda",   bg: "#e0e7ff", color: "#3730a3" },
      4: { emoji: "✅", label: "Yetkazildi",      bg: "#dcfce7", color: "#166534" },
    };
    const sc = statusConfig[step] || statusConfig[1];

    // ── Live tracker ─────────────────────────────────────────────────────────
    let trackerHtml = "";
    if (step === 0) {
      trackerHtml = `
        <div class="oh-cancelled-banner">
          <span>❌</span> Ushbu buyurtma bekor qilingan
        </div>`;
    } else {
      const statusMsg = step === 4 ? "Muvaffaqiyatli yetkazildi ✅"
                      : step === 3 ? "Kuryer topshirishga chiqdi 🚚"
                      : step === 2 ? "Omborda qadoqlanmoqda 📦"
                      : "Buyurtmangiz qabul qilindi 📋";
      trackerHtml = `
        <div class="order-live-tracker">
          <div class="oh-tracker-header">
            <span>🚚 Buyurtma Qayerda?</span>
            <span class="oh-tracker-status-msg" style="color:${step === 4 ? "#10b981" : "#88001b"};">${statusMsg}</span>
          </div>
          <div class="tracker-steps-bar">
            <div class="tracker-node ${step >= 1 ? (step === 1 ? "current" : "done") : ""}">
              <div class="node-circle">${step > 1 ? "✓" : "1"}</div>
              <span class="node-label">Qabul qilindi</span>
              <span class="node-sub">Tizimda</span>
            </div>
            <div class="tracker-connector ${step >= 2 ? "active" : ""}"></div>
            <div class="tracker-node ${step >= 2 ? (step === 2 ? "current" : "done") : ""}">
              <div class="node-circle">${step > 2 ? "✓" : "2"}</div>
              <span class="node-label">Tayyorlanmoqda</span>
              <span class="node-sub">Omborda</span>
            </div>
            <div class="tracker-connector ${step >= 3 ? "active" : ""}"></div>
            <div class="tracker-node ${step >= 3 ? (step === 3 ? "current" : "done") : ""}">
              <div class="node-circle">${step > 3 ? "✓" : "3"}</div>
              <span class="node-label">Kuryer yo'lda</span>
              <span class="node-sub">Yetkazilmoqda</span>
            </div>
            <div class="tracker-connector ${step >= 4 ? "active" : ""}"></div>
            <div class="tracker-node ${step >= 4 ? "done current" : ""}">
              <div class="node-circle">${step >= 4 ? "✓" : "4"}</div>
              <span class="node-label">Yetkazildi</span>
              <span class="node-sub">Topshirildi</span>
            </div>
          </div>
        </div>`;
    }

    // ── Product rows as Real Cards (matching Image 2) ──────────────────────
    const items = order.items || [];
    const itemsHtml = items.map((item) => {
      const qty          = Number(item.quantity) || 1;
      const priceUsd     = Number(item.pachkaPriceUsd || item.priceUsd || item.price || 45);
      const itemTotalUsd = priceUsd * qty;
      const itemTotalSom = Math.round(itemTotalUsd * usdRate);

      const sizeRange    = item.size  || "46-48-50";
      const colorName    = item.color || "To'q ko'k (Navy)";
      const category     = item.category_uz || item.category || "Kostyum-Shimlar";
      const pachkaQty    = (item.pachkaItems || item.itemsPerPachka || 6) * qty;

      return `
        <div class="oh-item-card" onclick="openProductDetail('${item.id || ''}')" title="Mahsulotni to'liq ko'rish uchun bosing 🛍️">
          <!-- Media Box with Pachka Badge -->
          <div class="oh-item-media">
            <img src="${item.image || '/images/navy_suit.jpg'}" alt="${escapeHtml(item.title || 'Eurotex Mahsulot')}" loading="lazy" decoding="async" onerror="this.src='/images/navy_suit.jpg'">
            <span class="oh-item-badge">📦 PACHKA: ${pachkaQty} DONA</span>
          </div>

          <!-- Body -->
          <div class="oh-item-body">
            <div class="oh-item-header-row">
              <span class="oh-item-title">${escapeHtml(item.title || "Eurotex Mahsulot")}</span>
              <span class="oh-item-qty-tag">${qty} pachka</span>
            </div>

            <div class="oh-item-cat-row">
              <span class="oh-item-cat-label">Turkumi:</span>
              <span class="oh-item-cat-chip">${escapeHtml(category)}</span>
            </div>

            <div class="oh-item-specs-row">
              <span class="oh-spec-chip">📏 O'lcham: ${escapeHtml(sizeRange)}</span>
              <span class="oh-spec-chip" style="font-weight:700;"><span class="oh-color-dot" style="background:${getEurotexColorCode(colorName)}; box-shadow:0 0 5px ${getEurotexColorCode(colorName)};"></span> 🎨 ${escapeHtml(colorName)}</span>
            </div>

            <div class="oh-item-price-box">
              <div class="oh-price-line">
                <span class="oh-price-lbl">Pachka ($ USD):</span>
                <span class="oh-price-num">$${priceUsd}</span>
              </div>
              <div class="oh-total-line">
                <span class="oh-total-lbl">Jami so'mda:</span>
                <span class="oh-total-num">${itemTotalSom.toLocaleString("uz-UZ")} so'm</span>
              </div>
            </div>
          </div>
        </div>`;
    }).join("");

    // ── Grand totals & Promo Discount calculation ───────────────────────────
    const rawTotal    = Number(order.total || order.totalPriceUsd || 0);
    const totalUsd    = rawTotal > 5000 ? Math.round(rawTotal / usdRate) : rawTotal;
    const totalSom    = totalUsd * usdRate;

    const discountUsd = Number(order.discountUsd) || (order.discountAmount > 1000 ? Math.round(order.discountAmount / usdRate) : Number(order.discountAmount) || 0);
    const discountSom = Number(order.discountUzs) || Math.round(discountUsd * usdRate);
    const rawSubtotalUsd = Number(order.rawSubtotalUsd) || (totalUsd + discountUsd);
    const rawSubtotalSom = Math.round(rawSubtotalUsd * usdRate);

    const hasPromoOrDiscount = Boolean(order.promoCode) || discountUsd > 0;
    const promoDiscountHtml = hasPromoOrDiscount ? `
      <div class="oh-promo-banner" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(5, 150, 105, 0.08) 100%); border: 1px dashed #10b981; border-radius: 10px; padding: 10px 14px; margin: 14px 0 6px 0; display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 16px;">🏷️</span>
          <span style="font-size: 12.5px; font-weight: 700; color: #a7f3d0;">Promokod chegirmasi:</span>
          <span style="background: #10b981; color: #022c22; font-weight: 900; font-size: 11.5px; padding: 2px 8px; border-radius: 5px; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHtml(order.promoCode || 'MAXSUS')}</span>
        </div>
        <div style="font-size: 13px; font-weight: 800; color: #34d399; text-align: right;">
          -${discountUsd > 0 ? `$${discountUsd}` : ''} ${discountSom > 0 ? `(${discountSom.toLocaleString('uz-UZ')} so'm)` : ''} tejaldi! 🎉
        </div>
      </div>
    ` : '';

    // ── Delivery address with maps link ─────────────────────────────────────
    const rawAddr = order.address || "";
    const mapsUrl = rawAddr.includes("maps.google.com")
      ? rawAddr.match(/https?:\/\/[^\s"')]+/)?.[0] || ""
      : "";
    const cleanAddr = mapsUrl
      ? rawAddr.replace(/https?:\/\/[^\s"')]+/, "").replace(/Lokatsiya:\s*/i, "").trim()
      : rawAddr;
    const addrHtml = mapsUrl
      ? `${escapeHtml(cleanAddr)} <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="oh-maps-link">📍 Xaritada ko'rish</a>`
      : escapeHtml(cleanAddr || "Manzil kiritilmagan");

    // ── Payment method label ─────────────────────────────────────────────────
    const payLabel = order.paymentMethod === "payme" ? "💳 Payme"
                   : order.paymentMethod === "click"  ? "💳 Click"
                   : "💵 Naqd to'lov";

    const deliveryDateVal = order.deliveryDate || "Ertaga (tezkor)";

    return `
      <div class="oh-card">
        <!-- Card Header -->
        <div class="oh-card-header">
          <div class="oh-card-id-wrap">
            <span class="oh-card-id">Buyurtma #${escapeHtml(order.id || order.orderId || "")}</span>
            <span class="oh-card-date">📅 ${escapeHtml(order.date || "")}</span>
          </div>
          <span class="oh-status-badge" style="background:${sc.bg}; color:${sc.color};">
            ${sc.emoji} ${sc.label}
          </span>
        </div>

        <!-- Live Tracker -->
        ${trackerHtml}

        <!-- Products List Cards Grid -->
        <div class="oh-products-section">
          <div class="oh-products-cards-grid">
            ${itemsHtml || '<div class="oh-no-items">Mahsulotlar ro\'yxati mavjud emas</div>'}
          </div>
        </div>

        <!-- Promokod & Skidka banner -->
        ${promoDiscountHtml}

        <!-- Divider -->
        <div class="oh-divider"></div>

        <!-- Order Details Row -->
        <div class="oh-details-grid">
          <div class="oh-detail-item">
            <span class="oh-detail-label">📅 Yetkazish kuni:</span>
            <span class="oh-detail-value" style="color: #facc15; font-weight: 700;">🗓️ ${escapeHtml(deliveryDateVal)}</span>
          </div>
          <div class="oh-detail-item">
            <span class="oh-detail-label">📍 To'liq manzil:</span>
            <span class="oh-detail-value">${addrHtml}</span>
          </div>
          <div class="oh-detail-item">
            <span class="oh-detail-label">💳 To'lov turi:</span>
            <span class="oh-detail-value">${payLabel}</span>
          </div>
          <div class="oh-detail-item">
            <span class="oh-detail-label">📦 Mahsulotlar soni:</span>
            <span class="oh-detail-value">${items.reduce((s, i) => s + (Number(i.quantity) || 1), 0)} pachka</span>
          </div>
          <div class="oh-detail-item">
            <span class="oh-detail-label">📅 Buyurtma sanasi:</span>
            <span class="oh-detail-value">${escapeHtml(order.date || "—")}</span>
          </div>
        </div>

        <!-- Grand Total with Discount Breakdown -->
        <div class="oh-grand-total" style="display: flex; flex-direction: column; gap: 6px;">
          ${discountUsd > 0 ? `
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #94a3b8;">
              <span>Asl tovarlar narxi:</span>
              <span style="text-decoration: line-through;">$${rawSubtotalUsd} (${rawSubtotalSom.toLocaleString('uz-UZ')} so'm)</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; color: #34d399; font-weight: 700;">
              <span>🏷️ Promokod chegirmasi:</span>
              <span>-$${discountUsd} (-${discountSom.toLocaleString('uz-UZ')} so'm)</span>
            </div>
            <div style="height: 1px; background: rgba(255,255,255,0.08); margin: 2px 0;"></div>
          ` : ''}
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="oh-grand-label">💰 ${discountUsd > 0 ? "To'lanadigan summa:" : "Jami summa:"}</span>
            <div class="oh-grand-amounts">
              <span class="oh-grand-usd">$${totalUsd}</span>
              <span class="oh-grand-som">${Math.round(totalSom).toLocaleString("uz-UZ")} so'm</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons Row -->
        <div class="oh-actions">
          <button type="button" class="oh-btn-pdf" onclick="downloadReceiptPdf('${escapeHtml(order.id || "")}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            📄 PDF Kvitansiya
          </button>
          <button type="button" class="oh-btn-check" onclick="downloadCheckPdf('${escapeHtml(order.id || "")}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            📋 PDF Chek
          </button>
          <button type="button" class="oh-btn-return" onclick="switchDashboardTab('returns'); prefillReturnOrder('${escapeHtml(order.id || "")}'); window.scrollTo({top:0,behavior:'smooth'});">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.36"/></svg>
            🔄 Almashtirish / Qaytarish
          </button>
        </div>
      </div>`;
  }).join("");
}

// Rasmiy chek/kvitansiya shakllantirish va PDF sifatida yuklab berish
function downloadReceiptPdf(orderId) {
  const pool = state.orders || [];
  const order = pool.find((o) => String(o.id || o.orderId) === String(orderId));
  if (!order) {
    showToast("⚠️ Buyurtma ma'lumotlari topilmadi!", "error");
    return;
  }

  const printWindow = window.open("", "_blank", "width=820,height=900");
  if (!printWindow) {
    showToast("⚠️ Brauzer yangi oyna ochishni blokladi. Ruxsat bering.", "error");
    return;
  }

  const itemsHtml = (order.items || []).map((item, idx) => `
    <tr>
      <td style="padding:10px; border-bottom:1px solid #e2e8f0; text-align:center;">${idx + 1}</td>
      <td style="padding:10px; border-bottom:1px solid #e2e8f0;">
        <strong>${escapeHtml(item.title || "Eurotex Mahsulot")}</strong><br>
        <small style="color:#64748b;">O'lcham: ${escapeHtml(item.size || "-")} | Rangi: ${escapeHtml(item.color || "-")}</small>
      </td>
      <td style="padding:10px; border-bottom:1px solid #e2e8f0; text-align:center;">${item.quantity || 1}</td>
      <td style="padding:10px; border-bottom:1px solid #e2e8f0; text-align:right; font-weight:bold;">${safeFormatMoney(item.price || 0)}</td>
    </tr>
  `).join("");

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="uz">
    <head>
      <meta charset="utf-8">
      <title>Eurotex Chek #${escapeHtml(order.id || orderId)}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 32px; color: #0f172a; max-width: 720px; margin: 0 auto; line-height: 1.5; }
        .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #88001b; padding-bottom: 20px; margin-bottom: 20px; }
        .brand { font-size: 26px; font-weight: 900; color: #88001b; letter-spacing: 0.5px; }
        .sub { font-size: 13px; color: #64748b; margin-top: 4px; }
        .meta-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 18px; margin: 20px 0; font-size: 13.5px; }
        table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }
        th { background: #f1f5f9; padding: 10px; text-align: left; border-bottom: 2px solid #cbd5e1; font-weight: 700; color: #334155; }
        .total-row { text-align: right; margin-top: 20px; font-size: 17px; }
        .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px dashed #cbd5e1; padding-top: 18px; }
        @media print { .no-print { display: none !important; } body { padding: 15px; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="brand">EUROTEX KIDS</div>
          <div class="sub">Bolalar va o'smirlar kiyimlari fabrikasi</div>
          <div class="sub">Toshkent sh., Abu Saxiy Centir A48 / Giper Market 297</div>
          <div class="sub">Tel: +998 90 555 77 75</div>
        </div>
        <div style="text-align:right;">
          <h2 style="margin:0; color:#1e293b; font-size:20px;">RASMIY KVITANSIYA</h2>
          <div class="sub" style="margin-top:6px;">Buyurtma: <strong style="color:#0f172a;">#${escapeHtml(order.id || orderId)}</strong></div>
          <div class="sub">Sana: ${escapeHtml(order.date || new Date().toLocaleDateString())}</div>
          <div class="sub">Status: <strong style="color:#10b981;">${escapeHtml(order.status || "Qabul qilingan")}</strong></div>
        </div>
      </div>
      <div class="meta-box">
        <div><strong>Xaridor:</strong> ${escapeHtml(order.customerName || (state.user && state.user.name) || "Hurmatli Mijoz")}</div>
        <div style="margin-top:4px;"><strong>Telefon:</strong> ${escapeHtml(order.phone || "-")}</div>
        <div style="margin-top:4px;"><strong>Yetkazish manzili:</strong> ${escapeHtml(order.address || "-")}</div>
        <div style="margin-top:4px;"><strong>To'lov turi:</strong> ${escapeHtml(order.paymentMethod === "payme" ? "Payme 💳" : order.paymentMethod === "click" ? "Click 💳" : "Naqd to'lov 💵")}</div>
      </div>
      <table>
        <thead>
          <tr>
            <th style="width:40px; text-align:center;">№</th>
            <th>Mahsulot nomi</th>
            <th style="width:60px; text-align:center;">Soni</th>
            <th style="width:140px; text-align:right;">Summa</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml || '<tr><td colspan="4" style="padding:15px; text-align:center;">Buyurtma tovarlari mavjud</td></tr>'}
        </tbody>
      </table>
      <div class="total-row">
        <div style="font-size:20px; font-weight:900; color:#88001b;">JAMI SUMMA: ${safeFormatMoney(order.total || 0)}</div>
      </div>
      <div class="footer">
        <p>Eurotex Kids mahsulotlarini tanlaganingiz uchun tashakkur! Savollar bo'lsa: @eurotex_support_bot</p>
        <button class="no-print" onclick="window.print()" style="background:#88001b; color:#fff; border:none; padding:10px 24px; font-size:14px; font-weight:700; border-radius:8px; cursor:pointer; margin-top:10px; box-shadow:0 4px 12px rgba(136,0,27,0.3);">🖨️ Chop etish / PDF Saqlash</button>
      </div>
      <script>
        window.onload = function() {
          setTimeout(function() { window.print(); }, 400);
        };
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// 📋 Termal / Kassa uslubidagi PDF Chek shakllantirish
function downloadCheckPdf(orderId) {
  const pool = state.orders || [];
  const order = pool.find((o) => String(o.id || o.orderId) === String(orderId));
  if (!order) {
    showToast("⚠️ Buyurtma ma'lumotlari topilmadi!", "error");
    return;
  }

  const printWindow = window.open("", "_blank", "width=420,height=700");
  if (!printWindow) {
    showToast("⚠️ Brauzer yangi oyna ochishni blokladi. Ruxsat bering.", "error");
    return;
  }

  const usdRate = state.usdRate || 12650;
  const items = order.items || [];
  const itemsHtml = items.map((item, idx) => {
    const qty = Number(item.quantity) || 1;
    const priceUsd = Number(item.pachkaPriceUsd || item.priceUsd || item.price || 45);
    const som = priceUsd * usdRate * qty;
    return `
      <div style="border-bottom: 1px dashed #94a3b8; padding: 6px 0; font-size: 12px;">
        <div style="font-weight: 700; display:flex; justify-content:space-between;">
          <span>${idx + 1}. ${escapeHtml(item.title || "Mahsulot")}</span>
          <span>${som.toLocaleString("uz-UZ")} so'm</span>
        </div>
        <div style="color: #64748b; font-size: 11px; display:flex; justify-content:space-between; margin-top:2px;">
          <span>${qty} pachka × $${priceUsd} (${(priceUsd * usdRate).toLocaleString("uz-UZ")})</span>
          <span>O'lcham: ${escapeHtml(item.size || "-")}</span>
        </div>
      </div>
    `;
  }).join("");

  const rawTotal = Number(order.total || 0);
  const totalUsd = rawTotal > 5000 ? Math.round(rawTotal / usdRate) : rawTotal;
  const totalSom = totalUsd * usdRate;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="uz">
    <head>
      <meta charset="utf-8">
      <title>Eurotex Kassa Cheki #${escapeHtml(order.id || orderId)}</title>
      <style>
        body { font-family: "Courier New", Courier, monospace, monospace; padding: 18px; color: #000; max-width: 360px; margin: 0 auto; background: #fff; }
        .center { text-align: center; }
        .divider { border-top: 1px dashed #000; margin: 8px 0; }
        .row { display: flex; justify-content: space-between; font-size: 12px; margin: 3px 0; }
        .bold { font-weight: 900; }
        @media print { .no-print { display: none !important; } body { padding: 0; } }
      </style>
    </head>
    <body>
      <div class="center">
        <h2 style="margin:0; font-size:18px; letter-spacing:1px;">EUROTEX KIDS</h2>
        <div style="font-size:11px; margin-top:3px;">FABRIKA SAVDO BELGISI</div>
        <div style="font-size:11px;">Toshkent sh., Abu Saxiy A48 / GM 297</div>
        <div style="font-size:11px;">Tel: +998 90 555 77 75</div>
      </div>
      <div class="divider"></div>
      <div class="row"><span>CHEK №:</span><span class="bold">#${escapeHtml(order.id || orderId)}</span></div>
      <div class="row"><span>SANA:</span><span>${escapeHtml(order.date || new Date().toLocaleDateString())}</span></div>
      <div class="row"><span>MIJOZ:</span><span class="bold">${escapeHtml(order.customerName || (state.user && state.user.name) || "Ulgurji Mijoz")}</span></div>
      <div class="row"><span>TELEFON:</span><span>${escapeHtml(order.phone || "-")}</span></div>
      <div class="row"><span>TO'LOV:</span><span class="bold">${escapeHtml(order.paymentMethod === "payme" ? "Payme" : order.paymentMethod === "click" ? "Click" : "Naqd")}</span></div>
      <div class="divider"></div>
      <div style="font-size:11px; font-weight:700; margin-bottom:4px;">MAHSULOTLAR:</div>
      ${itemsHtml}
      <div class="divider"></div>
      <div class="row" style="font-size:14px;"><span class="bold">JAMI ($ USD):</span><span class="bold">$${totalUsd}</span></div>
      <div class="row" style="font-size:15px;"><span class="bold">JAMI SO'M:</span><span class="bold">${totalSom.toLocaleString("uz-UZ")} so'm</span></div>
      <div class="divider"></div>
      <div class="center" style="font-size:11px; margin-top:10px;">
        <div>Xaridingiz uchun tashakkur!</div>
        <div style="margin-top:2px;">10 kunlik bepul almashtirish kafolati</div>
        <div style="margin-top:6px; font-weight:700;">eurotexkids.uz</div>
      </div>
      <div class="center no-print" style="margin-top:16px;">
        <button onclick="window.print()" style="background:#000; color:#fff; border:none; padding:8px 18px; font-size:12px; font-weight:700; border-radius:6px; cursor:pointer;">🖨️ Chekni chop etish</button>
      </div>
      <script>
        window.onload = function() { setTimeout(function() { window.print(); }, 400); };
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
}


// Almashtirish / qaytarish formasini avtomatik buyurtma ID si bilan to'ldirish
function prefillReturnOrder(orderId) {
  renderReturnRequests();
  const select = document.getElementById("returnOrderSelect");
  if (select) {
    select.value = orderId;
  }
  const comment = document.getElementById("returnComment");
  if (comment) {
    comment.focus();
    comment.placeholder = `Buyurtma #${orderId} bo'yicha sababni yozing...`;
  }
  showToast(`Qaytarish arizasi #${orderId} uchun tayyorlandi! ✍️`);
}

// -----------------------------------------------------------------------------
// FEATURE 19: PWA (Progressive Web App) System
// -----------------------------------------------------------------------------
let deferredPwaPrompt = null;
function initPWA() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((err) => console.warn("SW Register:", err));
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPwaPrompt = e;
    const btn = document.getElementById("pwaInstallBtn");
    if (btn) btn.style.display = "inline-flex";
  });

  window.addEventListener("appinstalled", () => {
    showToast("Eurotex Ilovasi o'rnatildi! Rahmat! 📱");
    deferredPwaPrompt = null;
    const btn = document.getElementById("pwaInstallBtn");
    if (btn) btn.style.display = "none";
  });
}

function installPWAApp() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        showToast(
          "Eurotex Ilovasi qurilmangizga muvaffaqiyatli o'rnatildi! 📱",
        );
      }
      deferredPwaPrompt = null;
    });
  } else {
    openModal("pwaInstallModal");
  }
}

function executePwaInstall() {
  if (deferredPwaPrompt) {
    closeModal("pwaInstallModal");
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        showToast("Eurotex Ilovasi qurilmangizga muvaffaqiyatli o'rnatildi! 📱");
      }
      deferredPwaPrompt = null;
    });
  } else {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const iosBox = document.getElementById("pwaIosInstructions");
    if (isIos && iosBox) {
      iosBox.style.display = "block";
    } else {
      showToast("Brauzeringiz menyusidan 'Ilovani o'rnatish' (Install app) ni tanlang 📲");
      closeModal("pwaInstallModal");
    }
  }
}

// -----------------------------------------------------------------------------
// FEATURE 1: Customer Order History & Receipt System (`/orders`)
// -----------------------------------------------------------------------------
function getDemoOrders() {
  return [
    {
      id: "EUR-901428",
      date: "2026-07-27",
      items: [
        {
          title: "Eurotex Royal Navy Slim Fit Kostyum-Shim (1 Pachka = 6 ta)",
          price: 120,
          quantity: 1,
          size: "46-48-50-52-54-56 (Seriya)",
          color: "To'q ko'k (Navy)",
        },
      ],
      total: 120,
      status: "Kuryerda 🚚",
      statusStep: 3,
      recipient: "Sardor Rahimov (+998 90 555-77-75)",
      address: "Toshkent sh., Chilonzor tumani, Lutfiy ko'chasi 14-uy",
    },
    {
      id: "EUR-881042",
      date: "2026-07-20",
      items: [
        {
          title: "Eurotex Charcoal Grey Klassik Jun Shim (1 Pachka = 6 ta)",
          price: 45,
          quantity: 1,
          size: "46-48-50-52-54-56 (Seriya)",
          color: "Kulrang (Charcoal)",
        },
      ],
      total: 45,
      status: "Yetkazib berildi ✅",
      statusStep: 4,
      recipient: "Sardor Rahimov (+998 90 555-77-75)",
      address: "Topshirish punkti: Chilonzor Lutfiy 14",
    },
  ];
}

function downloadOrderReceipt(orderId) {
  if (typeof downloadReceiptPdf === "function") {
    return downloadReceiptPdf(orderId);
  }
  showToast(`Buyurtma #${orderId} kvitansiyasi tayyorlanmoqda... 📄`);
}

// -----------------------------------------------------------------------------
// FEATURE 7: Returns & Exchange Request System (`/returns`)
// -----------------------------------------------------------------------------
function renderReturnRequests() {
  const select = document.getElementById("returnOrderSelect");
  const list = document.getElementById("myReturnRequestsList");
  if (!select || !list) return;

  if (!state.orders || state.orders.length === 0) {
    renderOrdersHistory();
  }

  select.innerHTML = state.orders
    .map(
      (o) =>
        `<option value="${o.id}">#${o.id} — ${formatMoney(o.total)} so'm (${o.date})</option>`,
    )
    .join("");

  if (!state.returns) state.returns = [];

  if (state.returns.length === 0) {
    list.innerHTML = `<div style="color:var(--text-muted); font-size:13px; text-align:center; padding:20px;">Hozircha yuborilgan qaytarish arizalari yo'q.</div>`;
  } else {
    list.innerHTML = state.returns
      .map(
        (r) => `
            <div style="background:var(--bg-surface-secondary); border:1px solid var(--border-color); border-radius:12px; padding:12px; margin-bottom:10px;">
                <div style="display:flex; justify-content:space-between; font-weight:700; font-size:13px;">
                    <span>Ariza #${r.id} (${r.orderId})</span>
                    <span style="color:#854d0e; background:#fef08a; padding:2px 6px; border-radius:4px; font-size:11px;">${r.status}</span>
                </div>
                <div style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Sababi: ${r.reasonText} | Amal: ${r.actionText}</div>
            </div>
        `,
      )
      .join("");
  }
}

function handleReturnSubmit(e) {
  e.preventDefault();
  const orderId = document.getElementById("returnOrderSelect").value;
  const reasonSelect = document.getElementById("returnReason");
  const actionSelect = document.getElementById("returnAction");
  const comment = document.getElementById("returnComment").value;

  const reqId = `RET-${Math.floor(1000 + Math.random() * 9000)}`;
  const newReq = {
    id: reqId,
    orderId: orderId,
    reasonText: reasonSelect.options[reasonSelect.selectedIndex].text,
    actionText: actionSelect.options[actionSelect.selectedIndex].text,
    comment: comment,
    status: "Ko'rib chiqilmoqda ⏳",
    date: new Date().toLocaleDateString(),
  };

  if (!state.returns) state.returns = [];
  state.returns.push(newReq);
  localStorage.setItem("eurotex_returns", JSON.stringify(state.returns));

  renderReturnRequests();
  if (
    state.user &&
    (state.user.role === "admin" || isAdminEmail(state.user.email))
  )
    renderAdminReturns();

  showToast(`Qaytarish arizasi #${reqId} muvaffaqiyatli qabul qilindi! ✅`);
}

// -----------------------------------------------------------------------------
// FEATURE 15: Master Admin Panel (`/admin`)
// -----------------------------------------------------------------------------
function renderAdminPanel() {
  const user = state.user;
  const isAdmin = user && (user.role === "admin" || isAdminEmail(user.email));
  const adminTab = document.getElementById("dTabAdmin");

  if (adminTab) {
    adminTab.style.display = isAdmin ? "inline-flex" : "none";
  }

  if (!isAdmin) return;

  updateAdminStats();

  const usdInput = document.getElementById("adminUsdRateInput");
  if (usdInput) usdInput.value = state.usdRate || 12650;

  renderAdminOrders();
  renderAdminProducts();
  renderAdminReturns();
}

function updateAdminStats() {
  const totalRevenue = (state.orders || []).reduce(
    (sum, o) => sum + (o.total || 0),
    0,
  );
  const orderCount = (state.orders || []).length;
  const returnCount = (state.returns || []).length;

  const statRev = document.getElementById("adminStatRevenue");
  const statOrd = document.getElementById("adminStatOrderCount");
  const statRet = document.getElementById("adminStatReturnCount");

  if (statRev) statRev.textContent = formatMoney(totalRevenue);
  if (statOrd) statOrd.textContent = `${orderCount} ta`;
  if (statRet) statRet.textContent = `${returnCount} ta`;
}

function ensureAdminSizesElements() {
  const tabRow = document.querySelector(".admin-tab-row");
  if (tabRow && !document.getElementById("btnAdminSizes")) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "admin-nav-tab";
    btn.id = "btnAdminSizes";
    btn.onclick = () => showAdminSection("sizes");
    btn.innerHTML = "📐 O'lchamlar (Razmerlar)";
    tabRow.appendChild(btn);
  }

  const adminMainCard = document.querySelector(".admin-main-card");
  if (adminMainCard && !document.getElementById("adminSecSizes")) {
    const sec = document.createElement("div");
    sec.id = "adminSecSizes";
    sec.style.display = "none";
    sec.innerHTML = `
      <div class="admin-size-guide-card">
        <div class="admin-sec-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 22px;">
          <div class="admin-sec-header-left" style="display: flex; align-items: center; gap: 14px;">
            <div class="admin-sec-icon" style="width: 48px; height: 48px; border-radius: 14px; background: rgba(0, 242, 254, 0.15); display: flex; align-items: center; justify-content: center; color: #00f2fe; border: 1px solid rgba(0, 242, 254, 0.3);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.3 15.3l-8.6-8.6a2 2 0 0 0-2.8 0L2.7 13.9a2 2 0 0 0 0 2.8l2.6 2.6a2 2 0 0 0 2.8 0l7.2-7.2"></path>
                <line x1="8.6" y1="8" x2="10" y2="9.4"></line>
                <line x1="11.4" y1="10.8" x2="12.8" y2="12.2"></line>
                <line x1="14.3" y1="13.7" x2="15.7" y2="15.1"></line>
              </svg>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                <h3 class="admin-sec-title" style="font-size: 19px; font-weight: 800; color: #ffffff; margin: 0;">📐 O'lchamlar (Razmerlar) Jadvali</h3>
                <span class="admin-size-header-pill">Live Sync ⚡</span>
              </div>
              <p class="admin-sec-desc" style="font-size: 13.5px; color: #94a3b8; margin: 0;">Mijozlar ko'radigan o'lchamlar parametrlarini tahrirlash, yangi razmerlar qo'shish yoki o'chirish</p>
            </div>
          </div>
          <div class="admin-sec-actions" style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button type="button" class="size-btn-add" onclick="addAdminSizeRow()">
              <span>➕</span> Yangi Razmer Qo'shish
            </button>
            <button type="button" class="size-btn-save" onclick="saveAdminSizeGuide()">
              <span>💾</span> Saqlash va Saytda Yangilash
            </button>
          </div>
        </div>

        <div class="admin-size-note-box">
          <div class="admin-size-note-label">
            <span>💡</span> Jadval ostidagi maslahat / izoh matni:
          </div>
          <input type="text" id="adminSizeGuideNoteInput" class="admin-size-note-input" placeholder="Masalan: Agar 2 ta o'lcham orasida ikkilansangiz, kattaroq o'lchamni tanlashni tavsiya etamiz." />
        </div>

        <div style="overflow-x: auto; padding-bottom: 8px;">
          <table class="admin-size-table">
            <thead>
              <tr>
                <th style="width: 25%;">O'lcham (EU / Nomi)</th>
                <th style="width: 22%;">Ko'krak aylanasi (sm)</th>
                <th style="width: 22%;">Bel aylanasi (sm)</th>
                <th style="width: 22%;">Bo'y (sm)</th>
                <th style="width: 9%; text-align: center;">Amal</th>
              </tr>
            </thead>
            <tbody id="adminSizeGuideTableBody">
              <!-- Rendered dynamically -->
            </tbody>
          </table>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 26px; flex-wrap: wrap; gap: 14px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
          <button type="button" class="size-btn-reset" onclick="resetAdminSizeGuide()">
            🔄 Standart holatga qaytarish
          </button>
          <button type="button" class="size-btn-save" onclick="saveAdminSizeGuide()">
            <span>💾</span> Saqlash va Saytda Yangilash
          </button>
        </div>
      </div>
    `;
    adminMainCard.appendChild(sec);
  }
}

function showAdminSection(sec, pushUrl = true) {
  ensureAdminSizesElements();
  const sections = {
    orders: document.getElementById("adminSecOrders"),
    leads: document.getElementById("adminSecLeads"),
    products: document.getElementById("adminSecProducts"),
    users: document.getElementById("adminSecUsers"),
    promos: document.getElementById("adminSecPromos"),
    nasiya: document.getElementById("adminSecNasiya"),
    delivery: document.getElementById("adminSecDelivery"),
    returns: document.getElementById("adminSecReturns"),
    sizes: document.getElementById("adminSecSizes"),
    reviews: document.getElementById("adminSecReviews"),
    settings: document.getElementById("adminSecSettings"),
    maintenance: document.getElementById("adminSecMaintenance"),
  };

  Object.entries(sections).forEach(([key, el]) => {
    if (el) el.style.display = key === sec ? "block" : "none";
  });

  const buttons = {
    orders: document.getElementById("btnAdminOrders"),
    leads: document.getElementById("btnAdminLeads"),
    products: document.getElementById("btnAdminProducts"),
    users: document.getElementById("btnAdminUsers"),
    promos: document.getElementById("btnAdminPromos"),
    nasiya: document.getElementById("btnAdminNasiya"),
    delivery: document.getElementById("btnAdminDelivery"),
    returns: document.getElementById("btnAdminReturns"),
    sizes: document.getElementById("btnAdminSizes"),
    reviews: document.getElementById("btnAdminReviews"),
    settings: document.getElementById("btnAdminSettings"),
    maintenance: document.getElementById("btnAdminMaintenance"),
  };

  Object.entries(buttons).forEach(([key, btn]) => {
    if (btn) btn.className = key === sec ? "admin-nav-tab active" : "admin-nav-tab";
  });

  if (sec === "orders") renderAdminOrders();
  else if (sec === "leads") loadAdminLeads();
  else if (sec === "products") renderAdminProducts();
  else if (sec === "users") loadAdminUsers();
  else if (sec === "promos") loadAdminPromos();
  else if (sec === "nasiya") loadAdminNasiya();
  else if (sec === "delivery") loadAdminDelivery();
  else if (sec === "returns") renderAdminReturns();
  else if (sec === "sizes") renderAdminSizeGuide();
  else if (sec === "reviews") renderAdminReviews();
  else if (sec === "settings") {
    loadAdminTelegramSettings();
    loadAdminMaintenanceSettings();
  } else if (sec === "maintenance") {
    loadAdminMaintenanceSettings();
  }

  if (pushUrl) {
    updateURLRoute(`/admin/${sec}`);
  }
}

function renderAdminSizeGuide() {
  const tableBody = document.getElementById("adminSizeGuideTableBody");
  const noteInput = document.getElementById("adminSizeGuideNoteInput");
  if (!tableBody) return;

  const data = getSizeGuideData();
  const note = getSizeGuideNote();

  if (noteInput) {
    noteInput.value = note;
  }

  tableBody.innerHTML = data
    .map(
      (row, idx) => `
      <tr class="admin-size-row">
        <td>
          <input type="text" id="adminSize_name_${idx}" class="size-input-field size-input-name" value="${row.size || ""}" placeholder="Masalan: 46 (S) yoki 32 (Kids)" />
        </td>
        <td>
          <input type="text" id="adminSize_chest_${idx}" class="size-input-field" value="${row.chest || ""}" placeholder="Masalan: 90 - 94" />
        </td>
        <td>
          <input type="text" id="adminSize_waist_${idx}" class="size-input-field" value="${row.waist || ""}" placeholder="Masalan: 78 - 82" />
        </td>
        <td>
          <input type="text" id="adminSize_height_${idx}" class="size-input-field" value="${row.height || ""}" placeholder="Masalan: 170 - 176" />
        </td>
        <td style="text-align: center;">
          <button type="button" class="size-btn-delete" onclick="deleteAdminSizeRow(${idx})" title="Ushbu o'lchamni o'chirish">
            🗑️
          </button>
        </td>
      </tr>
    `,
    )
    .join("");
}

let customConfirmResolve = null;
let customConfirmMode = "confirm";

function ensureCustomConfirmModalDOM() {
  let modal = document.getElementById("eurotexCustomConfirmModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "modal-overlay custom-confirm-overlay";
    modal.id = "eurotexCustomConfirmModal";
    modal.style.display = "none";
    modal.style.zIndex = "9999999";
    modal.onclick = function (e) {
      if (e.target === modal) closeCustomConfirmModal(false);
    };
    modal.innerHTML = `
      <div class="modal-dialog custom-confirm-dialog" role="dialog" aria-modal="true">
        <div class="custom-confirm-card">
          <div class="custom-confirm-icon-wrap" id="customConfirmIconWrap">
            <span class="custom-confirm-icon" id="customConfirmIcon">⚠️</span>
          </div>
          <h3 class="custom-confirm-title" id="customConfirmTitle">Tasdiqlash</h3>
          <p class="custom-confirm-message" id="customConfirmMessage">
            Haqiqatan ham ushbu amalni bajarmoqchimisiz?
          </p>
          <div class="custom-confirm-input-wrap" id="customConfirmInputWrap" style="display:none;">
            <input type="text" id="customConfirmInput" class="custom-confirm-input" placeholder="" autocomplete="off" />
          </div>
          <div class="custom-confirm-actions" id="customConfirmActions">
            <button type="button" class="btn-confirm-cancel" id="customConfirmCancelBtn" onclick="closeCustomConfirmModal(false)">
              Bekor qilish
            </button>
            <button type="button" class="btn-confirm-accept" id="customConfirmAcceptBtn" onclick="closeCustomConfirmModal(true)">
              Ha, tasdiqlayman
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  return modal;
}

function showConfirmDialog({
  title = "Tasdiqlash",
  message = "Haqiqatan ham bu amalni bajarmoqchimisiz?",
  confirmText = "Ha, davom etish",
  cancelText = "Bekor qilish",
  icon = "⚠️",
  iconHtml = null,
  iconBg = null,
  confirmColor = "danger",
  mode = "confirm",
  defaultValue = "",
  placeholder = "",
} = {}) {
  return new Promise((resolve) => {
    customConfirmResolve = resolve;
    customConfirmMode = mode;

    const modal = ensureCustomConfirmModalDOM();
    const titleEl = document.getElementById("customConfirmTitle");
    const msgEl = document.getElementById("customConfirmMessage");
    const iconEl = document.getElementById("customConfirmIcon");
    const iconWrap = document.getElementById("customConfirmIconWrap");
    const cancelBtn = document.getElementById("customConfirmCancelBtn");
    const acceptBtn = document.getElementById("customConfirmAcceptBtn");
    const inputWrap = document.getElementById("customConfirmInputWrap");
    const inputEl = document.getElementById("customConfirmInput");

    const isLogout = Boolean(title && (title.includes("Chiqish") || title.toLowerCase().includes("chiqish")));
    const finalIconHtml = iconHtml || (isLogout ? '<img src="/images/eurotex-logo.png" alt="Eurotex Logo" style="width: 100%; height: 100%; object-fit: contain; border-radius: 50%; display: block;" />' : null);
    const finalIconBg = iconBg || (isLogout ? "#ffffff" : (confirmColor === "danger" ? "rgba(239, 68, 68, 0.15)" : "rgba(245, 158, 11, 0.15)"));

    if (titleEl) titleEl.textContent = title;
    if (msgEl) {
      msgEl.textContent = message;
      msgEl.style.display = message ? "block" : "none";
    }

    if (iconWrap) {
      iconWrap.style.background = finalIconBg;
      if (finalIconHtml) {
        iconWrap.style.padding = "6px";
        iconWrap.style.border = "2.5px solid rgba(245, 158, 11, 0.85)";
        iconWrap.style.boxShadow = "0 0 25px rgba(245, 158, 11, 0.4)";
      } else {
        iconWrap.style.padding = "";
        iconWrap.style.border = confirmColor === "danger" ? "1px solid rgba(239, 68, 68, 0.35)" : "1px solid rgba(245, 158, 11, 0.35)";
        iconWrap.style.boxShadow = confirmColor === "danger" ? "0 0 24px rgba(239, 68, 68, 0.35)" : "0 0 24px rgba(245, 158, 11, 0.35)";
      }
    }

    if (iconEl) {
      if (finalIconHtml) {
        iconEl.innerHTML = finalIconHtml;
        iconEl.style.display = "flex";
        iconEl.style.width = "100%";
        iconEl.style.height = "100%";
        iconEl.style.alignItems = "center";
        iconEl.style.justifyContent = "center";
      } else {
        iconEl.textContent = icon;
        iconEl.style.display = "";
        iconEl.style.width = "";
        iconEl.style.height = "";
      }
    }

    if (mode === "alert") {
      if (cancelBtn) cancelBtn.style.display = "none";
      if (inputWrap) inputWrap.style.display = "none";
      if (acceptBtn) {
        acceptBtn.textContent = confirmText || "Tushundim";
        acceptBtn.style.flex = "1";
        acceptBtn.style.background = "linear-gradient(135deg, #7000ff 0%, #00f2fe 100%)";
        acceptBtn.style.boxShadow = "0 4px 18px rgba(112, 0, 255, 0.45)";
      }
    } else if (mode === "prompt") {
      if (cancelBtn) {
        cancelBtn.style.display = "block";
        cancelBtn.textContent = cancelText || "Bekor qilish";
      }
      if (acceptBtn) {
        acceptBtn.textContent = confirmText || "Saqlash";
        acceptBtn.style.flex = "1.2";
        acceptBtn.style.background = "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
        acceptBtn.style.boxShadow = "0 4px 18px rgba(245, 158, 11, 0.45)";
      }
      if (inputWrap && inputEl) {
        inputWrap.style.display = "block";
        inputEl.value = defaultValue || "";
        inputEl.placeholder = placeholder || "";
        setTimeout(() => {
          inputEl.focus();
          inputEl.select();
        }, 80);
      }
    } else {
      if (inputWrap) inputWrap.style.display = "none";
      if (cancelBtn) {
        cancelBtn.style.display = "block";
        cancelBtn.textContent = cancelText || "Bekor qilish";
      }
      if (acceptBtn) {
        acceptBtn.textContent = confirmText || "Ha, davom etish";
        acceptBtn.style.flex = "1.2";
        if (confirmColor === "danger") {
          acceptBtn.style.background = "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)";
          acceptBtn.style.boxShadow = "0 4px 18px rgba(239, 68, 68, 0.45)";
        } else if (confirmColor === "primary") {
          acceptBtn.style.background = "linear-gradient(135deg, #7000ff 0%, #00f2fe 100%)";
          acceptBtn.style.boxShadow = "0 4px 18px rgba(112, 0, 255, 0.45)";
        } else {
          acceptBtn.style.background = "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";
          acceptBtn.style.boxShadow = "0 4px 18px rgba(245, 158, 11, 0.45)";
        }
      }
    }

    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
  });
}

function closeCustomConfirmModal(result) {
  const modal = document.getElementById("eurotexCustomConfirmModal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
  }

  if (typeof customConfirmResolve === "function") {
    let finalVal = result;
    if (customConfirmMode === "prompt") {
      if (result === true) {
        const inputEl = document.getElementById("customConfirmInput");
        finalVal = inputEl ? inputEl.value : "";
      } else {
        finalVal = null;
      }
    } else if (customConfirmMode === "alert") {
      finalVal = true;
    }
    const fn = customConfirmResolve;
    customConfirmResolve = null;
    fn(finalVal);
  }
}

// Global Eurotex Dialog Functions
window.eurotexConfirm = function (message, title = "Tasdiqlash", options = {}) {
  const isDanger =
    options.confirmColor === "danger" ||
    (typeof message === "string" &&
      (message.toLowerCase().includes("o'chirish") ||
        message.toLowerCase().includes("tugat") ||
        message.toLowerCase().includes("delete")));
  return showConfirmDialog({
    mode: "confirm",
    title: title || "Tasdiqlash",
    message: message || "",
    confirmText: options.confirmText || (isDanger ? "Ha, o'chirish" : "Ha, tasdiqlayman"),
    cancelText: options.cancelText || "Bekor qilish",
    confirmColor: options.confirmColor || (isDanger ? "danger" : "primary"),
    icon: options.icon || (isDanger ? "🗑️" : "⚠️"),
    iconHtml: options.iconHtml,
    iconBg: options.iconBg,
  });
};

window.eurotexAlert = function (message, title = "Eurotex Kids", options = {}) {
  return showConfirmDialog({
    mode: "alert",
    title: title || "Eurotex Kids",
    message: message || "",
    confirmText: options.confirmText || "Tushundim",
    icon: options.icon || "ℹ️",
    confirmColor: "primary",
  });
};

window.eurotexPrompt = function (message, defaultValue = "", title = "Kiritish", options = {}) {
  return showConfirmDialog({
    mode: "prompt",
    title: title || "Kiritish",
    message: message || "",
    defaultValue: defaultValue || "",
    placeholder: options.placeholder || "",
    confirmText: options.confirmText || "Saqlash",
    cancelText: options.cancelText || "Bekor qilish",
    icon: options.icon || "✍️",
  });
};

// Keyboard listener for dialog (Enter to accept, Escape to cancel)
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("eurotexCustomConfirmModal");
  if (modal && modal.classList.contains("active")) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeCustomConfirmModal(false);
    } else if (e.key === "Enter") {
      e.preventDefault();
      closeCustomConfirmModal(true);
    }
  }
});

// Override window.alert & window.confirm to guarantee native browser popup "eurotexkids.uz says" never appears
window.alert = function (msg) {
  window.eurotexAlert(String(msg || ""));
};
window.confirm = function (msg) {
  console.warn("Native confirm blocked, using custom dialog. Please use async showConfirmDialog instead:", msg);
  showConfirmDialog({
    title: "Tasdiqlash",
    message: String(msg || "Haqiqatan ham bu amalni bajarmoqchimisiz?"),
    confirmText: "Davom etish",
    cancelText: "Bekor qilish",
    icon: "⚠️",
  });
  return false;
};

function addAdminSizeRow() {
  const data = collectAdminSizeGuideFromInputs();
  data.push({ size: "Yangi Razmer", chest: "—", waist: "—", height: "—" });
  localStorage.setItem("eurotex_size_guide", JSON.stringify(data));
  renderAdminSizeGuide();
  showToast("Yangi o'lcham qatori qo'shildi ➕");
}

async function deleteAdminSizeRow(idx) {
  const data = collectAdminSizeGuideFromInputs();
  if (data.length <= 1) {
    showToast("Kamida bitta o'lcham bo'lishi kerak! ❌");
    return;
  }
  const sizeName = data[idx]?.size || "ushbu";
  const confirmed = await showConfirmDialog({
    title: "O'lchamni O'chirish 🗑️",
    message: `"${sizeName}" o'lchamini jadvaldan butunlay o'chirib tashlamoqchimisiz?`,
    confirmText: "Ha, o'chirilsin",
    cancelText: "Bekor qilish",
    icon: "🗑️",
    iconBg: "rgba(239, 68, 68, 0.18)",
    confirmColor: "danger",
  });

  if (confirmed) {
    data.splice(idx, 1);
    localStorage.setItem("eurotex_size_guide", JSON.stringify(data));
    renderAdminSizeGuide();
    showToast("O'lcham qatori o'chirildi 🗑️");
  }
}

function collectAdminSizeGuideFromInputs() {
  const currentData = getSizeGuideData();
  const updated = [];
  currentData.forEach((_, idx) => {
    const sizeIn = document.getElementById(`adminSize_name_${idx}`);
    const chestIn = document.getElementById(`adminSize_chest_${idx}`);
    const waistIn = document.getElementById(`adminSize_waist_${idx}`);
    const heightIn = document.getElementById(`adminSize_height_${idx}`);

    if (sizeIn) {
      updated.push({
        size: sizeIn.value.trim() || `Razmer ${idx + 1}`,
        chest: chestIn ? chestIn.value.trim() || "—" : "—",
        waist: waistIn ? waistIn.value.trim() || "—" : "—",
        height: heightIn ? heightIn.value.trim() || "—" : "—",
      });
    }
  });
  return updated.length > 0 ? updated : currentData;
}

function saveAdminSizeGuide() {
  const updatedData = collectAdminSizeGuideFromInputs();
  const noteInput = document.getElementById("adminSizeGuideNoteInput");
  const note = noteInput ? noteInput.value.trim() : getSizeGuideNote();

  localStorage.setItem("eurotex_size_guide", JSON.stringify(updatedData));
  localStorage.setItem("eurotex_size_guide_note", note);
  EurotexIDB.set("eurotex_size_guide", updatedData);
  EurotexIDB.set("eurotex_size_guide_note", note);

  showToast("O'lchamlar jadvali muvaffaqiyatli saqlandi va saytda yangilandi! ✅");
}

async function resetAdminSizeGuide() {
  const confirmed = await showConfirmDialog({
    title: "O'lchamlarni Qaytarish 🔄",
    message: "Haqiqatan ham barcha o'lchamlarni standart holatiga qaytarmoqchimisiz? Kiritilgan o'zgarishlar asl holiga qaytadi.",
    confirmText: "Ha, standartga qaytarilsin",
    cancelText: "Bekor qilish",
    icon: "🔄",
    iconBg: "rgba(0, 242, 254, 0.18)",
    confirmColor: "danger",
  });

  if (confirmed) {
    localStorage.removeItem("eurotex_size_guide");
    localStorage.removeItem("eurotex_size_guide_note");
    EurotexIDB.set("eurotex_size_guide", DEFAULT_SIZE_GUIDE);
    renderAdminSizeGuide();
    showToast("O'lchamlar jadvali standart holatga qaytarildi 🔄");
  }
}

function saveAdminUsdRate() {
  const input = document.getElementById("adminUsdRateInput");
  if (!input) return;
  const newRate = parseInt(input.value);
  if (!newRate || newRate <= 0) {
    showToast("Iltimos, to'g'ri dollar kursini kiriting! (masalan: 12800) ❌");
    return;
  }
  state.usdRate = newRate;
  localStorage.setItem("eurotex_usd_rate", newRate);
  try {
    if (
      window.EurotexEngine &&
      typeof window.EurotexEngine.setUsdRate === "function"
    ) {
      window.EurotexEngine.setUsdRate(newRate);
    }
  } catch (e) {}

  // Re-render all prices across website
  renderProducts();
  updateCartUI();
  updateCheckoutData();
  renderAdminPanel();

  showToast(
    `✨ Dollar kursi 1 USD = ${newRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm deb saqlandi! Saytdagi barcha narxlar yangilandi.`,
  );
}

function formatPriceUsdAndSom(priceVal) {
  const rate = state.usdRate || 12650;
  let usd = 0;
  let som = 0;
  const num = parseFloat(priceVal) || 0;

  if (num > 5000) {
    som = Math.round(num);
    usd = Math.round(som / rate);
  } else {
    usd = Math.round(num);
    som = Math.round(usd * rate);
  }

  const formattedSom = som.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return {
    usd,
    som,
    formattedSom: `${formattedSom} so'm`,
    display: `$${usd} (${formattedSom} so'm)`,
  };
}

function renderAdminOrders() {
  const container = document.getElementById("adminOrdersTableContainer");
  if (!container) return;

  if (!state.orders || state.orders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 20px; color:var(--text-secondary); background:var(--bg-surface-secondary); border-radius:16px; border:1px solid var(--border-color);">
        <div style="font-size:48px; margin-bottom:12px;">📦</div>
        <h3 style="font-size:18px; color:var(--text-primary);">Hozircha mijozlar buyurtmalari yo'q</h3>
      </div>
    `;
    return;
  }

  const rate = state.usdRate || 12650;

  const statusConfig = {
    0: { label: "Bekor qilindi", emoji: "❌", bg: "rgba(239, 68, 68, 0.15)", border: "rgba(239, 68, 68, 0.35)", color: "#ef4444" },
    1: { label: "Qabul qilindi", emoji: "🟡", bg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.35)", color: "#f59e0b" },
    2: { label: "Tayyorlanmoqda", emoji: "🔵", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.35)", color: "#3b82f6" },
    3: { label: "Kuryerda", emoji: "🟣", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.35)", color: "#a855f7" },
    4: { label: "Yetkazib berildi", emoji: "✅", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.35)", color: "#10b981" },
  };

  container.innerHTML = `
    <div class="admin-orders-cards-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 18px;">
      ${state.orders
        .map((o, idx) => {
          const rawItems = Array.isArray(o.items) && o.items.length > 0 ? o.items : [];
          const items = rawItems.length > 0 ? rawItems : (o.item ? [o.item] : []);

          const totalVal = parseFloat(o.total) || parseFloat(o.totalPriceUsd) || 0;
          let usdVal = 0;
          let uzsVal = 0;
          if (totalVal > 5000) {
            uzsVal = Math.round(totalVal);
            usdVal = Math.round(uzsVal / rate);
          } else if (totalVal > 0) {
            usdVal = Math.round(totalVal);
            uzsVal = Math.round(usdVal * rate);
          } else if (o.totalPriceUzs) {
            uzsVal = Math.round(o.totalPriceUzs);
            usdVal = Math.round(uzsVal / rate);
          } else {
            usdVal = items.reduce((sum, it) => sum + (Number(it.pachkaPriceUsd || it.priceUsd || it.price || 0) * (Number(it.quantity) || 1)), 0);
            uzsVal = Math.round(usdVal * rate);
          }

          const rawSubtotalUsd = Number(o.rawSubtotalUsd) || items.reduce((sum, it) => sum + (Number(it.pachkaPriceUsd || it.priceUsd || it.price || 0) * (Number(it.quantity) || 1)), 0);
          const rawSubtotalSom = Math.round(rawSubtotalUsd * rate);

          const discountUsd = Number(o.discountUsd) || (o.discountAmount > 1000 ? Math.round(o.discountAmount / rate) : Number(o.discountAmount) || 0);
          const discountSom = Number(o.discountUzs) || Math.round(discountUsd * rate);

          const totalSomFormatted = uzsVal
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

          const totalPachkas = items.reduce((sum, it) => sum + (Number(it.quantity) || 1), 0);
          const totalPieces = items.reduce((sum, it) => sum + ((Number(it.pachkaItems || it.itemsPerPachka) || 6) * (Number(it.quantity) || 1)), 0);

          const recipientName = o.recipient || o.customerName || "Mijoz";
          const orderId = o.id || o.orderId || `EUR-${idx + 1}`;
          const orderDate = o.date || "Bugun";
          const currentStep = o.statusStep !== undefined ? Number(o.statusStep) : 1;
          const sc = statusConfig[currentStep] || statusConfig[1];

          const custProfile = (o.customerProfile && typeof o.customerProfile === 'object') ? o.customerProfile : {};
          const extraPhone = o.extraPhone || custProfile.extraPhone || "";
          const tgRaw = (o.telegram || custProfile.telegram || "").replace(/^@/, "").trim();
          const deliveryDate = o.deliveryDate || "Ertaga (tezkor)";

          // Address & Google Maps link
          const rawAddr = o.address || custProfile.address || "";
          const mapsMatch = rawAddr.match(/https?:\/\/[^\s"')]+/);
          const mapsUrl = mapsMatch ? mapsMatch[0] : "";
          const cleanAddr = mapsUrl
            ? rawAddr.replace(mapsUrl, "").replace(/Lokatsiya:\s*/i, "").trim()
            : rawAddr;

          const addressHtml = mapsUrl
            ? `${escapeHtml(cleanAddr || "Xarita lokatsiyasi")} <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="color:#00e5ff; font-weight:700; text-decoration:underline; margin-left:4px; display:inline-flex; align-items:center; gap:2px;">📍 Xaritada</a>`
            : escapeHtml(cleanAddr || "Manzil ko'rsatilmagan");

          const paymentMethod = o.paymentMethod || "cash";
          const payLabel = paymentMethod === "card" ? "💳 Karta orqali" : (paymentMethod === "nasiya" || paymentMethod === "eurotex-nasiya") ? "🛍️ Eurotex Nasiya" : (paymentMethod === "click" ? "💳 Click" : (paymentMethod === "payme" ? "💳 Payme" : "💵 Naqd pul"));

          // Items list rendering with prominent COLOR & SIZE
          const itemsHtml = items.length > 0 ? items.map((it) => {
            const itQty = Number(it.quantity) || 1;
            const itPachkaItems = Number(it.pachkaItems || it.itemsPerPachka) || 6;
            const itPriceUsd = Number(it.pachkaPriceUsd || it.priceUsd || it.price) || (usdVal > 0 && items.length === 1 ? usdVal : 45);
            const itTotalUsd = itPriceUsd * itQty;
            const itTotalSom = Math.round(itTotalUsd * rate);
            const itImg = it.image || it.img || "/images/navy_suit.jpg";
            const itTitle = it.title || "Eurotex Mahsulot";
            const itSize = it.size || "Standart";
            const itColor = it.color || it.selectedColor || "Klassik";
            const itColorCode = getEurotexColorCode(itColor);

            return `
              <div style="display: flex; align-items: center; gap: 12px; padding: 10px 12px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px;">
                <div style="position: relative; width: 56px; height: 56px; border-radius: 8px; overflow: hidden; background: #0b1120; border: 1px solid rgba(255, 255, 255, 0.12); flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
                  <img src="${itImg}" alt="${escapeHtml(itTitle)}" style="width: 100%; height: 100%; object-fit: contain; padding: 2px;" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='/images/navy_suit.jpg'">
                  <span style="position: absolute; bottom: 2px; right: 2px; background: rgba(0, 0, 0, 0.85); color: #38bdf8; font-size: 9px; font-weight: 800; padding: 1px 4px; border-radius: 3px;">${itQty}p</span>
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 13.5px; font-weight: 700; color: #f8fafc; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(itTitle)}">
                    ${escapeHtml(itTitle)}
                  </div>
                  <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 4px; font-size: 11px;">
                    <span style="background: rgba(255, 255, 255, 0.08); color: #cbd5e1; padding: 2px 7px; border-radius: 4px; font-weight: 600;">📏 O'lcham: ${escapeHtml(itSize)}</span>
                    <span style="background: rgba(255, 255, 255, 0.08); color: #f1f5f9; padding: 2px 8px; border-radius: 5px; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; border: 1px solid rgba(255,255,255,0.12);"><span style="width: 8px; height: 8px; border-radius: 50%; background: ${itColorCode || '#94a3b8'}; display: inline-block; box-shadow: 0 0 5px ${itColorCode || 'transparent'};"></span> 🎨 ${escapeHtml(itColor)}</span>
                    <span style="background: rgba(0, 229, 255, 0.12); color: #00e5ff; padding: 2px 7px; border-radius: 4px; font-weight: 700;">📦 ${itQty} pachka (${itPachkaItems * itQty} dona)</span>
                  </div>
                </div>
                <div style="text-align: right; flex-shrink: 0;">
                  <div style="font-size: 13.5px; font-weight: 800; color: #38bdf8;">$${itPriceUsd}</div>
                  <div style="font-size: 10.5px; color: #94a3b8; font-weight: 600;">${itTotalSom.toLocaleString('uz-UZ')} so'm</div>
                </div>
              </div>
            `;
          }).join("") : `
            <div style="padding: 12px; font-size: 12px; color: #94a3b8; background: rgba(15, 23, 42, 0.5); border-radius: 8px; text-align: center;">
              Mahsulotlar tafsiloti saqlanmagan
            </div>
          `;

          // Promokod & Chegirma bloki
          const hasPromoOrDiscount = Boolean(o.promoCode) || discountUsd > 0;
          const promoDiscountHtml = hasPromoOrDiscount ? `
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(5, 150, 105, 0.08) 100%); border: 1px dashed #10b981; border-radius: 10px; padding: 9px 12px; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 2px;">
              <div style="display: flex; align-items: center; gap: 7px; flex-wrap: wrap;">
                <span style="font-size: 16px;">🏷️</span>
                <span style="font-size: 11.5px; color: #a7f3d0; font-weight: 700;">Promokod:</span>
                <span style="background: #10b981; color: #022c22; font-weight: 900; font-size: 11px; padding: 2px 8px; border-radius: 5px; letter-spacing: 0.5px; text-transform: uppercase;">${escapeHtml(o.promoCode || 'MAXSUS')}</span>
              </div>
              <div style="font-size: 12.5px; font-weight: 800; color: #34d399; text-align: right;">
                -${discountUsd > 0 ? `$${discountUsd}` : ''} ${discountSom > 0 ? `(${discountSom.toLocaleString('uz-UZ')} so'm)` : ''} chegirma
              </div>
            </div>
          ` : '';

          return `
            <div class="admin-order-card" style="background: linear-gradient(160deg, #0f172a 0%, #0b1322 100%); border: 1px solid rgba(51, 65, 85, 0.55); border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 14px; position: relative; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.35);">
              <!-- Top Accent Line -->
              <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #7000ff, #00f2fe);"></div>

              <!-- Header: Order ID + Date + Status Badge -->
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 800; color: #f1f5f9; background: rgba(255,255,255,0.06); padding: 3px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">
                    #${orderId}
                  </span>
                  <span style="font-size: 12px; color: #64748b; font-weight: 600;">📅 ${orderDate}</span>
                </div>
                <span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 6px; font-size: 11.5px; font-weight: 700; background: ${sc.bg}; border: 1px solid ${sc.border}; color: ${sc.color};">
                  ${sc.emoji} ${sc.label}
                </span>
              </div>

              <!-- Customer Info Box with Profil Ko'rish tugmasi -->
              <div style="padding: 12px 14px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; display: flex; flex-direction: column; gap: 7px; font-size: 12.5px;">
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap;">
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="color: #94a3b8;">👤 Mijoz:</span>
                    <b style="color: #f1f5f9; font-weight: 800;">${escapeHtml(recipientName)}</b>
                  </div>
                  <button type="button" onclick="openAdminCustomerProfileModal('${orderId}')" class="btn btn-sm" style="background: rgba(112, 0, 255, 0.18); border: 1px solid rgba(168, 85, 247, 0.45); color: #c084fc; font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; transition: all 0.2s;" onmouseover="this.style.background='rgba(112,0,255,0.35)'" onmouseout="this.style.background='rgba(112,0,255,0.18)'">
                    👤 Profilni ko'rish
                  </button>
                </div>

                ${o.phone ? `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #94a3b8;">📞 Asosiy tel:</span>
                  <a href="tel:${escapeHtml(o.phone)}" style="color: #00e5ff; font-weight: 700; text-decoration: none;">${escapeHtml(o.phone)}</a>
                </div>` : ""}

                ${extraPhone ? `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #94a3b8;">📱 Qo'shimcha tel:</span>
                  <a href="tel:${escapeHtml(extraPhone)}" style="color: #38bdf8; font-weight: 600; text-decoration: none;">${escapeHtml(extraPhone)}</a>
                </div>` : ""}

                ${tgRaw ? `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #94a3b8;">✈️ Telegram:</span>
                  <a href="https://t.me/${escapeHtml(tgRaw)}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; font-weight: 700; text-decoration: underline;">@${escapeHtml(tgRaw)}</a>
                </div>` : ""}

                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #94a3b8;">📅 Yetkazish kuni:</span>
                  <span style="color: #facc15; font-weight: 700; background: rgba(250, 204, 21, 0.12); padding: 2px 8px; border-radius: 5px; border: 1px solid rgba(250, 204, 21, 0.25);">🗓️ ${escapeHtml(deliveryDate)}</span>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                  <span style="color: #94a3b8; flex-shrink: 0;">📍 Manzil / Lokatsiya:</span>
                  <span style="color: #cbd5e1; text-align: right; word-break: break-word; font-size: 12px;">${addressHtml}</span>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #94a3b8;">💳 To'lov usuli:</span>
                  <b style="color: #a78bfa; font-weight: 700;">${escapeHtml(payLabel)}</b>
                </div>
              </div>

              <!-- Promokod & Skidka Bloki -->
              ${promoDiscountHtml}

              <!-- Ordered Products List: ALL ITEMS in this order -->
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; font-weight: 800; display: flex; justify-content: space-between; align-items: center;">
                  <span>🛍️ Buyurtma tarkibi (${items.length} ta mahsulot):</span>
                  <span style="color: #38bdf8;">${totalPachkas} pachka (${totalPieces} dona)</span>
                </div>

                ${itemsHtml}
              </div>

              <!-- Order Total Row with Discount Breakdown -->
              <div style="padding: 12px 14px; background: linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(112, 0, 255, 0.08) 100%); border: 1px solid rgba(0, 242, 254, 0.25); border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Jami Buyurtma Summasi:</div>
                  <div style="font-size: 12px; color: #cbd5e1; margin-top: 2px;">${items.length} xil mahsulot • ${totalPachkas} pachka</div>
                  ${discountUsd > 0 ? `
                    <div style="font-size: 11px; color: #94a3b8; text-decoration: line-through; margin-top: 3px;">Asl summa: $${rawSubtotalUsd} (${rawSubtotalSom.toLocaleString('uz-UZ')} so'm)</div>
                    <div style="font-size: 11px; color: #34d399; font-weight: 700;">Chegirma: -$${discountUsd} (${discountSom.toLocaleString('uz-UZ')} so'm)</div>
                  ` : ''}
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 14px; font-weight: 800; color: #00e5ff;">$${usdVal}</div>
                  <div class="cyan admin-order-total-amount" id="orderTotalSom_${idx}" style="font-size: 18px; font-weight: 900; line-height: 1.2;">${totalSomFormatted} so'm</div>
                </div>
              </div>

              <!-- Actions Row: Status Select + Delete Button -->
              <div style="display: flex; gap: 8px; align-items: center;">
                <select class="admin-card-cat-select admin-select-dark" style="flex: 1;" onchange="updateOrderStatusByAdmin(${idx}, this.value)">
                  <option value="1" ${currentStep === 1 ? "selected" : ""}>1. Qabul qilindi 🟡</option>
                  <option value="2" ${currentStep === 2 ? "selected" : ""}>2. Tayyorlanmoqda 🔵</option>
                  <option value="3" ${currentStep === 3 ? "selected" : ""}>3. Kuryerda 🟣</option>
                  <option value="4" ${currentStep === 4 ? "selected" : ""}>4. Yetkazib berildi ✅</option>
                  <option value="0" ${currentStep === 0 ? "selected" : ""}>0. Bekor qilindi ❌</option>
                  <option value="delete" style="color: #ef4444; font-weight: 800;">🗑️ Olib tashlash</option>
                </select>
                <button type="button" onclick="deleteOrderByAdmin('${o.id || o.orderId}')" class="btn btn-sm" title="Buyurtmani olib tashlash (o'chirish)" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1.5px solid rgba(239, 68, 68, 0.4); border-radius: 8px; padding: 7px 11px; cursor: pointer; font-size: 13px; font-weight: 700; transition: all 0.2s;" onmouseover="this.style.background='#ef4444'; this.style.color='#fff';" onmouseout="this.style.background='rgba(239, 68, 68, 0.15)'; this.style.color='#ef4444';">
                  🗑️
                </button>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function updateOrderStatusByAdmin(index, newStepStr) {
  if (newStepStr === "delete") {
    const targetOrder = state.orders && state.orders[index];
    if (targetOrder) {
      deleteOrderByAdmin(targetOrder.id || targetOrder.orderId);
    }
    return;
  }

  const step = parseInt(newStepStr, 10);
  const labels = {
    1: "Qabul qilindi 🟡",
    2: "Tayyorlanmoqda 🔵",
    3: "Kuryerda 🟣",
    4: "Yetkazib berildi ✅",
    0: "Bekor qilindi ❌",
  };

  if (state.orders && state.orders[index]) {
    const targetOrder = state.orders[index];
    targetOrder.statusStep = step;
    targetOrder.status = labels[step] || "Yangilandi";
    safeSetLocalStorage("eurotex_orders", state.orders);

    // Update status in MongoDB Atlas & live server
    fetch(`/orders/${targetOrder.id || targetOrder.orderId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": "admin_master_token_2026",
      },
      body: JSON.stringify({ statusStep: step, status: labels[step] }),
    }).catch((e) => console.error("PUT /orders status error:", e));

    renderOrdersHistory();
    renderAdminOrders();
    updateAdminStats();
    showToast(
      `Buyurtma #${targetOrder.id || targetOrder.orderId} statusi yangilandi: ${labels[step]}`,
    );
  }
}

async function deleteOrderByAdmin(orderId) {
  if (!orderId) return;
  const confirmed = await showConfirmDialog({
    title: "Buyurtmani olib tashlash",
    message: `Haqiqatan ham #${orderId} raqamli buyurtmani tizimdan butunlay olib tashlamoqchimisiz? Ushbu buyurtma bazadan ham, ro'yxatdan ham to'liq o'chiriladi va bu amalni ortga qaytarib bo'lmaydi.`,
    confirmText: "🗑️ Ha, olib tashlansin",
    cancelText: "Bekor qilish",
    icon: "🗑️",
    confirmColor: "danger",
  });
  if (!confirmed) {
    renderAdminOrders();
    return;
  }

  // 1. Remove from local state
  if (state.orders) {
    state.orders = state.orders.filter(
      (o) => String(o.id || o.orderId) !== String(orderId)
    );
    safeSetLocalStorage("eurotex_orders", state.orders);
  }

  // 2. Remove from device's my_order_ids if present
  try {
    let myIds = JSON.parse(localStorage.getItem("eurotex_my_order_ids") || "[]");
    myIds = myIds.filter((id) => String(id) !== String(orderId));
    safeSetLocalStorage("eurotex_my_order_ids", myIds);
  } catch (e) {}

  // 3. Broadcast sync if available
  if (typeof orderSyncChannel !== "undefined" && orderSyncChannel) {
    orderSyncChannel.postMessage({ type: "DELETE_ORDER", orderId });
  }

  // 4. Send DELETE request to backend
  try {
    const cookies = typeof parseCookies === "function" ? parseCookies() : {};
    const token = cookies.eurotex_session || localStorage.getItem("eurotex_token") || "";
    await fetch(`/orders/${encodeURIComponent(orderId)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        "x-admin-token": "admin_master_token_2026",
      },
    });
  } catch (err) {
    console.warn("DELETE /orders/:id error:", err);
  }

  // 5. Update UI
  renderOrdersHistory();
  renderAdminOrders();
  updateAdminStats();
  showToast(`🗑️ Buyurtma #${orderId} muvaffaqiyatli olib tashlandi!`, "success");
}
window.deleteOrderByAdmin = deleteOrderByAdmin;

// 👤 Admin: Mijoz Profil Ma'lumotlarini to'liq ko'rish modali
function openAdminCustomerProfileModal(orderId) {
  const pool = state.orders || [];
  const order = pool.find((o) => String(o.id || o.orderId) === String(orderId)) || {};
  const cp = (order.customerProfile && typeof order.customerProfile === "object") ? order.customerProfile : {};

  const uLocal = JSON.parse(localStorage.getItem("eurotex_user") || "null") || {};
  const fallbackUser = (state.user && (state.user.email === order.userEmail || state.user.phone === order.phone)) ? state.user : uLocal;

  const fullName = cp.fullName || cp.name || order.customerName || order.recipient || fallbackUser.fullName || fallbackUser.name || "Xaridor";
  const phone = order.phone || cp.phone || fallbackUser.phone || "";
  const extraPhone = order.extraPhone || cp.extraPhone || fallbackUser.extraPhone || "";
  const telegramRaw = (order.telegram || cp.telegram || fallbackUser.telegram || "").replace(/^@/, "").trim();
  const region = cp.region || cp.city || order.region || fallbackUser.city || fallbackUser.region || "Toshkent shahri";
  const address = order.address || cp.address || fallbackUser.address || "Manzil ko'rsatilmagan";
  const birthDate = cp.birthDate || fallbackUser.birthDate || "Kiritilmagan";
  const suitSize = cp.suitSize || fallbackUser.suitSize || "48 (M)";
  const style = cp.style || fallbackUser.style || "Slim Fit";
  const email = order.userEmail || cp.email || fallbackUser.email || "Kiritilmagan";

  const rate = state.usdRate || 12650;
  const clientOrders = (state.orders || []).filter((o) => {
    if (!o) return false;
    if (phone && o.phone && (o.phone.includes(phone.slice(-7)) || phone.includes((o.phone || '').slice(-7)))) return true;
    if (email && o.userEmail && o.userEmail.toLowerCase() === email.toLowerCase()) return true;
    return false;
  });
  const totalOrdersCount = clientOrders.length || 1;
  const totalSpentUsd = clientOrders.reduce((sum, o) => {
    const t = Number(o.total || o.totalPriceUsd || 0);
    return sum + (t > 5000 ? Math.round(t / rate) : t);
  }, 0);
  const totalSpentSom = Math.round(totalSpentUsd * rate);

  let modalEl = document.getElementById("adminCustomerProfileModal");
  if (!modalEl) {
    modalEl = document.createElement("div");
    modalEl.id = "adminCustomerProfileModal";
    modalEl.className = "modal";
    modalEl.style.cssText = "display:none; position:fixed; inset:0; z-index:99999; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px); align-items:center; justify-content:center; padding:16px;";
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div style="background: linear-gradient(160deg, #0f172a 0%, #1e1b4b 100%); border: 1.5px solid rgba(168, 85, 247, 0.45); border-radius: 20px; max-width: 580px; width: 100%; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8), 0 0 30px rgba(112, 0, 255, 0.25); overflow: hidden; position: relative; animation: modalPop 0.25s ease-out;">
      <!-- Accent Top Border -->
      <div style="height: 4px; background: linear-gradient(90deg, #7000ff, #00f2fe, #10b981);"></div>

      <!-- Header -->
      <div style="padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, #7000ff 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; font-size: 22px; box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);">
            👤
          </div>
          <div>
            <h3 style="margin: 0; font-size: 18px; font-weight: 800; color: #ffffff;">Mijoz Profil Ma'lumotlari</h3>
            <span style="font-size: 12px; color: #94a3b8;">Buyurtma #${escapeHtml(orderId)} mijozi</span>
          </div>
        </div>
        <button type="button" onclick="closeAdminCustomerProfileModal()" style="background: rgba(255,255,255,0.08); border: none; color: #ffffff; width: 34px; height: 34px; border-radius: 50%; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s;" onmouseover="this.style.background='rgba(239,68,68,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.08)'">
          ✕
        </button>
      </div>

      <!-- Body -->
      <div style="padding: 22px 24px; max-height: 72vh; overflow-y: auto; display: flex; flex-direction: column; gap: 14px;">
        <!-- Full Name Card -->
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px 16px;">
          <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700; letter-spacing: 0.5px;">👤 Ism va Familiya:</div>
          <div style="font-size: 17px; font-weight: 800; color: #f8fafc; margin-top: 4px;">${escapeHtml(fullName)}</div>
        </div>

        <!-- Contact Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
          <!-- Primary Phone -->
          <div style="background: rgba(0, 229, 255, 0.06); border: 1px solid rgba(0, 229, 255, 0.2); border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 11px; text-transform: uppercase; color: #38bdf8; font-weight: 700;">📞 Asosiy telefon:</div>
            ${phone ? `
              <a href="tel:${escapeHtml(phone)}" style="font-size: 15px; font-weight: 800; color: #00e5ff; text-decoration: none; display: block; margin-top: 4px;">
                ${escapeHtml(phone)}
              </a>
            ` : '<div style="font-size: 13px; color: #64748b; margin-top: 4px;">Kiritilmagan</div>'}
          </div>

          <!-- Secondary Phone -->
          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">📱 Qo'shimcha telefon:</div>
            ${extraPhone ? `
              <a href="tel:${escapeHtml(extraPhone)}" style="font-size: 15px; font-weight: 700; color: #cbd5e1; text-decoration: none; display: block; margin-top: 4px;">
                ${escapeHtml(extraPhone)}
              </a>
            ` : '<div style="font-size: 13px; color: #64748b; margin-top: 4px;">Mavjud emas</div>'}
          </div>

          <!-- Telegram Username -->
          <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 11px; text-transform: uppercase; color: #60a5fa; font-weight: 700;">✈️ Telegram username:</div>
            ${telegramRaw ? `
              <a href="https://t.me/${escapeHtml(telegramRaw)}" target="_blank" rel="noopener noreferrer" style="font-size: 15px; font-weight: 800; color: #93c5fd; text-decoration: underline; display: inline-flex; align-items: center; gap: 4px; margin-top: 4px;">
                @${escapeHtml(telegramRaw)} ↗
              </a>
            ` : '<div style="font-size: 13px; color: #64748b; margin-top: 4px;">Kiritilmagan</div>'}
          </div>

          <!-- Email -->
          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">✉️ Email pochta:</div>
            <div style="font-size: 13.5px; font-weight: 700; color: #cbd5e1; margin-top: 4px; word-break: break-all;">
              ${escapeHtml(email)}
            </div>
          </div>
        </div>

        <!-- Location & Delivery Address -->
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px;">
          <div>
            <span style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">📍 Viloyat / Shahar:</span>
            <div style="font-size: 14px; font-weight: 700; color: #f1f5f9; margin-top: 2px;">${escapeHtml(region)}</div>
          </div>
          <div>
            <span style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">🏠 Aniq Yetkazish Manzili:</span>
            <div style="font-size: 14px; color: #cbd5e1; margin-top: 2px; line-height: 1.4;">${escapeHtml(address)}</div>
          </div>
        </div>

        <!-- Personal Preferences Grid -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
          <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 12px; text-align: center;">
            <div style="font-size: 10.5px; color: #94a3b8; font-weight: 700;">🎁 Tug'ilgan sana:</div>
            <div style="font-size: 13px; font-weight: 800; color: #f43f5e; margin-top: 4px;">${escapeHtml(birthDate)}</div>
          </div>
          <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 12px; text-align: center;">
            <div style="font-size: 10.5px; color: #94a3b8; font-weight: 700;">👔 O'lcham:</div>
            <div style="font-size: 13px; font-weight: 800; color: #38bdf8; margin-top: 4px;">${escapeHtml(suitSize)}</div>
          </div>
          <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 12px; text-align: center;">
            <div style="font-size: 10.5px; color: #94a3b8; font-weight: 700;">✂️ Fason:</div>
            <div style="font-size: 13px; font-weight: 800; color: #a78bfa; margin-top: 4px;">${escapeHtml(style)}</div>
          </div>
        </div>

        <!-- Customer Stats Banner -->
        <div style="background: linear-gradient(135deg, rgba(112, 0, 255, 0.15) 0%, rgba(0, 242, 254, 0.1) 100%); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: 12px; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 11px; color: #cbd5e1; font-weight: 700;">Mijozning umumiy statistikasi:</div>
            <div style="font-size: 13px; color: #f1f5f9; font-weight: 800; margin-top: 2px;">📦 Jami buyurtmalar: ${totalOrdersCount} ta</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 11px; color: #94a3b8; font-weight: 600;">Umumiy xarid summasi:</div>
            <div style="font-size: 15px; font-weight: 900; color: #00e5ff;">$${totalSpentUsd} (${totalSpentSom.toLocaleString('uz-UZ')} so'm)</div>
          </div>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div style="padding: 16px 24px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; gap: 10px; justify-content: flex-end; background: rgba(15, 23, 42, 0.8);">
        ${phone ? `
          <a href="tel:${escapeHtml(phone)}" class="btn btn-sm" style="background: #10b981; color: #ffffff; text-decoration: none; padding: 8px 16px; border-radius: 8px; font-weight: 800; display: inline-flex; align-items: center; gap: 6px;">
            📞 Qo'ng'iroq qilish
          </a>
        ` : ''}
        ${telegramRaw ? `
          <a href="https://t.me/${escapeHtml(telegramRaw)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #2563eb; color: #ffffff; text-decoration: none; padding: 8px 16px; border-radius: 8px; font-weight: 800; display: inline-flex; align-items: center; gap: 6px;">
            ✈️ Telegramda yozish
          </a>
        ` : ''}
        <button type="button" onclick="closeAdminCustomerProfileModal()" class="btn btn-sm" style="background: rgba(255,255,255,0.12); color: #ffffff; border: 1px solid rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer;">
          ✕ Yopish
        </button>
      </div>
    </div>
  `;

  modalEl.style.display = "flex";
}
window.openAdminCustomerProfileModal = openAdminCustomerProfileModal;

function closeAdminCustomerProfileModal() {
  const modalEl = document.getElementById("adminCustomerProfileModal");
  if (modalEl) modalEl.style.display = "none";
}
window.closeAdminCustomerProfileModal = closeAdminCustomerProfileModal;

function renderAdminProducts() {
  ensureAdminSizesElements();
  const container = document.getElementById("adminProductsTableContainer");
  if (!container) return;

  if (
    !window.EUROTEX_PRODUCTS ||
    !Array.isArray(window.EUROTEX_PRODUCTS) ||
    window.EUROTEX_PRODUCTS.length === 0
  ) {
    window.EUROTEX_PRODUCTS =
      typeof DEFAULT_EUROTEX_PRODUCTS !== "undefined"
        ? [...DEFAULT_EUROTEX_PRODUCTS]
        : [];
  }
  EUROTEX_PRODUCTS = window.EUROTEX_PRODUCTS;

  const rate = state.usdRate || 12650;

  const adminLimit = state.adminDisplayLimit || 30;
  const visibleAdmin = EUROTEX_PRODUCTS.slice(0, adminLimit);

  container.innerHTML = `
        <!-- Admin Product Cards Grid (Screenshot 2 Design System) -->
        <div class="admin-products-cards-grid">
            ${visibleAdmin
              .map((p, idx) => {
                const pachkaUsd = p.pachkaPriceUsd || p.priceUsd || 50;
                const uzs = Math.round(pachkaUsd * rate);
                const totalSomFormatted = uzs
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                return `
                    <div class="admin-product-card">
                        <!-- Top Image Box -->
                        <div class="admin-card-media">
                            <img src="${p.image}" alt="${p.title_uz}" class="admin-card-img" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='/images/navy_suit.jpg'">
                            <span class="admin-card-badge">📦 Pachka: ${p.pachkaQty || 6} dona ${p.discountPercent ? `<b style="background:#ef4444; color:#fff; padding:1px 6px; border-radius:6px; margin-left:4px;">-${p.discountPercent}%</b>` : ""}</span>
                        </div>

                        <!-- Card Content Body -->
                        <div class="admin-card-body">
                            <!-- Title & Action Buttons Row -->
                            <div class="admin-card-header-row">
                                <input type="text" id="pTitle_${idx}" value="${p.title_uz}" class="admin-card-title-input" placeholder="Mahsulot nomi">
                                <div class="admin-card-actions">
                                    <button type="button" class="admin-action-btn btn-edit" onclick="openEditProductModal(${idx})" title="Tahrirlash ⚙️">
                                        ⚙️
                                    </button>
                                    <button type="button" class="admin-action-btn btn-save" onclick="saveProductPriceByAdmin(${idx})" title="Saqlash 💾">
                                        💾
                                    </button>
                                    <button type="button" class="admin-action-btn btn-delete" onclick="deleteProductByAdmin(${idx})" title="O'chirish 🗑️">
                                        🗑️
                                    </button>
                                </div>
                            </div>

                            <!-- Category Subtitle Dropdown -->
                            <div class="admin-card-subtitle">
                                <span>Turkumi:</span> 
                                <select id="pCat_${idx}" class="admin-card-cat-select admin-select-dark">
                                    <option value="suits" ${p.category === "suits" ? "selected" : ""}>Kostyum-Shimlar</option>
                                    <option value="tuxedos" ${p.category === "tuxedos" ? "selected" : ""}>Smoking & To'y liboslari</option>
                                    <option value="trousers" ${p.category === "trousers" ? "selected" : ""}>GBP Klassik Shimlar</option>
                                    <option value="shirts" ${p.category === "shirts" ? "selected" : ""}>Erkaklar Ko'ylaklari</option>
                                    <option value="blazers" ${p.category === "blazers" ? "selected" : ""}>Pijaklar & Blazerlar</option>
                                    <option value="accessories" ${p.category === "accessories" ? "selected" : ""}>Aksessuarlar</option>
                                </select>
                            </div>

                            <!-- Detail Lines -->
                            <div class="admin-card-details">
                                <div class="detail-line">
                                    <span class="detail-label">Pachka ($ USD):</span>
                                    <div class="detail-input-wrap">
                                        <input type="number" id="pPachkaPrice_${idx}" value="${pachkaUsd}" class="admin-price-input pachka" oninput="updateCardTotalSom(this, ${idx})">
                                        <span class="detail-unit">$</span>
                                    </div>
                                </div>

                                <div class="detail-line total">
                                    <span class="detail-label">Jami so'mda:</span>
                                    <span class="detail-value cyan" id="cardTotalSom_${idx}">${totalSomFormatted} so'm ${p.discountPercent ? `<span style="color:#ef4444; font-size:11.5px; font-weight:800; margin-left:4px;">(-${p.discountPercent}%)</span>` : ""}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
              })
              .join("")}
        </div>
        ${
          EUROTEX_PRODUCTS.length > visibleAdmin.length
            ? `<div style="text-align: center; padding: 24px 0;">
                 <button type="button" class="btn btn-primary btn-large" onclick="loadMoreAdminProducts()" style="padding: 12px 28px; border-radius: 10px; font-weight: 800; font-size: 14px; background: linear-gradient(135deg, #7000ff, #4c00b0); color: #fff; border: none; cursor: pointer;">
                   👑 Yana ${EUROTEX_PRODUCTS.length - visibleAdmin.length} ta admin mahsulotini ko'rsatish
                 </button>
               </div>`
            : ""
        }
    `;
}

function updateCardTotalSom(input, idx) {
  const rate =
    typeof state !== "undefined" && state.usdRate ? state.usdRate : 12650;
  const usdVal = parseFloat(input.value) || 0;
  const uzs = Math.round(usdVal * rate);
  const formatted = uzs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const totalEl = document.getElementById(`cardTotalSom_${idx}`);
  if (totalEl) totalEl.textContent = `${formatted} so'm`;
}

// Real-time Cross-Tab Product Sync
const productSyncChannel =
  typeof BroadcastChannel !== "undefined"
    ? new BroadcastChannel("eurotex_product_sync")
    : null;

if (productSyncChannel) {
  productSyncChannel.onmessage = (event) => {
    if (event.data && event.data.type === "REFRESH_PRODUCTS") {
      const stored = localStorage.getItem("eurotex_custom_products");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const storedIds = new Set(parsed.map((p) => p.id));
            const missingDefaults = EUROTEX_PRODUCTS.filter(
              (p) => !storedIds.has(p.id),
            );
            EUROTEX_PRODUCTS = [...parsed, ...missingDefaults];
            renderProducts();
            renderAdminProducts();
          }
        } catch (e) {}
      }
    }
  };
}

window.addEventListener("storage", (e) => {
  if (e.key === "eurotex_custom_products") {
    syncProductsWithBackendAndStorage();
  }
});

function getCombinedProducts() {
  let localProds = [];
  try {
    const stored = localStorage.getItem("eurotex_custom_products");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) localProds = parsed;
    }
  } catch (e) {}

  const map = new Map();

  // 1. Add localStorage custom products first
  (localProds || []).forEach((item) => {
    if (item && item.id) {
      map.set(String(item.id), {
        ...item,
        isCustom: true,
      });
    }
  });

  // 2. Fresh in-memory EUROTEX_PRODUCTS (from MongoDB/Backend) OVERRIDE stale localStorage cache!
  (EUROTEX_PRODUCTS || []).forEach((item) => {
    if (item && item.id) {
      map.set(String(item.id), {
        ...item,
        isCustom:
          item.isCustom === true ||
          String(item.id).startsWith("prod-") ||
          (item.dbId && String(item.dbId).length > 0),
      });
    }
  });

  return Array.from(map.values());
}

function compressBase64Image(dataUrl, maxWidth = 600, quality = 0.65) {
  return new Promise((resolve) => {
    if (!dataUrl || !dataUrl.startsWith("data:image")) return resolve(dataUrl);
    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

const EurotexIDB = {
  dbName: "EurotexDB",
  storeName: "products",
  db: null,
  async init() {
    if (this.db) return this.db;
    return new Promise((resolve) => {
      try {
        const req = indexedDB.open(this.dbName, 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(this.storeName)) {
            db.createObjectStore(this.storeName);
          }
        };
        req.onsuccess = (e) => {
          this.db = e.target.result;
          resolve(this.db);
        };
        req.onerror = () => resolve(null);
      } catch (err) {
        resolve(null);
      }
    });
  },
  async set(key, val) {
    const db = await this.init();
    if (!db) return;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(this.storeName, "readwrite");
        const store = tx.objectStore(this.storeName);
        store.put(val, key);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      } catch (err) {
        resolve(false);
      }
    });
  },
  async get(key) {
    const db = await this.init();
    if (!db) return null;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(this.storeName, "readonly");
        const store = tx.objectStore(this.storeName);
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      } catch (err) {
        resolve(null);
      }
    });
  },
};

function notifyProductChange() {
  EurotexIDB.set("eurotex_custom_products", EUROTEX_PRODUCTS);
  try {
    localStorage.setItem(
      "eurotex_custom_products",
      JSON.stringify(EUROTEX_PRODUCTS),
    );
  } catch (e) {}
  if (productSyncChannel) {
    productSyncChannel.postMessage({
      type: "REFRESH_PRODUCTS",
      timestamp: Date.now(),
    });
  }
  renderProducts();
  renderAdminProducts();
}

function computeProductsHash(prods) {
  if (!Array.isArray(prods)) return "";
  return prods.map(
    (p) => `${p.id || p.customId}:${p.title_uz}:${p.price}:${p.pachkaPriceUsd || p.priceUsd}:${p.category}:${p.image}`,
  ).join("|");
}

let _lastProdsHash = computeProductsHash(getGlobalProductsPool());

async function syncProductsWithBackendAndStorage(isIntervalSync = false) {
  // If this is a background interval tick AND admin is in Admin Panel, pause polling so inputs never reset!
  const isAdminView =
    window.location.pathname.includes("/admin") ||
    state.currentCategory === "admin" ||
    (document.activeElement &&
      document.activeElement.closest("#adminProductsTableContainer")) ||
    (document.getElementById("admin-dashboard-section") &&
      document.getElementById("admin-dashboard-section").style.display !==
        "none");

  if (isIntervalSync && isAdminView) {
    return;
  }

  // Pre-load from IndexedDB and LocalStorage ONLY on initial cold page load
  if (!isIntervalSync && (!EUROTEX_PRODUCTS || EUROTEX_PRODUCTS.length === 0)) {
    try {
      let cachedProds = await EurotexIDB.get("eurotex_custom_products");
      if (!cachedProds || !Array.isArray(cachedProds) || cachedProds.length === 0) {
        const localStr = localStorage.getItem("eurotex_custom_products");
        if (localStr) cachedProds = JSON.parse(localStr);
      }
      if (Array.isArray(cachedProds) && cachedProds.length > 0) {
        EUROTEX_PRODUCTS = cachedProds;
        window.EUROTEX_PRODUCTS = EUROTEX_PRODUCTS;
        _lastProdsHash = computeProductsHash(EUROTEX_PRODUCTS);
        renderProducts();
      }
    } catch (e) {}
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 35000);
    const res = await fetch("/products?_t=" + Date.now(), { signal: controller.signal }).catch(() => null);
    clearTimeout(timeoutId);
    if (res && res.ok) {
      const data = await res.json().catch(() => null);
      if (
        data &&
        data.success &&
        Array.isArray(data.products) &&
        data.products.length > 0
      ) {
        const dbProds = data.products.map((p) => {
          const pUsd = p.pachkaPriceUsd || p.priceUsd || 50;
          return {
            id: p.customId || String(p._id || p.id),
            customId: p.customId || String(p._id || p.id),
            dbId: p._id,
            isCustom: true,
            title_uz: p.title_uz,
            title_ru: p.title_ru || p.title_uz,
            title_en: p.title_en || p.title_uz,
            category: normalizeCategory(p.category || "suits"),
            priceUsd: pUsd,
            pachkaPriceUsd: pUsd,
            pachkaQty: p.pachkaQty || 6,
            price: (p.price && p.price > 5000) ? p.price : pUsd * (state.usdRate || 12650),
            oldPrice:
              p.oldPrice && p.oldPrice < 50000000
                ? p.oldPrice
                : Math.round(pUsd * 1.25) * (state.usdRate || 12650),
            image: p.image || "/images/navy_suit.jpg",
            images:
              p.images && p.images.length > 0
                ? p.images
                : [p.image || "/images/navy_suit.jpg"],
            sizes:
              p.sizes && p.sizes.length > 0 ? p.sizes : [46, 48, 50, 52, 54, 56],
            fabric_uz: p.fabric_uz || "Turkiya Premium Jun & Viskoza Blend",
            inStock: p.inStock !== false,
            rating: p.rating || 5.0,
            reviewsCount: p.reviewsCount || 12,
          };
        });

        const customProds = [];
        const defaultMap = new Map();
        DEFAULT_EUROTEX_PRODUCTS.forEach((p) => defaultMap.set(String(p.id), { ...p }));

        dbProds.forEach((p) => {
          const strId = String(p.id);
          if (defaultMap.has(strId)) {
            defaultMap.set(strId, { ...defaultMap.get(strId), ...p });
          } else {
            customProds.push({ ...p, isCustom: true });
          }
        });

        const mergedProds = [...customProds, ...Array.from(defaultMap.values())];
        const finalProds = (dbProds && dbProds.length > 0) ? dbProds : mergedProds;
        const newHash = computeProductsHash(finalProds);

        // ONLY update & re-render if product data has ACTUALLY changed!
        if (newHash !== _lastProdsHash) {
          _lastProdsHash = newHash;
          EUROTEX_PRODUCTS = finalProds;
          window.EUROTEX_PRODUCTS = EUROTEX_PRODUCTS;
          EurotexIDB.set("eurotex_custom_products", EUROTEX_PRODUCTS);
          try {
            localStorage.setItem("eurotex_custom_products", JSON.stringify(EUROTEX_PRODUCTS));
          } catch (err) {}

          const searchInput = document.getElementById("searchInput");
          const isTypingInSearch = searchInput && document.activeElement === searchInput;

          if (!isIntervalSync && !isTypingInSearch) {
            renderProducts();
          }

          const isTypingInAdmin =
            document.activeElement &&
            document.activeElement.closest("#adminProductsTableContainer");
          if (!isIntervalSync && !isTypingInAdmin) {
            renderAdminProducts();
          }
        }
      }
    }
  } catch (err) {
    console.log("Using cached products:", err);
  }
}

function saveProductPriceByAdmin(index) {
  const titleInput = document.getElementById(`pTitle_${index}`);
  const catSelect = document.getElementById(`pCat_${index}`);
  const pachkaInput = document.getElementById(`pPachkaPrice_${index}`);
  if (!EUROTEX_PRODUCTS[index]) return;

  const newTitle = titleInput
    ? titleInput.value.trim()
    : EUROTEX_PRODUCTS[index].title_uz;
  const newCat = catSelect ? catSelect.value : EUROTEX_PRODUCTS[index].category;
  const newPachkaUsd = pachkaInput ? parseInt(pachkaInput.value, 10) || 50 : 50;

  EUROTEX_PRODUCTS[index].title_uz = newTitle;
  EUROTEX_PRODUCTS[index].title_ru = newTitle;
  EUROTEX_PRODUCTS[index].title_en = newTitle;
  EUROTEX_PRODUCTS[index].category = newCat;
  EUROTEX_PRODUCTS[index].pachkaPriceUsd = newPachkaUsd;
  EUROTEX_PRODUCTS[index].priceUsd = newPachkaUsd;
  EUROTEX_PRODUCTS[index].price = newPachkaUsd * (state.usdRate || 12650);

  EurotexIDB.set("eurotex_custom_products", EUROTEX_PRODUCTS);
  try {
    localStorage.removeItem("eurotex_custom_products");
  } catch (err) {}

  renderProducts();
  renderAdminProducts();
  showToast(`Mahsulot "${newTitle}" ma'lumotlari saqlandi! 💾`);

  // Sync with backend (PUT and POST)
  const targetId = EUROTEX_PRODUCTS[index].customId || EUROTEX_PRODUCTS[index].id || EUROTEX_PRODUCTS[index].dbId;
  if (targetId) {
    const payload = {
      customId: String(targetId),
      id: String(targetId),
      title_uz: newTitle,
      title_ru: newTitle,
      title_en: newTitle,
      category: newCat,
      priceUsd: newPachkaUsd,
      pachkaPriceUsd: newPachkaUsd,
      price: EUROTEX_PRODUCTS[index].price,
      oldPrice: EUROTEX_PRODUCTS[index].oldPrice,
    };
    fetch(`/products/${targetId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    fetch("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => console.error("Server save error:", err));
  }
}

function showCustomConfirm({
  title = "O'chirishni tasdiqlang",
  htmlText,
  text,
  confirmText = "O'chirish",
  icon,
  iconHtml,
  iconBg,
  onConfirm,
  onCancel,
}) {
  const isLogout = Boolean(title && (title.includes("Chiqish") || title.toLowerCase().includes("chiqish")));
  const cleanMsg = htmlText ? htmlText.replace(/<[^>]*>/g, " ") : text || "Ushbu amalni bajarishni xohlaysizmi?";
  showConfirmDialog({
    title,
    message: cleanMsg,
    confirmText,
    cancelText: "Bekor qilish",
    icon: icon || (isLogout ? "🚪" : "⚠️"),
    iconHtml: iconHtml || (isLogout ? '<img src="/images/eurotex-logo.png" alt="Eurotex Logo" style="width: 100%; height: 100%; object-fit: contain; border-radius: 50%; display: block;" />' : null),
    iconBg: iconBg || (isLogout ? "#ffffff" : "rgba(245, 158, 11, 0.15)"),
    confirmColor: "danger",
  }).then((confirmed) => {
    if (confirmed) {
      if (typeof onConfirm === "function") onConfirm();
    } else {
      if (typeof onCancel === "function") onCancel();
    }
  });
}

function deleteProductByAdmin(index) {
  if (!EUROTEX_PRODUCTS[index]) return;
  const prod = EUROTEX_PRODUCTS[index];
  showCustomConfirm({
    title: "O'chirishni tasdiqlang",
    htmlText: `<b>"${prod.title_uz}"</b> haqiqatdan ham o'chimoqchimisiz? Ushbu amalni qaytarib bo'lmaydi.`,
    confirmText: "O'chirish",
    onConfirm: () => {
      const deletedTitle = prod.title_uz;
      const targetId = prod.id || prod.dbId;
      EUROTEX_PRODUCTS.splice(index, 1);
      EurotexIDB.set("eurotex_custom_products", EUROTEX_PRODUCTS);
      try {
        localStorage.removeItem("eurotex_custom_products");
      } catch (err) {}
      renderProducts();
      renderAdminProducts();
      showToast(`"${deletedTitle}" katalogdan o'chirildi 🗑️`);

      if (targetId) {
        fetch(`/products/${targetId}`, { method: "DELETE" }).catch((err) =>
          console.error("MongoDB DELETE error:", err),
        );
      }
    },
  });
}

function updateNewProdDiscountCalc() {
  const priceInput = document.getElementById("newProdPachkaPriceUsd");
  const discInput = document.getElementById("newProdDiscountPercent");
  const preview = document.getElementById("newProdDiscountPreview");
  if (!priceInput || !discInput || !preview) return;
  const price = parseFloat(priceInput.value) || 0;
  let disc = Math.min(99, Math.max(0, parseFloat(discInput.value) || 0));
  discInput.value = disc;
  const rate = (typeof state !== "undefined" && state.usdRate) ? state.usdRate : 12650;
  if (price > 0 && disc > 0) {
    const finalPrice = Math.round(price * (1 - disc / 100) * 100) / 100;
    const finalSom = formatMoneySom(finalPrice * rate);
    const origSom = formatMoneySom(price * rate);
    preview.style.display = "block";
    preview.innerHTML = `✨ Chegirma: <s style="color:#94a3b8; margin-right:4px;">$${price} (${origSom} so'm)</s> ➔ <b style="color:#10b981; font-size:13px;">-$${finalPrice} (${finalSom} so'm)</b> <span style="background:#ef4444; color:#fff; padding:1px 6px; border-radius:6px; font-size:11px; margin-left:4px;">-${disc}%</span>`;
  } else {
    preview.style.display = "none";
  }
}

function updateEditProdDiscountCalc() {
  const priceInput = document.getElementById("editProdPriceUsd");
  const discInput = document.getElementById("editProdDiscountPercent");
  const oldPriceInput = document.getElementById("editProdOldPrice");
  const preview = document.getElementById("editProdDiscountPreview");
  if (!priceInput || !discInput) return;
  const price = parseFloat(priceInput.value) || 0;
  let disc = Math.min(99, Math.max(0, parseFloat(discInput.value) || 0));
  discInput.value = disc;
  const rate = (typeof state !== "undefined" && state.usdRate) ? state.usdRate : 12650;
  if (price > 0 && disc > 0) {
    const finalPrice = Math.round(price * (1 - disc / 100) * 100) / 100;
    if (oldPriceInput) oldPriceInput.value = price;
    const finalSom = formatMoneySom(finalPrice * rate);
    const origSom = formatMoneySom(price * rate);
    if (preview) {
      preview.style.display = "block";
      preview.innerHTML = `✨ Chegirma: <s style="color:#94a3b8; margin-right:4px;">$${price} (${origSom} so'm)</s> ➔ <b style="color:#10b981; font-size:13px;">-$${finalPrice} (${finalSom} so'm)</b> <span style="background:#ef4444; color:#fff; padding:1px 6px; border-radius:6px; font-size:11px; margin-left:4px;">-${disc}%</span>`;
    }
  } else {
    if (preview) preview.style.display = "none";
  }
}

function resetAddProductForm() {
  const form = document.getElementById("addProductForm");
  if (form) form.reset();

  const disc = document.getElementById("newProdDiscountPercent");
  if (disc) disc.value = "0";
  const preview = document.getElementById("newProdDiscountPreview");
  if (preview) preview.style.display = "none";

  window._prodImagesArr = [];
  renderProdImagePreviews();

  // Uncheck ALL checkboxes in size grid automatically!
  document
    .querySelectorAll("#newProdSizeGrid input[type=checkbox]")
    .forEach((cb) => (cb.checked = false));

  // Remove any non-standard custom chips and clear localStorage custom sizes
  document
    .querySelectorAll("#newProdSizeGrid .apm-size-chip--custom")
    .forEach((el) => el.remove());
  localStorage.removeItem("eurotex_custom_sizes");

  // Clear custom size tags container
  const ct = document.getElementById("newProdCustomTags");
  if (ct) ct.innerHTML = "";
}

// =============================================================================
// 🎨 ADMIN PANEL COLOR GRID CONTROLLER (CIRCULAR CHECKBOXES LIKE SIZES)
// =============================================================================
function renderAdminColorGrid(gridId, hiddenInputId, selectedColors = []) {
  const grid = document.getElementById(gridId);
  const hiddenInput = document.getElementById(hiddenInputId);
  if (!grid) return;

  const normalizedSelected = (selectedColors || []).map((c) =>
    typeof c === "string" ? c.trim().toLowerCase() : (c.name || "").trim().toLowerCase()
  );

  grid.innerHTML = EUROTEX_12_COLORS.map((c) => {
    const cLower = c.name.toLowerCase();
    const isChecked = normalizedSelected.some((sc) => sc === cLower || sc.includes(cLower) || cLower.includes(sc));

    return `
      <label class="apm-color-chip" title="${c.name}">
        <input type="checkbox" value="${c.name}" onchange="syncColorGridToInput('${gridId}', '${hiddenInputId}')" ${isChecked ? 'checked' : ''} />
        <span class="apm-color-circle" style="background-color: ${c.code};"></span>
      </label>
    `;
  }).join("");

  syncColorGridToInput(gridId, hiddenInputId);
}

function syncColorGridToInput(gridId, hiddenInputId) {
  const grid = document.getElementById(gridId);
  const hiddenInput = document.getElementById(hiddenInputId);
  if (!grid || !hiddenInput) return;

  const checkedValues = [
    ...grid.querySelectorAll("input[type=checkbox]:checked")
  ].map((cb) => cb.value);

  hiddenInput.value = checkedValues.join(", ");
}

function openAddProductModal() {
  resetAddProductForm();
  updateURLRoute("/admin/addcart");
  renderAdminColorGrid("newProdColorGrid", "newProdColors", ["Qora", "To'q ko'k (Navy)", "Kulrang"]);
  openModal("addProductModal");
}

// O'lchamni tepadagi ro'yxatdan olib tashlash (Delete Size control)
function deleteCustomSize() {
  const input = document.getElementById("newProdCustomSize");
  if (!input) return;
  const val = parseInt(input.value, 10);
  if (!val) {
    showToast("⚠️ O'chirish uchun o'lcham kiriting (masalan: 44, 20)!");
    return;
  }

  const grid = document.getElementById("newProdSizeGrid");
  const tagsContainer = document.getElementById("newProdCustomTags");

  let found = false;

  // 1. Check in size grid
  if (grid) {
    const labels = [...grid.querySelectorAll("label")];
    labels.forEach((lbl) => {
      const cb = lbl.querySelector("input");
      if (cb && parseInt(cb.value, 10) === val) {
        found = true;
        cb.checked = false;
        lbl.remove(); // Remove chip element from DOM instantly on the spot!
        let stored = JSON.parse(
          localStorage.getItem("eurotex_custom_sizes") || "[]",
        );
        stored = stored.filter((v) => parseInt(v, 10) !== val);
        localStorage.setItem("eurotex_custom_sizes", JSON.stringify(stored));
      }
    });
  }

  // 2. Check in custom tags
  if (tagsContainer) {
    const tags = [...tagsContainer.querySelectorAll(".apm-custom-tag")];
    tags.forEach((t) => {
      if (parseInt(t.dataset.val, 10) === val) {
        found = true;
        t.remove();
      }
    });
  }

  if (found) {
    showToast(`✅ ${val}-o'lcham tepadagi ro'yxatdan olib tashlandi! 🗑️`);
    input.value = "";
  } else {
    showToast(`❌ ${val}-o'lcham tepadagi ro'yxatda mavjud emas! ⚠️`);
  }
}

// Preview up to 5 images selected for new product
window._prodImagesArr = [];

function renderProdImagePreviews() {
  const picker = document.getElementById("newProdImagePicker");
  const container = document.getElementById("newProdImagePreviewGrid");
  const placeholder = document.getElementById("newProdImagePlaceholder");
  const images = window._prodImagesArr || [];

  if (picker) {
    picker.dataset.images = JSON.stringify(images);
    picker.dataset.base64 = images[0] || "";
  }

  if (images.length === 0) {
    if (placeholder) placeholder.style.display = "flex";
    if (container) {
      container.style.display = "none";
      container.innerHTML = "";
    }
    return;
  }

  if (placeholder) placeholder.style.display = "none";
  if (container) {
    container.style.display = "grid";
    let html = images
      .map(
        (src, i) => `
          <div class="apm-preview-thumb-slot ${i === 0 ? "main-cover" : ""}" onclick="event.stopPropagation(); setPrimaryProdImage(${i})">
              <img src="${src}" alt="preview-${i}">
              ${i === 0 ? '<span class="slot-badge">⭐️ Asosiy</span>' : ""}
              <div class="thumb-controls">
                  <button type="button" class="btn-thumb-action star ${i === 0 ? "active" : ""}" title="Asosiy rasm qilish" onclick="event.stopPropagation(); setPrimaryProdImage(${i})">⭐️</button>
                  <button type="button" class="btn-thumb-action replace" title="Rasmni almashtirish" onclick="event.stopPropagation(); replaceSingleProdImage(${i})">🔄</button>
                  <button type="button" class="btn-thumb-action delete" title="Rasmni o'chirish" onclick="event.stopPropagation(); deleteSingleProdImage(${i})">🗑️</button>
              </div>
          </div>
      `,
      )
      .join("");

    if (images.length < 5) {
      html += `
        <div class="apm-add-more-slot" onclick="event.stopPropagation(); document.getElementById('newProdImageFile').click()">
            <span style="font-size:22px;">➕</span>
            <span>Yana rasm</span>
        </div>
      `;
    }

    container.innerHTML = html;
  }
}

function setPrimaryProdImage(idx) {
  if (!window._prodImagesArr || window._prodImagesArr.length <= idx) return;
  if (idx !== 0) {
    const chosen = window._prodImagesArr.splice(idx, 1)[0];
    window._prodImagesArr.unshift(chosen);
  }
  const picker = document.getElementById("newProdImagePicker");
  if (picker) {
    picker.dataset.images = JSON.stringify(window._prodImagesArr);
    picker.dataset.base64 = window._prodImagesArr[0] || "";
  }
  renderProdImagePreviews();
  showToast("⭐️ Asosiy muqova rasmi almashtirildi! ✅");
}

function deleteSingleProdImage(idx) {
  if (!window._prodImagesArr || window._prodImagesArr.length <= idx) return;
  window._prodImagesArr.splice(idx, 1);
  renderProdImagePreviews();
  showToast("🗑️ Rasm o'chirildi!");
}

function replaceSingleProdImage(idx) {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      const compressed = await compressBase64Image(
        evt.target.result,
        800,
        0.75,
      );
      if (window._prodImagesArr) {
        window._prodImagesArr[idx] = compressed;
        renderProdImagePreviews();
        showToast("🔄 Rasm almashtirildi! ✅");
      }
    };
    reader.readAsDataURL(file);
  };
  fileInput.click();
}

function previewNewProductImages(event) {
  const files = Array.from(event.target.files);
  if (files.length === 0) return;

  const currentCount = window._prodImagesArr ? window._prodImagesArr.length : 0;
  const remainingSlots = 5 - currentCount;
  if (remainingSlots <= 0) {
    showToast("⚠️ Maksimal 5 ta rasm joylash mumkin!");
    return;
  }

  const filesToProcess = files.slice(0, remainingSlots);
  let loadedCount = 0;
  const newBase64List = [];

  filesToProcess.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = async function (e) {
      const rawBase64 = e.target.result;
      const compressed = await compressBase64Image(rawBase64, 600, 0.65);
      newBase64List[index] = compressed;
      loadedCount++;
      if (loadedCount === filesToProcess.length) {
        if (!window._prodImagesArr) window._prodImagesArr = [];
        window._prodImagesArr.push(...newBase64List);
        window._prodImagesArr = window._prodImagesArr.slice(0, 5);
        renderProdImagePreviews();
        showToast(`✅ ${filesToProcess.length} ta rasm tayyorlandi! 📸`);
      }
    };
    reader.readAsDataURL(file);
  });
}

function saveCustomSizesToStorage(val) {
  let stored = JSON.parse(localStorage.getItem("eurotex_custom_sizes") || "[]");
  if (!stored.includes(val)) {
    stored.push(val);
    localStorage.setItem("eurotex_custom_sizes", JSON.stringify(stored));
  }
}

function loadCustomSizesFromStorage() {
  let stored = JSON.parse(localStorage.getItem("eurotex_custom_sizes") || "[]");
  const grid = document.getElementById("newProdSizeGrid");
  if (!grid) return;
  stored.forEach((val) => {
    const existing = grid.querySelector(`input[value="${val}"]`);
    if (!existing) {
      const label = document.createElement("label");
      label.className = "apm-size-chip apm-size-chip--custom";
      label.innerHTML = `<input type="checkbox" value="${val}"><span>${val}</span>`;
      const chips = [...grid.querySelectorAll("label")];
      const after = chips.find(
        (l) => parseInt(l.querySelector("input").value) > val,
      );
      if (after) grid.insertBefore(label, after);
      else grid.appendChild(label);
    }
  });
}

// + btn 1: tag ko'rinishida qo'shish (bir martalik, olib tashlash mumkin)
function addCustomTag() {
  const input = document.getElementById("newProdCustomSize");
  if (!input) return;
  const val = parseInt(input.value, 10);
  if (!val || val < 10 || val > 99) {
    showToast("⚠️ Iltimos 10 dan 99 gacha o'lcham kiriting!");
    input.value = "";
    return;
  }

  const tagsContainer = document.getElementById("newProdCustomTags");
  if (!tagsContainer) return;

  // Avoid duplicate tag
  const existingTag = tagsContainer.querySelector(`[data-val="${val}"]`);
  if (existingTag) {
    showToast(`⚠️ ${val}-o'lchamli tag allaqachon mavjud!`);
    input.value = "";
    return;
  }

  const tag = document.createElement("span");
  tag.className = "apm-custom-tag";
  tag.dataset.val = val;
  tag.innerHTML = `${val} <button type="button" onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;color:inherit;padding:0;margin-left:4px;font-size:13px;line-height:1;">×</button>`;
  tagsContainer.appendChild(tag);

  showToast(`✅ ${val}-o'lchamli tag qo'shildi!`);
  input.value = "";
}

// + btn 2 (Yashil + tugmasi): grid ichiga chip sifatida qo'shish / tanlash
function addCustomChip() {
  const input = document.getElementById("newProdCustomSize");
  if (!input) return;
  const val = parseInt(input.value, 10);
  if (!val || val < 10 || val > 99) {
    showToast("⚠️ Iltimos 10 dan 99 gacha o'lcham kiriting!");
    input.value = "";
    return;
  }

  const grid = document.getElementById("newProdSizeGrid");
  if (!grid) return;

  const existing = grid.querySelector(`input[value="${val}"]`);
  if (existing) {
    existing.checked = true;
    showToast(`✅ ${val}-o'lcham gridda tanlandi! 🎯`);
    input.value = "";
    return;
  }

  // Create chip if not existing in grid
  const label = document.createElement("label");
  label.className = "apm-size-chip apm-size-chip--custom";
  label.innerHTML = `<input type="checkbox" value="${val}" checked><span>${val}</span>`;

  const chips = [...grid.querySelectorAll("label")];
  const after = chips.find((l) => {
    const inputVal = l.querySelector("input");
    return inputVal && parseInt(inputVal.value, 10) > val;
  });

  if (after) grid.insertBefore(label, after);
  else grid.appendChild(label);

  saveCustomSizesToStorage(val);
  showToast(`✅ ${val}-o'lcham gridga qo'shildi va tanlandi! 🎯`);
  input.value = "";
}

// Helper: get all selected sizes (checkboxes + tags)
function getAllSelectedSizes() {
  const checked = [
    ...document.querySelectorAll(
      "#newProdSizeGrid input[type=checkbox]:checked",
    ),
  ].map((cb) => parseInt(cb.value));
  const tags = [
    ...document.querySelectorAll("#newProdCustomTags [data-val]"),
  ].map((t) => parseInt(t.dataset.val));
  const allChips = [
    ...document.querySelectorAll("#newProdSizeGrid input[type=checkbox]"),
  ].map((cb) => parseInt(cb.value));
  return [...new Set([...checked, ...tags, ...allChips])];
}

const TURKUMI_MAP = {
  suits: [
    { value: "suits_slim", text: "Slim Fit Kostyumlar" },
    { value: "suits_classic", text: "Classic Fit Kostyumlar" },
    { value: "suits_double", text: "Double Breasted (Ikki tomonli)" },
    { value: "suits_tuxedo", text: "Smoking & To'y liboslari" },
  ],
  trousers: [
    { value: "trousers_wool", text: "100% Jun Shimlar" },
    { value: "trousers_slim", text: "Slim Fit Shimlar" },
    { value: "trousers_pleated", text: "Burmalari bor Klassik" },
    { value: "trousers_casual", text: "Smart Casual Shimlar" },
  ],
  blazers: [
    { value: "blazers_casual", text: "Klassik Pijaklar" },
    { value: "blazers_tweed", text: "Tvud va Katak Pijaklar" },
    { value: "blazers_summer", text: "Yengil Yozgi Pijaklar" },
  ],
  shirts: [
    { value: "shirts_white", text: "Klassik Oq Ko'ylaklar" },
    { value: "shirts_casual", text: "Smart Casual Ko'ylaklar" },
  ],
  accessories: [
    { value: "accessories_ties", text: "Galstuk va Kapalaklar" },
    { value: "accessories_belts", text: "Teri Kamarlar" },
    { value: "accessories_cufflinks", text: "Zaponkalar" },
  ],
  tuxedos: [
    { value: "tuxedos_classic", text: "Klassik Black Tie Smoking" },
    { value: "tuxedos_wedding", text: "To'y va Marosim Liboslari" },
  ],
};

function updateTurkumiOptions() {
  const catalogSelect = document.getElementById("newProdCatalog");
  const turkumiSelect = document.getElementById("newProdCategory");
  if (!catalogSelect || !turkumiSelect) return;

  const catKey = catalogSelect.value || "suits";
  const options = TURKUMI_MAP[catKey] || TURKUMI_MAP.suits;

  turkumiSelect.innerHTML = options
    .map((opt) => `<option value="${opt.value}">${opt.text}</option>`)
    .join("");
}

function handleAddNewProduct(e) {
  e.preventDefault();
  const picker = document.getElementById("newProdImagePicker");
  const title = document.getElementById("newProdTitleUz").value.trim();
  const category = document.getElementById("newProdCategory").value;
  const pachkaPriceUsd =
    parseInt(document.getElementById("newProdPachkaPriceUsd").value, 10) || 45;
  const pachkaQty =
    parseInt(document.getElementById("newProdPachkaQty").value, 10) || 6;
  // Compute per-unit price from package total
  const priceUsd = Math.round(pachkaPriceUsd / pachkaQty) || 8;
  let imagesArr = [];
  if (window._prodImagesArr && window._prodImagesArr.length > 0) {
    imagesArr = [...window._prodImagesArr];
  } else if (picker && picker.dataset.images) {
    try {
      imagesArr = JSON.parse(picker.dataset.images);
    } catch (err) {}
  }
  if (imagesArr.length === 0 && picker && picker.dataset.base64) {
    imagesArr = [picker.dataset.base64];
  }
  if (imagesArr.length === 0) {
    imagesArr = ["/images/navy_suit.jpg"];
  }

  // Collect sizes: checkboxes + custom tags
  const checked = [
    ...document.querySelectorAll(
      "#newProdSizeGrid input[type=checkbox]:checked",
    ),
  ].map((cb) => parseInt(cb.value));
  const custom = [
    ...document.querySelectorAll("#newProdCustomTags [data-val]"),
  ].map((t) => parseInt(t.dataset.val));
  const sizesArr = [...new Set([...checked, ...custom])].sort((a, b) => a - b);

  const discountPercent = Math.min(100, Math.max(0, parseFloat(document.getElementById("newProdDiscountPercent")?.value) || 0));
  const rate = state.usdRate || 12650;
  let finalPriceUsd = pachkaPriceUsd;
  let oldPriceSom = null;
  if (discountPercent > 0) {
    finalPriceUsd = Math.round(pachkaPriceUsd * (1 - discountPercent / 100) * 100) / 100;
    oldPriceSom = pachkaPriceUsd * rate;
  }

  const newProd = {
    id: "prod-" + Date.now(),
    isCustom: true,
    title_uz: title,
    title_ru: title,
    title_en: title,
    category: normalizeCategory(category),
    priceUsd: finalPriceUsd,
    pachkaPriceUsd: finalPriceUsd,
    originalPriceUsd: pachkaPriceUsd,
    discountPercent: discountPercent,
    pachkaQty: pachkaQty,
    unitPrice: finalPriceUsd,
    price: finalPriceUsd * rate,
    oldPrice: oldPriceSom,
    image: imagesArr[0],
    images: imagesArr,
    sizes: sizesArr.length > 0 ? sizesArr : [46, 48, 50],
    fabric_uz: document.getElementById("newProdFabric")?.value.trim() || "Turkiya Premium Jun & Viskoza Blend",
    desc_uz: document.getElementById("newProdDescription")?.value.trim() || "",
    brand: document.getElementById("newProdBrand")?.value.trim() || "EUROTEX KIDS",
    colors: (document.getElementById("newProdColors")?.value.trim() || "Qora, To'q ko'k (Navy), Kulrang").split(",").map(c => c.trim()).filter(Boolean),
    season: document.getElementById("newProdSeason")?.value.trim() || "To'rt fasl",
    origin: "O'zbekiston (Eurotex Factory)",
    inStock: true,
    rating: 5.0,
    reviewsCount: 12,
  };

  if (!window.EUROTEX_PRODUCTS || !Array.isArray(window.EUROTEX_PRODUCTS)) {
    window.EUROTEX_PRODUCTS =
      typeof DEFAULT_EUROTEX_PRODUCTS !== "undefined"
        ? [...DEFAULT_EUROTEX_PRODUCTS]
        : [];
  }
  window.EUROTEX_PRODUCTS.unshift(newProd);
  EUROTEX_PRODUCTS = window.EUROTEX_PRODUCTS;
  EurotexIDB.set("eurotex_custom_products", EUROTEX_PRODUCTS);
  try {
    localStorage.setItem("eurotex_custom_products", JSON.stringify(EUROTEX_PRODUCTS));
  } catch (e) {}
  notifyProductChange();

  // Reset filters & refresh products view immediately
  state.activeSearchQuery = "";
  state.currentCategory = "all";
  renderProducts();
  renderAdminProducts();

  // Send POST to MongoDB backend
  fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customId: String(newProd.id),
      title_uz: newProd.title_uz,
      title_ru: newProd.title_ru || newProd.title_uz,
      category: newProd.category,
      priceUsd: newProd.priceUsd,
      pachkaPriceUsd: newProd.pachkaPriceUsd,
      pachkaQty: newProd.pachkaQty,
      price: newProd.price,
      oldPrice: newProd.oldPrice,
      image: newProd.image,
      images: newProd.images,
      sizes: newProd.sizes,
      fabric_uz: newProd.fabric_uz,
      desc_uz: newProd.desc_uz,
      brand: newProd.brand,
      colors: newProd.colors,
      season: newProd.season,
      origin: newProd.origin,
      inStock: true,
    }),
  })
    .then((r) => r.json())
    .then(() => {
      syncProductsWithBackendAndStorage();
    })
    .catch((err) => console.error("MongoDB POST error:", err));

  closeModal("addProductModal");
  resetAddProductForm();

  renderProducts();
  renderAdminProducts();
  showToast(
    `✨ Yangi mahsulot "${title}" katalogga muvaffaqiyatli qo'shildi! ✅`,
  );
}

// ─── FULL PRODUCT DETAILS & SPECS EDITOR MODAL ───────────────────────────────
function openEditProductModal(idx) {
  const pool = window.EUROTEX_PRODUCTS || EUROTEX_PRODUCTS || [];
  const p = pool[idx];
  if (!p) return;

  const rate = state.usdRate || 12650;
  const pUsd = p.pachkaPriceUsd || p.priceUsd || 50;

  const editIndex = document.getElementById("editProdIndex");
  const editId = document.getElementById("editProdId");
  const editTitle = document.getElementById("editProdTitleUz");
  const editPrice = document.getElementById("editProdPriceUsd");
  const editDisc = document.getElementById("editProdDiscountPercent");
  const editOldPrice = document.getElementById("editProdOldPrice");
  const editQty = document.getElementById("editProdPachkaQty");
  const editCat = document.getElementById("editProdCategory");
  const editDesc = document.getElementById("editProdDescription");
  const editBrand = document.getElementById("editProdBrand");
  const editFabric = document.getElementById("editProdFabric");
  const editColors = document.getElementById("editProdColors");
  const editSizes = document.getElementById("editProdSizes");
  const editSeason = document.getElementById("editProdSeason");
  const editOrigin = document.getElementById("editProdOrigin");
  const editImage = document.getElementById("editProdImage");
  const editImages = document.getElementById("editProdImages");

  let discVal = p.discountPercent || 0;
  if (!discVal && p.oldPrice && p.oldPrice > (p.pachkaPriceUsd * rate)) {
    discVal = Math.round((1 - (p.pachkaPriceUsd * rate) / p.oldPrice) * 100);
  }
  if (editDisc) editDisc.value = discVal;

  const originalUsd = (discVal > 0 && p.oldPrice) ? Math.round(p.oldPrice / rate) : pUsd;

  if (editIndex) editIndex.value = idx;
  if (editId) editId.value = p.id || p.customId || "";
  if (editTitle) editTitle.value = p.title_uz || p.title || "";
  if (editPrice) editPrice.value = originalUsd;
  if (editOldPrice) editOldPrice.value = p.oldPrice ? Math.round(p.oldPrice / rate) : "";
  if (editQty) editQty.value = p.pachkaQty || 6;
  if (editCat) editCat.value = p.category || "suits";
  if (editDesc) editDesc.value = p.desc_uz || p.description || "";
  if (editBrand) editBrand.value = (p.brand && !p.brand.includes("FARID")) ? p.brand : "EUROTEX KIDS";
  if (editFabric) editFabric.value = p.fabric_uz || p.fabric || "Turkiya Premium Jun & Viskoza Blend";

  updateEditProdDiscountCalc();
  
  if (editColors) {
    let activeColors = [];
    if (Array.isArray(p.colors) && p.colors.length > 0) {
      activeColors = p.colors;
    } else if (p.color_uz) {
      activeColors = p.color_uz.split(",").map(c => c.trim()).filter(Boolean);
    } else {
      activeColors = ["Qora", "To'q ko'k (Navy), Kulrang"];
    }
    editColors.value = activeColors.map(c => typeof c === "string" ? c : c.name).join(", ");
    renderAdminColorGrid("editProdColorGrid", "editProdColors", activeColors);
  }

  if (editSizes) {
    if (Array.isArray(p.sizes) && p.sizes.length > 0) {
      editSizes.value = p.sizes.join(", ");
    } else {
      editSizes.value = "30, 32, 34, 36, 38, 40, 42, 44";
    }
  }

  if (editSeason) editSeason.value = p.season || "To'rt fasl";
  if (editOrigin) editOrigin.value = p.origin || "O'zbekiston (Eurotex Factory)";
  if (editImage) editImage.value = p.image || p.img || "/images/navy_suit.jpg";

  if (editImages) {
    if (Array.isArray(p.images) && p.images.length > 0) {
      editImages.value = p.images.join("\n");
    } else {
      editImages.value = p.image || "/images/navy_suit.jpg";
    }
  }

  openModal("editProductModal");
}

function handleSaveProductDetails(e) {
  e.preventDefault();
  const idx = parseInt(document.getElementById("editProdIndex").value, 10);
  const pool = window.EUROTEX_PRODUCTS || EUROTEX_PRODUCTS || [];
  const p = pool[idx];
  if (!p) return;

  const rate = state.usdRate || 12650;
  const newTitle = document.getElementById("editProdTitleUz").value.trim();
  const newPriceUsd = parseFloat(document.getElementById("editProdPriceUsd").value) || p.pachkaPriceUsd || 50;
  const newDisc = Math.min(100, Math.max(0, parseFloat(document.getElementById("editProdDiscountPercent")?.value) || 0));
  const newQty = parseInt(document.getElementById("editProdPachkaQty").value, 10) || p.pachkaQty || 6;
  const newCat = document.getElementById("editProdCategory").value;
  const newDesc = document.getElementById("editProdDescription").value.trim();
  const newBrand = document.getElementById("editProdBrand").value.trim();
  const newFabric = document.getElementById("editProdFabric").value.trim();
  const newColors = document.getElementById("editProdColors").value.split(",").map(c => c.trim()).filter(Boolean);
  const newSizes = document.getElementById("editProdSizes").value.split(",").map(s => s.trim()).filter(Boolean);
  const newSeason = document.getElementById("editProdSeason").value.trim();
  const newOrigin = document.getElementById("editProdOrigin").value.trim();
  const newImage = document.getElementById("editProdImage").value.trim() || p.image;
  const newImages = document.getElementById("editProdImages").value.split("\n").map(u => u.trim()).filter(Boolean);

  let sellingPriceUsd = newPriceUsd;
  let oldPriceVal = null;
  if (newDisc > 0) {
    sellingPriceUsd = Math.round(newPriceUsd * (1 - newDisc / 100) * 100) / 100;
    oldPriceVal = newPriceUsd * rate;
  } else {
    const manualOldPriceUsd = parseFloat(document.getElementById("editProdOldPrice")?.value);
    if (manualOldPriceUsd && manualOldPriceUsd > newPriceUsd) {
      oldPriceVal = manualOldPriceUsd * rate;
    }
  }

  // Update object
  p.title_uz = newTitle;
  p.title = newTitle;
  p.pachkaPriceUsd = sellingPriceUsd;
  p.priceUsd = sellingPriceUsd;
  p.unitPriceUsd = Math.round((sellingPriceUsd / newQty) * 100) / 100;
  p.pachkaQty = newQty;
  p.price = sellingPriceUsd * rate;
  p.oldPrice = oldPriceVal;
  p.discountPercent = newDisc;
  p.originalPriceUsd = newPriceUsd;
  p.category = newCat;
  p.desc_uz = newDesc;
  p.description = newDesc;
  p.brand = newBrand;
  p.fabric_uz = newFabric;
  p.fabric = newFabric;
  p.colors = newColors;
  p.sizes = newSizes;
  p.season = newSeason;
  p.origin = newOrigin;
  p.image = newImage;
  p.images = newImages.length > 0 ? newImages : [newImage];

  // Save to IDB & LocalStorage
  EurotexIDB.set("eurotex_custom_products", pool);
  try {
    localStorage.setItem("eurotex_custom_products", JSON.stringify(pool));
  } catch (err) {}
  notifyProductChange();

  // Send to backend (PUT and POST)
  const targetId = String(p.customId || p.id || "");
  const payload = {
    customId: targetId,
    id: targetId,
    title_uz: p.title_uz,
    category: p.category,
    pachkaPriceUsd: p.pachkaPriceUsd,
    priceUsd: p.priceUsd,
    unitPriceUsd: p.unitPriceUsd,
    pachkaQty: p.pachkaQty,
    price: p.price,
    oldPrice: p.oldPrice,
    desc_uz: p.desc_uz,
    brand: p.brand,
    fabric_uz: p.fabric_uz,
    colors: p.colors,
    sizes: p.sizes,
    season: p.season,
    origin: p.origin,
    image: p.image,
    images: p.images,
  };

  if (targetId) {
    fetch(`/products/${targetId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }

  fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => console.error("Update error:", err));

  closeModal("editProductModal");
  renderAdminProducts();
  renderProducts();

  // If PDP is active, update live view
  if (window.currentPdpProduct && String(window.currentPdpProduct.id) === String(p.id)) {
    openProductPage(p.id);
  }

  showToast("✓ Mahsulot tavsifi va xususiyatlari saqlandi!");
}

// ─── ADMIN REVIEWS MANAGEMENT ───────────────────────────────────────────────
let adminReviewsCache = null;

// Clear old stuck dummy reviews from previous versions once
try {
  if (localStorage.getItem("eurotex_admin_reviews_v356") !== "true") {
    localStorage.removeItem("eurotex_admin_reviews");
    localStorage.setItem("eurotex_admin_reviews_v356", "true");
  }
} catch (e) {}

async function fetchAdminReviews() {
  try {
    const res = await fetch("/api/reviews", { headers: getAdminAuthHeaders() });
    const data = await res.json();
    if (data && Array.isArray(data.reviews)) {
      adminReviewsCache = data.reviews;
      try {
        localStorage.setItem("eurotex_admin_reviews", JSON.stringify(adminReviewsCache));
      } catch (e) {}
      return adminReviewsCache;
    }
  } catch (e) {}

  try {
    const raw = localStorage.getItem("eurotex_admin_reviews");
    if (raw !== null) {
      adminReviewsCache = JSON.parse(raw);
      return adminReviewsCache;
    }
  } catch (e) {}

  return adminReviewsCache || [];
}

function renderAdminReviews() {
  const container = document.getElementById("adminReviewsContainer");
  if (!container) return;

  // 1. Initial display from cache for instant feedback
  let reviews = [];
  try {
    const raw = localStorage.getItem("eurotex_admin_reviews");
    if (raw !== null) reviews = JSON.parse(raw);
  } catch (e) {}
  if (Array.isArray(adminReviewsCache)) {
    reviews = adminReviewsCache;
  }

  function displayReviews(list) {
    if (!container) return;
    if (!list || list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; background: rgba(30, 41, 59, 0.4); border: 1px dashed rgba(255,255,255,0.15); border-radius: 18px; color: #94a3b8; grid-column: 1 / -1;">
          <div style="font-size: 40px; margin-bottom: 12px;">📭</div>
          <div style="font-size: 16px; font-weight: 700; color: #f8fafc; margin-bottom: 6px;">Hozircha sharhlar mavjud emas</div>
          <div style="font-size: 13.5px; color: #94a3b8; margin-bottom: 20px;">Barcha sharhlar o'chirildi yoki hali yangi sharh qo'shilmadi.</div>
          <button type="button" class="btn btn-gold" onclick="openAdminAddReviewModal()" style="border-radius: 12px; padding: 10px 22px; font-weight: 700; font-size: 13.5px;">
            ✍️ Yangi Sharh Qo'shish
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
        ${list.map((r, i) => {
          const revId = String(r.id !== undefined && r.id !== null ? r.id : `rev_local_${i}`);
          const author = r.author || r.name || "Mijoz";
          const rating = Number(r.rating) || 5;
          const product = r.product || r.productTitle || "Eurotex Kids";
          const dateStr = r.date || "Yaqinda";
          const text = r.text || r.comment || "";
          return `
            <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <b style="color: #f8fafc; font-size: 15px;">${author}</b>
                <span style="color: #f59e0b; font-size: 13px;">${"⭐".repeat(Math.min(5, Math.max(1, rating)))}</span>
              </div>
              <small style="color: #94a3b8; font-size: 12px;">Mahsulot: <b style="color: #38bdf8;">${product}</b> • ${dateStr}</small>
              <p style="color: #cbd5e1; font-size: 13.5px; line-height: 1.5; margin: 4px 0;">"${text}"</p>
              <div style="margin-top: auto; display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-outline" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.4); padding: 5px 12px; font-size: 12px; border-radius: 8px;" onclick="deleteAdminReview('${revId}')">
                  🗑️ O'chirish
                </button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // Display initial cached view immediately
  displayReviews(reviews);

  // Sync latest from backend API
  fetchAdminReviews().then((serverReviews) => {
    displayReviews(serverReviews);
  });
}

function openAdminAddReviewModal() {
  const modal = document.getElementById("adminAddReviewModal");
  if (modal) {
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
    const authorInput = document.getElementById("adminNewReviewAuthor");
    if (authorInput) {
      authorInput.value = "";
      setTimeout(() => authorInput.focus(), 60);
    }
    const textInput = document.getElementById("adminNewReviewText");
    if (textInput) textInput.value = "";
  }
}

function closeAdminAddReviewModal() {
  const modal = document.getElementById("adminAddReviewModal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
  }
}

async function handleAdminAddReviewSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const author = (document.getElementById("adminNewReviewAuthor")?.value || "").trim();
  const product = (document.getElementById("adminNewReviewProduct")?.value || "").trim() || "Eurotex Kids";
  const text = (document.getElementById("adminNewReviewText")?.value || "").trim();
  const rating = parseInt(document.getElementById("adminNewReviewRating")?.value || "5", 10);

  if (!author || !text) {
    showToast("Iltimos, barcha maydonlarni to'ldiring!", "warning");
    return;
  }

  const newReview = {
    id: "rev_" + Date.now(),
    author,
    product,
    productTitle: product,
    text,
    rating: rating || 5,
    date: "Bugun",
    createdAt: new Date().toISOString(),
  };

  let reviews = [];
  try {
    const raw = localStorage.getItem("eurotex_admin_reviews");
    if (raw !== null) reviews = JSON.parse(raw);
  } catch (err) {}
  if (Array.isArray(adminReviewsCache)) {
    reviews = adminReviewsCache;
  }

  reviews.unshift(newReview);
  adminReviewsCache = reviews;
  try {
    localStorage.setItem("eurotex_admin_reviews", JSON.stringify(reviews));
  } catch (e) {}

  closeAdminAddReviewModal();
  renderAdminReviews();
  showToast("✓ Yangi mijoz sharhi muvaffaqiyatli qo'shildi!", "success");

  // Sync to backend server
  try {
    await fetch("/api/reviews", {
      method: "POST",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify(newReview),
    });
  } catch (err) {
    console.warn("Serverga sharh saqlashda xatolik:", err);
  }
}

function adminAddNewReviewPrompt() {
  openAdminAddReviewModal();
}

async function deleteAdminReview(id) {
  const ok = await window.eurotexConfirm(
    "Ushbu sharhni butunlay o'chirishni tasdiqlaysizmi?",
    "Sharhni o'chirish",
    {
      icon: "🗑️",
      confirmColor: "danger",
      confirmText: "Ha, o'chirish",
      cancelText: "Bekor qilish",
    }
  );
  if (!ok) return;

  const targetId = String(id || "").trim();

  // 1. Immediately update cache and memory
  let reviews = [];
  try {
    const raw = localStorage.getItem("eurotex_admin_reviews");
    if (raw !== null) reviews = JSON.parse(raw);
  } catch (e) {}
  if (Array.isArray(adminReviewsCache)) {
    reviews = adminReviewsCache;
  }

  // Filter out the review matching targetId
  reviews = reviews.filter((r, idx) => {
    const rId = String(r.id !== undefined && r.id !== null ? r.id : `rev_local_${idx}`);
    return rId !== targetId && String(r.id) !== targetId && String(idx) !== targetId;
  });

  adminReviewsCache = reviews;
  try {
    localStorage.setItem("eurotex_admin_reviews", JSON.stringify(reviews));
  } catch (e) {}

  // Re-render UI immediately
  renderAdminReviews();
  showToast("✓ Sharh muvaffaqiyatli o'chirildi", "info");

  // 2. Call backend DELETE endpoint
  try {
    await fetch(`/api/reviews/${encodeURIComponent(targetId)}`, {
      method: "DELETE",
      headers: getAdminAuthHeaders(),
    });
  } catch (err) {
    console.warn("Serverdan sharhni o'chirishda xatolik:", err);
  }
}

function renderAdminReturns() {
  const container = document.getElementById("adminReturnsTableContainer");
  if (!container) return;

  if (!state.returns || state.returns.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text-secondary);">Mijozlardan qaytarish arizalari yo'q</div>`;
    return;
  }

  container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="size-table" style="width:100%; text-align:left;">
                <thead>
                    <tr>
                        <th>Ariza ID</th>
                        <th>Buyurtma</th>
                        <th>Sababi va Amal</th>
                        <th>Status</th>
                        <th>Tasdiqlash (Admin)</th>
                    </tr>
                </thead>
                <tbody>
                    ${state.returns
                      .map(
                        (r, idx) => `
                        <tr>
                            <td><b>#${r.id}</b></td>
                            <td>#${r.orderId}</td>
                            <td>${r.reasonText}<br><small style="color:var(--text-muted);">${r.actionText}</small></td>
                            <td><span style="font-weight:700; color:#854d0e;">${r.status}</span></td>
                            <td>
                                <button type="button" class="btn btn-sm btn-primary" onclick="approveReturnByAdmin(${idx}, true)">Tasdiqlash ✅</button>
                                <button type="button" class="btn btn-sm btn-outline" onclick="approveReturnByAdmin(${idx}, false)">Rad etish ❌</button>
                            </td>
                        </tr>
                    `,
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `;
}

function approveReturnByAdmin(index, isApproved) {
  if (state.returns && state.returns[index]) {
    state.returns[index].status = isApproved
      ? "Tasdiqlandi (Kuryer yo'lda) ✅"
      : "Rad etildi ❌";
    localStorage.setItem("eurotex_returns", JSON.stringify(state.returns));

    renderReturnRequests();
    renderAdminReturns();
    showToast(
      `Ariza #${state.returns[index].id} ${isApproved ? "tasdiqlandi" : "rad etildi"}`,
    );
  }
}

function formatCategoryUz(cat) {
  if (!cat) return "Kostyum-Shimlar";
  const c = String(cat).toLowerCase().trim();
  if (c === "suits" || c.startsWith("suits_")) return "Kostyum-Shimlar";
  if (c === "tuxedos" || c.startsWith("tuxedo"))
    return "Smoking & To'y liboslari";
  if (c === "trousers" || c.startsWith("trousers_"))
    return "GBP Klassik Shimlar";
  if (c === "shirts" || c.startsWith("shirts_")) return "Erkaklar Ko'ylaklari";
  if (c === "blazers" || c.startsWith("blazers_"))
    return "Pijaklar & Blazerlar";
  if (c === "accessories" || c.startsWith("access_")) return "Aksessuarlar";
  return cat;
}

function refreshAdminData() {
  renderAdminPanel();
  showToast("Admin ma'lumotlari yangilandi! 🔄");
}

/// =============================================================================
// ADMIN AUTH HEADERS HELPER
// =============================================================================
function getAdminAuthHeaders() {
  const headers = { "Content-Type": "application/json" };
  const user = state.user || JSON.parse(localStorage.getItem("eurotex_user") || "null");
  const email = (user?.email || "").toLowerCase().trim();
  const isAdmin = (typeof isAdminEmail === "function" ? isAdminEmail(email) : ADMIN_EMAILS.includes(email)) || user?.role === "admin";

  let token = user?.rememberToken || localStorage.getItem("rememberToken") || "";
  if (isAdmin) {
    if (!token || token.startsWith("google_auto_token_") || token === "undefined" || token.length < 20) {
      token = "admin_master_token_2026";
      if (state.user) {
        state.user.rememberToken = token;
        try {
          localStorage.setItem("eurotex_user", JSON.stringify(state.user));
        } catch (e) {}
      }
    }
    headers["x-admin-token"] = "admin_master_token_2026";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
    if (!headers["x-admin-token"]) {
      headers["x-admin-token"] = token;
    }
  }
  if (email) {
    headers["x-admin-email"] = email;
  }
  return headers;
}

// =============================================================================
// 1. ⚡ 1-KLIKDA XARID VA TEZKOR QO'NG'IROQLAR (LEADS)
// =============================================================================
async function loadAdminLeads() {
  const container = document.getElementById("adminLeadsTableContainer");
  if (!container) return;

  container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Yuklanmoqda... ⏳</div>`;

  try {
    const res = await fetch("/api/leads", { headers: getAdminAuthHeaders() });
    const data = await res.json();
    const leads = data.leads || [];

    if (leads.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Hozircha tezkor xarid arizalari yo'q</div>`;
      return;
    }

    container.innerHTML = `
      <div class="admin-table-wrapper">
        <table class="size-table" style="width:100%; text-align:left;">
          <thead>
            <tr>
              <th>Sana</th>
              <th>Mijoz</th>
              <th>Telefon</th>
              <th>Mahsulot</th>
              <th>O'lcham / Rang</th>
              <th>Narxi</th>
              <th>Holati</th>
              <th>Amal</th>
            </tr>
          </thead>
          <tbody>
            ${leads.map((l) => {
              const statusColors = {
                yangi: "#ef4444",
                boglanildi: "#f59e0b",
                sotildi: "#10b981",
                bekor: "#64748b",
              };
              const statusKey = (l.status || "yangi").replace(/['\s]/g, "");
              const col = statusColors[statusKey] || "#ef4444";

              return `
                <tr>
                  <td style="font-size:12px; color:#94a3b8;">${l.date || "-"}</td>
                  <td><b>${l.name || "Xaridor"}</b></td>
                  <td>
                    <a href="tel:${l.phone}" style="color:#38bdf8; font-weight:700; text-decoration:none;">
                      📞 ${l.phone}
                    </a>
                  </td>
                  <td style="max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                    ${l.productTitle}
                  </td>
                  <td>${l.size || "-"} / ${l.color || "-"}</td>
                  <td style="font-weight:700; color:#fbbf24;">${l.price || "-"}</td>
                  <td>
                    <select onchange="updateLeadStatus('${l.id}', this.value)" style="background:#0b1329; color:${col}; border:1.5px solid ${col}; border-radius:8px; padding:4px 8px; font-weight:700; font-size:12px;">
                      <option value="yangi" ${l.status === "yangi" ? "selected" : ""}>🔴 Yangi</option>
                      <option value="bog'lanildi" ${l.status === "bog'lanildi" ? "selected" : ""}>🟡 Bog'lanildi</option>
                      <option value="sotildi" ${l.status === "sotildi" ? "selected" : ""}>🟢 Sotildi</option>
                      <option value="bekor" ${l.status === "bekor" ? "selected" : ""}>⚪ Bekor</option>
                    </select>
                  </td>
                  <td>
                    <a href="https://t.me/+998${(l.phone || '').replace(/\D/g, '').slice(-9)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding:4px 10px; font-size:11px; border-radius:6px; text-decoration:none; color:#38bdf8; border-color:#38bdf8;">
                      Telegram
                    </a>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  } catch (e) {
    container.innerHTML = `<div style="color:#ef4444; padding:20px;">Ma'lumot yuklashda xatolik yuz berdi</div>`;
  }
}

async function updateLeadStatus(id, status) {
  try {
    await fetch(`/api/leads/${id}`, {
      method: "PUT",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    showToast("✓ Ariza holati yangilandi!");
    loadAdminLeads();
  } catch (e) {}
}

// =============================================================================
// 2. 👥 MIJOZLAR BAZASI (USER CRM)
// =============================================================================
let _adminAllUsersCache = [];

async function loadAdminUsers() {
  const container = document.getElementById("adminUsersTableContainer");
  if (!container) return;

  container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Yuklanmoqda... ⏳</div>`;

  try {
    const res = await fetch("/api/users-list", { headers: getAdminAuthHeaders() });
    const data = await res.json();
    _adminAllUsersCache = data.users || [];
    renderAdminUsersTable(_adminAllUsersCache);
  } catch (e) {
    container.innerHTML = `<div style="color:#ef4444; padding:20px;">Mijozlar ro'yxatini yuklashda xatolik</div>`;
  }
}

function filterAdminUsersTable(query) {
  const q = String(query || "").toLowerCase().trim();
  if (!q) {
    renderAdminUsersTable(_adminAllUsersCache);
    return;
  }
  const filtered = _adminAllUsersCache.filter((u) => {
    return (
      (u.name && u.name.toLowerCase().includes(q)) ||
      (u.email && u.email.toLowerCase().includes(q)) ||
      (u.phone && u.phone.includes(q)) ||
      (u.city && u.city.toLowerCase().includes(q))
    );
  });
  renderAdminUsersTable(filtered);
}

function renderAdminUsersTable(users) {
  const container = document.getElementById("adminUsersTableContainer");
  if (!container) return;

  if (users.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Mijoz topilmadi</div>`;
    return;
  }

  container.innerHTML = `
    <div class="admin-table-wrapper">
      <table class="size-table" style="width:100%; text-align:left;">
        <thead>
          <tr>
            <th>Mijoz Ismi</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Shahar / Viloyat</th>
            <th>Buyurtmalar</th>
            <th>Jami Xaridi (LTV)</th>
            <th>Mijoz Maqomi</th>
            <th style="text-align:center;">Amallar</th>
          </tr>
        </thead>
        <tbody>
          ${users.map((u) => {
            let spent = Number(u.totalSpent) || 0;
            let cnt = Number(u.ordersCount) || 0;

            if (cnt === 0 && Array.isArray(state.orders) && state.orders.length > 0) {
              const uEmail = String(u.email || "").toLowerCase().trim();
              const uPhone = String(u.phone || "").replace(/[^0-9]/g, "");
              const uPrefix = uEmail ? uEmail.split("@")[0] : "";
              const uName = String(u.name || "").toLowerCase().trim();

              const matched = state.orders.filter((o) => {
                const oe = String(o.userEmail || o.email || "").toLowerCase().trim();
                const op = String(o.phone || "").replace(/[^0-9]/g, "");
                const on = String(o.recipient || o.customerName || "").toLowerCase().trim();
                return (
                  (uEmail && oe && oe === uEmail) ||
                  (uPhone && op && uPhone.length >= 7 && (op.includes(uPhone) || uPhone.includes(op))) ||
                  (uPrefix && uPrefix.length >= 4 && on.includes(uPrefix)) ||
                  (uName && uName.length >= 3 && on.includes(uName))
                );
              });

              if (matched.length > 0) {
                cnt = matched.length;
                spent = matched.reduce((sum, mo) => {
                  const tot = Number(mo.totalPriceUzs || mo.total || 0);
                  return sum + (tot > 5000 ? tot : tot * (state.usdRate || 12650));
                }, 0);
              }
            }

            let tierClass = "crm-badge-new";
            let tierLabel = "🟢 Yangi";
            if (spent >= 1500000 || cnt >= 3) {
              tierClass = "crm-badge-vip";
              tierLabel = "👑 VIP Xaridor";
            } else if (cnt >= 1 || spent > 0) {
              tierClass = "crm-badge-regular";
              tierLabel = "🥈 Doimiy";
            }
            const uid = encodeURIComponent(String(u._id || u.id || u.email || ""));
            return `
            <tr>
              <td>
                <b style="cursor:pointer; color:#38bdf8; text-decoration:underline;" onclick="openAdminUserModal('${uid}')" title="Mijoz kartochkasini ochish">
                  ${u.name || "Noma'lum"}
                </b>
              </td>
              <td style="color:#94a3b8;">${u.email || "-"}</td>
              <td>
                <a href="tel:${u.phone || ""}" style="color:#10b981; font-weight:700; text-decoration:none;">
                  ${u.phone || "-"}
                </a>
              </td>
              <td>${u.city || "O'zbekiston"}</td>
              <td style="font-weight:700; color:#fbbf24;">${cnt} ta</td>
              <td style="font-weight:800; color:#10b981;">
                ${spent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm
              </td>
              <td>
                <span class="crm-tier-badge ${tierClass}">${tierLabel}</span>
              </td>
              <td style="text-align:center;">
                <button type="button" class="btn-crm-profile" onclick="openAdminUserModal('${uid}')" title="Profil kartochkasi va LTV">
                  👤 Profil &amp; LTV
                </button>
              </td>
            </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

// 👑 7: CRM CUSTOMER PROFILE & LTV MODAL CONTROLLER
function openAdminUserModal(userIdOrEmail) {
  const modal = document.getElementById("adminUserDetailModal");
  if (!modal) return;

  const key = decodeURIComponent(String(userIdOrEmail || "")).trim();
  const user = (_adminAllUsersCache || []).find(
    (u) =>
      String(u._id || u.id || "").trim() === key ||
      String(u.email || "").toLowerCase().trim() === key.toLowerCase()
  ) || {
    name: "Mijoz",
    email: key,
    phone: "+998 90 555 77 75",
    city: "Toshkent",
    address: "",
    birthDate: "",
    suitSize: "",
    style: "",
    totalSpent: 0,
    ordersCount: 0,
  };

  const uEmail = String(user.email || "").toLowerCase().trim();
  const uPhone = String(user.phone || "").replace(/[^0-9]/g, "");
  const uName = String(user.name || "").toLowerCase().trim();
  const uPrefix = uEmail ? uEmail.split("@")[0] : "";

  const matchedOrders = (state.orders || []).filter((o) => {
    const oEmail = String(o.userEmail || o.email || "").toLowerCase().trim();
    const oPhone = String(o.phone || "").replace(/[^0-9]/g, "");
    const oName = String(o.recipient || o.customerName || "").toLowerCase().trim();

    return (
      (uEmail && oEmail && oEmail === uEmail) ||
      (uPhone && oPhone && uPhone.length >= 7 && (oPhone.includes(uPhone) || uPhone.includes(oPhone))) ||
      (uName && uName.length >= 3 && oName.includes(uName)) ||
      (uPrefix && uPrefix.length >= 4 && oName.includes(uPrefix))
    );
  });

  let spent = Number(user.totalSpent) || 0;
  let count = Number(user.ordersCount) || 0;
  if ((count === 0 || spent === 0) && matchedOrders.length > 0) {
    count = matchedOrders.length;
    spent = matchedOrders.reduce((sum, mo) => {
      const tot = Number(mo.totalPriceUzs || mo.total || 0);
      return sum + (tot > 5000 ? tot : tot * (state.usdRate || 12650));
    }, 0);
  }
  const avg = count > 0 ? Math.round(spent / count) : 0;

  // Avatar
  const avatarEl = document.getElementById("crmModalAvatar");
  if (avatarEl) {
    avatarEl.textContent = (user.name || "U").trim().charAt(0).toUpperCase();
  }

  // Name & Tier
  const nameEl = document.getElementById("crmModalName");
  if (nameEl) nameEl.textContent = user.name || "Noma'lum Mijoz";

  const tierEl = document.getElementById("crmModalTierBadge");
  if (tierEl) {
    if (spent >= 1500000 || count >= 3) {
      tierEl.className = "crm-tier-badge crm-badge-vip";
      tierEl.textContent = "👑 VIP Xaridor";
    } else if (count >= 1 || spent > 0) {
      tierEl.className = "crm-tier-badge crm-badge-regular";
      tierEl.textContent = "🥈 Sadoqatli Mijoz";
    } else {
      tierEl.className = "crm-tier-badge crm-badge-new";
      tierEl.textContent = "🟢 Yangi A'zo";
    }
  }

  // Meta
  const metaEl = document.getElementById("crmModalMeta");
  if (metaEl) {
    const regDate = user.createdAt ? new Date(user.createdAt).toLocaleDateString("uz-UZ") : "Yaqinda";
    metaEl.textContent = `Mijoz ID: #${String(user._id || user.id || "1001").slice(-6)} • Ro'yxatdan o'tgan: ${regDate}`;
  }

  // 3 KPI Cards
  const spentEl = document.getElementById("crmModalTotalSpent");
  if (spentEl) spentEl.textContent = spent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";

  const countEl = document.getElementById("crmModalOrderCount");
  if (countEl) countEl.textContent = `${count} ta xarid`;

  const avgEl = document.getElementById("crmModalAvgOrder");
  if (avgEl) avgEl.textContent = avg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";

  // Contact info
  const firstOrderAddress = matchedOrders[0]?.address;
  const firstOrderPhone = matchedOrders[0]?.phone;

  const phoneEl = document.getElementById("crmModalPhone");
  if (phoneEl) phoneEl.textContent = user.phone || firstOrderPhone || "Kiritilmagan";

  const emailEl = document.getElementById("crmModalEmail");
  if (emailEl) emailEl.textContent = user.email || "Kiritilmagan";

  const cityEl = document.getElementById("crmModalCity");
  if (cityEl) cityEl.textContent = user.city || user.region || "O'zbekiston";

  const addressEl = document.getElementById("crmModalAddress");
  if (addressEl) addressEl.textContent = user.address || firstOrderAddress || "Asosiy manzil kiritilmagan";

  // Action buttons
  const callBtn = document.getElementById("crmModalCallBtn");
  if (callBtn) {
    const activePhone = user.phone || firstOrderPhone;
    callBtn.href = activePhone ? `tel:${activePhone}` : "javascript:void(0)";
  }

  const tgBtn = document.getElementById("crmModalTgBtn");
  if (tgBtn) {
    const cleanPhone = String(user.phone || firstOrderPhone || "").replace(/[^0-9]/g, "");
    tgBtn.href = cleanPhone ? `https://t.me/+${cleanPhone}` : "https://t.me/";
  }

  // 👔 NEW: Clothing Preferences & Onboarding Details
  const birthEl = document.getElementById("crmModalBirthDate");
  const bdayBadge = document.getElementById("crmModalBdayDiscount");
  if (birthEl) {
    birthEl.textContent = user.birthDate || "Kiritilmagan";
    if (bdayBadge) bdayBadge.style.display = user.birthDate ? "inline-block" : "none";
  }

  const sizeEl = document.getElementById("crmModalSuitSize");
  if (sizeEl) {
    sizeEl.textContent = user.suitSize ? `${user.suitSize}-o'lcham (Razmer)` : "Kiritilmagan";
  }

  const styleEl = document.getElementById("crmModalStyle");
  if (styleEl) {
    styleEl.textContent = user.style || "Klassik / Erkin";
  }

  const segEl = document.getElementById("crmModalSegment");
  if (segEl) {
    if (spent >= 1500000 || count >= 3) {
      segEl.textContent = "💎 Premium VIP (Yuqori LTV)";
      segEl.style.color = "#88001b";
    } else if (count >= 1 || spent > 0) {
      segEl.textContent = "🥈 Sadoqatli Mijoz";
      segEl.style.color = "#2563eb";
    } else {
      segEl.textContent = "🟢 Yangi Mijoz (Istiqbolli)";
      segEl.style.color = "#10b981";
    }
  }

  // Orders list for this customer
  const ordersContainer = document.getElementById("crmModalOrdersList");
  if (ordersContainer) {
    if (matchedOrders.length === 0) {
      ordersContainer.innerHTML = `
        <div style="text-align:center; padding:20px; color:#94a3b8; font-size:13px; background:#f1f5f9; border-radius:10px;">
          Ushbu mijoz bo'yicha tizimda buyurtmalar topilmadi.
        </div>
      `;
    } else {
      ordersContainer.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${matchedOrders.map((o) => {
            const step = getOrderStatusStep(o);
            const stepLabels = {
              1: "Qabul qilindi 🟡",
              2: "Tayyorlanmoqda 🟠",
              3: "Kuryerda 🚚",
              4: "Yetkazib berildi ✅",
              0: "Bekor qilindi ❌"
            };
            const sLabel = stepLabels[step] || (o.status || "Jarayonda");
            const rawOVal = Number(o.totalPriceUzs || o.total || 0);
            const ordSom = rawOVal > 5000 ? rawOVal : rawOVal * (state.usdRate || 12650);
            const totalSom = Math.round(ordSom).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            return `
              <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:12px 14px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                <div>
                  <div style="font-weight:800; font-size:14px; color:#0f172a;">Buyurtma #${o.id || o.orderId}</div>
                  <div style="font-size:12px; color:#64748b; margin-top:2px;">Sana: ${o.date || "-"} • Manzil: ${o.address || "Toshkent"}</div>
                  <div style="font-size:12.5px; color:#334155; margin-top:4px;">
                    ${(o.items || []).map((it) => `${it.title} (${it.quantity}x, ${it.size || "46"})`).join(", ")}
                  </div>
                </div>
                <div style="text-align:right;">
                  <span class="uzum-sub-badge" style="font-size:12px; font-weight:700; padding:3px 8px; border-radius:6px; background:#f1f5f9;">
                    ${sLabel}
                  </span>
                  <div style="font-size:15px; font-weight:800; color:#10b981; margin-top:4px;">${totalSom} so'm</div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `;
    }
  }

  openModal("adminUserDetailModal");
}

function closeAdminUserModal() {
  closeModal("adminUserDetailModal");
}

window.openAdminUserModal = openAdminUserModal;
window.closeAdminUserModal = closeAdminUserModal;

// =============================================================================
// 3. 🏷️ PROMOKODLAR VA CHEGIRMALAR BOSHQARUVI
// =============================================================================
async function loadAdminPromos() {
  const container = document.getElementById("adminPromosTableContainer");
  if (!container) return;

  container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Yuklanmoqda... ⏳</div>`;

  try {
    const res = await fetch("/api/promocodes", { headers: getAdminAuthHeaders() });
    const data = await res.json();
    const promos = data.promocodes || [];

    if (promos.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Faol promokodlar yo'q. Yangi promokod yarating!</div>`;
      return;
    }

    container.innerHTML = `
      <div class="admin-table-wrapper">
        <table class="size-table" style="width:100%; text-align:left;">
          <thead>
            <tr>
              <th>Promokod</th>
              <th>Chegirma</th>
              <th>Min Xarid</th>
              <th>Ishlatildi / Limit</th>
              <th>1 Kishiga</th>
              <th>Amal Qilish Muddati</th>
              <th>Holati</th>
              <th>Amal</th>
            </tr>
          </thead>
          <tbody>
            ${promos.map((p) => {
              const isExpired = p.expiresAt && new Date(p.expiresAt) < new Date();
              const isFull = p.maxUses && p.usedCount >= p.maxUses;
              const statusBadge = isExpired
                ? `<span style="color:#ef4444; font-weight:700;">Muddati tugagan ⌛</span>`
                : isFull
                ? `<span style="color:#f59e0b; font-weight:700;">Limit to'lgan 🚫</span>`
                : `<span style="color:#10b981; font-weight:700;">Faol 🟢</span>`;

              const discountStr = p.discountType === "percent"
                ? `${p.discountValue}%`
                : `${p.discountValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`;

              return `
                <tr>
                  <td><b style="color:#c084fc; letter-spacing:1px; font-size:15px;">${p.code}</b></td>
                  <td style="font-weight:800; color:#fbbf24;">${discountStr}</td>
                  <td>${p.minOrderPrice ? p.minOrderPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm" : "Cheklovsiz"}</td>
                  <td><b>${p.usedCount || 0}</b> / ${p.maxUses || "∞"}</td>
                  <td>${p.perUserLimit || 1} marta</td>
                  <td style="font-size:12px; color:#cbd5e1;">
                    ${p.expiresAt ? new Date(p.expiresAt).toLocaleDateString("uz-UZ") : "Muddatsiz"}
                  </td>
                  <td>${statusBadge}</td>
                  <td>
                    <button type="button" class="btn btn-outline" style="color:#ef4444; border-color:rgba(239,68,68,0.4); padding:4px 10px; font-size:12px; border-radius:6px;" onclick="deleteAdminPromo('${p.id}')">
                      🗑️
                    </button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  } catch (e) {
    container.innerHTML = `<div style="color:#ef4444; padding:20px;">Promokodlarni yuklashda xatolik</div>`;
  }
}

function openCreatePromoModal() {
  document.getElementById("createPromoForm").reset();
  openModal("createPromoModal");
}

async function handleCreatePromo(e) {
  e.preventDefault();
  const code = document.getElementById("adminNewPromoCodeInput").value.trim().toUpperCase();
  const discountType = document.getElementById("promoDiscountType").value;
  const discountValue = parseFloat(document.getElementById("promoDiscountValue").value);
  const minOrderPrice = parseFloat(document.getElementById("promoMinOrder").value) || 0;
  const maxUses = parseInt(document.getElementById("promoMaxUses").value, 10) || 100;
  const perUserLimit = parseInt(document.getElementById("promoPerUser").value, 10) || 1;
  const expiryDays = parseInt(document.getElementById("promoExpiryDays").value, 10) || 30;

  try {
    const res = await fetch("/api/promocodes", {
      method: "POST",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify({
        code,
        discountType,
        discountValue,
        minOrderPrice,
        maxUses,
        perUserLimit,
        expiryDays,
      }),
    });
    const data = await res.json();
    if (data.success) {
      closeModal("createPromoModal");
      showToast(`✓ Promokod "${code}" yaratildi!`);
      loadAdminPromos();
    } else {
      showToast(data.message || "Xatolik yuz berdi");
    }
  } catch (err) {
    showToast("Promokod saqlashda xatolik");
  }
}

async function deleteAdminPromo(id) {
  const ok = await window.eurotexConfirm(
    "Ushbu promokodni o'chirishni tasdiqlaysizmi?",
    "Promokodni o'chirish",
    {
      icon: "🗑️",
      confirmColor: "danger",
      confirmText: "Ha, o'chirish",
      cancelText: "Bekor qilish",
    }
  );
  if (!ok) return;
  try {
    await fetch(`/api/promocodes/${id}`, { method: "DELETE", headers: getAdminAuthHeaders() });
    showToast("✓ Promokod muvaffaqiyatli o'chirildi", "info");
    loadAdminPromos();
  } catch (e) {}
}

// =============================================================================
// 4. 🤝 "EUROTEX NASIYA" MUDDATLI TO'LOV ARIZALARI
// =============================================================================
async function loadAdminNasiya() {
  const container = document.getElementById("adminNasiyaTableContainer");
  if (!container) return;

  container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Yuklanmoqda... ⏳</div>`;

  try {
    const res = await fetch("/api/nasiya", { headers: getAdminAuthHeaders() });
    const data = await res.json();
    const apps = data.applications || [];

    if (apps.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Hozircha Nasiya arizalari yo'q</div>`;
      return;
    }

    container.innerHTML = `
      <div class="admin-table-wrapper">
        <table class="size-table" style="width:100%; text-align:left;">
          <thead>
            <tr>
              <th>Sana</th>
              <th>Mijoz</th>
              <th>Telefon</th>
              <th>Pasport / ID</th>
              <th>Muddat</th>
              <th>Mahsulot / Summa</th>
              <th>Oylik To'lov</th>
              <th>Holati</th>
            </tr>
          </thead>
          <tbody>
            ${apps.map((a) => {
              const statusColors = {
                kutilmoqda: "#f59e0b",
                tasdiqlandi: "#10b981",
                rad_etildi: "#ef4444",
              };
              const col = statusColors[a.status] || "#f59e0b";

              return `
                <tr>
                  <td style="font-size:12px; color:#94a3b8;">${a.date || "-"}</td>
                  <td><b>${a.name}</b></td>
                  <td>
                    <a href="tel:${a.phone}" style="color:#38bdf8; font-weight:700; text-decoration:none;">
                      📞 ${a.phone}
                    </a>
                  </td>
                  <td><code>${a.passport}</code></td>
                  <td><b style="color:#fbbf24;">${a.months} oy</b></td>
                  <td>
                    <b>${a.productTitle}</b>
                    <small style="display:block; color:#94a3b8;">${a.totalAmount}</small>
                  </td>
                  <td style="font-weight:800; color:#10b981;">${a.monthlyPayment}</td>
                  <td>
                    <select onchange="updateNasiyaStatus('${a.id}', this.value)" style="background:#0b1329; color:${col}; border:1.5px solid ${col}; border-radius:8px; padding:4px 8px; font-weight:700; font-size:12px;">
                      <option value="kutilmoqda" ${a.status === "kutilmoqda" ? "selected" : ""}>🟡 Kutilmoqda</option>
                      <option value="tasdiqlandi" ${a.status === "tasdiqlandi" ? "selected" : ""}>✅ Tasdiqlandi</option>
                      <option value="rad_etildi" ${a.status === "rad_etildi" ? "selected" : ""}>❌ Rad etildi</option>
                    </select>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  } catch (e) {
    container.innerHTML = `<div style="color:#ef4444; padding:20px;">Nasiya arizalarini yuklashda xatolik</div>`;
  }
}

async function updateNasiyaStatus(id, status) {
  try {
    await fetch(`/api/nasiya/${id}`, {
      method: "PUT",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    showToast("✓ Nasiya arizasi holati yangilandi!");
    loadAdminNasiya();
  } catch (e) {}
}

// =============================================================================
// 5. 🚚 VILOYATLAR VA YETKAZIB BERISH NARXLARI BOSHQUVI
// =============================================================================
let _adminDeliveryCache = [];

async function loadAdminDelivery() {
  const container = document.getElementById("adminDeliveryTableContainer");
  if (!container) return;

  container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Yuklanmoqda... ⏳</div>`;

  try {
    const res = await fetch("/api/delivery", { headers: getAdminAuthHeaders() });
    const data = await res.json();
    _adminDeliveryCache = data.delivery || [];

    container.innerHTML = `
      <div class="admin-table-wrapper">
        <table class="size-table" style="width:100%; text-align:left;">
          <thead>
            <tr>
              <th>Viloyat / Hudud</th>
              <th>Yetkazish Narxi (so'm)</th>
              <th>Yetkazish Muddati</th>
              <th>Bepul Yetkazish Chegarasi (so'm)</th>
            </tr>
          </thead>
          <tbody>
            ${_adminDeliveryCache.map((d, i) => `
              <tr>
                <td><b>${d.region}</b></td>
                <td>
                  <input type="number" id="delPrice_${i}" value="${d.price}" style="padding:6px 10px; border-radius:8px; background:#0b1329; border:1px solid rgba(255,255,255,0.15); color:#fff; width:140px; font-weight:700;" /> so'm
                </td>
                <td>
                  <input type="text" id="delDays_${i}" value="${d.days}" style="padding:6px 10px; border-radius:8px; background:#0b1329; border:1px solid rgba(255,255,255,0.15); color:#fff; width:180px;" />
                </td>
                <td>
                  <input type="number" id="delFree_${i}" value="${d.freeThreshold || 0}" style="padding:6px 10px; border-radius:8px; background:#0b1329; border:1px solid rgba(255,255,255,0.15); color:#fff; width:150px;" /> so'm
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  } catch (e) {
    container.innerHTML = `<div style="color:#ef4444; padding:20px;">Yetkazib berish narxlarini yuklashda xatolik</div>`;
  }
}

async function saveAdminDeliverySettings() {
  const updated = _adminDeliveryCache.map((d, i) => {
    const p = parseFloat(document.getElementById(`delPrice_${i}`)?.value) || 0;
    const days = document.getElementById(`delDays_${i}`)?.value || d.days;
    const free = parseFloat(document.getElementById(`delFree_${i}`)?.value) || 0;
    return { ...d, price: p, days, freeThreshold: free };
  });

  try {
    const res = await fetch("/api/delivery", {
      method: "POST",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify({ delivery: updated }),
    });
    if (res.ok) {
      _adminDeliveryCache = updated;
      showToast("✓ Yetkazib berish narxlari muvaffaqiyatli saqlandi!");
    }
  } catch (e) {
    showToast("Saqlashda xatolik yuz berdi");
  }
}

// =============================================================================
// 6. 🤖 TELEGRAM BOT SOZLAMALARI
// =============================================================================
async function loadAdminTelegramSettings() {
  try {
    const res = await fetch("/api/telegram", { headers: getAdminAuthHeaders() });
    const data = await res.json();
    const tokenInput = document.getElementById("adminTgBotToken");
    const chatInput = document.getElementById("adminTgChatId");
    if (tokenInput && data.tokenSet) tokenInput.placeholder = "Token o'rnatilgan (o'zgartirish uchun yangisini kiriting)";
    if (chatInput && data.chatId) chatInput.value = data.chatId;
  } catch (e) {}
}

async function saveAdminTelegramSettings() {
  const token = document.getElementById("adminTgBotToken").value.trim();
  const chatId = document.getElementById("adminTgChatId").value.trim();

  if (!chatId) {
    showToast("❌ Iltimos, Chat ID-ni kiriting!");
    return;
  }

  try {
    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify({ token, chatId }),
    });
    const data = await res.json();
    if (data.success) {
      showToast("✓ Telegram bot sozlamalari saqlandi!");
    } else {
      showToast(data.message || "Xatolik yuz berdi");
    }
  } catch (e) {
    showToast("Saqlashda xatolik");
  }
}

async function testAdminTelegramAlert() {
  showToast("Telegramga test xabar yuborilmoqda... ⏳");
  try {
    const res = await fetch("/api/telegram/test", { method: "POST", headers: getAdminAuthHeaders() });
    const data = await res.json();
    if (data.success) {
      showToast("✓ Test xabari Telegramingizga yetib bordi! 🚀");
    } else {
      showToast("❌ " + (data.message || "Xatolik"));
    }
  } catch (e) {
    showToast("Xabar yuborishda xatolik");
  }
}

// =============================================================================
// 7. 🛠️ TEXNIK TANAFFUS REJIMI (MAINTENANCE MODE)
// =============================================================================
let _maintenanceCache = {
  enabled: false,
  title: "Saytda texnik yangilanish ketmoqda 🛠️",
  message: "Hurmatli xaridorlar! EurotexKids tizimida profilaktika va texnik yangilanish ishlari olib borilmoqda. Yangi to'plamlar bilan tez orada xizmatingizda bo'lamiz!",
  estimatedTime: "Tez orada (bugun)",
  contactPhone: "+998 90 555 77 75",
  telegramUsername: "eurotexkids_admin"
};

async function checkMaintenanceStatus() {
  try {
    const res = await fetch("/api/maintenance");
    const data = await res.json();
    if (data && data.success && data.maintenance) {
      _maintenanceCache = data.maintenance;
    }
  } catch (e) {}

  const overlay = document.getElementById("maintenanceModeOverlay");
  const banner = document.getElementById("adminMaintenanceWarningBanner");

  if (_maintenanceCache && _maintenanceCache.enabled) {
    if (isUserAdmin()) {
      // Admin: sayt to'liq ochiq, faqat tepada ogohlantiruvchi qizil/sariq banner turadi
      if (overlay) overlay.style.display = "none";
      if (banner) banner.style.display = "flex";
      document.body.style.overflow = "auto";
    } else {
      // Oddiy xaridor: butun ekran yopiladi
      if (banner) banner.style.display = "none";
      if (overlay) {
        const titleEl = document.getElementById("maintenanceDisplayTitle");
        const msgEl = document.getElementById("maintenanceDisplayMessage");
        const timeEl = document.getElementById("maintenanceDisplayTime");
        const callBtn = document.getElementById("maintenanceCallBtn");
        const tgBtn = document.getElementById("maintenanceTgBtn");

        if (titleEl) titleEl.textContent = _maintenanceCache.title || "Saytda texnik yangilanish ketmoqda 🛠️";
        if (msgEl) msgEl.textContent = _maintenanceCache.message || "Tez orada xizmatingizda bo'lamiz!";
        if (timeEl) timeEl.textContent = _maintenanceCache.estimatedTime || "Tez orada";
        if (callBtn) {
          const ph = (_maintenanceCache.contactPhone || "").trim();
          callBtn.href = "tel:" + ph.replace(/[^\d+]/g, "");
          callBtn.style.display = ph ? "inline-flex" : "none";
        }
        if (tgBtn) {
          const tg = (_maintenanceCache.telegramUsername || "").replace(/^@/, "").trim();
          tgBtn.href = "https://t.me/" + tg;
          tgBtn.style.display = tg ? "inline-flex" : "none";
        }
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    }
  } else {
    // Tanaffus o'chiq (oddiy holat)
    if (overlay) overlay.style.display = "none";
    if (banner) banner.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

async function loadAdminMaintenanceSettings() {
  try {
    const res = await fetch("/api/maintenance");
    const data = await res.json();
    if (data && data.success && data.maintenance) {
      _maintenanceCache = data.maintenance;
    }
  } catch (e) {}

  const title = document.getElementById("adminMaintenanceTitle");
  const msg = document.getElementById("adminMaintenanceMessage");
  const time = document.getElementById("adminMaintenanceTime");
  const phone = document.getElementById("adminMaintenancePhone");
  const tg = document.getElementById("adminMaintenanceTg");

  if (title) title.value = _maintenanceCache.title || "";
  if (msg) msg.value = _maintenanceCache.message || "";
  if (time) time.value = _maintenanceCache.estimatedTime || "";
  if (phone) phone.value = _maintenanceCache.contactPhone || "";
  if (tg) tg.value = _maintenanceCache.telegramUsername || "";

  updateMaintenanceUIState();
}

function updateMaintenanceUIState() {
  const isEnabled = Boolean(_maintenanceCache && _maintenanceCache.enabled);

  const actionBtn = document.getElementById("btnToggleMaintenanceAction");
  const statusBadge = document.getElementById("adminMaintenanceStatusBadge");
  const statusDot = document.getElementById("adminMaintenanceStatusDot");
  const statusText = document.getElementById("adminMaintenanceStatusText");
  const descEl = document.getElementById("adminMaintenanceModeDescription");

  if (actionBtn) {
    if (isEnabled) {
      actionBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";
      actionBtn.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.4)";
      actionBtn.innerHTML = "🟢 Saytni Qayta Ochish (Faollashtirish)";
    } else {
      actionBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
      actionBtn.style.boxShadow = "0 4px 15px rgba(239, 68, 68, 0.4)";
      actionBtn.innerHTML = "🔴 Saytni Texnik Tanaffusga Tushirish";
    }
  }

  if (statusBadge) {
    if (isEnabled) {
      statusBadge.style.background = "rgba(245, 158, 11, 0.15)";
      statusBadge.style.color = "#f59e0b";
      statusBadge.style.borderColor = "rgba(245, 158, 11, 0.4)";
    } else {
      statusBadge.style.background = "rgba(16, 185, 129, 0.15)";
      statusBadge.style.color = "#10b981";
      statusBadge.style.borderColor = "rgba(16, 185, 129, 0.4)";
    }
  }

  if (statusDot) {
    statusDot.style.background = isEnabled ? "#f59e0b" : "#10b981";
  }

  if (statusText) {
    statusText.textContent = isEnabled
      ? "⚠️ Sayt Texnik Tanaffusda (Yopiq)"
      : "Sayt Faol (Barcha uchun ochiq)";
  }

  if (descEl) {
    if (isEnabled) {
      descEl.innerHTML =
        '<span style="color: #f59e0b; font-weight: 700;">⚠️ DIQQAT: Sayt hozir xaridorlar uchun YOPIQ!</span> Texnik tanaffus sahifasi ko\'rsatilmoqda. Faqat adminlar saytga kira oladi.';
    } else {
      descEl.innerHTML =
        '<span style="color: #10b981; font-weight: 700;">🟢 Sayt hozir barcha xaridorlar uchun OCHIQ.</span> Do\'kon to\'liq faol ishlamoqda.';
    }
  }
}

async function toggleMaintenanceActiveState() {
  const willEnable = !Boolean(_maintenanceCache && _maintenanceCache.enabled);

  const title = (document.getElementById("adminMaintenanceTitle")?.value || _maintenanceCache.title || "").trim();
  const msg = (document.getElementById("adminMaintenanceMessage")?.value || _maintenanceCache.message || "").trim();
  const time = (document.getElementById("adminMaintenanceTime")?.value || _maintenanceCache.estimatedTime || "").trim();
  const phone = (document.getElementById("adminMaintenancePhone")?.value || _maintenanceCache.contactPhone || "").trim();
  const tg = (document.getElementById("adminMaintenanceTg")?.value || _maintenanceCache.telegramUsername || "").trim();

  const payload = {
    enabled: willEnable,
    title,
    message: msg,
    estimatedTime: time,
    contactPhone: phone,
    telegramUsername: tg,
  };

  try {
    showToast(willEnable ? "Sayt tanaffusga tushirilmoqda... ⏳" : "Sayt qayta ochilmoqda... ⏳");
    const res = await fetch("/api/maintenance", {
      method: "POST",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.success) {
      _maintenanceCache = data.maintenance;
      updateMaintenanceUIState();
      checkMaintenanceStatus();
      showToast(
        willEnable
          ? "🔴 Sayt texnik tanaffus rejimiga o'tkazildi (xaridorlarga yopildi)!"
          : "✅ Sayt muvaffaqiyatli ochildi (barcha uchun faol)!"
      );
    } else {
      showToast(data.message || "Xatolik yuz berdi");
    }
  } catch (e) {
    showToast("Server bilan bog'lanishda xatolik");
  }
}

async function saveAdminMaintenanceTextsOnly() {
  const title = (document.getElementById("adminMaintenanceTitle")?.value || "").trim();
  const msg = (document.getElementById("adminMaintenanceMessage")?.value || "").trim();
  const time = (document.getElementById("adminMaintenanceTime")?.value || "").trim();
  const phone = (document.getElementById("adminMaintenancePhone")?.value || "").trim();
  const tg = (document.getElementById("adminMaintenanceTg")?.value || "").trim();

  const payload = {
    enabled: Boolean(_maintenanceCache && _maintenanceCache.enabled),
    title,
    message: msg,
    estimatedTime: time,
    contactPhone: phone,
    telegramUsername: tg,
  };

  try {
    const res = await fetch("/api/maintenance", {
      method: "POST",
      headers: getAdminAuthHeaders(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.success) {
      _maintenanceCache = data.maintenance;
      updateMaintenanceUIState();
      checkMaintenanceStatus();
      showToast("💾 Tanaffus matnlari va ma'lumotlari muvaffaqiyatli saqlandi!");
    } else {
      showToast(data.message || "Xatolik yuz berdi");
    }
  } catch (e) {
    showToast("Saqlashda xatolik yuz berdi");
  }
}

function previewMaintenanceOverlay() {
  const overlay = document.getElementById("maintenanceModeOverlay");
  if (!overlay) return;

  const titleVal = document.getElementById("adminMaintenanceTitle")?.value || _maintenanceCache.title || "Saytda texnik yangilanish ketmoqda 🛠️";
  const msgVal = document.getElementById("adminMaintenanceMessage")?.value || _maintenanceCache.message || "Tez orada xizmatingizda bo'lamiz!";
  const timeVal = document.getElementById("adminMaintenanceTime")?.value || _maintenanceCache.estimatedTime || "Tez orada";
  const phoneVal = (document.getElementById("adminMaintenancePhone")?.value || _maintenanceCache.contactPhone || "").trim();
  const tgVal = (document.getElementById("adminMaintenanceTg")?.value || _maintenanceCache.telegramUsername || "").trim();

  const titleEl = document.getElementById("maintenanceDisplayTitle");
  const msgEl = document.getElementById("maintenanceDisplayMessage");
  const timeEl = document.getElementById("maintenanceDisplayTime");
  const callBtn = document.getElementById("maintenanceCallBtn");
  const tgBtn = document.getElementById("maintenanceTgBtn");

  if (titleEl) titleEl.textContent = titleVal;
  if (msgEl) msgEl.textContent = msgVal;
  if (timeEl) timeEl.textContent = timeVal;
  if (callBtn) {
    callBtn.href = "tel:" + phoneVal.replace(/[^\d+]/g, "");
    callBtn.style.display = phoneVal ? "inline-flex" : "none";
  }
  if (tgBtn) {
    tgBtn.href = "https://t.me/" + tgVal.replace(/^@/, "");
    tgBtn.style.display = tgVal ? "inline-flex" : "none";
  }

  let previewBar = document.getElementById("maintenancePreviewCloseBar");
  if (!previewBar) {
    previewBar = document.createElement("div");
    previewBar.id = "maintenancePreviewCloseBar";
    previewBar.style.cssText = "position: fixed; top: 16px; right: 16px; z-index: 1000000; background: #dc2626; color: #fff; padding: 10px 20px; border-radius: 30px; font-weight: 800; font-size: 14px; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 8px;";
    previewBar.innerHTML = "<span>❌</span> Sinovni yopish (Adminga qaytish)";
    previewBar.onclick = closeMaintenancePreview;
    document.body.appendChild(previewBar);
  } else {
    previewBar.style.display = "flex";
  }

  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeMaintenancePreview() {
  const overlay = document.getElementById("maintenanceModeOverlay");
  const previewBar = document.getElementById("maintenancePreviewCloseBar");
  if (previewBar) previewBar.style.display = "none";
  if (overlay) overlay.style.display = "none";
  document.body.style.overflow = "auto";
}

async function saveAdminMaintenanceSettings() {
  return saveAdminMaintenanceTextsOnly();
}

function openMaintenanceAdminLogin() {
  const overlay = document.getElementById("maintenanceModeOverlay");
  if (overlay) overlay.style.display = "none";
  document.body.style.overflow = "auto";
  openAuthModal();
}

// 💵 #9 So'mga o'girishda O'zbekiston kassa standarti bo'yicha 500 so'mga yaxlitlash
function formatMoneySom(amount) {
  let num = typeof amount === "number" ? amount : parseFloat(amount) || 0;
  if (!Number.isFinite(num) || num < 0) num = 0;
  if (num > 100000000) num = Math.min(num, 100000000);
  num = Math.round(num / 500) * 500;
  return num.toLocaleString("ru-RU").replace(/\u00A0/g, " ");
}

function formatMoney(usdAmount) {
  const num =
    typeof usdAmount === "number" ? usdAmount : parseFloat(usdAmount) || 0;
  const rate =
    typeof state !== "undefined" && state.usdRate ? state.usdRate : 12650;
  let usd = 0;
  let uzs = 0;
  if (num >= 100000) {
    uzs = Math.round(num / 500) * 500;
    usd = Math.round(uzs / rate);
  } else {
    usd = Math.round(num);
    uzs = Math.round(usd * rate);
  }
  const formattedUsd = `$${usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
  const formattedUzs = uzs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${formattedUsd} (${formattedUzs} so'm)`;
}

function formatUsd(usdAmount) {
  const numUsd =
    typeof usdAmount === "number" ? usdAmount : parseFloat(usdAmount) || 0;
  return `$${numUsd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
}

function toUzbekError(msg) {
  if (!msg || typeof msg !== "string") return msg || "Kutilmagan holat yuz berdi. Iltimos, qayta urinib ko'ring.";
  const lower = msg.toLowerCase();
  
  if (
    lower.includes("failed to respond") ||
    lower.includes("application failed") ||
    lower.includes("502") ||
    lower.includes("504") ||
    lower.includes("503") ||
    lower.includes("bad gateway") ||
    lower.includes("gateway timeout")
  ) {
    return "⚠️ Server bilan vaqtincha aloqa sekinlashdi. Iltimos, bir ozdan so'ng qayta urinib ko'ring yoki Google orqali kiring.";
  }
  if (
    lower.includes("failed to fetch") ||
    lower.includes("networkerror") ||
    lower.includes("network error") ||
    lower.includes("connection refused")
  ) {
    return "📡 Internet aloqasi vaqtincha uzildi. Iltimos, internetingizni tekshirib qayta urinib ko'ring.";
  }
  if (
    lower.includes("unauthorized") ||
    lower.includes("401") ||
    lower.includes("invalid token") ||
    lower.includes("token expired")
  ) {
    return "🔒 Kirish sessiyangiz yakunlandi. Iltimos, qaytadan tizimga kiring.";
  }
  if (lower.includes("user not found") || lower.includes("foydalanuvchi topilmadi")) {
    return "🔍 Ushbu elektron pochta bo'yicha ma'lumot topilmadi. Ro'yxatdan o'tish uchun 'Email Kod bilan' tugmasini bosing.";
  }
  if (lower.includes("invalid password") || lower.includes("wrong password")) {
    return "❌ Kiritilgan parol noto'g'ri. Iltimos, parolni tekshirib qaytadan urinib ko'ring.";
  }
  if (lower.includes("invalid code") || lower.includes("wrong code") || lower.includes("noto'g'ri kod")) {
    return "❌ Tasdiqlash kodi noto'g'ri kiritildi. Iltimos, pochtangizga kelgan 6 xonali kodni tekshiring.";
  }
  if (
    lower.includes("internal server error") ||
    lower.includes("status 500") ||
    lower.includes("error 500") ||
    lower.includes("http 500") ||
    lower.trim() === "500"
  ) {
    return "⚠️ Serverda vaqtincha texnik xatolik yuz berdi. Iltimos, 1 daqiqadan so'ng qayta urinib ko'ring.";
  }
  return msg;
}

function showToast(message, type = "success") {
  // Always translate any technical English messages to professional Uzbek
  const displayMsg = toUzbekError(message);

  // Always move toastContainer to be the LAST child of body
  // so it's never trapped inside a modal stacking context
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
  }
  // Re-append to body to guarantee it's on top of all modals
  document.body.appendChild(container);

  // Stack cap: limit visible toasts to maximum 3 to prevent mobile screen collision
  while (container.children.length >= 3) {
    container.removeChild(container.firstChild);
  }

  // Top-Center stack guarantee with safety margins and responsive width
  container.style.cssText = [
    "position: fixed",
    "top: 18px",
    "left: 50%",
    "right: auto",
    "bottom: auto",
    "transform: translateX(-50%)",
    "z-index: 2147483647",
    "display: flex",
    "flex-direction: column",
    "align-items: center",
    "gap: 8px",
    "pointer-events: none",
    "width: 100%",
    "max-width: min(92vw, 440px)",
    "padding: 0 12px",
    "box-sizing: border-box",
  ].join(" !important;") + " !important;";

  const toast = document.createElement("div");
  toast.className = "toast eurotex-top-toast";

  // Clean redundant leading emojis if any
  const cleanText = String(displayMsg).replace(/^[✓❤️💔✨🛒🔔🔑👑⚠️❌]+\s*/, "").trim() || displayMsg;

  // Refined gradient status icons
  let iconHtml = `<span style="display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; min-width:22px; border-radius:50%; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:#ffffff; font-size:12px; font-weight:900; flex-shrink:0; box-shadow:0 2px 8px rgba(16,185,129,0.35);">✓</span>`;
  if (type === "error" || String(displayMsg).includes("❌")) {
    iconHtml = `<span style="display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; min-width:22px; border-radius:50%; background:linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color:#ffffff; font-size:11px; font-weight:900; flex-shrink:0; box-shadow:0 2px 8px rgba(239,68,68,0.35);">✕</span>`;
  } else if (type === "warning" || String(displayMsg).includes("⚠️")) {
    iconHtml = `<span style="display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; min-width:22px; border-radius:50%; background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#ffffff; font-size:12px; font-weight:900; flex-shrink:0; box-shadow:0 2px 8px rgba(245,158,11,0.35);">!</span>`;
  }

  // Ultra-modern Floating Luxury Card / Pill Style
  toast.style.cssText = [
    "background: rgba(18, 18, 22, 0.96)",
    "color: #ffffff",
    "padding: 9px 18px 9px 12px",
    "border-radius: 999px",
    "border: 1px solid rgba(255, 255, 255, 0.14)",
    "box-shadow: 0 14px 34px -4px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.06)",
    "backdrop-filter: blur(16px)",
    "-webkit-backdrop-filter: blur(16px)",
    "font-size: 13.5px",
    "font-weight: 600",
    "letter-spacing: 0.15px",
    "display: inline-flex",
    "align-items: center",
    "justify-content: center",
    "gap: 10px",
    "pointer-events: auto",
    "max-width: 100%",
    "box-sizing: border-box",
    "text-align: center",
    "transform: translateY(-20px) scale(0.94)",
    "opacity: 0",
    "transition: transform 0.28s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.28s ease",
  ].join(" !important;") + " !important;";

  toast.innerHTML = `${iconHtml} <span style="color:#ffffff !important; font-size:13.5px !important; font-weight:600 !important; line-height:1.4 !important; white-space:normal !important; word-break:break-word !important; text-align:center !important;">${cleanText}</span>`;
  container.appendChild(toast);

  // Smooth entrance
  requestAnimationFrame(() => {
    toast.style.transform = "translateY(0) scale(1)";
    toast.style.opacity = "1";
  });

  // Smooth exit
  setTimeout(() => {
    toast.style.transform = "translateY(-16px) scale(0.95)";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ─── ADMIN HERO BANNER SLIDE EDITING ──────────────────────────────────────────
function triggerSlideImageUpload(slideIndex) {
  const fileInput = document.getElementById("slideFileInput_" + slideIndex);
  if (fileInput) fileInput.click();
}

async function handleSlideImageUpload(event, slideIndex) {
  const file = event.target.files[0];
  if (!file) return;

  try {
    let imgData = await compressImageFile(file, 1200, 0.85);
    const slideImg = document.getElementById("heroSlideImg_" + slideIndex);
    if (slideImg) slideImg.src = imgData;
    safeSetLocalStorage("eurotex_hero_slide_img_" + slideIndex, imgData);

    // Upload to server so ALL users see the updated banner
    try {
      const res = await fetch("/users/slides/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slideIndex, imgData }),
      });
      if (res.ok) {
        showToast(
          "🌐 Banner rasmi serverda saqlandi! Barcha foydalanuvchilar uchun yangilandi! ✅",
        );
      } else {
        showToast("🖼️ Banner lokal saqlandi ✅");
      }
    } catch (err) {
      console.error("Slide upload server sync error:", err);
      showToast("🖼️ Banner lokal saqlandi ✅");
    }
  } catch (err) {
    console.error("Slide image compression error:", err);
    showToast("⚠️ Rasm yuklashda xatolik yuz berdi", "error");
  }
}

function openSlideTextEditModal(slideIndex) {
  const tagEl = document.getElementById("heroSlideTag_" + slideIndex);
  const titleEl = document.getElementById("heroSlideTitle_" + slideIndex);
  const descEl = document.getElementById("heroSlideDesc_" + slideIndex);

  document.getElementById("editSlideIndex").value = slideIndex;
  document.getElementById("editSlideTagInput").value = tagEl
    ? tagEl.textContent.trim()
    : "";
  document.getElementById("editSlideTitleInput").value = titleEl
    ? titleEl.textContent.trim()
    : "";
  document.getElementById("editSlideDescInput").value = descEl
    ? descEl.textContent.trim()
    : "";

  openModal("slideTextModal");
}

function saveSlideText(e) {
  e.preventDefault();
  const slideIndex = document.getElementById("editSlideIndex").value;
  const tagVal = document.getElementById("editSlideTagInput").value.trim();
  const titleVal = document.getElementById("editSlideTitleInput").value.trim();
  const descVal = document.getElementById("editSlideDescInput").value.trim();

  const tagEl = document.getElementById("heroSlideTag_" + slideIndex);
  const titleEl = document.getElementById("heroSlideTitle_" + slideIndex);
  const descEl = document.getElementById("heroSlideDesc_" + slideIndex);

  if (tagEl) tagEl.textContent = tagVal;
  if (titleEl) titleEl.textContent = titleVal;
  if (descEl) descEl.textContent = descVal;

  const slideData = { tag: tagVal, title: titleVal, desc: descVal };
  localStorage.setItem(
    "eurotex_hero_slide_text_" + slideIndex,
    JSON.stringify(slideData),
  );

  closeModal("slideTextModal");
  showToast("✏️ Banner yozuvi muvaffaqiyatli saqlandi! ✅");
}

async function loadCustomHeroSlides() {
  // 1. Instant hydration from server-injected state (0ms wait, zero flicker)
  if (typeof window !== "undefined" && window.__SERVER_SLIDES__ && typeof window.__SERVER_SLIDES__ === "object") {
    Object.keys(window.__SERVER_SLIDES__).forEach((idx) => {
      if (window.__SERVER_SLIDES__[idx]) {
        updateSlideImageInDOM(idx, window.__SERVER_SLIDES__[idx]);
      }
    });
  }

  // 2. Load local cache as backup
  [0, 1, 2, 3, 4, 5].forEach((index) => {
    const savedImg = localStorage.getItem("eurotex_hero_slide_img_" + index);
    if (savedImg && (!window.__SERVER_SLIDES__ || !window.__SERVER_SLIDES__[index])) {
      const slideImg = document.getElementById("heroSlideImg_" + index);
      if (slideImg && slideImg.getAttribute("src") !== savedImg) {
        slideImg.src = savedImg;
      }
    }
  });

  // 3. Fetch server-synced slides in background to keep live
  try {
    const res = await fetch("/users/slides");
    if (res.ok) {
      const data = await res.json();
      if (data && data.slides) {
        Object.keys(data.slides).forEach((idx) => {
          updateSlideImageInDOM(idx, data.slides[idx]);
        });
      }
    }
  } catch (err) {
    // Quietly fail if server is offline
  }
}

function initSlideLiveSync() {
  // Silent background polling — checks for slide updates every 15s
  let lastVersion = null;
  let failCount = 0;
  const pollInterval = setInterval(async () => {
    if (document.hidden) return;
    if (failCount > 3) {
      clearInterval(pollInterval);
      return;
    }
    try {
      const controller = new AbortController();
      const tid = setTimeout(() => controller.abort(), 3000);
      const res = await fetch("/users/slides", { signal: controller.signal }).catch(() => null);
      clearTimeout(tid);
      if (res && res.ok) {
        failCount = 0;
        const data = await res.json().catch(() => null);
        if (data && data.version && data.version !== lastVersion) {
          lastVersion = data.version;
          if (data.slides) {
            Object.keys(data.slides).forEach((idx) => {
              updateSlideImageInDOM(idx, data.slides[idx]);
            });
          }
        }
      } else {
        failCount++;
      }
    } catch (e) {
      failCount++;
    }
  }, 20000);
}

function updateSlideImageInDOM(slideIndex, imgUrl) {
  if (!imgUrl) return;
  const slideImg = document.getElementById("heroSlideImg_" + slideIndex);
  if (!slideImg) return;

  const currentAttr = slideImg.getAttribute("src") || "";
  // If already set to this image, skip completely — 0ms, zero flicker!
  if (currentAttr === imgUrl || slideImg.src.endsWith(imgUrl)) {
    return;
  }

  // Update immediately
  slideImg.src = imgUrl;
  localStorage.setItem("eurotex_hero_slide_img_" + slideIndex, imgUrl);
}

// =============================================================================
// 📶 #13 OFFLINE / ONLINE TARMOQ HOLATI XABARLARI
// =============================================================================
(function initNetworkStatusWatcher() {
  function getOrCreateBanner() {
    let banner = document.getElementById("eurotexNetworkBanner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "eurotexNetworkBanner";
      banner.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(120px);
        z-index: 999999;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 700;
        box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
        opacity: 0;
        pointer-events: none;
      `;
      document.body.appendChild(banner);
    }
    return banner;
  }

  function showOffline() {
    const banner = getOrCreateBanner();
    banner.style.background = "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)";
    banner.style.color = "#ffffff";
    banner.style.border = "1px solid rgba(255,255,255,0.2)";
    banner.innerHTML = "<span>📶</span> <span>Internet aloqasi uzildi. Qayta ulanish kutilmoqda...</span>";
    banner.style.opacity = "1";
    banner.style.transform = "translateX(-50%) translateY(0)";
  }

  function showOnline() {
    const banner = getOrCreateBanner();
    banner.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
    banner.style.color = "#ffffff";
    banner.style.border = "1px solid rgba(255,255,255,0.2)";
    banner.innerHTML = "<span>✅</span> <span>Internet aloqasi qayta tiklandi!</span>";
    banner.style.opacity = "1";
    banner.style.transform = "translateX(-50%) translateY(0)";
    setTimeout(() => {
      banner.style.opacity = "0";
      banner.style.transform = "translateX(-50%) translateY(120px)";
    }, 3500);
  }

  window.addEventListener("offline", showOffline);
  window.addEventListener("online", showOnline);

  // 📍 City Select xotirasini bog'lash
  document.addEventListener("DOMContentLoaded", () => {
    const citySelect = document.getElementById("citySelect");
    if (citySelect) {
      const saved = localStorage.getItem("eurotex_selected_city");
      if (saved) {
        citySelect.value = saved;
      }
      citySelect.addEventListener("change", (e) => {
        if (e.target.value) {
          localStorage.setItem("eurotex_selected_city", e.target.value);
          if (typeof showToast === "function") {
            showToast(`📍 Tanlangan hudud: ${e.target.value}`, "info");
          }
        }
      });
    }
  });
})();

// =============================================================================
// 📊 #3 ADMIN BUYURTMALARINI CSV FORMATDA EKSPORT QILISH
// =============================================================================
function exportOrdersToCSV() {
  const orders = (state && state.orders && state.orders.length > 0)
    ? state.orders
    : [];

  if (orders.length === 0) {
    if (typeof showToast === "function") {
      showToast("⚠️ Eksport qilish uchun hech qanday buyurtma topilmadi!", "warning");
    } else {
      window.eurotexAlert("Eksport qilish uchun hech qanday buyurtma topilmadi!", "Eksport");
    }
    return;
  }

  const headers = [
    "Buyurtma ID",
    "Sana",
    "Mijoz Ismi",
    "Telefon",
    "Viloyat / Manzil",
    "Mahsulotlar Soni",
    "Mahsulotlar Ro'yxati",
    "Jami Summa (UZS)",
    "Jami Summa (USD)",
    "To'lov Turi",
    "Holat"
  ];

  const rows = orders.map((o) => {
    const itemsStr = (o.items || [])
      .map((it) => `${it.title || "Tovar"} (${it.quantity || 1}x, ${it.size || "-"}, ${it.color || "-"})`)
      .join(" | ");

    return [
      `"${(o.id || o.orderId || "").replace(/"/g, '""')}"`,
      `"${(o.date || "").replace(/"/g, '""')}"`,
      `"${(o.customerName || o.name || "").replace(/"/g, '""')}"`,
      `"${(o.phone || "").replace(/"/g, '""')}"`,
      `"${(o.address || o.region || "").replace(/"/g, '""')}"`,
      o.itemsCount || (o.items ? o.items.length : 0),
      `"${itemsStr.replace(/"/g, '""')}"`,
      o.totalPriceUzs || o.total || 0,
      o.totalPriceUsd || 0,
      `"${(o.paymentMethod || "Naqd / Karta").replace(/"/g, '""')}"`,
      `"${(o.statusText || o.status || "Kutilmoqda").replace(/"/g, '""')}"`
    ].join(",");
  });

  // UTF-8 BOM (\uFEFF) — Excel da o'zbekcha / kirill harflar buzilmasligi uchun
  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const today = new Date().toISOString().split("T")[0];
  a.href = url;
  a.download = `eurotex_orders_${today}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (typeof showToast === "function") {
    showToast(`✅ ${orders.length} ta buyurtma CSV formatida yuklab olindi!`, "success");
  }
}

// 📊 #3 ADMIN MIJOZLARINI CSV FORMATDA EKSPORT QILISH
function exportUsersToCSV() {
  const users = Array.isArray(window.currentAdminUsersList) && window.currentAdminUsersList.length > 0
    ? window.currentAdminUsersList
    : (Array.isArray(window.adminUsersCache) ? window.adminUsersCache : []);

  if (users.length === 0) {
    if (typeof showToast === "function") {
      showToast("⚠️ Eksport qilish uchun hech qanday mijoz topilmadi!", "warning");
    } else {
      window.eurotexAlert("Eksport qilish uchun hech qanday mijoz topilmadi!", "Eksport");
    }
    return;
  }

  const headers = [
    "ID / Email",
    "Ism",
    "Telefon",
    "Qo'shimcha Tel",
    "Telegram",
    "Viloyat / Shahar",
    "Manzil",
    "Kostyum O'lchami",
    "Tug'ilgan Sana",
    "Ro'yxatdan O'tgan Sana"
  ];

  const rows = users.map((u) => {
    return [
      `"${(u.email || u._id || "").replace(/"/g, '""')}"`,
      `"${(u.name || u.customerName || "-").replace(/"/g, '""')}"`,
      `"${(u.phone || "-").replace(/"/g, '""')}"`,
      `"${(u.extraPhone || "-").replace(/"/g, '""')}"`,
      `"${(u.telegram || "-").replace(/"/g, '""')}"`,
      `"${(u.city || u.region || "-").replace(/"/g, '""')}"`,
      `"${(u.address || "-").replace(/"/g, '""')}"`,
      `"${(u.suitSize || "-").replace(/"/g, '""')}"`,
      `"${(u.birthDate || "-").replace(/"/g, '""')}"`,
      `"${(u.createdAt ? new Date(u.createdAt).toLocaleDateString("uz-UZ") : "-").replace(/"/g, '""')}"`
    ].join(",");
  });

  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const today = new Date().toISOString().split("T")[0];
  a.href = url;
  a.download = `eurotex_customers_${today}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (typeof showToast === "function") {
    showToast(`✅ ${users.length} ta mijoz CSV formatida yuklab olindi!`, "success");
  }
}

// =============================================================================
// 🖼️ #7 RASMLARNI AVTOMATIK BRAUZERDA SIQISH (CANVAS 1200PX / WEBP-JPEG 85%)
// =============================================================================
function compressImageFile(file, maxWidth = 1200, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      return reject(new Error("Noto'g'ri rasm fayli"));
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // WebP yoki JPEG ga siqish
        const mimeType = file.type === "image/png" ? "image/png" : "image/jpeg";
        const compressedBase64 = canvas.toDataURL(mimeType, quality);
        resolve(compressedBase64);
      };
      img.onerror = () => reject(new Error("Rasm yuklashda xatolik"));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error("Fayl o'qishda xatolik"));
    reader.readAsDataURL(file);
  });
}

// =============================================================================
// 📋 #7 TELEFON RAQAMNI REAL-TIME AVTOMATIK FORMATLASH (PHONE INPUT MASK)
// =============================================================================
function formatUzbekPhone(value) {
  if (!value) return "";
  const digits = value.replace(/\D/g, "");
  let clean = digits;
  if (clean.startsWith("998")) clean = clean.slice(3);
  clean = clean.slice(0, 9); // 9 ta raqam (masalan: 905557775)

  let formatted = "+998";
  if (clean.length > 0) formatted += " (" + clean.slice(0, 2);
  if (clean.length >= 2) formatted += ") ";
  if (clean.length > 2) formatted += clean.slice(2, 5);
  if (clean.length >= 5) formatted += " ";
  if (clean.length > 5) formatted += clean.slice(5, 7);
  if (clean.length >= 7) formatted += " ";
  if (clean.length > 7) formatted += clean.slice(7, 9);
  return formatted;
}

function initPhoneInputMasks() {
  const phoneSelectors = [
    "#orderPhone",
    "#onboardingPhone",
    "#ocbPhone",
    "#nasiyaPhone",
    "#contactPhone",
    "#leadPhone",
    "#profilePhoneInput",
    "input[type='tel']"
  ];
  document.querySelectorAll(phoneSelectors.join(",")).forEach((input) => {
    if (!input || input.dataset.maskAttached) return;
    input.dataset.maskAttached = "true";

    input.addEventListener("input", (e) => {
      const raw = e.target.value;
      if (!raw) return;
      const formatted = formatUzbekPhone(raw);
      e.target.value = formatted;
    });

    input.addEventListener("focus", (e) => {
      if (!e.target.value) e.target.value = "+998 (";
    });

    input.addEventListener("blur", (e) => {
      if (e.target.value === "+998 (" || e.target.value === "+998") e.target.value = "";
    });
  });
}

// =============================================================================
// 📱 #4 TOUCH GESTURE (SWIPE-DOWN TO CLOSE) MAHSULOT MODALIDA
// =============================================================================
function initSwipeToCloseModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  const content = modal.querySelector(".modal-content") || modal.firstElementChild;
  if (!content) return;

  let startY = 0;
  let currentY = 0;
  let isSwiping = false;

  content.addEventListener("touchstart", (e) => {
    if (content.scrollTop > 0) return; // scroll tepasida bo'lmasa surilmaydi
    startY = e.touches[0].clientY;
    isSwiping = true;
  }, { passive: true });

  content.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    if (diff > 0) {
      content.style.transform = `translateY(${Math.min(diff, 200)}px)`;
      content.style.transition = "none";
    }
  }, { passive: true });

  content.addEventListener("touchend", () => {
    if (!isSwiping) return;
    isSwiping = false;
    const diff = currentY - startY;
    content.style.transition = "transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    if (diff > 85) {
      content.style.transform = "translateY(100%)";
      setTimeout(() => {
        if (typeof closeModal === "function") closeModal(modalId);
        content.style.transform = "";
      }, 200);
    } else {
      content.style.transform = "";
    }
  });
}

// =============================================================================
// 🔍 #5 QIDIRUVDA KALIT SO'ZNI AJRATISH (SEARCH HIGHLIGHT)
// =============================================================================
function highlightSearchTerm(text, query) {
  if (!text || !query || typeof query !== "string") return text || "";
  const cleanQ = query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!cleanQ) return text;
  const regex = new RegExp(`(${cleanQ})`, "gi");
  return String(text).replace(regex, `<mark class="search-highlight">$1</mark>`);
}

// =============================================================================
// 🌐 #12 AVTOMATIK TILNI BRAUZER ORQALI ANIQLASH (AUTO-DETECT LANGUAGE)
// =============================================================================
function autoDetectLanguageOnFirstVisit() {
  const saved = localStorage.getItem("eurotex_lang");
  if (!saved && navigator.language) {
    const userLang = navigator.language.toLowerCase();
    let detected = "uz";
    if (userLang.startsWith("ru")) detected = "ru";
    else if (userLang.startsWith("en")) detected = "en";
    localStorage.setItem("eurotex_lang", detected);
    if (typeof setLanguage === "function") {
      setLanguage(detected);
    }
  }
}

// =============================================================================
// 📦 #13 TELEGRAM UCHUN GPS JOYLANUVNI ANIQLASH (GEOLOCATION API)
// =============================================================================
function detectCurrentLocation(addressInputId) {
  const input = document.getElementById(addressInputId);
  if (!input) return;
  if (!navigator.geolocation) {
    if (typeof showToast === "function") showToast("⚠️ Qurilmangizda Geolocation qo'llab-quvvatlanmaydi", "warning");
    return;
  }
  if (typeof showToast === "function") showToast("📍 Joylashuvingiz aniqlanmoqda...", "info");

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      const mapsUrl = `https://maps.google.com/?q=${lat},${lon}`;
      const prevVal = input.value.trim();
      input.value = prevVal ? `${prevVal} (📍 Lokatsiya: ${mapsUrl})` : `📍 Lokatsiya: ${mapsUrl}`;
      if (typeof showToast === "function") showToast("✅ Aniq lokatsiya manzilga biriktirildi! 📍", "success");
    },
    (err) => {
      if (typeof showToast === "function") showToast("⚠️ Joylashuvni aniqlashga ruxsat berilmadi", "warning");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

// =============================================================================
// 🧩 #14 OFFLINE REJIMDA RASMLARNI BRENDLANGAN SVG BILAN ALMASHTIRISH
// =============================================================================
const EUROTEX_FALLBACK_SVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><rect width='400' height='400' fill='%230f172a'/><text x='50%25' y='48%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' font-weight='bold' fill='%23c5a059'>EUROTEX</text><text x='50%25' y='58%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%2394a3b8'>Premium Kostyumlar</text></svg>";

window.addEventListener("error", (e) => {
  if (e.target && e.target.tagName === "IMG") {
    if (!e.target.dataset.hasFallback) {
      e.target.dataset.hasFallback = "true";
      e.target.src = EUROTEX_FALLBACK_SVG;
    }
  }
}, true);

// =============================================================================
// 🔔 #15 BRAUZER PWA WEB PUSH BILDIRISHNOMALARI (AKSIYA VA CHEGIRMALAR)
// =============================================================================
async function requestPushNotificationPermission() {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }
  return false;
}

function showBrowserNotification(title, options = {}) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const defaultOpts = {
    icon: "/images/eurotex-logo.png",
    badge: "/images/eurotex_icon.png",
    vibrate: [200, 100, 200],
    ...options
  };
  try {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification(title, defaultOpts);
    }).catch(() => {
      new Notification(title, defaultOpts);
    });
  } catch (_) {
    try { new Notification(title, defaultOpts); } catch (_) {}
  }
}

// Barcha boshlang'ich initsializatsiyalarni ulash
document.addEventListener("DOMContentLoaded", () => {
  initPhoneInputMasks();
  autoDetectLanguageOnFirstVisit();
  initSwipeToCloseModal("quickViewModal");
  initSwipeToCloseModal("productModal");
  initSwipeToCloseModal("cartPopModal");
});
