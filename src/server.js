import path from "path";
import React from "react";
import express from "express";
import Layout from "./components/Layout";
import { renderToString } from "react-dom/server";
import { MainTemplate } from './templates/template'

const app = express();
const fs = require('fs');
const HTMLheader = fs.readFileSync('./src/templates/header.html', 'utf8')
const HTMLscripts = fs.readFileSync('./src/templates/footer.html', 'utf8')

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../public")));

import { Provider } from 'react-redux';
import { Store } from './store';
app.get('*', (req, res) => {

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

app.listen(4000);

const DB = require('./database/index');

DB.save({
    teste: 'kappa'
}).then((testt)=>{
    console.log(testt)
});