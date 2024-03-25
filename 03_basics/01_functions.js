fucntion addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
//when function is declared the passing variable are called parameters
//when function is called the passing variable are called arguments
addTwoNumbers(3,4)
//7 si displayed
addTwoNumbers(3,"4")
//34 is displayed 3 is converted and assumed as string
addTwoNumbers(3,null)
//only 3 appears

const value = addTwoNumbers(3,5)
console.log(value)
// undefined will appear
// cause addtwonumber does not have return type 
// it simply displays value but does not return it

fucntion addTwoNumbers1(number 1, number2){
    let result = number1 + number 2
    return result 
}
// this function will give a return type
// its value can be assigned to a variable
// after result any line of code written will not be executed

function loginUserMessage(username){
    return `${username} just logged in`
}

loginUserMessage("hitesh")
//no message will be displayed as function simply returns

console.log(loginUserMessage("hitesh"))
// now message will be displayed

console.log(loginUserMessage(""))
//no name will appear just logged in will be displayed

console.log(loginUserMessage())
// since no argument was passed
// undefined will be displayed follwed by just logged in

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400))
// even if function had only 1 parameter
//... allows multiple arguments insertion
// in array it was called spread
// in function it is called rest

fucntion calculateCartPrice1(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500,600))
//200 ,300 will pass into val1,val2 respectively
// while 400-600 will pass into num1

const user = {
    username:"hitesh",
    price :199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username}and price is 
    ${anyobject.price}`)
}
//one problem that arises often is
//as we call anyobject.price
//what if it is declared as prices inside object
//this confusion will lead to undefined data

handleObject(user)

handleObject({
    username:"sam",
    price:399
})
// we can directly declare object in function too

const myNewArray =[200,400,600]
fucntion returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,300,400]))
// just like object array can aslo be directly passed

