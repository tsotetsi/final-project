const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  type: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("product", ProductSchema);
