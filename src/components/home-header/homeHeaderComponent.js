import React from 'react';
import './style.css';

class HomeHeaderComponent extends React.Component {
    render() {
        return(
            <div className="home-header">
                <p>React App</p>
                <button>
                    <i class="fas fa-bars"></i>
                </button>
                <button>
                    <i class="fas fa-comment"></i>
                </button>
                <button>
                    <i class="far fa-envelope"></i>
                </button>
                <p>name</p>
            </div>
        );
    }
}

export default HomeHeaderComponent;