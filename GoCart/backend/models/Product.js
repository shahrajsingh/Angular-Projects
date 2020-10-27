const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  sellerName: { type: String, required: true },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: { type: String, required: true },
  image: { type: String, required: true },
  avgrating: { type: Number },
  totalRatings: { type: Number },
  stars: { type: Number },
  itemsLeft: { type: Number },
  maxOrder: { type: Number },
});
module.exports = mongoose.model("Product", productSchema);
