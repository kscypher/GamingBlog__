// Example model in blogModel.js
const mongoose = require('mongoose');

// Define a schema for your data
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: Date,
    tags: [String]
});

mongoose.model('Blog', blogSchema);
