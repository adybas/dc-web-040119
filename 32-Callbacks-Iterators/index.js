//I want to alert 2, 3, 4, 5, 6 (adding 1)
let arr = [1,2,3,4,5]

// arr.forEach(addOneAndAlert)

function addOneAndAlert(currentValue, index){
  let num = currentValue + index
  alert(num)
}

//Create my own for each that takes in an array, takes in a function, And
//
function myForEach(array, callback){
  //the func acts on each element in the array
  for(let i=0; i<array.length; i++){
    callback(array[i], i)
  }
  //don't worry about return
}

// myForEach(arr, addOneAndAlert)

//Create our own map
//iterate over the array
function myMap(array, callback){
  let newArray = []
  for(let i=0; i<array.length; i++){
    let transformedValue = callback(array[i])
    newArray.push(transformedValue)
  }
  return newArray
}
//return a new array

function timesTwo(el){return el * 2}

myMap(arr, timesTwo)

//what does .filter return?
//what does .filter's callback function return?
function myFilter(array, callback){
  let newArray = []
  for(let i=0; i<array.length; i++){
    let bool = callback(array[i])
    //put a condition, if true,
    if(bool){
      newArray.push(array[i])
    }
    //then push the item into the array


  }
  return newArray
}

function getOdd(el){
  return el%2 !== 0
}

myFilter(arr, getOdd)
//






























// document.addEventListener("click", sayHi)
//
//
//function addEventListener(type, callback){
//  let e = /*Create the event object*/
//  ...
//  callback(e)
//}

// function sayHi(event){
//   console.log(event, "says hi")
// }
