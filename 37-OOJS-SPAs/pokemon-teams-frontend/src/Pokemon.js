class Pokemon {
  constructor(pokemonObj){
    this.id = pokemonObj.id
    this.nickname = pokemonObj.nickname
    this.species = pokemonObj.species
    this.trainerId = pokemonObj.trainer_id
    Pokemon.all.push(this)
  }

  render(){
    let ul = document.querySelector(`[data-ul-id='${this.trainerId}']`)
    let li = document.createElement("li")
    li.innerText = `${this.nickname} (${this.species})`
    ul.appendChild(li)

    let button = document.createElement("button")
    button.innerText = "Release"
    li.appendChild(button)
    button.classList.add("release")
    button.dataset.pokemonId = this.id
    button.addEventListener("click", this.releasePokemon)
  }

  releasePokemon(e){
    let pokemonId = e.target.dataset.pokemonId
    fetch(`${POKEMONS_URL}/${pokemonId}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(pokemon => {
      e.target.parentNode.remove()
    })
  }

  static postPokemon(event){
    let trainerId = event.target.dataset.trainerId
    let trainerInstance = Trainer.all.find(t => t.id === parseInt(trainerId))
    if(trainerInstance.pokemons.length < 6){ //if trainer has less then 6 pokemon
      fetch(POKEMONS_URL, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "trainer_id": trainerId
        })
      }).then(res => res.json())
      .then(newPokemon => {
        let pokemonInstance = new Pokemon(newPokemon)
        trainerInstance.pokemons.push(pokemonInstance)
        pokemonInstance.render()
      })
    }else{
      alert("6 pokemon max. Please release a pokemon before adding another")
    }
  }

  static all = []
}
