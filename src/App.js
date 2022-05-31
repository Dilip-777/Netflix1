import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Home ,Browse ,SignIn ,SignUp } from './pages/index'
import * as ROUTES from './constants/routes'
 import { IsUserRedirect ,ProtectRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";


export default function App () {
    const { user } = useAuthListener();
    console.log(user);
    return (
        <Router>
            <IsUserRedirect 
            user={user}
            loggedInPath = {ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
            exact
            >
                <SignIn />
            </IsUserRedirect>
            <IsUserRedirect 
            user={user}
            loggedInPath = {ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
            exact
            >
               <SignUp />
            </IsUserRedirect>
            <ProtectRoute path={ROUTES.BROWSE} user={user}>
               <Browse />

            </ProtectRoute>
            <IsUserRedirect 
            user={user}
            loggedInPath = {ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact
            >
               <Home />
            </IsUserRedirect>
        </Router>
    )
}
