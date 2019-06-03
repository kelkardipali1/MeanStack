/******************************************************************************
 *  @Purpose        : For provinding services
 *  @file           : UserServices.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
/* 
** for fetching model path
*/
const userModel = require('../app/models/UserModel.js')
/* 
** registation of new email
*/
/** 
* @param {*} data
* @param {*} callback
*/
module.exports.registration = (data, callback) => {
    userModel.registration(data, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            console.log("In service", result);
            callback(null, result);
        }
    })
}
/** 
**loging user
* @param {*} data
* @param {*} callback
*/
exports.Login = (data, callback) => {
    try {
        userModel.Login(data, (err, result) => {

            if (err) {
                console.log("service error");
                callback(err);
            }
            else {
                console.log("In service", result);
                callback(null, result);
            }
        })
    } catch (error) {
        callback.send(error);
    }
}
/* 
** forgot password method
*/
exports.forgotPassword = (data, callback) => {
    try {
        userModel.forgotPassword(data, (err, result) => {

            if (err) {
                console.log("service error");
                callback(err);
            }
            else {
                console.log("In service", result);
                callback(null, result);
            }
        })
    } catch (error) {
        callback.send(error);
    }
}
/* 
** reset new password method
*/
exports.resetPassword = (data, callback) => {
    try {
        userModel.resetPassword(data, (err, result) => {

            if (err) {
                console.log("service error");
                callback(err);
            }
            else {
                console.log("In service", result);
                callback(null, result);
            }
        })
    } catch (error) {
        callback.send(error);
    }
}
/* 
** getting user email
*/
exports.getUserEmail = (data, callback) => {
    try {
        userModel.findUserEmail(data, (err, result) => {
            if (err) {
                console.log("service error");
                callback(err);
            } else {
                console.log("In service", result);
                callback(null, result);
            }
        })
    } catch (error) {
        callback.send(error);
    }
}
/* 
** getting all users
*/
exports.getAllUsers = (data, callback) => {
    try {
        userModel.getAllUsers(data, (err, result) => {
            if (err) {
                callback(err);
            }
            else {
                callback(null, result);
            }
        })
    }
    catch (err) {
        callback(err)
    }

}