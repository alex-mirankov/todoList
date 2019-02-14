import React from 'react';
import './style.css';

import ChatMessageComponent from '../../components/chat-message/chatMessage';

import firebase from 'firebase';
import { connect } from 'react-redux';
import { config } from '../../constants/config';
import { getAllMessages } from '../../store/actions/chat/chat.action';
firebase.initializeApp(config);

class ChatContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: 'none',
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
            });
        });
    }

    sendMessage(mes) {
        this.props.saveMessageToRedux();
        let newId = "0";
        if (this.props.id === 0) {
            firebase.database().ref('listOfMessages/' + newId).set({
                author: '',
                message: '',
            });
        }
        else {
            firebase.database().ref('listOfMessages/' + this.props.id).set({
                author: this.props.user,
                message: mes,
            });
        }

    }

    deleteAllMessages() {
        let key;
        var adaRef = firebase.database().ref('listOfMessages');
        for (var i = 1; i < this.props.id; i++) {
            key = String(i);
            adaRef.child(key).remove();
        }
    }

    render() {
        let input;
        let { user, id } = this.props;
        return (
            <div className="chat-container">
                <div className="chat-main">
                    <div className="chat-header-container">
                        <h2 className="chat-header">Chat</h2>
                    </div>
                    <div className="chat-messages">
                        {
                            id === 0 ?
                                <React.Fragment></React.Fragment>
                                : this.state.messages.length === 1 ?
                                    this.state.messages.map(item =>
                                        <ChatMessageComponent
                                            displayStyle={this.state.display}
                                            name={user}
                                            message={item.message}
                                        />,

                                    ) : this.state.messages.map(item =>
                                        <ChatMessageComponent
                                            displayStyle={this.state.display}
                                            name={user}
                                            message={item.message}
                                        />)
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
    saveMessageToRedux: () => {
        dispatch(getAllMessages())
    }
})

const mapStateToProps = (state) => ({
    user: state.user.user,
    id: state.chat.countMessages,
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);