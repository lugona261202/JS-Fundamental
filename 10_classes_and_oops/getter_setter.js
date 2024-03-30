class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email (value){
        this.email = value
    }
    get password (){
        return `${this._password}hitesh`
    }

    set password (value){
        this._password = value
    }
    // get set have to be used together
    // constructor and getset both try to initialise value
    // in such case there is an error of maximum call stack executed
    // therefore while setting the same properties we change the variable slightly 
    // in get set
    // also in the end set returns the email
    //but actually change or declaration of variable is done by get 
    // get always returns but set do not
}
// this is class based setter
const hitesh = new User("h@hitesh.ai","123")
console.log(hitesh.password)