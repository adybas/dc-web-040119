document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded")
  let name = "Ann"
  let form = document.querySelector("form")
  form.addEventListener("submit", handleSubmit)

  // let ul = document.querySelector("ul")
  // ul.addEventListener("click", deleteTask)
});

function handleSubmit(event){
  event.preventDefault()

  //create an li
  let li = document.createElement("li")
  //select the parent element ul
  let ul = document.getElementById("tasks")
  //appendChild
  let form = event.target
  let taskString = form[0].value

  // li.innerHTML = `${taskString}<button class="delete">X</button>`
  // let button = li.querySelector('button')
  // button.addEventListener("click", deleteTask)

  li.innerText = taskString

  switch(document.querySelector("select").value){
    case "High":
      li.style.color = "red"
      li.classList.add("high")
      ul.insertBefore(li,
        
              document.querySelector(".medium") || document.querySelector(".low")

        )
      break
    case "Medium":
      li.style.color = "yellow"
      li.classList.add("medium")
      ul.insertBefore(li, document.querySelector(".low"))
      break
    case "Low":
      li.style.color = "green"
      li.classList.add("low")
      ul.appendChild(li)
      break
    default:
      li.style.color = "black"
      ul.appendChild(li)
  }

  let button = document.createElement('button')
  li.appendChild(button)
  button.innerText = 'x'
  button.addEventListener("click", deleteTask)

  form.reset()
}

function deleteTask(event){
  event.target.parentNode.remove()
}
