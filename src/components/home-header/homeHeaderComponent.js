import React from 'react';
import './style.css';

class HomeHeaderComponent extends React.Component {
    render() {
        return(
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
                <p>name</p>
            </div>
        );
    }
}

export default HomeHeaderComponent;