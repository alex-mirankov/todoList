import React from 'react';
import './style.css';

import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';

class ToDoInputComponent extends React.Component {

    render() {
        let input;
        let { dispatch } = this.props;
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
                        <button
                            className="add-task-button"
                            type='submit'
                        >
                            Add New Tasks
                        </button>
                    </form>
                </div>
            </React.Fragment >
        )
    }

}

export default connect()(ToDoInputComponent)
