import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import {Home} from './views/home';
import {WelcomeScreenConnector} from './views/welcome-screen/welcome-screen-connector';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/welcome">
                <WelcomeScreenConnector/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
}
