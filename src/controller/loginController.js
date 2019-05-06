import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import fs from 'fs'
import { MainTemplate } from '../view/templates/template';
import Login from "../view/components/Login";

const router = express.Router();

const HTMLheader = fs.readFileSync('./src/view/templates/header.html', 'utf8')
const HTMLscripts = fs.readFileSync('./src/view/templates/footer.html', 'utf8')

router.get('*', (req, res) => {

    const reactDom = renderToString((
        <Login />
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

module.exports = (app) => app.use('/login', router); 