const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
})

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog