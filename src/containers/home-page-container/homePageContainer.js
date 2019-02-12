import React from 'react';
import './style.css'

import { connect } from 'react-redux';
import { logOut } from '../../store/actions/login/login.actions';

import HomeHeaderComponent from '../../components/home-header/homeHeaderComponent';
import HomeToDoListContainer from '../home-todo-list-container/homeToDoListContainer';
import HomeSideComponent from '../../components/home-side/home-side-component';
import ChatContainer from '../chat-container/chat';

class HomePageContainer extends React.Component {
    constructor(props) {
        super(props);
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

const mapStateToProps = (state) => {
    return {
        visibleChat: state.rootReducer.side.showChat,
        visibleTodo: state.rootReducer.side.showTodo
    }
}

const mapDispatchToProps = (dispatch) => ({
    unSetUser: () => {
        dispatch(logOut());
    }
});

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
