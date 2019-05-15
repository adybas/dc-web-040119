document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector('button')
  button.addEventListener("click", fetchAnimals)
})

function fetchAnimals(){
  fetch('https://animal-farm-api.herokuapp.com/animals')
  .then(response => response.json())
  .then(animalsArray =>{
    // console.log(animalsArray)
    animalsArray.forEach(renderToDOM)
  })
}

function renderToDOM(animal){
  console.log(animal)
  let container = document.querySelector(".container")
  let header = document.createElement("h3")
  header.innerText = `${animal.name} (${animal.species})`
  container.appendChild(header)

  let image = document.createElement("img")
  image.src = animal.img
  container.appendChild(image)
}
