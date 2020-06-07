import React from 'react';

export default class Login extends React.Component{
    render() {
        return (
            <section id="two" className="background">
                <div className="inner">
                    <article>
                        <div className="content">
                            <header>
                                <h3>Login</h3>
                            </header>
                            <form name="login_form" method="post" action="/login_check"><div id="login_form"><div className="field"><label htmlFor="login_form_email" className="required">Email</label><input type="email" id="login_form_email" name="login_form[email]" required="required" /></div><div className="field"><label htmlFor="login_form_password" className="required">Password</label><input type="password" id="login_form_password" name="login_form[password]" required="required" /></div><div><ul className="actions">
                                <li><button type="submit" id="login_form_Login" name="login_form[Login]" className="alt">Login</button></li>
                            </ul></div><input type="hidden" id="login_form__token" name="login_form[_token]" defaultValue="6h42HovTAyJ3H5IZekxcC3oGouy4haDawQ9EcTiTn_g" /></div></form>
                        </div>
                    </article>
                    <article className="alt">
                        <div className="content">
                            <header>
                                <h3>Register</h3>
                            </header>
                            <form name="register_form" method="post" action="/user"><div id="register_form"><div className="field"><label htmlFor="register_form_email" className="required">Email</label><input type="email" id="register_form_email" name="register_form[email]" required="required" /></div><div className="field"><label htmlFor="register_form_password" className="required">Password</label><input type="password" id="register_form_password" name="register_form[password]" required="required" minLength={6} maxLength={4096} /></div><div className="field"><label htmlFor="register_form_confirm_password" className="required">Confirm Password</label><input type="password" id="register_form_confirm_password" name="register_form[confirm_password]" required="required" minLength={6} maxLength={4096} /></div><div><ul className="actions">
                                <li><button type="submit" id="register_form_Register" name="register_form[Register]" className="alt">Register</button></li>
                            </ul></div><input type="hidden" id="register_form__token" name="register_form[_token]" defaultValue="RycCgcHk_-PyN3IDMKRLLnaLCdV07lMY0t7wIJfHYOs" /></div></form>
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}