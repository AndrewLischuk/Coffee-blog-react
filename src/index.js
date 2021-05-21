import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
import {eventsLikeReducer} from '../src/Redux/eventsLikeReducer'

const store = createStore (
    eventsLikeReducer,
)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>         
    </Provider>    
,document.getElementById('root'));

