/******************************************************************************
 *  @Purpose        : For authentication purpose.
 *  @file           : authentication.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
var express = require("express")
var router = express = express.Router();
var user = require("../controller/UserController")
var chatController=require('../controller/chatController')
var auth = require('./authentication')
module.exports = router