import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class MainMenu extends React.Component{
    render() {
        return (
        <React.Fragment>
            <header id="header">
              <div className="inner">
              <Link to="/" className="logo">Handwerker</Link>
                <nav id="nav">
                  <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
                </nav>
              </div>
            </header>
            <a href="#menu" className="navPanelToggle"><span className="fa fa-bars" /></a>
        </React.Fragment>
        );
    }
}