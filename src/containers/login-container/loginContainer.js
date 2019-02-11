import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/login/login.actions';
import { logOut } from '../../store/actions/login/login.actions';

import LoginHeaderComponent from '../../components/login-header-component/loginHeaderComponent';
import LoginControlComponent from '../../components/login-control-component/loginControlComponent';
import LoginPasswordComponent from '../../components/login-password-component/loginPasswordComponent';
import LoginUserComponent from '../../components/login-user-component/loginUserComponent';


export class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.signIn = this.signIn.bind(this);
        this.reset = this.reset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlerUserNameInput = this.handlerUserNameInput.bind(this);
    }

    handlerUserNameInput(e) {
        let userName = e.target.value;
        this.setState({
            name: userName
        });
    }

    signIn = () => {
        this.props.setUser(this.state.name);
    }

    reset = () => {
        this.props.unSetUser();
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
                    <LoginUserComponent handlerUserNameInput={this.handlerUserNameInput} />
                    <LoginPasswordComponent />
                    <LoginControlComponent signIn={this.signIn} reset={this.reset} />
                </form>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => {
        dispatch(logIn(user));
    },
    unSetUser: () => {
        dispatch(logOut());
    }
});

export const Login = connect(null, mapDispatchToProps)(LoginContainer);
