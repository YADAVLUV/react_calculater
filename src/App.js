import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '',
    };
  }

  handleClick = (value) => {
    if (value === '=' && this.state.input !== '') {
      try {
        const result = eval(this.state.input);
        this.setState({ result });
      } catch (error) {
        this.setState({ result: 'Error' });
      }
    } else if (value === 'C') {
      this.setState({ input: '', result: '' });
    } else {
      this.setState({ input: this.state.input + value });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Simple Calculator</h1>
        <div className="calculator">
          <input
            type="text"
            className="input"
            value={this.state.input}
            readOnly
          />
          <div className="buttons">
            <button onClick={() => this.handleClick('7')}>7</button>
            <button onClick={() => this.handleClick('8')}>8</button>
            <button onClick={() => this.handleClick('9')}>9</button>
            <button onClick={() => this.handleClick('+')}>+</button>
            <button onClick={() => this.handleClick('4')}>4</button>
            <button onClick={() => this.handleClick('5')}>5</button>
            <button onClick={() => this.handleClick('6')}>6</button>
            <button onClick={() => this.handleClick('-')}>-</button>
            <button onClick={() => this.handleClick('1')}>1</button>
            <button onClick={() => this.handleClick('2')}>2</button>
            <button onClick={() => this.handleClick('3')}>3</button>
            <button onClick={() => this.handleClick('*')}>*</button>
            <button onClick={() => this.handleClick('0')}>0</button>
            <button onClick={() => this.handleClick('.')}>.</button>
            <button onClick={() => this.handleClick('/')}>/</button>
            <button onClick={() => this.handleClick('C')}>C</button>
            <button onClick={() => this.handleClick('=')}>=</button>
          </div>
        </div>
        <div className="result">
          Result: {this.state.result}
        </div>
      </div>
    );
  }
}

export default App;
