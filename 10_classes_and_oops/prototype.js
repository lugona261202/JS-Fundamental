// let myName = "hitesh    "
// let mychannel = "chai   "

// console.log(myName.trueLength)

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman :"sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}
// since almost all datatypes are objects 
// instead of creating prototype for specific datatypes
// we can create prototype for object itself 
// these will automatically be passed down to all datatypes
heroPower.hitesh()

myHeros.hitesh()

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`)
}
// here we have created a prototype specifically for array only

myHeros.heyHitesh()
heroPower.heyHitesh()
// although myHeros can acess the method 
// but heroPower cannot which is kind of expected

// inheritance

const User = {
    name : "chai",
    email : "chai@email.com"
}


const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
   isAvailable : false 
}

const TASupport ={
    makeAssignment :'JS assignment',
    fullTime: true
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
 Object.setPrototypeOf(TeachingSupport, Teacher)

 let anotherUsername = "chaiAurCode    "

 String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is :${this.trim().length}`)
 }
 //here this will return the one who called it ,annotherUser( chai aur code ) in this case

 anotherUsername.trueLength()
 "hitesh".trueLength()
 "iceTea".trueLength()


