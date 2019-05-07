import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import fs from 'fs'
import Layout from "../view/components/Layout";
import { MainTemplate } from '../view/templates/template';

const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const HTMLheader = fs.readFileSync('./src/view/templates/header.html', 'utf8')
const HTMLscripts = fs.readFileSync('./src/view/templates/footer.html', 'utf8')

router.get('*', (req, res) => {

    //const reactDom = renderToString(<Layout />);

    res.writeHead(200, { "Content-Type": "text/html" });
    //reactDom
    let context = {
        head: HTMLheader,
        body: {
            reactDom: ''
        },
        scripts: HTMLscripts
    };
    res.end(MainTemplate(context));
})

module.exports = (app) => app.use('/front', router); 