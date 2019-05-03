const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');
const DB = require('../database/index')

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.hashCodeSecret, {
        expiresIn: 50000, // segundos
    })
}

router.post('/authenticate', (req, res) => {
    let user = DB.findOne('user', { user: req.body.userName, pass: req.body.userPassword });

    if (!user)
        return res.status(400).json({ error: 'auth/not-authenticated', message: 'User not found' });

    user.token = generateToken({ user: user.user });
    return res.json(user);
})

module.exports = (app) => app.use('/auth', router); 