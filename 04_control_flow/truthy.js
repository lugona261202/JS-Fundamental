const userEmail = "hitesh@ai"

if(userEmail){
    console.log("got user email")
} else{
    console.log("don't have user email")
}
// even though user email does not have any true or false value
// yet they are often assumed as true or false 
// depending upon data type

// false values
// false , 0 , -0, BigInt 0n, "",null, undefined, NaN

// truthy values
// "0",'false'," ",[],{}, function (){}

userEmail = []

if (userEmail.length===0){
    console.log("array is empty")
}
// to check if array is empty

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}
// to check if object is empty

//false ==0 , true
//false ==" " , true
//0 == " " , true 

// Nullish Coalescing Operator (??): null undefined

let val1
val1 = 5 ?? 10 // 5 
val1 = null ?? 10 //10
val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10
// if a null or undefined value is given
// to ensure that value is dropped and numeric or other value is taked
// this operator is chosen

// Terniary Operator
condition ? true : false 

const iceTeaPrice =100
iceTeaPrice >=80 ? console.log("less than 0") : console.log( more than 80")
 






