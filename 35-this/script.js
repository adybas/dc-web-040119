// "use strict"
// console.log(this)
//this === window

// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen",
//   greet: function(){
//     console.log(`${this.firstName} says hi`)
//
//     const makeFullName = () => {
//       this.fullName = `${this.firstName} ${this.lastName}`
//     }
//
//     makeFullName()
//
//     // globalFunction()
//
//   }
// }

//outer scope's this === window
// function globalFunction (){
//   this.globalProperty = "hello world"
// }


// let ann = {
//   firstName: "Ann",
//   lastName: "Duong",
//   greet: greet
// }

//if we are not invoking off anything, the value of this is the window
//an implied invocation off the window object

//arrow functions do not create their own this
//they inherit the valye of this from the parent scope


//if you want to custom ser the vaue of this
// .bind()


var ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}



function greet(person1, person2, person3){
  console.log(`${this.firstName} says hi to ${person1} and ${person2} and ${person3}`)
}

//returns a new function that is a copy of the old function but with the value of this set
var boundedGreet = greet.bind(ann, "J" + "C")
//you can't re-bind a function
var anotherBoundedGreet = greet.bind(paul)




var paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet,
  boundedGreet: boundedGreet
}






//
