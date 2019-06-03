/******************************************************************************
 *  @Purpose        : To create user controller to handle the incoming data. 
 *  @file           : UserControllers.js        
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 17/05/2019
 ******************************************************************************/
const userService = require('../services/UserServices.js');
/* 
** For providing authentication using token
*/
var jwt = require('jsonwebtoken')
var gettoken = require('../middleware/token')
/* 
** Sending mail
*/
var sendmail = require('../middleware/sendMail')
/*
** Controller method for registration
*/
/**
 * 
 * @param {*} req 
 * @param {*} res
 */

exports.registration = (req, res,next) => {
    try {
        req.checkBody("email", "email is not valid").isEmail();
        req.checkBody("password", "password is not valid").isLength({ min: 3 });
        userService.registration(req.body, (err, result) => {
            var responseResult = {};
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult);
            } else {
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult)
            }
        })
    } catch (err) {
        next(err);
    }

}
/*
** Controller method for login
*/
/**
 * 
 * @param {*} req 
 * @param {*} res
 */

module.exports.Login = (req, res) => {
    try {
        console.log('req ', req.body)
        req.checkBody("email", "email is not valid").isEmail();
        req.checkBody("password", "password is not valid").isLength({ min: 3 });
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.success = false;
            response.error = errors
            return res.status(422).send(response)
        }
        else {
            userService.Login(req.body, (err, data) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({ message: err })
                } else {
                    var token = jwt.sign({ email: req.body.email, id: "data[0]._id" }, 'secret', { expiresIn: 90000000 });
                    return res.status(200).send({
                        message: data,
                        "token": token
                    });
                }
            })
        }
    } catch (err) {
        res.send(err);
    }


}
/*
** Controller method for forgot password
*/
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.forgotPassword = (req, res) => {
    try {
        require('dotenv').config()
        console.log('req in controller', req.body);
        req.checkBody("email", "email is not valid").isEmail();
        var secret = "dipali";
        var errors = req.validationErrors();
        console.log("controller", errors)
        var response = {};
        if (errors) {
            response.success = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            userService.forgotPassword(req.body, (err, data) => {
                var response = {};
               /* if (err) {
                    return res.status(500).send({
                        message: err
                    });
                } */if(!err) {
                    console.log(req.body);
                    response.success = true;
                    response.result = data;
                    console.log("data in controller==>", data[0]._id);
                    const payload = {
                        user_id: data[0]._id
                    }
                    /* calling generating token method*/
                    const obj = gettoken.GenerateToken(payload);
                    const url = `http://localhost:3000/#!/resetPassword/${obj.token}`;
                    console.log("url in controller", url);
                    console.log("email...............", req.body.email);
                    /* 
                    ** giving input to sendmailfunation 
                    */
                    sendmail.sendMailFunction(url, req.body.email);
                    res.status(200).send(url);
                }
            });
        }
    } catch (err) {
        res.send(err);
    }
};
/*
** Controller method for reset password
*/
/**
 * 
 * @param {*} req 
 * @param {*} res
 */
module.exports.resetPassword = (req, res) => {
    try {
        req.checkBody('password', 'password is not valid')
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.success = false;
            response.error = errors;
            return res.status(422).send(response)
        }
        else {
            console.log("user control" , req.body)
            userService.resetPassword(req, (err, data) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({ message: err })
                }
                else {
                    console.log("3.lastone controller", data)
                    return res.status(200).send({ message: data })
                }
            })
        }
    } catch (err) {
        res.send(err);
    }

}
/*
** Controller method for getting one particular user using email
*/
/**
 * 
 * @param {*} req 
 * @param {*} res
 */
module.exports.getUser = (req, res) => {
    try {
        var responseResult = {};
        req.checkBody("email", "email is not valid").isEmail();
        userService.getUserEmail(req.body, (err, result) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult)
            }
            else {
                responseResult.success = true;
                responseResult.result = result;
                const payload = {
                    user_id: responseResult.result._id
                }
                console.log(payload);

                const obj = gettoken.GenerateToken(payload);
                const url = `http://localhost:3000/#!/resetPassword/${obj.token}`;


                sendmail.sendMailFunction(url, req.body.email);
                res.status(200).send(url);
            }
        })
    } catch (err) {
        res.send(err);
    }
}
/*
** Controller method for getting all users
*/
/**
 * 
 * @param {*} req 
 * @param {*} res
 */
module.exports.getAllUsers = (req, res) => {
    try {
        var responseResult = {}
        userService.getAllUsers((err, result) => {
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
    } catch (err) {
        res.send(err);
    }
}