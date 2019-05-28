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
        
    },
    recieverId: {
        type: String,
        
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
    console.log('chatData model-->', chatData.body);
    var newMsg = new chat({
        senderId: chatData.senderId,
        recieverId: chatData.recieverId,
        message: chatData.message
    })
    console.log(newMsg)
    newMsg.save((err,result) => {
        console.log("model result",result)
        if (err) {
            console.log("message saved error");
            return callback(err);
        } else {
            console.log("message saved successfully ");
            return callback(null, result);
        }
    });
}
/**
 **get all users chats
*/

chatModel.prototype.getAllUserChats = (callback) => {
    chat.find({}, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    });
}
module.exports = new chatModel();