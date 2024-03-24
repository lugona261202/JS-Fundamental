// data is generally categorised into two categories
// depending on how data is stored and accessed

//Primitive
//  7 types : string , number, boolean , null , undefined, symbol , BigInt
// these are call by value types , copy is worked upon

const score = 100
const scoreValue=100.3//both are number no such thing as float 

const isLoggedIn = false
const outsideTemp= null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
// even though same data is passed still both are unique
// if you try to compare them false will be returned

const bigNumber = 2343543243245n
// use this small n in end it will be accepted as type bigint


// Reference (Non primitive)
// array, objects , funcions

const heros=["shaktiman","naagraj",'krrish'];
// returns type as object 
let myObj = {
    name :"harshit",
    age:22,
}
// returns type as object

const  myfunction = function(){
  console.log("hello world")  
}
// returns type as function 

// generally all non primitive type has data type as objects except funcition


console.log(typeof myObj)