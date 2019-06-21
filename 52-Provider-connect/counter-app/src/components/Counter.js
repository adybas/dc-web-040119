import React, {Component} from 'react'
import {connect} from 'react-redux'

//We want Counter to go back to having a props count
class Counter extends Component {
  increment = (num) => {
    this.props.dispatch({type: "CLICKED_PLUS", num})
  };
  decrement = (num) => {
    this.props.dispatch({type: "CLICKED_MINUS", num})
  }
  render() {
    console.log("Counter's props:", this.props)
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { count: state.count }
}

export default connect(mapStateToProps)(Counter)
