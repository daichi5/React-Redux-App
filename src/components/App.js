import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, textchange } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <br />
        <input type="text" onChange={props.textchange} />
        <br />
        text:
        {props.text}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value, text: state.text.value })
const mapDispatchToProps = ({ increment, decrement , textchange})

export default connect(mapStateToProps, mapDispatchToProps)(App)
