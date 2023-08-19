const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const dotenv = require ('dotenv');
const videoRoute = require('./routes/video.route');
const commentRoute = require('./routes/comment.route');
const productRoute = require('./routes/product.route');
dotenv.config ();
const app = express ();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://deianearra:admin@cluster0.hyd59en.mongodb.net/finalterm-gigih?retryWrites=true&w=majority';

app.use (express.json ());
app.use (cors ());
app.use('/videos', videoRoute);
app.use('/comments', commentRoute);
app.use('/products', productRoute);


mongoose
  .connect (MONGODB_URI)
  .then (() => {
    console.log ('Connected to MongoDB');
  })
  .catch (err => {
    console.error ('Error connecting to MongoDB:', err);
  });

app.listen (PORT, () => {
  console.log (`Server is running on http://localhost:${PORT}`);
});
