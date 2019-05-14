document.addEventListener("DOMContentLoaded", function(){
  let emailElements = document.querySelectorAll(".email")
  emailElements.forEach((emailElement)=>{
  	emailElement.addEventListener("click", sendEmail)
  })

  let form = document.querySelector("form")
  form.addEventListener("submit", handleSubmit)
})

function handleSubmit(event){
  event.preventDefault()

  let firstName = document.getElementById("firstNameInput").value
  let lastName = document.getElementById("lastNameInput").value
  let email = document.getElementById("emailInput").value
  event.target.reset()

  addNewRow(firstName, lastName, email)
}

function sendEmail(e){
	console.log("Sending an email to " + e.target.innerText)
}

function addNewRow(firstName, lastName, email){
  // let tBodyElement = document.querySelector('tbody')
  //
  // tBodyElement.innerHTML += `<tr id="row-3">
  //   <td class="firstName">${firstName}</td>
  //   <td class="lastName">${lastName}</td>
  //   <td class="email">${email}</td>
  // </tr>`

  var trElement = document.createElement('tr')
  //find the tBody, give it a variable name,
  //tBodyElement.appendChild
  let tBodyElement = document.querySelector('tbody')
  tBodyElement.appendChild(trElement)

  let firstNameElement = document.createElement('td')
  let lastNameElement = document.createElement('td')
  let emailElement = document.createElement('td')
  emailElement.addEventListener("click", sendEmail)

  firstNameElement.innerText = firstName
  lastNameElement.innerText = lastName
  emailElement.innerText = email
  // trElement.appendChild(firstNameElement)
  // trElement.appendChild(lastNameElement)
  // trElement.appendChild(emailElement)
  trElement.append(firstNameElement, lastNameElement, emailElement)
}
