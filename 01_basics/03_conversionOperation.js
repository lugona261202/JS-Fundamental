let score = undefined

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) //type conversion
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33"=>33
// "33abc"=>NaN
// true =>1 ; false=>0
// null =>0
//undefined=>NaN


let isLoggedIn=" "
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1=>true; 0=>false;
//""=>false
//" "=>true
//"hitesh"=>true

let someNumber =33
let stringNumber = String (someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//***** operations******

let value =3 
let negValue = -value
//this simply makes negValue as -3

// up ahead are some basic mathematics operation
console.log (2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)// raised to the power
console.log(2/3)
console.log(2%3)

let str1 ="hello"
let str2 = " hitesh"

let str3 = str1+str2 // string concatenation supported
console.log(str3)// hello hitesh 

console.log( typeof "1"+2)//converted to string
console.log(typeof 1+"2")//converted to string
console.log(typeof "1"+2+2)//here all will be converted to string
console.log(typeof 1+2+"2")//her first addition takes place then string conversion "32"

let gameCounter = 100
++gameCounter;
console.log(gamecounter)
// this use concept of prefix and postfix operator too
