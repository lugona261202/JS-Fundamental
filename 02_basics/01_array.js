// array

const myArr = [0,1,2,5,6]
// array in javascript are resizazble
// they can contain a mix of data type
// array in java script when copied create shallow copies
// shallow copies means both have same reference

const myheros = ["shaktiman", "krrish"]

const myArr2 = new Array(1,2,3,4)
// creating array using object

// array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
console.log(myArr)
console.log(myArr[0])
// data is inserted in start
// previous data has to be shifted
// not the most optimized method of add eleemnts in first

myArr.shift()
console.log(myArr)
//removes the element from first

console.log(myArr.includes(9))
// returns true or false
// return datatype is boolean

console.log(myArr.indexOf(19))
// if not exist -1 is returned

const newArr = myArr.join()
console.log(newArr)
// joins array also changes return type to string

// slice, splice

console.log("A",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)

// splice includes last index
// also after using splice original array is changed
// the spliced part is cut out from the array and remaining element appear


