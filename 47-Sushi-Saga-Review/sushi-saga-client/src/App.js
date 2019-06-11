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
      startingIndex: 0,
      wallet: 100
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

  eatSushiHandler = (id, price) => {
    console.log("executing <App /> 's eatSushiHandler()");
    //* wallet related:
    let newBalance = this.state.wallet - price;

    if (newBalance < 0){
      alert("Lacking funds!");
      return;
    }

    //* eatenSushi related:

    //check if this sushi has already been eated
      // (in case someone clicks on the empty plate in belt)
    if (this.state.eatenSushiIDs.includes(id)){
      alert("Trying to eat a plate??");
      return;
    }

    // given ID of just-eaten Sushi:
    // update <App /> state
      // this.state.eatenSushiIDs should include the ID of what just got eaten!!
    let copy = [...this.state.eatenSushiIDs];
    copy.push(id)

    this.setState({
      wallet: newBalance,
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

  handleMoreButton = () => {
    let newIndex = this.state.startingIndex + 4;

    this.setState({startingIndex: newIndex})
  }


  render() {
    console.log("executing <App /> 's render()")

    return (
      <div className="app">
        <SushiContainer
         eatenSushiIDs={this.state.eatenSushiIDs}
         eatSushiHandler={this.eatSushiHandler} sushiToDisplay={this.deriveSushiGivenStartingIndex()}
         handleMoreButton={this.handleMoreButton}
         />
        <Table eatenSushiIDs={this.state.eatenSushiIDs} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
