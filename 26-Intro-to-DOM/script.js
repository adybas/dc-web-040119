console.log('connected')




function addNewRow(firstName, lastName, email){
  let tBodyElement = document.querySelector('tbody')

  tBodyElement.innerHTML += `<tr id="row-3">
    <td class="firstName">${firstName}</td>
    <td class="lastName">${lastName}</td>
    <td class="email">${email}</td>
  </tr>`

  // var trElement = document.createElement('tr')
  // //find the tBody, give it a variable name,
  // //tBodyElement.appendChild
  // let tBodyElement = document.querySelector('tbody')
  // tBodyElement.appendChild(trElement)
  //
  // let firstNameElement = document.createElement('td')
  // let lastNameElement = document.createElement('td')
  // let emailElement = document.createElement('td')
  //
  // firstNameElement.innerText = firstName
  // lastNameElement.innerText = lastName
  // emailElement.innerText = email
  // // trElement.appendChild(firstNameElement)
  // // trElement.appendChild(lastNameElement)
  // // trElement.appendChild(emailElement)
  // trElement.append(firstNameElement, lastNameElement, emailElement)
}
