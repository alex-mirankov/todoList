import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

const HomeHeaderComponent = ({ user }) => (
    <div className="home-header">
        <p>React App</p>
        <button>
            <i className="fas fa-bars"></i>
        </button>
        <button>
            <i className="fas fa-comment"></i>
        </button>
        <button>
            <i className="far fa-envelope"></i>
        </button>
        <p>{user}</p>
    </div>
)

HomeHeaderComponent.propTypes = {
    user: PropTypes.string.isRequired
}

export default connect(
    (state) => ({
        user: state.user.user,
    })
)(HomeHeaderComponent);

