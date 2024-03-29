/*const promiseOne = new Promise(function (resolve,reject){
    // do an async task
    //DB calls , crypotgraphy , network
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
})

new Promise(functioni(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log("async2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
console.log(user)
})
*/
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh",password:"123"})
        } else{
           reject('ERROR:something went wrong') 
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>console.log("promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript",password:"123"})
        } else{
           reject('ERROR:JS went wrong') 
        } 
    },1000)
})

async function consumePromiseFive({
    try {
        const response =await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
})

consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("E:",error)
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(()=>)
.catch()
