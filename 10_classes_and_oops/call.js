function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}
function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}
// here .call is used so that the object which is present and set externally can be accessed
// this is passed as parameter as after username gets set and accessed
// but after completetion it is sort of deleted
// so to return the reference or share the reference
// create user sends it own this which is eventually returned somehow

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai)