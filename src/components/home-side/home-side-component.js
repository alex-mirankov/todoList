import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

import { showChat, showTodo } from '../../store/actions/side/side.actions';

class HomeSideComponent extends React.Component {
    constructor(props) {
        super(props);

        this.showToDoList = this.showToDoList.bind(this);
        this.showChat = this.showChat.bind(this);
    }

    showToDoList() {
        this.props.showTodo();
    }

    showChat() {
        this.props.showChat();
    }

    render() {
        let { visible } = this.props;
        return (
            <React.Fragment>
                {
                    visible ?
                        <div className="chat-component">
                            <p className="chat-content">
                            <button
                                className="chat-item"
                                onClick={this.showToDoList}
                            >
                                Todo List
                            </button>
                            </p>
                            <p className="chat-content">
                            <button
                                className="chat-item"
                                onClick={this.showChat}
                            >
                                Chat
                            </button>
                            </p>
                        </div>
                        : <React.Fragment></React.Fragment>
                }
            </React.Fragment>

        );
    }
}

HomeSideComponent.propTypes = {
    visible: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    return {
        visible: state.rootReducer.side.toggle
    }
}

const mapDispatchToProps = (dispatch) => ({
    showTodo: () => {
        dispatch(showTodo());
    },
    showChat: () => {
        dispatch(showChat());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeSideComponent);
