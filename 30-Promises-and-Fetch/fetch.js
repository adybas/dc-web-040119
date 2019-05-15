function fetchAnimals(){
  fetch('https://animal-farm-api.herokuapp.com/animals')
  .then(response => response.json())
  .then(animalsArray =>{
    // console.log(animalsArray)
    animalsArray.forEach(renderToDOM)
  })
}
