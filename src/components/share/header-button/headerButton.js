import React from 'react';
import './style.css';

class HeaderButton extends React.Component {

    render() {
        let { border } = this.props;
        return (
            <div>
                <button
                    className="button-header"
                    style={{border: border}}
                    onClick={this.props.action}
                >
                    {this.props.content}
                    {this.props.counter}
                </button>
            </div>
        );
    }
}

export default HeaderButton;