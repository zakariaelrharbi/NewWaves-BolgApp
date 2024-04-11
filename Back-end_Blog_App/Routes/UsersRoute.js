const express = require('express');
const UserRouter = express.Router();
const {Register, Login} = require('../Controller/Usercontroller');

UserRouter.post('/Register', Register);
UserRouter.post('/Login', Login);
module.exports = UserRouter;
