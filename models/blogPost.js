const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports =  BlogPost;