const express = require('express');
const { getProductById } =  require('../controllers/product.controller.js');

const router = express.Router();

router.get('/:id/', getProductById);

module.exports = router;