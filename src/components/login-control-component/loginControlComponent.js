import React from 'react';
import './style.css';

class LoginControlComponent extends React.Component {
    render() {
        return(
            <div className="container-button">
                <button
                    className="button button-submit"
                >
                    Sign In
                </button>
                <button
                    className="button button-reset"
                >
                    Reset Password?
                </button>
            </div>
        );
    }
}

export default LoginControlComponent;