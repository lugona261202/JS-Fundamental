//const tinderUser = new Object() // singleton
const tinderUser ={} // non singleton

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)
// sometimes before fullname . we put a ?
// this is like a conditional statement
// it checks if further nesting exist, if not then it directly calls username
/*
const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}
const obj4 ={5: "a", 6:"b"}

//const obj3 = {obj1,obj2}
// this way of combining does not work it will store simply objects inside objects

const obj3 = Object.assign( {},obj1,obj2,obj4)
// prefer writing this way as {} is optional
// {} acts as target and all other objects merge into target
// if{} is not there all will merge into obj1
console.log(obj1)
console.log(obj3)

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3)

// when data of user comes from database it comes in form of array of objects
const user = [
    {
        id:1,
        email:"h@gmail.com"
    }
    {
        id:1,
        email:"h@gmail.com"
    }
]
console.log(user[1].email)
// we can also use loop learnt in later classes

console.log(tinderUser)

console.log(Object.keys(tinderUser))
// this returns all the keys of object tinderuser in form of arrays
// this is widely used later on

console.log(Object.values(tinderUser))
// similarly values can also be obtained

console.log(Object.entries(tinderUser))
// an array of each key and value exist inside main array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// checks if that key or property exists or not 
// return type is boolean
*/
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

console.log(course.courseInstructor)
// but this method is too tedious

const {courseInstructor: instructor} = course
console.log(instructor)
// this is called destructuring
// it is used in react and at many places
console.log(course.price)
const {price : pp} = course
console.log(pp)
//when u notice{} with keys understand destructuring is taking place

//API
//these are nothing but data which u get in response to your fetch command
// API are generally random cluster form
// these simply contains json files
// all we need to do is to convert all json files into objects and arrays
// then we work upon them

{
    "name":"hitesh"
    "coursename":"js in hindi"
    "price":"free"
}
// json file like objects
// key always in string
// resembles to objects
// they don't have a name =>most important feature
[
    {},
    {},
    {},
]
//json file like array containing objects
// they don't have a name =>most important feature


