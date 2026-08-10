const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    customId: { type: String, unique: true },
    title_uz: { type: String, required: true },
    title_ru: { type: String },
    title_en: { type: String },
    category: { type: String, default: "Kostyum-Shimlar" },
    subCategory: { type: String, default: "slim" },
    price: { type: Number },
    oldPrice: { type: Number },
    priceUsd: { type: Number, default: 50 },
    pachkaPriceUsd: { type: Number, default: 45 },
    pachkaQty: { type: Number, default: 6 },
    rating: { type: Number, default: 5.0 },
    reviewsCount: { type: Number, default: 12 },
    badge_uz: { type: String, default: "ULGURJI PACHKA" },
    badgeType: { type: String, default: "gold" },
    image: { type: String, default: "/images/hero_banner.jpg" },
    images: { type: Array, default: [] },
    sizes: { type: Array, default: [46, 48, 50, 52, 54, 56] },
    fabric_uz: { type: String, default: "Turkiya Premium Jun & Viskoza Blend" },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
