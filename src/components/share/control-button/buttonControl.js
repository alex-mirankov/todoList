import React from 'react';
import './style.css';

class ButtonControl extends React.Component {
    
    render() {
        let { color } = this.props;
        return (
            <div>
                <button
                    className="button-control button-approve"
                    style={{backgroundColor: color}}
                    onClick={this.props.action}
                >
                    {this.props.content}
                </button>
            </div>
        );
    }
}

export default ButtonControl;
