// if 
const isUserloggedIn = true

if(isUserloggedIn){

}

<,>,<=,>=,==,!=,===,!==

if (temprature === 41){
    console.log("less than 50")
}else {
    console.log("temprature is greater than 50")
}

const score =200
if(score>100){
    const power = "fly"
    console.log(`user power:$(power)`)
}
console.log(`user power:$(power)`
// above line will throw error as it is out of scope

const balance =1000

if(balance>500) console.log("test")
// this is implicit type
// only when u have one line of code

if(balance>500) console.log("test"),console.log("test2")
// using , we can add more command to implicit call
// but this is not prefered to use so kindly avoid

if(balance <50){
    console.log("less than")
}else if (balance >750){
    console.log("less than 750")
}else if (balance <900){
    console.log("less than 900")
} else {
    console.log("less than 1200")
}

const userloggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn&&debitCard){
    console.log("allow user to buy course")
}

 if(loggedInFromEmail ||loggedInFromGoogle){
    console.log("user logged in ")
 } 
 





