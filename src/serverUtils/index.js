const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');

const timeSession = 1000 * 1000; // milisegundos

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
            httpOnly: true
        }
    )
    },
    cloneJSON: (json) => {
        return JSON.parse(JSON.stringify(json));
    }
}