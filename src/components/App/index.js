import React from "react"
import { Router, Route } from "react-router-dom"
import { connect } from "react-redux"

import "../../scss/normalize.css"
import "./index.scss"

import history from '../../history'
import SignIn from '../signIn'
import SignUp from '../signUp'
import MainPage from '../mainPage'

const App = () => {
    return(<div className="App__container">
        <Router history={history}>
            <Route path="/" exact component={MainPage} />
            <Route path="/auth/SignIn" exact component={SignIn} />
            <Route path="/auth/SignUp" exact component={SignUp} />
        </Router>
    </div>)
}

export default App