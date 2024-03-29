class User{
    constructor (username){
        this.username =username
    }
    logMe(){
        console.log(`Username:${this.username}`)
    }

    static createId(){
        return'123'
    }
    // static doesn't let user access some restricted parts
}
const hitesh = new User("hitesh")
console.log(hitesh.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()
// object from teacher class can use function from parent class

console.log(iphone.createId())
// since createId is restricted it cannot even be used by object of child




