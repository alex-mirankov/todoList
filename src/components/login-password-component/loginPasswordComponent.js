import React from 'react';
import './style.css';

class LoginPasswordComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-input">
                    <input
                        placeholder="Password"
                        className="login-input"
                        type="password"
                    />
                    <i
                        className="icon-input fas fa-lock"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default LoginPasswordComponent;