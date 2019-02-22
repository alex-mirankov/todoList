import React from 'react';
import './style.css';

import PropTypes from 'prop-types';
import ChatMessageComponent from '../../components/chat-message/chatMessage';

import firebase from 'firebase';
import { connect } from 'react-redux';
import { config } from '../../constants/config';
import { getAllMessagesAdmin, deleteAll, counterMessages } from '../../store/actions/chat/chat.action';
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
            let array = [];
            for (let key in snapshot.val()) {
                if (snapshot.val()[key].author !== this.props.user) {
                    array.push(snapshot.val());
                }
            }
            this.props.countMessages(array.length - 1);
            this.props.getArrayMessagesAdmin(Object.values(snapshot.val()), Object.values(snapshot.val()).length, this.props.user);
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
                            <i className="fas fa-trash-alt"></i>
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
                            type="submit"
                            className="chat-send chat-buttons"
                            onClick={() => {
                                this.sendMessage(input.value);
                                input.value = ''
                            }}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

ChatContainer.propTypes = {
    user: PropTypes.string.isRequired,
    arrayMessAdmin: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    id: PropTypes.number.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    getArrayMessagesAdmin: (value, length, user) => {
        dispatch(getAllMessagesAdmin(value, length, user))
    },
    deleteFromRedux: () => {
        dispatch(deleteAll())
    },
    countMessages: (val) => {
        dispatch(counterMessages(val));
    }
})

const mapStateToProps = (state) => ({
    user: state.user.user,
    id: state.chat.countMessages,
    count: state.chat.count,
    arrayMessAdmin: state.chat.messagesAdmin,
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);