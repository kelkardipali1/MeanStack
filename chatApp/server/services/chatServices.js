/******************************************************************************
 *  @Purpose        : For provinding services
 *  @file           : chatServices.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
/* 
** fetching model path
*/
const chatModel = require('../app/models/chatModel')
/* 
** providing add message service
*/
exports.addMessage = (req, callback) => {
    console.log('request in chat services backend',req)
    try {
        chatModel.addMessage(req, (err, result) => {
            if (err) {

                return callback(err);
            } else {

                return callback(null, result);
            }
        })
    }
    catch (err) {
        callback(err);
    }
}
/* 
** For getting all user's chat
*/
exports.getAllUserChats = (req, callback) => {
    console.log("Entered control")
    console.log("req in service getall user chats",req.body)
    try {
        chatModel.getAllUserChats(req, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })
    } catch (err) {
        callback(err);
    }
}