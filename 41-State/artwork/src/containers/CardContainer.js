//class component
import React from 'react'
import Card from '../components/Card'
import paintings from '../data/paintings'

class CardContainer extends React.Component {
  //generate a filtered Array,
  //map through that filtered Array and make <Card>
  render(){
    let filteredArray = paintings.filter(painting => painting.title.includes(this.props.searchTerm))
    // console.log("inside card container", this.props.changeCurrentPainting)
    return (
      <div>
        {filteredArray.map( paintingObj => <Card
          key={paintingObj.id}
          painting={paintingObj}
          clickThisPainting={this.props.changeCurrentPainting}
        />)}
      </div>
    )
  }
}

export default CardContainer
