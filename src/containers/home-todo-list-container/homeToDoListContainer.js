import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

import HomeSideComponent from '../../components/home-side/home-side-component';
import ToDOItemComponent from '../../components/todo-item-component/todoItemComponent';
import ToDoInputComponent from '../../components/todo-input-component/todoInputComponents';

const HomeToDoListContainer = ({ todos, onTodoClick }) => (
    <div className="todo-main">
        <HomeSideComponent />
        <div className="todo-list-container">
            <div className="container-todo-item">
                <ToDoInputComponent />
                <ul>
                    {
                        todos.map(todo =>
                            <ToDOItemComponent
                                key={todo.id}
                                {...todo}
                                onClick={() => onTodoClick(todo.id)}
                            />
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
)

HomeToDoListContainer.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default connect(
    (state) => ({
        todos: state.rootReducer.todos,
    })
)(HomeToDoListContainer);
