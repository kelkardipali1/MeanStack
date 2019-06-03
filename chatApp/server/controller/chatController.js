/******************************************************************************
 *  @Purpose        : To create chat controller to handle the incoming data. 
 *  @file           : chatController.js        
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 17/05/2019
 ******************************************************************************/
const chatServices = require('../services/chatServices');
/**
 * 
 * @param {*} req 
 * @param {*} res
 */
/* 
** adding messages
*/
module.exports.addMessage = (req, callback) => {
    try {
        var responseResult = {}
        console.log('in controller',req)
        chatServices.addMessage(req, (err, data) => {
            if (err) {
                data.responseResult = false;
                data.responseResult = err;
                //responseResult.success = false;
               // responseResult.error = err;
                callback(err);
                /*console.log("error in controller")
                callback(err);*/
            } else {
                console.log("controller is working fine");
                callback(null,responseResult)
            }
        })
    } catch (err) {
        callback("err ")
    }
}/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
/* 
** getting all users chats
*/
module.exports.getAllUserChats = (req, res) => {
    try {
        var responseResult = {};
    
        chatServices.getAllUserChats((err, result) => {
            if (err) {
                result.responseResult = false;
                result.responseResult = err;
                res.status(500).send(responseResult)
            }
            else {
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })
    }
    catch (err) {
        req.send(err)
    }
}
