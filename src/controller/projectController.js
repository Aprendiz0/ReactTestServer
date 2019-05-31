import express from "express";

const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const DB = require('../database/index');

router.use(authMiddleware);

router.post('/getComodos', (req, res) => {
    let configByUser = DB.findOne('configByUser', { userId: req.userId });
    if (!configByUser || !configByUser.comodos) res.status(428).send({ error: 'file/not-found', message: 'File not found' });
    else res.json(configByUser.comodos);
})

router.post('/saveComodo', (req, res) => {
    let positionKey = req.body.positionKey;
    let comodo = req.body.comodo;

    let configByUser = DB.findOne('configByUser', { userId: req.userId });

    configByUser.comodos[positionKey] = comodo;

    let is_saved = DB.saveOne('configByUser', { userId: req.userId }, configByUser);

    res.json({ ok_code: is_saved })
})

module.exports = (app) => app.use('/project', router); 