import mongoose from 'mongoose';
const schema = mongoose.Schema({
  topic: String,
  userName: String,
  handleName: String,
  time: String,
  image: String,
  title: String,
  tuit: String,
  liked: Boolean,
  disliked: Boolean,
  likes: Number,
  dislikes: Number,
  comments: Number,
  retuits: Number,
}, {collection: 'tuits'});
export default schema;