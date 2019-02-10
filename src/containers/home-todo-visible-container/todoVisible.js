import React from 'react';
import './style.css';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../store/actions/todo/todo.types';

import { connect } from 'react-redux';
import { toggleTodo } from '../../store/actions';
import HomeToDoListContainer from '../home-todo-list-container/homeToDoListContainer';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeToDoListContainer)
