/******************************************************************************
 *  @Purpose        : To create a chat schema and store data into database.
 *  @file           : chatModel.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 25/05/2019
 ******************************************************************************/
/**
 * create instance of Schema
 **/
const mongoose = require('mongoose');
/**
 * create schema
 **/
var chatSchema = new mongoose.Schema({
    senderId: {
        type: String,
        pattern: "^.+\@.+$",
        unique:true,
        require: [true, "firstname require"]

    },
    senderName:{
        type:String,
        minimum: 3
        
    },
    receiverId: {
        type: String,
        pattern: "^.+\@.+$",
        unique:true

    },
    receiverName:{
        type:String,
        minimum: 3


    },
    message: {
        type: String,

    }
}, {
        timestamps: true
    });
function chatModel() { }
var chat = mongoose.model('chat', chatSchema);
/**
 * store messages into the database
 */
chatModel.prototype.addMessage = (chatData, callback) => {
    try {
        console.log('chatData model-->', chatData.senderId);
        var newMsg = new chat({
            senderId: chatData.senderId,
            senderName:chatData.senderName,
            receiverId: chatData.receiverId,
            receiverName: chatData.receiverName,
            message: chatData.message
        })
        console.log(newMsg)
        newMsg.save((err, result) => {
            console.log("model result", result)
            if (err) {
                console.log("message saved error");
                return callback(err);
            } else {
                console.log("message saved successfully ");
                return callback(null, result);
            }
        });
    }
    catch (err) {
        callback(err);
    }
}
/*
 **get all users chats
*/

chatModel.prototype.getAllUserChats = (callback) => {
    try{
    chat.find({}, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    });
}
catch(err){
    callback(err);
}
}
module.exports = new chatModel();