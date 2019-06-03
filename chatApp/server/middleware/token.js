/******************************************************************************
 *  @Purpose        : For Generating token using jsonwebtoken.
 *  @file           : token.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
const jwt = require('jsonwebtoken');
module.exports = {
    /**
     * importing token 
     * @param {*} payload 
     * @param {*} token
     */

    GenerateToken(payload) {
        token = jwt.sign({ payload }, 'secret', { expiresIn: '2h' })
        const obj = {
            success: true,
            message: 'Token Generated Successfully!!',
            token: token
        }
        return obj
    }

}



