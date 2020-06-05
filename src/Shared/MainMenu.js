import React from 'react';

export default class MainMenu extends React.Component{
    render() {
        return (
        <React.Fragment>
            <header id="header">
              <div className="inner">
                <a href="index.html" className="logo">introspect</a>
                <nav id="nav">
                  <a href="/">Home</a>
                  <a href="/jobs">Jobs</a>
                  <a href="/login">Login</a>
                </nav>
              </div>
            </header>
            <a href="#menu" className="navPanelToggle"><span className="fa fa-bars" /></a>
        </React.Fragment>
        );
    }
}