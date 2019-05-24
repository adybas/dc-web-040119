class Cat {
  static all = []

  constructor(cat){
    this.id = cat.id
    this.name = cat.name
    this.quote = cat.quote
    this.imageURL = cat.image_url
    this.hobbies = cat.hobbies
    Cat.all.push(this)
  }

  static getCats(){
    fetch(`http://localhost:3000/cats`)
    .then(res => res.json())
    .then(cats => {
      cats.forEach(cat => {
        let catInstance = new Cat(cat)
        catInstance.render()
      })}
    )
  }

  render(){
    let container = document.querySelector('#cats')
    let catDiv = document.createElement("div")
    catDiv.classList.add("four", "wide", "column")
    catDiv.innerHTML = `<div class="ui card">
      <div class="image">
        <img src=${this.imageURL}>
      </div>
      <div class="content">
        <b>${this.quote}</b>
        <p>${this.name}</p>
        <ul>
        </ul>
      </div>
    </div>`
    container.appendChild(catDiv)
    let ul = catDiv.querySelector('ul')
    this.hobbies.forEach(h => {
      let li = document.createElement("li")
      li.innerText = h.description
      ul.appendChild(li)
    })
  }

  //Will need to POST to cats table
  static addCat(e){
    e.preventDefault()
    let data = {
      image_url: document.querySelector('form')[0].value,
      name: document.querySelector('form')[1].value,
      quote: document.querySelector('form')[2].value
    }
    fetch(`http://localhost:3000/cats`,{
    	method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
	  .then(cat => {
      let catInstance = new Cat(cat)
      catInstance.render()
    })
    e.target.reset()
  }

  //Will need POST to join table
  addHobby(e){
    console.log(this, e)
  }

  //Will need to DELETE to cats table
  deleteCat(){
    fetch(`http://localhost:3000/cats/${this.id}`, {
      method:"DELETE"
    }).then(res => res.json())
    .then(cat => {
      console.log(cat)
    })
  }

  //Will need to PATCH to cats table
  updateCat(newName){
    fetch(`http://localhost:3000/cats/${this.id}`, {
      method:"PATCH",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({
        name: newName
      })
    }).then(res => res.json())
    .then(cat => {
      console.log(cat)
    })
  }
}

//Extra code you can ignore:
// let input = document.createElement('input')
// input.placeholder = "Enter Hobby ID"
// let button = document.createElement('button')
// button.innerText = "Add Hobby"
// button.addEventListener("click", this.addHobby.bind(this))
// catDiv.querySelector(".card").appendChild(input)
// catDiv.querySelector(".card").appendChild(button)
