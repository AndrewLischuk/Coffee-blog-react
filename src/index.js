import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
import { rootReducer } from './Redux/rootReducer'
import thunk from 'redux-thunk'


const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore (
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>         
    </Provider>    
,document.getElementById('root'));

