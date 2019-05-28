var express=require("express")
var router=express=express.Router();
var user=require("../controller/UserController")
var auth=require('../authentication/tokenVerify')

module.exports=router