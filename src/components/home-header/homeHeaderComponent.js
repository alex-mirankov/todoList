import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

import { toggleSide } from '../../store/actions/side/side.actions';
import { logOut } from '../../store/actions/login/login.actions';

import HeaderButton from '../share/header-button/headerButton';

class HomeHeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.hideSide = this.hideSide.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        localStorage.setItem('login', '');
        this.props.logOutRedux();
    }

    hideSide() {
        this.props.hideSideItem();
    }

    render() {
        let { counter, counterMessages } = this.props;
        return (
            <div className="home-header">
                <div className="menu-home">
                    <HeaderButton
                        content={<i className="fas header-icons fa-bars"></i>}
                        border="none"
                        action={this.hideSide}
                    />
                    <p className="app-name">React App</p>
                </div>
                <div className="info-home">
                    <div className="control-home">
                        <HeaderButton
                            content={<i className="fas header-icons fa-list-ul"></i>}
                            counter={<span className="counter">{counter.count}</span>}
                        />
                        <HeaderButton
                            content={<i className="far header-icons fa-envelope"></i>}
                            counter={<span className="counter counter-messages">{counterMessages}</span>}
                        />
                    </div>
                    <p className="user-name">
                        {localStorage.getItem('login')}
                        <button
                            className="button-logout"
                            onClick={this.logOut}
                        >
                            Log Out
                        </button>
                    </p>
                </div>
            </div >
        )
    }
}

HomeHeaderComponent.propTypes = {
    counterMessages: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    hideSideItem: () => {
        dispatch(toggleSide());
    },
    logOutRedux: () => {
        dispatch(logOut());
    }
})

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        counter: state.rootReducer.counter,
        counterMessages: state.chat.count,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderComponent);

