const chatServices = require('../services/chatServices');
/**
 * 
 * @param {*} req 
 * @param {*} callback 
 */
module.exports.addMessage = (req, res) => {
    var responseResult = {}
    chatServices.addMessage(req.body, (err, data) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        } else {
            responseResult.success = true;
            responseResult.result = data;
            res.status(200).send(responseResult);
        }
    })
}/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getAllUserChats = (req, res) => {
    var responseResult = {};
    chatServices.getAllUserChats((err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        }
        else {
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}
