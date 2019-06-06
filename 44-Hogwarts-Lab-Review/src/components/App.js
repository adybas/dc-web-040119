import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Menu from '../containers/Menu'
import HogsContainer from '../containers/HogsContainer'

const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

class App extends Component {

  state = {
    hogsArr: [],
    showGreasedOnly: false
  }

  componentDidMount(){
    this.setState({hogsArr: hogs})
  }

  handleSortMethod = (sortTerm) => {

    console.log(sortTerm)
    switch(sortTerm){
      case "name":
       console.log("sorting by name")
       //sort by name
       this.setState({hogsArr: this.state.hogsArr.sort(function(a,b){
         let hog1 = a.name.toLowerCase()
         let hog2 = b.name.toLowerCase()
         if(hog1 < hog2){return -1}
         if(hog1 > hog2){return 1}
         return 0
       })
     })
      break
      case "weight":
       console.log("shorting by weight")
       this.setState({hogsArr: this.state.hogsArr.sort(function(a,b){return a[weight] - b[weight]})})
       break
      default:
    }
  }

  handleFilterGreasedHogs = (checkedBoolean) => {
      // this.setState({
      //   showGreasedOnly: checkedBoolean
      // })
      if(checkedBoolean){
        this.setState({
          hogsArr: this.state.hogsArr.filter(hog => hog.greased)
        })
      }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Menu handleSort={this.handleSortMethod} handleGreased={this.handleFilterGreasedHogs}/>
          <HogsContainer hogs={this.state.hogsArr.filter(hog => this.state.showGreasedOnly ? hog.greased : hog)}/>
      </div>
    )
  }
}

export default App;
