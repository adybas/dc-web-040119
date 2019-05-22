class Trainer {
  constructor(trainerObj){
    this.id = trainerObj.id
    this.name = trainerObj.name
    this.pokemons = []

    trainerObj.pokemons.forEach(p => {
      let pokemonInstance = new Pokemon(p)
      this.pokemons.push(pokemonInstance)
    })

    Trainer.all.push(this)
  }

  static getTrainers(){
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(trainersArray => {
      //GET fetch was made, now time to render onto DOM
      trainersArray.forEach(t => {
        let trainerInstance = new Trainer(t)
        trainerInstance.render()
      })
    })
  }

  render(){
    let main = document.querySelector("main")

    let trainerDiv = document.createElement("div")
    trainerDiv.classList.add("card")
    trainerDiv.dataset.id = this.id
    main.appendChild(trainerDiv)

    let paragraph = document.createElement("p")
    paragraph.innerText = this.name
    trainerDiv.appendChild(paragraph)

    let button = document.createElement('button')
    button.innerText = "Add Pokemon"
    button.dataset.trainerId = this.id
    trainerDiv.appendChild(button)
    button.addEventListener("click", Pokemon.postPokemon)

    let ul = document.createElement('ul')
    ul.dataset.ulId = this.id
    trainerDiv.appendChild(ul)

    this.pokemons.forEach(p => {
      //p is an instance of Pokemon
      p.render()
    })
  }

  static all = []
}
