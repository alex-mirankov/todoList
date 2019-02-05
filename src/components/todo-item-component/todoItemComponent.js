import React from 'react';
import './style.css';

import ApproveButton from '../share/approve-button/approveButton';
import DeleteButton from '../share/delete-button/deleteButton';
import EditButton from '../share/edit-button/editButton';

class ToDOItemComponent extends React.Component {
    render() {
        return (
            <div className="container-item">
                <input className="item-check" type="checkbox" />
                <p></p>
                <ApproveButton />
                <EditButton />
                <DeleteButton />
            </div>
        );
    }
}

export default ToDOItemComponent;
