import React from 'react';
import MainMenu from './Shared/MainMenu';
import Home from './Home';
import Footer from './Shared/Footer';
import Login from "./Login";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <MainMenu/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
