import React from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const medal = 'highest medal achieved'

class HogCard extends React.Component {


  state = {
    showDetails: false,
    rendered: false
  }

  getImgPath(hogName){
    let underscored = hogName.split(" ").join("_")
    return underscored.toLowerCase()
  }

  handleCardClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  handleRender = () => {
    this.setState({
      rendered: !this.state.rendered
    })
  }

  render(){
    const { hog, imgUrl } = this.props
    const { id, name, specialty, greased, gifUrl } = hog

    return(
      <div className="ui card">
      <h2>{name}</h2>
      <button className="render-btn" onClick={this.handleRender}>Render</button>
      <div className="description">
        {!this.state.showDetails ?
          <div className="hog-image">
            <img onClick={this.handleCardClick} className="ui fluid image" src={!this.state.rendered ? gifUrl : 'https://media.giphy.com/media/Ikr4kgkRbL1qo/giphy.gif'}/>
          </div>
        :
          <div onClick={this.handleCardClick}>
            <div>Specialty: {specialty}</div>
            <div>{weight}: {this.props.hog[weight]}</div>
            <div>Highest Medal Achieved: {this.props.hog[medal]}</div>
            <div>{greased ? "Greased" : "Not Greased"}</div>
          </div>
        }
      </div>
      </div>
    )
  }
}

export default HogCard
