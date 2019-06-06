import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from '../containers/HogsContainer'
import SearchBar from './SearchBar'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {

  state = {
    sort: "",
    showGreasedOnly: false
  }

  handleSort = (e) => {
    this.setState({
      sort: e.target.value
    }, () => {console.log(this.state.sort)})
  }

  handleShowGreased = (e) => {
    this.setState({
      showGreasedOnly: !this.state.showGreasedOnly
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < SearchBar
            handleSort={this.handleSort}
            handleCheck={this.handleShowGreased}
            greasedOnly={this.state.showGreasedOnly}/>
          < HogsContainer hogs={hogs} sort={this.state.sort} greasedOnly={this.state.showGreasedOnly}/>
      </div>
    )
  }
}

export default App;
