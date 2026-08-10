const { Schema, model } = require("mongoose");

const ORDER_STATUS_STEPS = {
  0: { label: "Bekor qilindi", color: "#ef4444", icon: "❌" },
  1: { label: "Qabul qilindi", color: "#f59e0b", icon: "🟡" },
  2: { label: "Tayyorlanmoqda", color: "#3b82f6", icon: "🔵" },
  3: { label: "Kuryerda", color: "#8b5cf6", icon: "🟣" },
  4: { label: "Yetkazib berildi", color: "#10b981", icon: "✅" },
};

const orderSchema = new Schema(
  {
    orderId: { type: String, required: true, unique: true, index: true },
    userEmail: { type: String, default: "", index: true, lowercase: true },
    customerName: { type: String, default: "Mijoz", trim: true },
    recipient: { type: String, default: "Mijoz", trim: true },
    phone: { type: String, default: "", trim: true },
    address: { type: String, default: "", trim: true },
    region: { type: String, default: "", trim: true },
    district: { type: String, default: "", trim: true },
    deliveryType: {
      type: String,
      default: "courier",
      enum: ["courier", "vip-try", "pickup"],
    },
    paymentMethod: {
      type: String,
      default: "cash",
      enum: ["cash", "click", "payme", "card", "eurotex-nasiya", "transfer"],
    },
    items: { type: Array, default: [] },
    itemsCount: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    totalPriceUsd: { type: Number, default: 0, required: true },
    totalPriceUzs: { type: Number, default: 0, required: true },
    usdRateApplied: { type: Number, default: 12650 },
    discountAmount: { type: Number, default: 0 },
    promoCode: { type: String, default: "" },
    statusStep: { type: Number, default: 1, min: 0, max: 4, index: true },
    status: { type: String, default: "Qabul qilindi 🟡" },
    nasiyaMonths: { type: Number, default: 0 },
    date: { type: String, default: "" },
    deliveryDate: { type: String, default: "" },
    deliveryTime: { type: String, default: "" },
    adminNotes: { type: String, default: "" },
    customerNotes: { type: String, default: "" },
    isWholesale: { type: Boolean, default: true },
    ipAddress: { type: String, default: "" },
  },
  { timestamps: true },
);

orderSchema.pre("save", function (next) {
  if (!this.orderId) {
    this.orderId =
      "EUR-" +
      new Date().getFullYear().toString().slice(-2) +
      Math.floor(100000 + Math.random() * 900000);
  }
  if (Array.isArray(this.items)) {
    this.itemsCount = this.items.reduce(
      (sum, it) => sum + (it.quantity || 0),
      0,
    );
  }
  if (this.total > 0 && this.totalPriceUsd === 0) {
    this.totalPriceUsd = this.total;
  }
  if (
    this.totalPriceUsd > 0 &&
    this.usdRateApplied > 0 &&
    this.totalPriceUzs === 0
  ) {
    this.totalPriceUzs = Math.round(this.totalPriceUsd * this.usdRateApplied);
  }
  if (!this.date) {
    this.date = new Date().toLocaleDateString("uz-UZ", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  const statusInfo = ORDER_STATUS_STEPS[this.statusStep];
  if (statusInfo) {
    this.status = statusInfo.icon + " " + statusInfo.label;
  }
  if (this.customerName && !this.recipient) {
    this.recipient = this.customerName;
  }
  next();
});

orderSchema.index({ statusStep: 1, createdAt: -1 });
orderSchema.index({ userEmail: 1, createdAt: -1 });

module.exports = model("Order", orderSchema);
