import React from 'react';
import './style.css';

import ChatMessageComponent from '../../components/chat-message/chatMessage';

import firebase from 'firebase';
import { connect } from 'react-redux';
import { config } from '../../constants/config';
import { getAllMessages, saveMessage, deleteAll } from '../../store/actions/chat/chat.action';
firebase.initializeApp(config);

class ChatContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }

        this.sendMessage = this.sendMessage.bind(this);
        this.deleteAllMessages = this.deleteAllMessages.bind(this);
    }

    componentDidMount() {
        var starCountRef = firebase.database().ref('listOfMessages');
        starCountRef.on('value', snapshot => {
            this.setState({
                messages: snapshot.val(),
            })
            this.props.getArrayMessages(snapshot.val(), snapshot.val().length);
        });
    }

    sendMessage(mes) {
        let nullId = "0";
        if (this.props.id === 0) {
            firebase.database().ref('listOfMessages/' + nullId).set({
                author: '',
                message: '',
            });
        }
        else {
            firebase.database().ref('listOfMessages/' + this.props.id).set({
                author: this.props.user,
                message: mes,
            });
            this.props.saveMessage(mes)
        }
    }

    deleteAllMessages() {
        let key;
        var adaRef = firebase.database().ref('listOfMessages');
        for (var i = 1; i < this.props.arrayMess.length; i++) {
            key = String(i);
            adaRef.child(key).remove();
        }
        this.props.deleteFromRedux();
    }

    render() {
        let input;
        let { user, arrayMess } = this.props;
        return (
            <div className="chat-container">
                <div className="chat-main">
                    <div className="chat-header-container">
                        <h2 className="chat-header">Chat</h2>
                    </div>
                    <div className="chat-messages">
                        {
                            arrayMess.map(i => 
                                    <ChatMessageComponent
                                        name={user}
                                        message={i.message}
                                    />
                                )
                        }
                    </div>
                    <div className="chat-sending">
                        <button
                            className="chat-delete-all chat-buttons"
                            onClick={this.deleteAllMessages}
                        >
                            Delete All
                        </button>
                        <input
                            type="text"
                            placeholder="Write a message..."
                            className="chat-input"
                            ref={node => {
                                (input = node)
                            }}
                        />
                        <button
                            className="chat-send chat-buttons"
                            onClick={() => {
                                this.sendMessage(input.value);
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

const mapDispatchToProps = (dispatch) => ({
    saveMessage: (mes) => {
        dispatch(saveMessage(mes))
    },
    getArrayMessages: (value, length) => {
        dispatch(getAllMessages(value, length))
    },
    deleteFromRedux: () => {
        dispatch(deleteAll())
    }
})

const mapStateToProps = (state) => ({
    user: state.user.user,
    id: state.chat.countMessages,
    arrayMess: state.chat.messages,
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);