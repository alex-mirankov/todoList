import React from 'react';
import './style.css'
import PropTypes from 'prop-types';
import firebase from 'firebase';

import { connect } from 'react-redux';
import { logOut, logIn } from '../../store/actions/login/login.actions';
import { counterMessages } from '../../store/actions/chat/chat.action';

import HomeHeaderComponent from '../../components/home-header/homeHeaderComponent';
import HomeToDoListContainer from '../home-todo-list-container/homeToDoListContainer';
import HomeSideComponent from '../../components/home-side/home-side-component';
import ChatContainer from '../chat-container/chat';

class HomePageContainer extends React.Component {

    componentDidMount() {
        this.props.login(localStorage.getItem('login'));
        var connectToDataBaseAdmin = firebase.database().ref('listOfMessages/admin');
        connectToDataBaseAdmin.on('value', snapshot => {
            let array = [];
            for (let key in snapshot.val()) {
                if (snapshot.val()[key].author !== this.props.user) {
                    array.push(snapshot.val());
                }
            }
            this.props.countMessages(array.length - 1);
        });
    }

    render() {
        let { visibleChat, visibleTodo } = this.props;
        return (
            <div className="page-home">
                <HomeHeaderComponent />
                <div className="todo-main">
                    <HomeSideComponent />
                    {
                        visibleChat ?
                            <ChatContainer />
                            : visibleTodo ? <HomeToDoListContainer />
                                : <React.Fragment></React.Fragment>
                    }
                </div>
            </div>
        );
    }
}

HomePageContainer.propTypes = {
    visibleChat: PropTypes.bool.isRequired,
    visibleTodo: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    return {
        visibleChat: state.rootReducer.side.showChat,
        visibleTodo: state.rootReducer.side.showTodo
    }
}

const mapDispatchToProps = (dispatch) => ({
    unSetUser: () => {
        dispatch(logOut());
    },
    login: (val) => {
        dispatch(logIn(val));
    },
    countMessages: (val) => {
        dispatch(counterMessages(val))
    }
});

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
