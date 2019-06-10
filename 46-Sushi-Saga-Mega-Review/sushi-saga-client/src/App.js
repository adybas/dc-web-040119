import React, {Component} from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  // def initialize
  constructor(){
    super();

    // debugger
    this.state = {
      currentPage: 1,
      sushis: [],
      eatenSushis: [],
      wallet: 100
    }
  }

  /*
  mod 3 stuff
  let div = document.createElement("div")

  document.getElementById("root").appendChild(div)
  */
  componentDidMount(){
    // once <App /> is on the DOM, do the following:

    // debugger
    // fetch(API+`?_page=${this.state.currentPage}&_limit=4`)
    fetch(`${API}?_page=${this.state.currentPage}&_limit=4`)
    .then(res => res.json())
    .then(data => {
      // at this point, we have the first 4 sushi
      // add to state, pass that state down as props
      // console.log(this)
      // debugger
      this.setState({
        sushis: data
      })
    })
  }


  moreButtonHandler = () => {
    // update app state to house the 4 new sushi from DB
    // this.setState

    console.log("fetching more!!")
    // hey! what is the current page?
    // lets go to the one after the current page!

    let nextPage = this.state.currentPage + 1;
    fetch(API+`?_page=${nextPage}&_limit=4`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      this.setState({
        sushis: data,
        currentPage: nextPage
      })
    })
  }

  eatSushiHandler = (sushiID, sushiPrice) => {
    console.log("eaten number " + sushiID + "!!!")

    // given a sushi ID
    // add sushi ID to this.state.eatenSushis

    // make a copy of the array
    // edit the copy
    // add the copy to state, it should replace the original array
    let copy = [...this.state.eatenSushis];
    // if this.state.eatenSushis = [{},{}]
    copy.push(sushiID)

    // lets update wallet

    let newWallet = this.state.wallet - sushiPrice

    // debugger
    this.setState({
      eatenSushis: copy,
      wallet: this.state.wallet - sushiPrice
    })
  }




  // flow so far:
  // 1. constructor
  // 2. render
  // 3. componentDidMount
  // 4. render
  // 5. when click < MoreButton />
  //     App.setState() aka get new Sushi
  //     since using .setState() => trigger "re-render"
  // 6. render



  render() {
    // debugger
    // debugger
    // let obj = {"allo_there": "yabadoo", "b": 2}
    // const {allo_there} = obj
    // const {Component} = React
    // // console.log("obj at key of a:", allo_there)
    // console.log("react:", React.Component)
    // debugger

    console.log("this.state.sushis is...", this.state.sushis)
    return (
      <div className="app">
        <SushiContainer eatenSushis={this.state.eatenSushis} four_sushis={this.state.sushis} moreButtonHandler={this.moreButtonHandler}
        eatSushiHandler={this.eatSushiHandler}
         />
        <Table wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
