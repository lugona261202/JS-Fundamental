// singleton
// this type is formed when object is made thorough constructor


// object literals

const mySym = Symbol("key1")
const JsUser ={
    name: "hitesh",
    "full name":"hitesh choudhary",
    [mySym]:"mykey1",
    // for declaring key square bracket is most important
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturnday"]

}

 console.log(JsUser.email)
 // less preferred as when key is string itself accessing will be difficult
 console.log(JsUser["email"])
 // better wau but remember to put key in quotes
 console.log(JsUser["full name"])
 console.log(JsUser[mySym])
 // now the key will be delcared perfectly
 // if declared any other way although  value will be accepted
 // but key dataype would most probably be changed to string

 JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
// this object is freezed 
// no error will be thrown but value won't be updated
JsUser.email="hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello Js user")
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user , ${this.name}`)
} 

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



