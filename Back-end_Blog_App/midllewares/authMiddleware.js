const verify = require('jsonwebtoken');

const authGuard = async (req, res, next) =>{
    if(
    req.headers.authorization &&
    req.header.authorization.startsWith("bearer")){
       try {
            const token = req.headers.authorization.split(" ")[1]
            const {id} = 
       } catch (error) {
            const err = new Error("Not authorized, Token failed");

       }  
    }
}