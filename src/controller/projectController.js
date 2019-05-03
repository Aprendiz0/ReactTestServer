import React from "react";
import { Provider } from 'react-redux';
import { renderToString } from "react-dom/server";
import express from "express";
import fs from 'fs'
import { Store } from '../view/store';
import Layout from "../view/components/Layout";
import { MainTemplate } from '../view/templates/template';

const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const HTMLheader = fs.readFileSync('./src/view/templates/header.html', 'utf8')
const HTMLscripts = fs.readFileSync('./src/view/templates/footer.html', 'utf8')

router.use(authMiddleware)

router.get('*', (req, res) => {

    const reactDom = renderToString((
        <Provider store={Store}>
            <Layout />
        </Provider>
    ));

    //const reactDom = renderToString(<Layout />);

    res.writeHead(200, { "Content-Type": "text/html" });
    //res.end(HtmlTemplate(reactDom, helmetData));

    let context = {
        head: HTMLheader,
        body: {
            reactDom: reactDom
        },
        scripts: HTMLscripts
    };
    res.end(MainTemplate(context));
})

module.exports = (app) => app.use('/front', router); 