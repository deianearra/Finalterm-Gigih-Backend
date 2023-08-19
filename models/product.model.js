const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productID: { type: String, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  videoId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports =  Product;