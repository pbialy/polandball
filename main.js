import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import allReducers from '~/js/reducers/index.js' //can be without index?
import { Provider } from 'react-redux';

import * as $ from 'jquery';
window.$ = $;

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('app')
);
