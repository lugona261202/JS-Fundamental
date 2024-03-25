var c = 300


if(true){
    let a =10
    const b =20
    var c =30
}

console.log(a)//will throw error as a not declared in this scope
console.log(b)//will throw error as b not declared in this scope
console.log(c)//30 will appear
// 300 should have appeared
// but var does not work specific to scope
// value gets updated
// even if var was ommited and only c was written still results would be same

// thus global scope and block scope work in difference ways

function one (){
    const username ="hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)
    two()
}

one ()
// check yourself which elements will create issue

if(true){
    const username ="hitesh"
    if(username==="hitesh"){
        const website ="youtube"
        console.log(username+website)
    }
    console.log(website)
}
console.log(username)
// check yourself which elements will create issue 

//****** intersting
addone(5)
function addone (num){
    return num + 1
}
//this will not throw any error and will return 6
addTwo(5)
const addTwo = function (num){
    return num+2
}
// this will throw error
// this type of function declaration does not allow upper feature
// just remember if function is declared with variable then callin it before is not allowed
//however independent declaration does allow it





