const express = require('express');
const {getAllUser} = require('../controllers/UserController');
const {verifyToken} = require('../controllers/MiddlewareController')
const UserRoute = express.Router();

UserRoute.get('/getall',verifyToken,getAllUser)

module.exports = UserRoute;