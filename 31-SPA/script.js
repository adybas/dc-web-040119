/* When <some event> happens, I want to make a <what kind of?> fetch and manipulate the DOM <how?>
*/

//1) As a user, I can view all pokemon
//When the page loads, I want to make a GET fetch, and append all pokemon to the pokemon-container

//2) When the form is submitted, I want to make a POST fetch, and append just the new pokemon

//3) When a pokemonDiv is clicked, I want to make a DELETE fetch, and pokemonDiv.remove()

document.addEventListener("DOMContentLoaded", function(){
  let form = document.querySelector("form")
  form.addEventListener("submit", handleSubmit)

  fetchAllPokemon()
});

function handleSubmit(e){
  e.preventDefault()
  postPokemon()
}

function postPokemon(){
  let name = document.querySelector("#name-input").value
  let sprite = document.querySelector("#sprite-input").value

  fetch("http://localhost:3000/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      sprite: sprite
    })
  })
  .then(response => response.json())
  .then(newPokemon => {
    renderPokemonToDom(newPokemon)
  })
}

function fetchAllPokemon(){
  fetch('http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(jsonData => {
    //do some stuff with jsonData
    jsonData.forEach(renderPokemonToDom)
  })
}

function renderPokemonToDom(pokemon){
  // console.log(pokemon)
  //create a div for the pokemon
  let pokemonDiv = document.createElement("div")
  let headerDiv = document.createElement("h2")
  let imageDiv = document.createElement("img")
  pokemonDiv.append(headerDiv, imageDiv)

  //get the parent element
  let pokemonContainer = document.querySelector("#pokemon-container")
  //append child to parent
  pokemonContainer.appendChild(pokemonDiv)

  //add content
  imageDiv.src = pokemon.sprite
  headerDiv.innerHTML = pokemon.name
  pokemonDiv.classList.add("card")
  pokemonDiv.id = "pokemon-" + pokemon.id
  pokemonDiv.addEventListener("click", deleteFetch)
}

function deleteFetch(e){
  let id = e.currentTarget.id.split("-")[1]

  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(json => {
    document.querySelector(`#pokemon-${id}`).remove()
  })
}







//some functions in javascript, when they are appsed as a callback, get a special param

//array.forEach(aFunc)
//
//function aFunc(element){ console.log(element) }

//node.addEventListener("click", anotherFunc)
//
//function anotherFunc(e){ console.log(e) }
