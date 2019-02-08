import React from 'react';
import './style.css';
import { connect } from 'react-redux';

import { HomePage } from '../home-page-container/homePageContainer';
import { Login } from '../login-container/loginContainer';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { userName } = this.props;
        return (
            <React.Fragment>
                {
                    !!userName ? <Login /> : <HomePage />
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    let userName = state.user.user;
    return {
        userName
    };
};

export const Main = connect(mapStateToProps)(MainContainer);
