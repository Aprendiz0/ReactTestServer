import path from "path";
import React from "react";
import express from "express";
import Layout from "./components/Layout";
import { renderToString } from "react-dom/server";
import { MainTemplate } from './html/template'

const app = express();
const fs = require('fs');

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../public")));

app.get('*', (req, res) => {

    const reactDom = renderToString(<Layout />);

    res.writeHead(200, { "Content-Type": "text/html" });
    //res.end(HtmlTemplate(reactDom, helmetData));
    
    let HTMLheader = fs.readFileSync('./src/html/header.html', 'utf8')
    let HTMLscripts = fs.readFileSync('./src/html/footer.html', 'utf8')
    let context = {
        head: HTMLheader,
        body: {
            reactDom: reactDom
        },
        scripts: HTMLscripts
    };
    res.end(MainTemplate(context));
})

app.listen(4000);
