const mongoose = require('mongoose');
const Users = require('../Models/Usersschema');
const bcrypt = require('bcrypt');


// Register
const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // check if the user already exists
        let user = await Users.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "You are already registered" });
        }

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide all necessary information" });
        }

        // hashing the password 
        const hashedPassword = await bcrypt.hash(password, 10);

        // creating new user with hashed password
        const newUser = await Users.create({
            name,
            email,
            password: hashedPassword, // store the hashed password
        });

        return res.status(201).json({
            id: newUser._id, // use newUser here, not user
            avatar: newUser.avatar,
            name: newUser.name,
            email: newUser.email,
            verified: newUser.verified,
            admin: newUser.admin,
            token: null,
            message: "user created succesfully"

        });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({ message: "Server error" });
    }
};
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