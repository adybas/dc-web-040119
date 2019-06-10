import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super();

    this.state = {
      allSushi: [],
      eatenSushiIDs: [],
      startingIndex: 0
    }
    console.log("executing <App /> 's constructor()")
  }

  componentDidMount(){
    // when does code herein execute????
    console.log("executing <App /> 's componentDidMount()")

    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        allSushi: data
      })
    })
  }

  eatSushiHandler = (id) => {
    // debugger
    console.log("executing <App /> 's eatSushiHandler()")

    // given ID of just-eaten Sushi:
    // update <App /> state
      // this.state.eatenSushiIDs should include the ID of what just got eaten!!

    // Noooo: this.state.eatenSushiIDs.push(id)
    // console.log(this.state.eatenSushiIDs)

    let copy = [...this.state.eatenSushiIDs];

    copy.push(id)

    this.setState({
      eatenSushiIDs: copy
    })


  }

  // let someDiv = document.createElement("div")
  // someDiv.innerText = "my text"
  // let target = document.getElementById("target")
  // target.appendChild(someDiv)
  //

  deriveSushiGivenStartingIndex = () => {
    // this.state.currentPage

    // this.state.allSushi => correct 4 sushi
    let startingIndex = this.state.startingIndex
    // let {startingIndex} = this.state
    let lastIndex = startingIndex + 4
    return this.state.allSushi.slice(startingIndex, lastIndex)
  }


  render() {
    console.log("executing <App /> 's render()")

    return (
      <div className="app">
        <SushiContainer
          eatenSushiIDs={this.state.eatenSushiIDs}
         eatSushiHandler={this.eatSushiHandler} sushiToDisplay={this.deriveSushiGivenStartingIndex()} />
        <Table eatenSushiIDs={this.state.eatenSushiIDs}/>
      </div>
    );
  }
}

export default App;
