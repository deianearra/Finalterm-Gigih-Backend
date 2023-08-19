const Comment = require ('../models/comment.model.js');

const getComment = async (req, res) => {
  try {
    const comments = await Comment.find ({videoId: req.params.id});
    res.status (200).json (comments);
  } catch (error) {
    res.status (404).json ({message: error.message});
  }
};

const saveComment = async (req, res) => {
  try {
    const newComment = new Comment ({
      videoId: req.params.id,
      username: req.body.username,
      comment: req.body.comment,
      // timestamp: new Date (),
    });

    await newComment.save ();

    res.status (201).json ({message: 'Comment success!'});
  } catch (error) {
    res.status (400).json ({message: error.message});
  }
};

module.exports = {getComment, saveComment};
