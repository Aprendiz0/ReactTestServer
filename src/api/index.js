const express = require('express');
const router = express.Router();
const DB = require('../database/index');

const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.post('/comodos', (req, res) => {
    let configByUser = DB.findOne('configByUser', { userId: req.userId });
    if (!configByUser || !configByUser.comodos) res.status(428).send({ error: 'file/not-found', message: 'File not found' });
    else res.json(configByUser.comodos);
})


module.exports = (app) => app.use('/api', router); 