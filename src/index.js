import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/app"

import store from './store'

import {
    BrowserRouter
} from 'react-router-dom'

import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
, document.getElementById("root"));