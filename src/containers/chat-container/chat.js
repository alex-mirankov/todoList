import React from 'react';
import './style.css';
import firebase from 'firebase';
import { config } from '../../constants/config';
firebase.initializeApp(config);

class ChatContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
        this.writeNewPost = this.writeNewPost.bind(this);
    }

    componentDidMount() {
        var starCountRef = firebase.database().ref('listOfMessages');
        starCountRef.on('value', (snapshot) => {
            this.setState({
                message: snapshot.val()
            })
            console.log(snapshot.val());
        });
        
    }

    writeNewPost(mes) {
        /*firebase.database().ref('folder').set({
            message: mes,
        });*/
    }

    render() {
        let input;
        return (
            <div className="chat-container">
                <div className="chat-main">
                    <div className="chat-header-container">
                        <h2 className="chat-header">Chat</h2>
                    </div>
                    <div className="chat-messages">
                        {this.state.message}
                    </div>
                    <div className="chat-sending">
                        <input
                            type="text"
                            placeholder="Write a message..."
                            className="chat-input"
                            ref={node => {
                                (input = node)
                            }}
                        />
                        <button className="chat-send" onClick={() => {
                            this.writeNewPost(input.value);
                            input.value = ''
                        }}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatContainer;