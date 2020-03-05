import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "./stores/helpers/create-store";
import {StoreProvider} from "./stores/helpers/store-provider";

const {
    rootStore
} = createStore();

//@ts-ignore
window.root = rootStore;

ReactDOM.render(
    <StoreProvider value={rootStore}>
        <App />
    </StoreProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
