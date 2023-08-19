const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  videoId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports =  Comment ;
