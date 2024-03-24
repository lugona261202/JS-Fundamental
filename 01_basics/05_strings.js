const name = "harshit"
const repoCount =  50

console.log (name+ repoCount+"Value" )
// this is older method of concatenation

console.log(`Hello my name is ${name} and my repo count is 
${repoCount}`)
// this is called string interpolation 
// it is a better method of string concatenation

const gameName = new String ('hitesh-hc-com')
// this is another method to declare string
// but this is object type declaration
// we can use several feature of string object if we declare it in this method

console.log(gameName[0])
// this is not an array but we can still obtain the letter at that position

console.log(gameName.length)
console.log(gameName.toUpperCase())
// all these are call by value function original string remains unchanged

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)
// excludes the last index as in other language

const anotherString = gameName.slice(-8,4)
console.log(anotherString)
// this accepts negative value too
// this means slicing will start from last

const newStringOne = "  hitesh  "
console.log(newStringOne.trim())
// this will remove the extra spaces

const url= "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
// it will simply replace all occurences 

console.log(url.includes('sundar'))
// does occurence of the provided substring exist in main string or not

console.log(gameName.split('-'))
// this will seprate string on basis of provided seperator
// it returns an array of substring





