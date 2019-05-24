document.addEventListener('DOMContentLoaded', init)

function init(){
  Cat.getCats()
  Hobby.getHobbies()
  document.querySelector("form").addEventListener("submit", Cat.addCat)
}
