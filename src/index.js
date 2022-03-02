import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';



// Calcualtor component
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '_',
            output: '0',

        }
    }

    handleClick(symbol) {
        const currentInput = String(this.state.input).slice();
        
        switch (symbol) {
            case 'Del':

                if (currentInput.length === 1) {
                        this.setState({
                            input: '_'
                        })
                } else if (currentInput != '_') {
                    let inputSize = currentInput.length;
                        this.setState({
                        input: currentInput.slice(0,inputSize-1)
                    });   
                } 
                break;
            case 'AC':
                this.setState({
                    input: '_'
                });
                break;

            case 'ANS':
                if (currentInput.length > 20) {
                    return
                }
                break;

            default:
                if (currentInput.length > 20) {
                    return
                }

                if (currentInput === '_') {
                    this.setState({
                        input: symbol,
                    });
                } else {
                    this.setState({
                        input: currentInput + symbol,
                    });
                }
                
               

        }
        
    }

    render() {
        const inputText = this.state.input;
        const outputText = this.state.output;

        return (
            <div className = "calculator">
                <div className = "window">
                    <Window
                        input = {inputText}
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
    renderInput(input) {
        return (
            <p className = "input-line">
                {input}
            </p>
        )
    }

    renderOutput(output) {
        return(
            <p className = "output-line">
                {output}
            </p>
        )
    }

    render() {
        const inputText = this.props.input;
        const outputText = this.props.output;

        return (
            <div>
                {this.renderInput(inputText)}
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
                onClick = {() => this.props.onClick(symbol)}
            />
        )
    }

    render() {
        return (
            <div>
                <div className = "button-row">
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                    {this.renderButton(9)}
                    {this.renderButton('Del')}
                    {this.renderButton('AC')}
                </div>
                <div className = "button-row">
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton('X')}
                    {this.renderButton('/')}
                </div>
                <div className = "button-row">
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                    {this.renderButton('+')}
                    {this.renderButton('-')}
                </div>
                <div className = "button-row">
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

