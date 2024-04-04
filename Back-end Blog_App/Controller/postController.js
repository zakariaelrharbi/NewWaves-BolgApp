const Post = require('../Models/postSchema')
const mongoose = require('mongoose')

const addPost=async(req,res)=>{
    const {title,description,author,content,image}=req.body;
    if(!req.body || !title || !description || !author || !content ||!image ){
        res.status(400).json("All the fields are required");
    }
    try{
        const newPost = await new Post({
            title:title,
            description:description,
            author:author,
            content:content,
            image:image
        }).save();

    }catch(err){
         console.log(err);
    }
}

const FetchPosts= async(req,res)=>{
    try{
        const AllPosts = await Post.find({});
        res.json(AllPosts);
    }catch(err){
        console.log(err);
    }
}

module.exports={addPost , FetchPosts}
