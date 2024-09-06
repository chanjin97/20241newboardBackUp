const { default: mongoose } = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    maxLength: 30,
  },
  description: String, // 설명
  price: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array,
    default: [], // 배열
  },
  sold: {
    type: Number,
    default: 0,
  },
  continents: {
    // 지역
    type: Number,
    default: 1,
  },
  views: {
    // 얼마나 봤느냐
    type: Number,
    default: 0,
  },
});
const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
