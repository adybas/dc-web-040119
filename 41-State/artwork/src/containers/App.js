import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header'
import CardContainer from './CardContainer'
import Search from '../components/Searchbar'
import PaintingDisplay from '../components/PaintingDisplay'

class App extends Component {
  state = {
    searchTerm: "",
    currentPainting: null
  }

  //write an instance method inside App that changes the searchTerm
  changeSearchTerm = (event) => {
    //change this.state.searchTerm
    this.setState({
      searchTerm: event.target.value
    })
    //some code
  }

  //write an instance method inside App that changes the currentPainting
  changeCurrentPainting = (paintingObj) => {
    console.log("attempting to change current painting: ", paintingObj)
    this.setState({
      currentPainting: paintingObj
    })
  }

  render() {
    // console.log("inside App render", this)
    return (
      <div className="App">
        <Header
          color="green"
          title="Painter"
          tagline="uhhhh"
          icon="meh outline"
        />
        <PaintingDisplay displayPainting={this.state.currentPainting}/>
        <Search changeFunction={this.changeSearchTerm}/>
        <CardContainer
          searchTerm={this.state.searchTerm}
          changeCurrentPainting={this.changeCurrentPainting}
        />
      </div>
    );
  }
}

export default App;
