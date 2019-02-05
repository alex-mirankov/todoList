import React from 'react';
import './style.css';

class EditButton extends React.Component {
    render() {
        return (
            <div>
                <button className="button-control button-edit">
                    <i className="fas fa-pencil-alt"></i>
                </button>
            </div>
        );
    }
}

export default EditButton;
