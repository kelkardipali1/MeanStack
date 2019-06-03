/******************************************************************************
 *  @Purpose        : For verification of token.
 *  @file           : tokenVerify.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
/*
** for securely transmitting information between parties as a JSON object
*/
/**
 * @description:JWT is an open standard (RFC 7519) that defines a 
 * compact and self-contained way for securely transmitting 
 * information between parties as a JSON object
 */

var jwt = require('jsonwebtoken');
//var secret = "secret";
require('dotenv').config()
     exports.checkToken=((req, res, next) => {
    console.log("In authentication");
    var token = req.headers["token"];
    console.log("token provided is:",token);
    var response = {
        'message': "Invalid user data"

    };
       jwt.verify(token, 'secret', function (err, decodedData) {
           try{
        if (err) {
            console.log(err)
            return res.status(401).send(response);
        }
        else {
            req.decoded = decodedData;
            //console.log("decode data",decodedData);
            next();
        }
    }
    catch(err){
        console.log("Error in Catch",err)
    }
    });
})