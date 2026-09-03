const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    customId: { type: String, unique: true, index: true },
    title_uz: { type: String, required: true, trim: true },
    title_ru: { type: String, trim: true, default: "" },
    title_en: { type: String, trim: true, default: "" },
    category: {
      type: String,
      default: "suits",
      index: true,
    },
    subCategory: { type: String, default: "slim", index: true },
    price: { type: Number, default: 0 },
    oldPrice: { type: Number, default: 0 },
    priceUsd: { type: Number, default: 50, required: true },
    pachkaPriceUsd: { type: Number, default: 45 },
    pachkaQty: { type: Number, default: 6, min: 1 },
    unitPriceUsd: { type: Number, default: 0 },
    rating: { type: Number, default: 5.0, min: 0, max: 5 },
    reviewsCount: { type: Number, default: 12, min: 0 },
    badge_uz: { type: String, default: "ULGURJI PACHKA" },
    badge_ru: { type: String, default: "ОПТОВАЯ УПАКОВКА" },
    badge_en: { type: String, default: "WHOLESALE PACK" },
    badgeType: {
      type: String,
      default: "gold",
    },
    image: { type: String, default: "/images/navy_suit.jpg" },
    images: { type: Array, default: [] },
    sizes: { type: Array, default: [46, 48, 50, 52, 54, 56] },
    fabric_uz: { type: String, default: "Turkiya Premium Jun & Viskoza Blend" },
    fabric_ru: { type: String, default: "Турецкая Премиум Шерсть & Вискоза" },
    fabric_en: {
      type: String,
      default: "Turkish Premium Wool & Viscose Blend",
    },
    desc_uz: { type: String, default: "" },
    desc_ru: { type: String, default: "" },
    desc_en: { type: String, default: "" },
    brand: { type: String, default: "EUROTEX KIDS / A-FARID" },
    season: { type: String, default: "To'rt fasl" },
    origin: { type: String, default: "O'zbekiston (Eurotex Factory)" },
    colors: { type: Array, default: ["Qora", "To'q ko'k (Navy)", "Kulrang"] },
    reviews: { type: Array, default: [] },
    color_uz: { type: String, default: "" },
    color_ru: { type: String, default: "" },
    color_en: { type: String, default: "" },
    inStock: { type: Boolean, default: true, index: true },
    isFeatured: { type: Boolean, default: false, index: true },
    isNewArrival: { type: Boolean, default: false, index: true },
    wholesaleOnly: { type: Boolean, default: true },
  },
  { timestamps: true },
);

productSchema.pre("save", function (next) {
  if (!this.customId) {
    this.customId =
      "prod_" + Date.now() + "_" + Math.floor(Math.random() * 10000);
  }
  if (this.pachkaQty > 0 && this.priceUsd > 0 && !this.unitPriceUsd) {
    this.unitPriceUsd =
      Math.round((this.priceUsd / this.pachkaQty) * 100) / 100;
  }
  if (this.pachkaPriceUsd === 0 && this.priceUsd > 0) {
    this.pachkaPriceUsd = this.priceUsd;
  }
  if (this.price === 0 && this.priceUsd > 0) {
    this.price = this.priceUsd;
  }
  next();
});

productSchema.index({ category: 1, inStock: 1 });
productSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Product", productSchema);
