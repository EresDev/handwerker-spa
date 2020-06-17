import React from 'react';
import {withTranslation} from "react-i18next";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div id="login_form">
                    <div className="field">
                        <label htmlFor="email"
                               className="required">
                            {this.props.t("common:login.email")}
                        </label>
                        <input type="email"
                               id="email"
                               required="required"
                               value={this.state.email}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="login_form_password"
                               className="required">
                            {this.props.t("common:login.password")}
                        </label>
                        <input type="password"
                               id="password"
                               value={this.state.password}
                               onChange={this.handleChange}
                               required="required"
                               minLength={6}
                               maxLength={4096}
                        />
                    </div>
                    <div>
                        <ul className="actions">
                            <li>
                                <button type="submit" className="alt">
                                    {this.props.t("common:login.login")}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        );
    }
};

export default withTranslation()(LoginForm);