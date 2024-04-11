const express =require("express");
const PostRouter =express.Router();
const {addPost ,FetchPosts }= require('../Controller/postController');


PostRouter.post('/add',addPost);
PostRouter.get('/posts',FetchPosts);

module.exports=PostRouter;