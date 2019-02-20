import React from 'react';
import './style.css';

class ChatMessageComponent extends React.Component {
    render() {
        return (
            <div className="message-block" style={{display: this.props.display, justifyContent: this.props.styles}}>
                <span className="message-container">
                    <span className="nickName-content">
                        {this.props.name}
                    </span>
                    <span className="message-content">
                        {this.props.message}
                    </span>
                </span>
            </div>
        );
    }
}

export default ChatMessageComponent;