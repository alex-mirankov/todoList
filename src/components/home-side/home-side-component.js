import React from 'react';
import { connect } from 'react-redux';
import './style.css';

class HomeSideComponent extends React.Component {
    render() {
        let { visible } = this.props;
        return (
            <React.Fragment>
                {
                    visible ?
                        <div className="chat-component">
                            <p className="chat-content">
                            <button className="chat-item">
                                Todo List
                            </button>
                            </p>
                            <p className="chat-content">
                            <button className="chat-item">
                                Chat
                            </button>
                            </p>
                        </div>
                        : <React.Fragment></React.Fragment>
                }
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.rootReducer.side.toggle
    }
}

export default connect(mapStateToProps)(HomeSideComponent);
