import React from 'react';
import './style.css';

import HomeSideComponent from '../../components/home-side/home-side-component';
import ToDOItemComponent from '../../components/todo-item-component/todoItemComponent';

class HomeToDoListContainer extends React.Component {
    render() {
        return (
            <div className="todo-main">
                <HomeSideComponent />
                <div className="todo-list-container">
                    <div className="container-todo-item">
                        <ToDOItemComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeToDoListContainer;
