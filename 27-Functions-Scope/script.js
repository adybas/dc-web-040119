


// function funcDeclaration(){
//   console.log("Inside a function declaration")
// }
//
// const funcExpression = function annsFunction(){
//   console.log("Inside a function expression")
// }
//
// const arrowFunction = () => {
//   console.log("inside an arrow function")
// }
//
// function returnTwiceValue(num){
//   return num * 2
// }
//
// const returnThriceValue = num => num * 3
//
// [3,4,5].map(function(el){return el*10})
//
//
//
//
// funcDeclaration()
// funcExpression()
// arrowFunction()

//Scope

//var, let, and const
// var a = 7
// a = 9
// a = 10
//
// let b = 1
// b = 2
// b = 3
//
// const c = {name: "Jonnel"}
// c.age = 'mid 20s'
//
//
// const d = [1,2,3,4]
// d.push(5)
// d = [1,2,3,4,5,6]


function outter(){
  var firstname = "Ann"
  if(true){
    var firstname = "Paul"
    console.log("Inside a block:", firstname)
  }
  console.log("Inside outter:", firstname)
}

outter()





















//enter file -> the global function/scope

// function sayHi(){
//   console.log("Hello World!")
// }
//
// function greet(){
//   console.log("How are you?")
//   answer()
// }
//
// function answer(){
//   console.log("Me? I'm great")
// }
//
// sayHi()
// greet()



//console starts here
