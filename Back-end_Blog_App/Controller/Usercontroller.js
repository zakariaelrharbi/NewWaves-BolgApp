const mongoose = require('mongoose');
const Users = require('../Models/Usersschema');
const bcrypt = require('bcrypt');

// Register
const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Validate password complexity if needed

        // Check if the user already exists
        let user = await Users.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "You are already registered" });
        }

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide all necessary information" });
        }

        // Hash the password 
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password
        const newUser = await Users.create({
            name,
            email,
            password: hashedPassword, // Store the hashed password
        });

        return res.status(201).json({
            id: newUser._id,
            avatar: newUser.avatar,
            name: newUser.name,
            email: newUser.email,
            verified: newUser.verified,
            admin: newUser.admin,
            token: null,
            message: "User created successfully"
        });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Login
const Login = async (req, res) => {
    try { 
        const { email, password } = req.body;
        let user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email not found" });
        }
        const isPasswordCorrect = await user.comparePassword(password);
        if (isPasswordCorrect) {
            return res.status(200).json({
                id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                admin: user.admin,
                token: null,
                message: "Login successful"
            });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { Register, Login };
