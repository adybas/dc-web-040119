import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  //state changing callback
  handleAdoptPet = (id) => {
    // let newPetArray = [...this.state.pets]
    // debugger
    // let adoptedPet = newPetArray.find(pet => pet.id === id)
    // adoptedPet.isAdopted = true
    //update state with petsCopy

    this.setState({pets: this.state.pets.map(pet => pet.id === id ?
      {...pet, isAdopted: true} :
      pet)})
    // debugger
  }

  //state changing callback
  handleChangeFilter = (event) => {
    // console.log(event)
    // event.persist()
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  //state changing callback
  handleFindPet = () => {
    // console.log("attempting to find pets")
    //make fetch, the response we get back is an array of pets
    let type = this.state.filters.type
    let URL = "/api/pets"
    if(type !== "all"){
      URL += `?type=${type}`
    }
    fetch(URL)
    .then(res => res.json())
    .then(petsArray => {
      this.setState({
        pets: petsArray
      })
    })
    //we want to store that array of pets into the state
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                handleFindPet={this.handleFindPet}
                handleChangeFilter={this.handleChangeFilter}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                listOfPets={this.state.pets}
                handleAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
