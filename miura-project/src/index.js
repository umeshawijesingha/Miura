import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import RouterConfigs from './routes/router-configs'

import { Provider } from 'react-redux';
import {store} from './redux/store';
//Styles
import './assets/css/index'
import 'animate.css';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RouterConfigs>
                <App/>
            </RouterConfigs>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
