const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    author:{type: String,},
    content:{type: String, required:true},
    image:{type:String, required:true}

}, {timestamps:true});

const Post = mongoose.model("Posts", PostSchema)
module.exports = Post
