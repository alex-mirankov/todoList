import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

import { toggleSide } from '../../store/actions/side/side.actions';

import HeaderButton from '../share/header-button/headerButton';

class HomeHeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.hideSide = this.hideSide.bind(this);
    }

    hideSide() {
        this.props.hideSideItem();
    }

    render() {
        let { user, counter, counterMessages } = this.props;
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
                    <p className="user-name">{user}</p>
                </div>
            </div >
        )
    }
}

HomeHeaderComponent.propTypes = {
    user: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    hideSideItem: () => {
        dispatch(toggleSide());
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

