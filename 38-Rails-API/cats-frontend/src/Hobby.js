class Hobby {

  static all = []

  constructor(hobby){
    this.id = hobby.id
    this.description = hobby.description
    this.materials = hobby.materials
    Hobby.all.push(this)
  }

  static getHobbies(){
    fetch(`http://localhost:3000/hobbies`)
    .then(res => res.json())
    .then(hobbies => {
      hobbies.forEach(hobby => {
        let hobbyInstance = new Hobby(hobby)
        hobbyInstance.render()
      })
    })
  }

  render(){
    let ul = document.querySelector("#hobbies")
    let li = document.createElement("li")
    li.innerText = `${this.description}: ${this.materials}`
    ul.appendChild(li)
  }
}
