import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { HomePage } from '../home-page-container/homePageContainer';
import { Login } from '../login-container/loginContainer';

class MainContainer extends React.Component {
    render() {
        let { logout } = this.props;
        return (
            <React.Fragment>
                {
                    logout ? <Login /> : <HomePage />
                }
            </React.Fragment>
        );
    }
}

MainContainer.propTypes = {
    logout: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    let logout = state.user.logout;
    return {
        logout
    };
};

export const Main = connect(mapStateToProps)(MainContainer);
