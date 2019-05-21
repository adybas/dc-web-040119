//JS is based off of functions
//How do we use functions to simulate OO

//literal syntax
// let ann = {
//   firstName: "Ann",
//   lastName: "Duong"
// }
//
// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen"
// }

//object Factory
function instructorFactory(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}


//ES5 way to make objects and instances
// function Instructor(firstName, lastName){
//   //this === {}
//   // debugger
//   this.firstName = firstName
//   this.lastName = lastName
//   Instructor.all.push(this)
// }
//
// Instructor.prototype.greet = function(){
//   console.log(`${this.firstName} says hi`)
// }
// Instructor.prototype.goHome = function(){
//   console.log(`${this.firstName} is going home`)
// }
//
// Instructor.giveLecture = function(){
//   console.log("LECTURE TIME!!!")
// }
//
// Instructor.all = []


//ES6 way of writing classes
class Person{
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  greet(){
    console.log(`${this.firstName} says hi`)
  }
}

class Instructor extends Person{
  constructor(firstName, lastName, employeeId, bff){
    super(firstName, lastName)
    this.employeeId = employeeId
    this.bffs = []
    Instructor.all.push(this)
  }

  goHome(){
    console.log(`${this.firstName} goes home`)
  }
  
  addFriend(friend){
    this.bffs.push(friend)
  }

  static giveLecture(){
    console.log("LECTURE TIME!!!")
  }
  static all = []

}

var ann = new Instructor("Ann", "Duong", 1)
var paul = new Instructor("Paul", "Nicholsen", 2, ann)
var jane = new Person("Jane", "Doe")


//var ann = {}.Instructor()
var jc = new Instructor("JC", "Chang", 3)
var bruno = new Instructor("Bruno", "GG", 4)











//
