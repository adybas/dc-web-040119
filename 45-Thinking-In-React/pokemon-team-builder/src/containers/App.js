import React, { Component } from 'react';
import '../App.css';
import PokemonList from './PokemonList'
import StatsDisplay from '../components/StatsDisplay'
import Searchbar from '../components/Searchbar'

const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=100'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      pokemonTeam: [],
      scoutingPokemon: null,
      searchTerm: ""
    }
  }

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  componentDidMount(){
    fetch(ALL_POKEMON_URL)
    .then(res => res.json())
    .then(pokemonInfoObject => {
      this.setState({allPokemon: pokemonInfoObject.results})
    })
  }

  handleScoutPokemon = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(pokemonData => {
      this.setState({scoutingPokemon: pokemonData})
    })
  }

  handleAddPokemon = (pokemon) => {
    if(this.state.pokemonTeam.length < 6){
      this.setState({pokemonTeam: [...this.state.pokemonTeam, pokemon]})
    }else{
      alert("Can't have more than 6 pokemon on a team... duh!")
    }
  }

  handleRemovePokemon = (pokemon) => {
    console.log("attmepting to remove pokemon", pokemon)
    let copy = [...this.state.pokemonTeam]
    let index = copy.findIndex(p => p.name === pokemon.name)
    copy.splice(index, 1)
    this.setState({pokemonTeam: copy})
  }

  handleClearTeam = () => {
    this.setState({pokemonTeam:[]})
  }

  getWildPokemon = () => {
    return this.state.allPokemon.filter(pokemon => !this.state.pokemonTeam.includes(pokemon))
  }

  getFilteredWildPokemon = () => {
    return this.getWildPokemon().filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  render() {
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <h4>Pokemon Team:</h4>

        {/*Pokemon Team*/}
        <PokemonList
          pokemons={this.state.pokemonTeam}
          handleClickPokemon={this.handleRemovePokemon}
          handleScoutPokemon={this.handleScoutPokemon}
        />
        <br></br>
        <button onClick={this.handleClearTeam}>RESET TEAM</button>
        <br></br>
        <br></br>

        <StatsDisplay pokemonToDisplay={this.state.scoutingPokemon}/>

        <Searchbar handleSearch={this.handleSearch}/>
        <h4>Wild Pokemon:</h4>

        {/*Wild Pokemon*/}
        <PokemonList
          pokemons={this.getFilteredWildPokemon()}
          handleClickPokemon={this.handleAddPokemon}
          handleScoutPokemon={this.handleScoutPokemon}
          />
      </div>
    );
  }
}

export default App;
