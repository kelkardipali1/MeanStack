/******************************************************************************
 *  @Purpose        : Main starting point of chat application from where we run application
 *  @file           : server.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
/** 
 *@description : requiring express for helping you  to manage everything, from routes, to 
handling requests and views.
 */
const express = require('express');
/** 
*@description  :requiring bodyparser to extract the entire body portion of an incoming request 
stream and exposes it on req.body
*/
const bodyParser = require('body-parser');
/* configring port */
const dbConfig = require('./config/config');
/* 
** taking assertion library of mongodb and node.js
*/
const mongoose = require('mongoose');
const route = require('./routes/routes');
/** 
*@description :express-validator is a set of express.js middlewares that wraps 
validator.js validator and sanitizer functions
*/
const expressValidator = require('express-validator');
const chatControl = require('./controller/chatController');
const app = express();
require('dotenv').config()
require('http').createServer(app);
/** 
*@description : allows you to configure the web API's security. It has to do with allowing other 
domains to make requests against your web API
*/
const cors = require('cors');
app.use(expressValidator());
app.use(cors());
app.use(bodyParser.json());
/* 
** To use complex algorithm extended make true
*/
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('../Client'));
app.use('/', route);
const server = app.listen(process.env.PORT, () => {
    console.log("Server started at port :3000");
})
mongoose.Promise = global.Promise;
/*app.use(error(err,res={
    status:false,
    message:"bad error",
    catch(err){
        res.send(err);
    }


}))*/

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
/**
 @description :Socket.IO is a JavaScript library for realtime web applications
 */
const io = require('socket.io')(server);
//checking for events connection will be listening  for incoming sockets.
io.on('connection',function(socket){
    console.log("socket is connected");
    //started listening events  and socket.on wait for the event.whenever that event is triggered to callback
    //function is called
    socket.on('createMessage',function(message){
        //saving message to database
        console.log("message from server",message);
        chatControl.addMessage(message,(err,data)=>{
            if(err){
                console.log("Error on message");
                console.log(err);
            }else {
                console.log(message+ "in server");
                //io.emmit is used to emit the message to all sockets connected to it.
                io.emit('newMessageSingle',message);
            }
        })
        //socket emit disconnect event which will be called whenever client disconnect
        socket.on('disconnect',function(){
            console.log("socket disconnected..!!!")
        });
    });
});
module.exports=app;

