import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';



// Game component
class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "game">
                <div className = "window">
                    <Window/>
                </div>
                <div className = 'input'>
                    <Input/>
                </div>
            </div>
        );
    }

}

// PlayArea component
class Window extends React.Component {
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

// Input component
class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButton(symbol) {
        return (
            <Button
                onClick = {() => this.props.onClick}
            />
        )
    }

    render() {
        return (
            <div>
                <div className = "input-row">
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                    {this.renderButton(9)}
                    {this.renderButton('Del')}
                    {this.renderButton('AC')}
                </div>
                <div className = "input-row">
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton('X')}
                    {this.renderButton('/')}
                </div>
                <div className = "input-row">
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                    {this.renderButton('+')}
                    {this.renderButton('-')}
                </div>
                <div className = "input-row">
                    {this.renderButton(0)}
                    {this.renderButton('.')}
                    {this.renderButton('EXP')}
                    {this.renderButton('Ans')}
                    {this.renderButton('=')}
                </div>
            </div>
        )
    }
}

// Button Component
function Button(props) {
    return (
        <button className = "button" onClick = {props.onClick}>
            {props.value}
        </button>
    )
}

// ===================================

reactDom.render(
    <Calculator />,
    document.getElementById('root')
);

