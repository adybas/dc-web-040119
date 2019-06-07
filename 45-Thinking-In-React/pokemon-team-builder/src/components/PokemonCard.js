import React from 'react'

const PokemonCard = (props) => {
  return (
    <div
      onClick={function(){props.handleScoutPokemon(props.pokemon.url)}}
      onDoubleClick={function(){props.handleClickPokemon(props.pokemon)}}
      className="pokemon card">{props.pokemon.name}
    </div>
  )
}

export default PokemonCard
