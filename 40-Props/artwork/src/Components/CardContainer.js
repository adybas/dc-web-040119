//class component
import React from 'react'
import Card from './Card'
import paintings from '../data/paintings'

class CardContainer extends React.Component {
  render(){
    // console.log(paintings)
    return (
      <div>
        {paintings.map( paintingObj => <Card
          key={paintingObj.id}
          painting={paintingObj}
        />)}
      </div>
    )
  }
}

export default CardContainer
