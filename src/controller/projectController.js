import express from "express";

const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const DB = require('../database/index');

router.use(authMiddleware);

router.post('/getComodos', (req, res) => {
    let comodos = DB.find('comodos', { userId: req.userId });
    if(!comodos) comodos = [];
    res.json(comodos);
})

router.post('/saveComodo', (req, res) => {
    let comodo = req.body.comodo;

    let is_saved = DB.saveOne('comodos', { userId: req.userId, name: comodo.name }, comodo);

    if(is_saved) res.json({ ok_code: is_saved });
    else res.status(409).json({ error: 'DB/conflit', message: 'Error interno, verificar' })
})

module.exports = (app) => app.use('/project', router); 