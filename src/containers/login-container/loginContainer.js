import React from 'react';
import './style.css';

import LoginHeaderComponent from '../../components/login-header-component/loginHeaderComponent';
import LoginControlComponent from '../../components/login-control-component/loginControlComponent';
import LoginPasswordComponent from '../../components/login-password-component/loginPasswordComponent';
import LoginUserComponent from '../../components/login-user-component/loginUserComponent';


export class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="page">
                <form className="form-login">
                    <LoginHeaderComponent />
                    <LoginUserComponent />
                    <LoginPasswordComponent />
                    <LoginControlComponent />
                </form>
            </div>
        );
    };
}