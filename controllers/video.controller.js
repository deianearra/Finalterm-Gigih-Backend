const Video = require("../models/video.model.js");

const getVideos = async (req, res) => {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getVideoById = async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      res.json(video);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  const saveVideo = async (req, res) => {
    const video = new Video(req.body);
    try {
      const insertedVideo = await video.save();
      res.status(201).json(insertedVideo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const getProduct = async (req, res) => {
    try {
      const product = await Product.findOne(
        { videoID: req.params.id },
        { product: 1 }
      );
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  module.exports = { getVideos, getVideoById, saveVideo, getProduct };