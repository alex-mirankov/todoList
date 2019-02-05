import React from 'react';
import './style.css';

class ApproveButton extends React.Component {
    render() {
        return (
            <div>
                <button className="button-control button-approve">
                    <i className="fas fa-check"></i>
                </button>
            </div>
        );
    }
}

export default ApproveButton;
