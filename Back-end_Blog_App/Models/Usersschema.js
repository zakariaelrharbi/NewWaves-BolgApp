const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Userschema = new mongoose.Schema({
    avatar: { type: String }, 
    name: { type: String, required: true, min: 5, max: 15 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 6, max: 20 },
    verified: { type: Boolean, default: false },
    verification: { type: String, required: false },
    admin: { type: Boolean, default: false },
}, { timestamps: true });

Userschema.methods.comparePassword = function(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
}

const Users = mongoose.model('Users', Userschema);
module.exports = Users;
