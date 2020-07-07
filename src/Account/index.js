import React from 'react';
import { withTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

class Account extends React.Component {
    render() {
        if (Cookies.get('Authorization')) {
            return (
                <section id="one">
                    <div className="inner">
                        <header>
                            <h2>{this.props.t("common:account.heading")}</h2>
                        </header>
                        <p>{this.props.t("common:account.comingSoon")}</p>
                    </div>
                </section>
            );
        } else {
            return <Redirect to='/login' />
        }

    }
};

export default withTranslation()(Account);