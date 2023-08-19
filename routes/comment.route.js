const express = require('express');
const {
  getComment,
  saveComment
} = require('../controllers/comment.controller.js');

const router = express.Router();

router.get('/:id/', getComment);
router.post('/:id/', saveComment);

module.exports = router;