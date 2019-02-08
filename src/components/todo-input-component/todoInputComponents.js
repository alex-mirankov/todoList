import React from 'react';
import './style.css';

class ToDoInputComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="todo-input-container">
                    <input
                        type="text"
                        className="todo-input"
                        placeholder="add todo"
                    />
                </div>
            </React.Fragment>
        )
    };
}

export default ToDoInputComponent;
