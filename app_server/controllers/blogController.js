// Import necessary modules and models
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

// Controller method to get all blog posts
const getAllBlogs = (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(200).json(blogs);
    });
};

// Controller method to create a new blog post
const createBlog = (req, res) => {
    const newBlog = new Blog(req.body);
    newBlog.save((err, blog) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(201).json(blog);
    });
};

// Controller method to update a blog post
const updateBlog = (req, res) => {
    const { id } = req.params;
    Blog.findByIdAndUpdate(id, req.body, { new: true }, (err, blog) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(200).json(blog);
    });
};

// Controller method to delete a blog post
const deleteBlog = (req, res) => {
    const { id } = req.params;
    Blog.findByIdAndRemove(id, (err, blog) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(200).json({ message: 'Blog post deleted successfully', deletedBlog: blog });
    });
};

// Export the controller methods
module.exports = {
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog
};
