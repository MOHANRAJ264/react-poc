import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom'
import {Provider } from 'react-redux'
import {createStore ,applyMiddleware,compose,combineReducers} from 'redux';
import homeReducer from './Store/reducers/home'
import orderReducer from './Store/reducers/orders'
import cartReducer from './Store/reducers/cart'
import authReducer from './Store/reducers/auth'
import thunk from 'redux-thunk'

const composeEnhancers = process.env.NODE_ENV=== 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : null|| compose
const rootReducer = combineReducers({
    home:homeReducer,
    auth:authReducer,
    order:orderReducer,
    cart:cartReducer
})
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

const app=(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>  
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();


