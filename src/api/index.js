const express = require('express');
const router = express.Router();
const DB = require('../database/index')

/*
router.get('/getUser', (req, res) => {
    res.json(DB.findOne('user', {name: req.query.name}))
})
*/

module.exports = (app) => app.use('/api', router); 