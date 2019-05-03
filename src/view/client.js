import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Store } from './store';
import Layout from "./components/Layout";

const jsx = (
    <Provider store={Store}>
        <Layout />
    </Provider>
);

const app = document.getElementById("app");
ReactDOM.hydrate(jsx, app);
