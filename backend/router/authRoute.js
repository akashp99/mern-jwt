const express = require('express');
const authRouter = express.Router();
const { signUp, signIn, getUser, logout, forgotPassword, resetPassword } = require('../controller/authController');
const jwtAuth = require('../middleware/jwtAuth');


authRouter.post('/signup', signUp)
authRouter.post('/login', signIn)
authRouter.get('/user',jwtAuth,  getUser)
authRouter.get('/logout',jwtAuth,  logout)
authRouter.post("/forgotpassword", forgotPassword);
authRouter.post("/resetpassword/:token", resetPassword);

module.exports = authRouter;