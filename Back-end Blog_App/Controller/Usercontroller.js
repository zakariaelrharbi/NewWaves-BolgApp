const mongoose = require('mongoose');
const Users = require('../Models/Usersschema');
const bcrypt = require('bcrypt');
// Register
const Register = async(req, res) => {
    try { 
        const {name, email, password} = req.body;
        // check if the user already exist
        let user = await Users.findOne({email});
        if (user) {
            return res.status(400).json({message: "You already Registred"})
        }

        if(!name || !email || !password){
            return res.status(400).json('message:', error);
        }
        // hashing the password 
        const hashedpassword = await bcrypt.hash(password, 10);
        // creating new user
        const newUser = await Users.create({
            name,
            email,
            password: hashedpassword,
        });
        return res.status(201).json(
            {
                _id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                admin: user.admin,
                token: null
            })
    } catch (error) {
        console.log(`message:`, error);
    }
}
// login
const Login = async(req, res) => {
    try { 
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json('message:', error);
        }
        const user = await Users.find({email:email})
        if(!user){
            return res.status(404).json("User")
        }
        const Comparedpassword = await bcrypt.compare(password, user[0].password);
        if(!Comparedpassword){
            return res.status(404).json("wrong password")
        }
        req.session.user = user[0]
        req.session.authenticated = true
        res.status(200).json("login successfuly")
        
    } catch (error) {
        console.log(`message:`, error);
    }
}

module.exports = {Register, Login}