import React from 'react';
import './style.css';
import history from '../../history';

import LoginHeaderComponent from '../../components/login-header-component/loginHeaderComponent';
import LoginControlComponent from '../../components/login-control-component/loginControlComponent';
import LoginPasswordComponent from '../../components/login-password-component/loginPasswordComponent';
import LoginUserComponent from '../../components/login-user-component/loginUserComponent';


export class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.signIn = this.signIn.bind(this);
        this.reset = this.reset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    signIn() {
        history.push('/home');
    }

    reset() {
        console.log('reset');
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="page">
                <form
                    className="form-login"
                    onSubmit={this.handleSubmit}
                >
                    <LoginHeaderComponent />
                    <LoginUserComponent />
                    <LoginPasswordComponent />
                    <LoginControlComponent signIn={this.signIn} reset={this.reset}/>
                </form>
            </div>
        );
    };
}