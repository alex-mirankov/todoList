import React from 'react';
import './style.css'

import { connect } from 'react-redux';

import HomeHeaderComponent from '../../components/home-header/homeHeaderComponent';
import HomeToDoListContainer from '../home-todo-list-container/homeToDoListContainer';

class HomePageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="page-home">
                <HomeHeaderComponent />
                <HomeToDoListContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let userName = state.user.user;
    return {
        userName
    };
};

export const HomePage = connect(mapStateToProps)(HomePageContainer);
