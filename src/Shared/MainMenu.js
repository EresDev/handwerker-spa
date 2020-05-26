import React from 'react';

export default class MainMenu extends React.Component{
    render() {
        return (
        <React.Fragment>
            <header id="header">
              <div className="inner">
                <a href="index.html" className="logo">introspect</a>
                <nav id="nav">
                  <a href="index.html">Home</a>
                  <a href="generic.html">Generic</a>
                  <a href="elements.html">Elements</a>
                </nav>
              </div>
            </header>
            <a href="#menu" className="navPanelToggle"><span className="fa fa-bars" /></a>
        </React.Fragment>
        );
    }

}