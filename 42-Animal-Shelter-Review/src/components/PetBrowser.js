import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // console.log("PetBroswer's props: ", this.props.listOfPets)
    return (
      <div className="ui cards">
        {this.props.listOfPets.map((petObj, index) => <Pet
          pet={petObj}
          key={petObj.id}
          index={index}
          handleAdoptPet={this.props.handleAdoptPet}
        />)}
      </div>
    )
  }
}

export default PetBrowser
