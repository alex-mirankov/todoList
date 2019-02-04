import React from 'react';
import './style.css';

class LoginHeaderComponent extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-contant">
                    <p className="header-text">Login Form</p>
                    <i className="icon-close fas fa-times"></i>
                </div>
            </div>
        );
    };
}

export default LoginHeaderComponent;