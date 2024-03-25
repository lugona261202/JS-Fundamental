const user = {
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
        // this shows the context of code
        //with this two context will be show
        //one of sam other of hitesh
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)
//however this does not have any context in gobal scope
//thus it will return empty object{}
//but if this was run in a browser
//a window context would be shown which is a type of global scope ...just remember

function chai(){
    let username = "hitesh"
    console.log(this)
    //this will show many attributes of the context
}
chai()
//if this.username is selected then it will return undefined
//thus unlike object this cannot be used to access attributes

const chai = function (){
    let username ="hitesh"
    console.log(this.username)
}
chai()
// even though function is declared in different way
//still this will act in same way regardless

const chai =  () => {
    let username ="hitesh"
    console.log(this.username)
}
chai()
// this is arrow function ..discussed in detail below
// for the time being understand that contrary to general perception
// this can be used in arrow function two just like the other two funciton


() => {}// this is general syntax of arrwo function 

const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))

// now above representation of arrow function was explicit return
// we have to use return keyword

const addTwo =(num1,num2) => (num1+num2)
//this is implicit return 
// return keyword not required ..still works the same
// after arrow brackets may or may not be used functioning still same
// used in react extensively
// preferable use this method if fucntion has one line code

const addTwo = (num1,num2) => ({username :"hitesh"})
//if function returns object then parenthisis is compulsory