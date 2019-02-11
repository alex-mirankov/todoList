import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ApproveButton from '../share/approve-button/approveButton';
import DeleteButton from '../share/delete-button/deleteButton';
import EditButton from '../share/edit-button/editButton';

const ToDOItemComponent = ({ onClick, completed, text }) => (
    <li className="container-item">
        <input className="item-check" type="checkbox" />
        <p
            onClick={onClick}
        >
            {text}
        </p>
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        <ApproveButton />
        <EditButton />
        <DeleteButton />
    </li>
)

ToDOItemComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default ToDOItemComponent;
