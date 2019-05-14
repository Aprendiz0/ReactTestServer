const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');

const timeSession = 1000;

const generateToken = (params = {}) => {
    return 'Bearer ' + jwt.sign(params, authConfig.hashCodeSecret, {
        expiresIn: timeSession, // segundos
    })
};

module.exports = {
    timeSession,
    generateToken,
    renewToken: (res, user) => {
        res.cookie('authorization', generateToken({ userId: user.userId }),
        {
            maxAge: timeSession,
            expires: Date.now() + timeSession,
            httpOnly: true
        }
    )
    }
}