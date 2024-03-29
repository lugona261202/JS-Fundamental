const user ={
    username:"hitesh",
    loginCount :8 ,
    signedIn : true ,

    getUserDetails: function(){
        //console.log("Got user details from database")
        console.log(`username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this)


const promiseOne = new Promise()
const date = new Date()
// some pre defined constructor objects

function User (username, loginCount, IsLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.IsLoggedIn = IsLoggedIn

    this.greeting = function (){
        console.log(`welcome ${this.username}`)
    }

    return this
    // this is an implicit command without declaration this will happen too
}

const userOne =  new User("hitesh",12,true)
const userTwo = new User("chaiaurcode",11,false)
// without new keyword data of userTwo updates userOne which is an undesirable process
// thus with new keyword a new instance is generated to work upon
console.log(userOne)



