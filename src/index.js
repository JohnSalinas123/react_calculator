import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';



// Game component
class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "game">
                <div className = "play-area">
                    <PlayArea/>
                </div>
            </div>
        );
    }

}

// PlayArea component
class PlayArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// Shape Component
class Shape extends React.Component {



}

// ===================================

reactDom.render(
    <Game />,
    document.getElementById('root')
);

