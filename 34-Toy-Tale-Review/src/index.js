document.addEventListener('DOMContentLoaded', function(){
  fetchToys()
})

// {
//   id: 1
// image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"
// likes: 5
// name: "Woody"
// }

const addBtn = document.getElementById('new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// get all toys
function fetchToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => toys.forEach(renderToy))
}

// hide & seek with the form
addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    toyForm.addEventListener('submit', handleSubmitForm)
  } else {
    toyForm.style.display = 'none'
  }
})

// add new toy
function handleSubmitForm(e){
  e.preventDefault()
  const toyName = document.getElementById('name-field').value
  const toyImg = document.getElementById('img-url-field').value
  console.log('adding new toy')
  fetch('http://localhost:3000/toys',
  { method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
    body: JSON.stringify({
      "name": toyName,
      "image": toyImg,
      "likes": 0
    })}
  )
  .then(res => res.json())
  .then(newToyObj => renderToy(newToyObj))
}

// render toy object to DOM
function renderToy(toy){
  let card = document.createElement('div')
  let container = document.getElementById('toy-collection')
  card.className = "card"
  container.prepend(card)
  const h2 = document.createElement('h2')
  h2.innerText = toy.name
  const img = document.createElement('img')
  img.src = toy.image
  img.className = "toy-avatar"
  const p = document.createElement('p')
  p.id = `likes-${toy.id}`
  p.innerText = `${toy.likes} Likes`
  const button = document.createElement('button')
  button.innerText = `Like <3`
  button.addEventListener('click', () => handleIncrementLikes(toy.id, toy.likes))
  card.append(h2, img, p, button)
}

// increment individual toy likes
function handleIncrementLikes(toyId, toyLikes){
  console.log(toyLikes)
  let likeDiv = document.getElementById(`likes-${toyId}`)
  let likesNum = parseInt(likeDiv.innerText.split(" ")[0])

  let data = {
    "likes": ++likesNum
  }

  const configObj = {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body: JSON.stringify(data)
  }

  fetch(`http://localhost:3000/toys/${toyId}`,
    configObj)
    .then(res => res.json())
    .then(updatedToyObj => likeDiv.innerText = `${updatedToyObj.likes} Likes`)
}
