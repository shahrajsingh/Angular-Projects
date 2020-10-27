const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  FirstName: { type: String, required: true },
  Password: { type: String, required: true },
  DoB: { type: String, required: true },
  LastName: { type: String, required: true },
  Gender: { type: String, required: true },
  Address: [{ type: String, required: true }],
  Image: { type: String },
  Email: { type: String, required: true, unique: true },
  Wishlisted: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  Cart: {
    type: [
      {
        ProductId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        qty: Number,
      },
    ],
  },
  Orders: {
    type: [
      { OrderId: { type: mongoose.Schema.Types.ObjectId, ref: "Orders" } },
    ],
  },
});
userSchema.plugin(validator);

module.exports = mongoose.model("User", userSchema);
