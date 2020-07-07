import React from 'react';
import { withTranslation } from 'react-i18next';

class Account extends React.Component {
    render() {
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
    }
};

export default withTranslation()(Account);