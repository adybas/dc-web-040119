import React from 'react'
import PokemonCard from '../components/PokemonCard'

class PokemonList extends React.Component {
  render(){
    return(
      <div>
        {this.props.pokemons.map(pokemon => <PokemonCard
          handleClickPokemon={this.props.handleClickPokemon}
          handleScoutPokemon={this.props.handleScoutPokemon}
          pokemon={pokemon}
          key={pokemon.name}
        />)}
      </div>
    )
  }
}

export default PokemonList
