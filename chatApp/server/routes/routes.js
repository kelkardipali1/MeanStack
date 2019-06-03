/******************************************************************************
 *  @Purpose        : For provinding paths to user ,which are attached to code that 
 *                    will be triggered when a user reaches the specific route..
 *  @file           : routes.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
/* 
** requiring express for helping you  to manage everything, from routes, to 
handling requests and views.
*/
const express = require('express')
const controller = require('../controller/UserController.js');
const routes = express.Router();
const verify = require('../authentication/tokenVerify');
const chatControl = require('../controller/chatController')

routes.post('/register', controller.registration);
routes.post('/login', controller.Login);
routes.post('/resetPassword/:token',verify.checkToken, controller.resetPassword);
const authentication = require('./authentication')

routes.post('/forgotPassword', controller.forgotPassword);

routes.use('/authentication', authentication)
routes.post('/verifyUser', controller.getUser);
routes.get('/getAllUsers', controller.getAllUsers);

routes.post('/addMessage', chatControl.addMessage);
routes.get('/getAllChats', chatControl.getAllUserChats);

module.exports = routes;