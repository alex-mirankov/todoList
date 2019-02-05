import React from 'react';
import './style.css'

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

export default HomePageContainer;
