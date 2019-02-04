import React from 'react';
import './style.css';

class LoginHeaderComponent extends React.Component {
    render() {
        return(
            <div className="header-content">
                <p className="header-text">Login Form</p>
                <i className="fas fa-times"></i>
            </div>
        );
    };
}

export default LoginHeaderComponent;