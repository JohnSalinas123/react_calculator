import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';



// Calcualtor component
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: '0',
        }
    }

    handleClick(symbol) {
        
    }

    render() {
        const outputText = this.state.output;

        return (
            <div className = "game">
                <div className = "window">
                    <Window
                        output = {outputText}
                    />
                </div>
                <div className = 'input'>
                    <Input
                        onClick = {(symbol) => this.handleClick(symbol)}
                    />
                </div>
            </div>
        );
    }

}

// PlayArea component
class Window extends React.Component {
    renderOutput(i) {
        return (
            <p>
                {i}
            </p>
        )
    }

    render() {
        const outputText = this.props.output;

        return (
            <div>
                {this.renderOutput(outputText)}
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
                value = {symbol}
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

