import React from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default class Login extends React.Component {
    render() {
        return (
            <section id="two" className="background">
                <div className="inner">
                    <article>
                        <div className="content">
                            <header>
                                <h3>Login</h3>
                            </header>
                            <LoginForm />
                        </div>
                    </article>
                    <article className="alt">
                        <div className="content">
                            <header>
                                <h3>Register</h3>
                            </header>
                            <RegisterForm />
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}