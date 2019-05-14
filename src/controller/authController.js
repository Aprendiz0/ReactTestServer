const express = require('express');
const router = express.Router();
const DB = require('../database/index')
const authMiddleware = require('../middlewares/auth');
const serverUtils = require('../serverUtils')

router.post('/login', (req, res) => {
    let user = DB.findOne('user', { userId: req.body.userName, password: req.body.userPassword });

    if (!user)
        return res.status(401).json({ error: 'auth/not-authenticated', message: 'User not found' });

    serverUtils.renewToken(res, { userId: user.userId });

    user.password = undefined;
    return res.json(user);
})

router.post('/logout', (req, res) => {

    res.cookie('authorization', {
        maxAge: 0,
        expires: Date.now(),
        httpOnly: true
    });

    return res.json({ Ok_Code: 'Ok' });
})

router.post('/authenticate', authMiddleware, (req, res) => {
    let user = DB.findOne('user', { userId: req.userId });

    if (!user)
        return res.status(401).json({ error: 'auth/not-authenticated', message: 'User not found' });

    serverUtils.renewToken(res, { userId: user.userId });

    user.password = undefined;
    return res.json(user);
})

module.exports = (app) => app.use('/auth', router); 