const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    orderId: { type: String, required: true, unique: true },
    recipient: { type: String, default: "Mijoz" },
    phone: { type: String, default: "" },
    address: { type: String, default: "" },
    region: { type: String, default: "" },
    district: { type: String, default: "" },
    items: { type: Array, default: [] },
    total: { type: Number, default: 0 },
    statusStep: { type: Number, default: 1 },
    status: { type: String, default: "Qabul qilindi 🟡" },
    date: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);
