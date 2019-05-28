/******************************************************************************
 *  @Purpose        : To create user controller to handle the incoming data. 
 *  @file           : UserControllers.js        
 *  @author         : Dipali Kelkar
 *  @version        : 1.33.1-1554971066
 *  @since          : 17/05/2019
 ******************************************************************************/
const userService = require('../services/UserServices.js');
var jwt = require('jsonwebtoken')
var gettoken = require('../middleware/token')
var sendmail = require('../middleware/sendMail')


exports.registration = (req, res) => {
    console.log("dfbhdbfkjdbfdkjsbfkjdb");

    console.log("controller: 15", req.body);
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
}
module.exports.Login = (req, res) => {
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
                    success:data,
                    "result":data
                });
            }
        })
    }


}
module.exports.forgotPassword = (req, res) => {
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
            if (err) {
                return res.status(500).send({
                    message: err
                });
            } else {
                console.log(req.body);
                response.success = true;
                response.result = data;
                console.log("data in controller==>", data[0]._id);
                const payload = {
                    user_id: data[0]._id
                }
                const obj = gettoken.GenerateToken(payload);
                const url = `http://localhost:3000/#!/resetPassword/${obj.token}`;
                console.log("url in controller", url);
                console.log("email...............", req.body.email);

                sendmail.sendMailFunction(url, req.body.email);
                res.status(200).send(url);
            }
        });
    }
};
module.exports.resetPassword = (req, res) => {
    req.checkBody('password', 'password is not valid')
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response)
    }
    else {
        console.log("user control" + req)
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

}
module.exports.getUser = (req, res) => {
    try {
        var responseResult = {};
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