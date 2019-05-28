const jwt = require('jsonwebtoken');
module.exports = {
/**
 * importing token 
 * @param {*} payload 
 */
    GenerateToken(payload) {
        const token = jwt.sign({ payload }, 'secret', { expiresIn: '2h'}) 
        const obj = {
            success: true,
            message: 'Token Generated Successfully!!',
            token: token
        }
        return obj
    }
}