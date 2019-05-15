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
