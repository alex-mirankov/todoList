import React from 'react';
import './style.css';

class LoginControlComponent extends React.Component {
    render() {
        return(
            <div className="container-button">
                <button
                    className="button button-submit"
                    onClick={this.props.signIn}
                >
                    Sign In
                </button>
                <button
                    className="button button-reset"
                    onClick={this.props.reset}
                >
                    Reset Password?
                </button>
            </div>
        );
    }
}

export default LoginControlComponent;