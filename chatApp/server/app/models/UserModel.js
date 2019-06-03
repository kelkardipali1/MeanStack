/******************************************************************************
 *  @Purpose        : To create a user schema and store data into database.
 *  @file           : UserModel.js        
 *  @author         : Kelkar Dipali
 *  @version        : 1.33.1-1554971066
 *  @since          : 17/05/2019
 ******************************************************************************/

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
let saltRounds = 10;
/**
 * Creating user schema using mongoose
 **/
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        minimum: 3,
        require: [true, "firstname require"]
    },
    lastName: {
        type: String,
        minimum: 3,
        require: [true, "lastname require"]
    },
    email: {
        type: String,
        pattern: "^.+\@.+$",
        require: [true, "email require"]
    },
    password: {
        type: String,
        require: [true, "password require"]
    }
    // title:String,
    // content:String,
}, {
        timestamps: true
    });
var user = mongoose.model('User', UserSchema);
function userModel() { }
function hash(password) {
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}
/**
 * Saving data into database using the usehttps://localhost/#!/registerchema
 **/
userModel.prototype.registration = (body, callback) => {
    //console.log("model",body.body);
    user.find({ "email": body.email }, (err, data) => {
        //console.log("data" + dataresetPassword);
        if (err) {
            console.log("Error in registration");
            callback(err);
        }
        else if (data.length > 0) {
            console.log("data" + data);

            console.log("Email already exists ");
            callback("User already Present...........");

        }
        else {
            const newUser = new user({
                "firstName": body.firstName,
                "lastName": body.lastName,
                "email": body.email,
                "password": hash(body.password)//((hash(body.password)))

            });
            newUser.save((err, result) => {
                if (err) {
                    console.log("Model not found");
                    callback(err);

                } else {
                    console.log("Register Sucessfully");
                    callback(null, result);
                }


            })
        }
    });
}
userModel.prototype.Login = (body, callback) => {
    //console.log("model ", body.password);
    user.findOne({ "email": body.email }, (err, result) => {

        console.log(result)
        if (err) {
            callback(err);
        }
        else if (result != null) {
            bcrypt.compare(body.password, result.password).then(function (res) {
                if (res) {
                    console.log("Login Succesfully");
                    callback(null, result);
                } else {
                    console.log("Incorrect password");
                    callback("Incorrect password");
                }
            });
        } else {
            console.log("invalid user");
            callback("invalid user");
        }
    });
}
userModel.prototype.forgotPassword = (body, callback) =>
    user.find({ 'email': body.email }, (err, data) => {
        if (err) {
            return callback(err)
        } else if (data) {
            console.log(data)
            return callback(null, data)
        } else
            console.log("invalid email and user");
    })
userModel.prototype.resetPassword = (req, callback) => {
    let newpassword = hash(req.body.password)
   // console.log("module block" , req)
    console.log(req.body.password)
    console.log(req.decoded.payload._id)
    user.updateOne({ '_id': req.decoded.payload._id }, { 'password': newpassword }, (err, data) => {
        if (err) {
            console.log("error")
            return callback(err)
        } else {
            return callback(null, data)
        }
    })

}
userModel.prototype.findUserEmail = (data, callback) => {
    user.findOne({ "email": data.email }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            if (result !== null && data.email == result.email) {
                callback(null, result);
            }
            else {
                callback("incorect mail")
            }
        }
    });
}
userModel.prototype.getAllUsers = (callback) => {
    user.find({}, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    });
}


module.exports = new userModel();