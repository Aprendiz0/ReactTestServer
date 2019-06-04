import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Store } from './reduxStore';
import Layout from "./components/Layout";

const app = document.getElementById("app");
ReactDOM.hydrate(
    <Provider store={Store}>
        <Layout />
    </Provider>
    , app);
