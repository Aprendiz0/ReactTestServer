const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');
const DB = require('../database/index')
const authMiddleware = require('../middlewares/auth');

function generateToken(params = {}) {
    return 'Bearer ' + jwt.sign(params, authConfig.hashCodeSecret, {
        expiresIn: 1000, // segundos
    })
}

router.post('/login', (req, res) => {
    let user = DB.findOne('user', { userId: req.body.userName, password: req.body.userPassword });

    if (!user)
        return res.status(401).json({ error: 'auth/not-authenticated', message: 'User not found' });

    user.token = generateToken({ userId: user.userId });
    user.password = undefined;
    return res.json(user);
})

router.post('/authenticate', authMiddleware, (req, res) => {
    let user = DB.findOne('user', { userId: req.userId });

    if (!user)
        return res.status(401).json({ error: 'auth/not-authenticated', message: 'User not found' });

    user.token = generateToken({ userId: user.userId });
    user.password = undefined;
    return res.json(user);
})

module.exports = (app) => app.use('/auth', router); 