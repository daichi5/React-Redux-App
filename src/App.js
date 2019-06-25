import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      text: "sample text"
    }
  }

  handlePlusButton = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleMinusButton = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  updateText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
        <br />
        <br />
        <input type="text" onChange={this.updateText} />
        <br />
        {this.state.text}
      </React.Fragment>
    )
  }
}

export default App;
