import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

const initialState = {
  count: 123
}

const reducer = (oldState=initialState, action) => {
  console.log("OLDSTATE:", oldState, " ACTION:", action)

  /*need to build out logic update state*/
  switch (action.type) {
    case "CLICKED_PLUS":
      return {...oldState, count: oldState.count + action.num}
    case "CLICKED_MINUS":
      return {...oldState, count: oldState.count - action.num}
    default:
      return oldState
  }
}

const store = createStore(reducer)
// console.log("STORE HAS BEEN CREATED", store.getState())

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  increment = (num) => {
    store.dispatch({type: "CLICKED_PLUS", num: num})
  };

  decrement = (num) => {
    store.dispatch({type: "CLICKED_MINUS", num: num})
  }

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
