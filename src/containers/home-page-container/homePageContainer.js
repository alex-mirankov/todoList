import React from 'react';
import './style.css'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logOut, logIn } from '../../store/actions/login/login.actions';

import HomeHeaderComponent from '../../components/home-header/homeHeaderComponent';
import HomeToDoListContainer from '../home-todo-list-container/homeToDoListContainer';
import HomeSideComponent from '../../components/home-side/home-side-component';
import ChatContainer from '../chat-container/chat';

class HomePageContainer extends React.Component {

    componentDidMount() {
        this.props.login(localStorage.getItem('login'))
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
    }
});

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
