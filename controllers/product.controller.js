const Product = require("../models/product.model.js");

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne(
      { videoId: req.params.id },
      { product: 1 }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getProductById };