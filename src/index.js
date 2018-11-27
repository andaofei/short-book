import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; // pwa 离线应用
import {Provider} from 'react-redux'
import store from './redux'
const Apps = (
    <Provider store={store}>
        <App></App>
    </Provider>
)
ReactDOM.render(Apps, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
