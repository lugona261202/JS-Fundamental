const score = 400

const balance = new Number (100)
console.log(balance);
// this way we declare number by declaring object
// thus all features can be used for balance object

console.log (balance.toString().length)
// we convert number into string
// this way we can use additional feature of string too

console.log(balance.toFixed(2))
// it specifies upto which decimal data will exist
// useful when data goes till many places of decimal

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3))
// this will return number in form of string
// data can be input from range 1-21
// here digits before decimal are also considered
// so overall number gets rounded of till precise digits

const hundereds = 10000
console.log(hundereds.toLocaleString())
// this will represent number in foreign form

console.log(hundereds.toLocaleString('en-IN'))
// this will represent number in indian form

// minvalue , maxvalue , infinite value numbers can be given manu such value in javascript


// *********maths

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
// upper round off
console.log(Math.floor(4.9))
// lower round off
console.log(Math.min(4,3,5,2))
console.log(Math.max(4,3,2,5))


console.log(Math.random())
// values are generated between 0-1
console.log(Math.random()*10+1)
// we want number in 0-10 hence we multiply 10 and adding 1 is a safe measure
console.log(Math.floor(Math.random()*10+1))
// number obtained will be integer

const min = 10
const max= 20

console.log(Math.floor(Math.random()*(max-min+1)) +min)
// an integer between given min and max range will be obtained everytime








