import React from 'react';
import { withTranslation } from 'react-i18next';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const form = event
            .target
            .parentNode
            .parentNode;

        this.setState(
            {[event.target.id]: event.target.value},
            () => { this.validatePassword(form) }
        );
    }

    validatePassword(form) {
        const confirmPassword = form.querySelector("#confirm_password");

        if (this.state.password !== this.state.confirm_password) {
            confirmPassword.setCustomValidity("Password and confirm password are not same.");
        } else {
            confirmPassword.setCustomValidity("");
        }
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <div id="register_form">
                        <div className="field">
                            <label htmlFor="email" className="required">
                                {this.props.t("common:register.email")}
                            </label>
                            <input type="email" id="email" required="required"
                                   value={this.state.email}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password"
                                   className="required">
                                {this.props.t("common:register.password")}
                            </label><input
                            type="password" id="password"
                            required="required" minLength={6} maxLength={4096}
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className="field"><label htmlFor="confirm_password"
                                                      className="required">
                            {this.props.t("common:register.confirmPassword")}
                        </label><input
                            type="password" id="confirm_password"
                            required="required" minLength={6}
                            maxLength={4096}
                            value={this.state.confirm_password}
                            onChange={this.handleChange}
                        /></div>
                        <div>
                            <ul className="actions">
                                <li>
                                    <button type="submit" className="alt">
                                        {this.props.t("common:register.register")}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
        );
    }
}

export default withTranslation()(RegisterForm);