import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { connect } from 'react-redux';
import { deleteTodo, updateTodo, toggleTodo } from '../../store/actions/todo/todo.actions';
import ButtonControl from '../share/control-button/buttonControl';

class ToDOItemComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
        }

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.toggle = this.toggle.bind(this);
        this.update = this.update.bind(this);
    }

    update(val) {
        this.props.updateItem(this.props.id, val);
    }

    edit() {
        this.setState({
            display: !this.state.display,
        })
    }

    toggle() {
        this.props.toggle(this.props.id);
    }

    delete() {
        this.props.deleteItem(this.props.id);
    }

    render() {
        let { text } = this.props;
        let input;
        return (
            <li className="container-item">
                <p className="done-item">
                    {
                        this.props.completed ?
                            <i className="fas like-icon fa-thumbs-up"></i>
                            : <React.Fragment></React.Fragment>
                    }
                </p>
                <p
                    className="item-text"
                >
                    {text}
                </p>
                {
                    this.state.display ?
                        <div className="content-update-item">
                            <input className="input-new-value" ref={node => (input = node)} />
                            <ButtonControl
                                color='green'
                                content={<i className="fas fa-share-square"></i>}
                                action={() => this.update(input.value)}
                            />
                        </div>
                        : <React.Fragment></React.Fragment>
                }
                <ButtonControl
                    content={<i className="fas fa-check"></i>}
                    color='#71b346'
                    action={this.toggle}
                />
                <ButtonControl
                    content={<i className="fas fa-pencil-alt"></i>}
                    color='#63b8a9'
                    action={this.edit}
                />
                <ButtonControl
                    content={<i className="fas fa-trash-alt"></i>}
                    color='#f16b5e'
                    action={this.delete}
                />
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (id) => {
        dispatch(deleteTodo(id));
    },
    toggle: (id) => {
        dispatch(toggleTodo(id));
    },
    updateItem: (id, text) => {
        dispatch(updateTodo(id, text));
    }
});

ToDOItemComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default connect(null, mapDispatchToProps)(ToDOItemComponent);
