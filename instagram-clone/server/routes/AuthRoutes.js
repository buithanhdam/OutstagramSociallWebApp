const express = require('express');
const AuthRoute = express.Router();
const {register,login} = require('../controllers/AuthController');


AuthRoute.post('/register',register);
AuthRoute.post('/login',login);

module.exports = AuthRoute;