import React from 'react';
import { BrowserRouter as Router,
  Link
} from "react-router-dom";
import i18n from "i18next";
import {initReactI18next} from 'react-i18next';

export default class MainMenu extends React.Component{
    constructor(props) {
        super(props);
        this.switchLocale = this.switchLocale.bind(this);
        const locale = localStorage.getItem('locale');
        this.state = {
            'locale':  locale
        };
        this.switchLocaleTo(locale);
    }

    switchLocale() {
        const currentLocale = this.state.locale;
        const toggledLocale = this.toggleLocale(currentLocale);
        this.setState({locale: toggledLocale});
        this.switchLocaleTo(toggledLocale);

        localStorage.setItem('locale', toggledLocale);
    }

    toggleLocale(locale) {
        return locale === 'en' || locale === null ? 'de' : 'en';
    }

    switchLocaleTo(locale) {
        i18n
            .use(initReactI18next) // passes i18n down to react-i18next
            .init({lng: locale});
    }

    render() {
        return (<React.Fragment>
            <header id="header">
              <div className="inner">
              <Link to="/" className="logo">Handwerker</Link>
                <nav id="nav">
                  <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
                  <a href="#" onClick={this.switchLocale}>Switch to {
                      this.toggleLocale(this.state.locale)
                  }</a>
                </nav>
              </div>
            </header>
            <a href="#menu" className="navPanelToggle"><span className="fa fa-bars" /></a>
        </React.Fragment>
        );
    }
}