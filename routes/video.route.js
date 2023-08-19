const express = require('express');
const {
  getVideos,
  getVideoById,
  saveVideo,
  getProduct,
} = require('../controllers/video.controller.js');

const router = express.Router();

router.get('/', getVideos);
router.get('/:id', getVideoById);
router.post('/', saveVideo);
router.get('/:id/product', getProduct);

module.exports = router;