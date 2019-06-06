import React from 'react'
import HogCardBack from './HogCardBack'


class HogCard extends React.Component{

  state = {
    showDetails: false
  }

  handleCardClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  parseImgName = () => {
    let lowercased = this.props.hog.name.toLowerCase()
    let splitName = lowercased.split(" ")
    return splitName.join("_")
  }

  render(){
    // console.log(this.props.hog)
    return(
      <div className="ui card" onClick={this.handleCardClick}>
      <h2>{this.props.hog.name}</h2>

        {
        !this.state.showDetails ?
        <div>
          <img src={require(`../hog-imgs/${this.parseImgName()}.jpg`)} />
        </div>
        :
        <div>
        <HogCardBack hog={this.props.hog}/>
        </div>
        }
      </div>
    )
  }
}

export default HogCard
