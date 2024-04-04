const express = require('express');
const mongoose = require('mongoose');
const PostRouter = require('./Routes/postRoutes')
const session = require('express-session')
const store = new session.MemoryStore();

const UserRouter = require('./Routes/UsersRoute');
const app = express();
const Port = 3000;
app.use(express.json());
app.use(session({
    secret:"sss",
    cookie:{
      maxAge:1000*60*60*24,
      httpOnly:true
    },
    resave:false,
    saveUninitialized:false,
    store
}));


const connection = async() =>{
    try {
        await mongoose.connect("mongodb+srv://zelrharbi:zakariawidad2015@blogcluster.nmdovnh.mongodb.net/?retryWrites=true&w=majority");
    } catch (error) {
        console.log(`message: error`, error);
    }
}
connection();
app.use(UserRouter);
app.use(PostRouter);








app.listen(Port, () => {
    console.log('Server started on port 3000');
});