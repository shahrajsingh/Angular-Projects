const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  Poducts: {
    type: [
      {
        ProductId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        Price: Number,
      },
    ],
  },
  Date: { type: Date, required: true },
  status: { type: String },
  Total: { type: String },
});
module.exports = mongoose.model("Orders", OrderSchema);
