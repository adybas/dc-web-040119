import React, { Component } from 'react';
import HogCard from '../components/HogCard'
import hogs from '../porkers_data';

class HogsContainer extends Component {

  state = {
    hogs: [],
    pigGifs: null
  }

  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/search?api_key=eMyX88QqV44OqVyx5L0mo8skrnaUI14b&q="pig"&limit=13')
    .then(r => r.json())
    .then(data => this.addGifUrls(data["data"]))
  }

  addGifUrls(gifsArr){
    let i = -1
    let hogsCopy = hogs.map((hog) => {
      i++
      return {...hog, gifUrl: gifsArr[i].images.fixed_width.url}
    })
    this.setState({
      hogs: hogsCopy
    })
  }

  sortHogsList = () => {

    let {sort, greasedOnly}= this.props
    let hogsArr = this.handleFilters()



    if(greasedOnly){
      hogsArr = hogsArr.filter(hog => hog.greased)
    }
    return hogsArr
  }

  handleFilters = () => {

    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let {sort} = this.props
    let fullHogsArr = this.state.hogs

    switch(sort) {
      case "name":
        return fullHogsArr.sort((a,b) => {
          if(a.name < b.name){ return -1
          } if(a.name > b.name){
            return 1
          } return 0
        })
      case "weight":
        return fullHogsArr.sort((a,b) => {
          return a[weight] - b[weight]
        })
      default:
        return fullHogsArr
    }

  }

  render(){
    return(
      <div className="ui cards four column grid container">
      {
        this.sortHogsList().map((hog,i) => <HogCard key={i+1} id={i+1} hog={hog}
      />)}
      </div>
    )
  }
}

export default HogsContainer
