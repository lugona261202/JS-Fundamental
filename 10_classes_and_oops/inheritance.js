class User{
    constructor(username){
        this.username =username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

// now just like we used setprototypeof  for objects
// to extend objects to one another 
// for class we do the following
class Teacher extends  User{
    constructor(username,email,password){
    super(username)
    this.email = email
    this.password = password
}
    addCourse(){
        console.log(`a new course was added ${this.username}`)
    }
}
//just like to set username we had to use call , this 
// it is easier to do that in classes , we simply use super

const chai = new Teacher("chai","chai@teacher.com","123")
// remember new is important
chai.addCourse()

const masalaChai = new User("masalaChai")
// although teacher inherits from user 
// still function exclusive to teacher cannot be used by it

masalaChai.logMe()

console.log(chai===masalaChai)
// it will return false

console.log(chai===Teacher)
// even this will be false 

console.log(chai instanceof Teacher)
// here it returns true
console.log(Teacher instanceof User)
// this will also be true

