import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <form name="login_form" method="post" action="/login_check">
                <div id="login_form">
                    <div className="field"><label htmlFor="login_form_email"
                                                  className="required">Email</label><input type="email"
                                                                                           id="login_form_email"
                                                                                           name="login_form[email]"
                                                                                           required="required"/>
                    </div>
                    <div className="field"><label htmlFor="login_form_password"
                                                  className="required">Password</label><input
                        type="password" id="login_form_password" name="login_form[password]"
                        required="required"/></div>
                    <div>
                        <ul className="actions">
                            <li>
                                <button type="submit" id="login_form_Login" name="login_form[Login]"
                                        className="alt">Login
                                </button>
                            </li>
                        </ul>
                    </div>
                    <input type="hidden" id="login_form__token" name="login_form[_token]"
                           defaultValue="6h42HovTAyJ3H5IZekxcC3oGouy4haDawQ9EcTiTn_g"/></div>
            </form>
        );
    }
};