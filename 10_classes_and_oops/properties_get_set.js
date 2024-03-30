// now get set has been declared as inbuilt class
// earlier how we used to set it is shown below

function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
      get: function(){
        return this._email.toUpperCase()
      },
      set: function(){
        this.email=value
      }
    })
    Object.defineProperty(this,'password',{
      get: function(){
        return this._password.toUpperCase()
      },
      set: function(){
        this._password=value
      }
    })
}
// this was function based setter

const chai = new User("chai@chai.com","chai")
console.log(chai.email)