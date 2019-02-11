import React from 'react';
import './style.css';

import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';

let ToDoInputComponent = ({ dispatch }) => {
    let input;
    return (
        <React.Fragment>
            <div className="todo-input-container">
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}>
                    <input
                        type="text"
                        className="todo-input"
                        placeholder="add todo"
                        ref={node =>
                            (input = node)
                        }
                    />
                    <button type='submit'>
                        Add todo
                    </button>
                </form>
            </div>
        </React.Fragment >
    )
}

export default connect()(ToDoInputComponent)
