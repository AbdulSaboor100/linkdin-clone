import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import MainHome from '../screens/non-auth-home/home';
import AuthHome from '../screens/auth-home/auth-home';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <MainHome />
                    </Route>
                    <Route path="/home">
                        <AuthHome />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
