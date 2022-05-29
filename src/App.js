import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Home ,Browse ,SignIn ,SignUp } from './pages/index'
import * as ROUTES from './constants/routes'
// import { IsUserRedirect } from "./helpers/routes";


export default function App () {
    // const user = {}
    return (
        <Router>
            <Route exact path="/signin">
               <SignIn />
            </Route>
            <Route exact path="/signup">
               <SignUp />
            </Route>
            <Route exact path="/browse">
               <Browse />
            </Route>
            <Route exact path={ROUTES.HOME}>
                <Home />
            </Route>
        </Router>
    )
}
