import React from 'react';
import './style.css';

class DeleteButton extends React.Component {
    render() {
        return (
            <div>
                <button className="button-control button-delete">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        );
    }
}

export default DeleteButton;
