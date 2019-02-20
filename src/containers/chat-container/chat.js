import React from 'react';
import './style.css';

import ChatMessageComponent from '../../components/chat-message/chatMessage';

import firebase from 'firebase';
import { connect } from 'react-redux';
import { config } from '../../constants/config';
import { getAllMessagesAdmin, getAllMessagesUser, deleteAll } from '../../store/actions/chat/chat.action';
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
        var connectToDataBaseAdmin = firebase.database().ref('listOfMessages/admin');
        connectToDataBaseAdmin.on('value', snapshot => {
            this.props.getArrayMessagesAdmin(Object.values(snapshot.val()), snapshot.val().length, this.props.user);
        });
    }

    sendMessage(mes) {
        let nullId = "0";
        if (this.props.id === 0) {
            firebase.database().ref('listOfMessages/admin/' + nullId).set({
                author: '',
                message: '',
            });
        }
        else {
            firebase.database().ref('listOfMessages/admin/' + this.props.id).set({
                author: this.props.user,
                message: mes,
            });
        }
    }

    deleteAllMessages() {
        let keyAdmin;
        var adminRef = firebase.database().ref('listOfMessages/admin');
        for (let i = 1; i < this.props.arrayMessAdmin.length; i++) {
            keyAdmin = String(i);
            adminRef.child(keyAdmin).remove();
        }
        this.props.deleteFromRedux();
    }

    render() {
        let input;
        let { user, arrayMessAdmin } = this.props;
        return (
            <div className="chat-container">
                <div className="chat-main">
                    <div className="chat-header-container">
                        <h2 className="chat-header">Chat</h2>
                    </div>
                    <div className="chat-messages">
                        {
                            arrayMessAdmin.map(i =>
                                i.author === '' ?
                                <ChatMessageComponent
                                        styles={'flex-end'}
                                        display={'none'}
                                        name={i.author}
                                        message={i.message}
                                    />
                                : i.author === user ?
                                    <ChatMessageComponent
                                        styles={'flex-end'}
                                        display={'flex'}
                                        name={i.author}
                                        message={i.message}
                                    />
                                    : <ChatMessageComponent
                                        name={i.author}
                                        display={'flex'}
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
                                this.sendMessage(input.value, 'admin');
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
    getArrayMessagesAdmin: (value, length, user) => {
        dispatch(getAllMessagesAdmin(value, length, user))
    },
    deleteFromRedux: () => {
        dispatch(deleteAll())
    }
})

const mapStateToProps = (state) => ({
    user: state.user.user,
    id: state.chat.countMessages,
    arrayMessAdmin: state.chat.messagesAdmin,
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);