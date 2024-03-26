const coding = ["js","ruby","java","python","cpp"]

coding.forEach(  function (val){
    console.log(val)
})
//we declare function normally inside, but we simply don't name it
// for each method , instead of val you can write anything 

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
// instead of items even index , array can also be passed into parameter
coding.forEach((item)=>{
    console.log(item)
})
// this is even applicable for arrow functions

function printMe(item){
    console.log(item)
}
// a normal function

coding.forEach(printMe)
// this way for each can be used for external functions
// but remember not to put parenthisis

const myCoding = [
    {
       languageName : "javascript",
       languageFileName : "js" 
    },
    {
       languageName : "java",
       languageFileName : "java" 
    },
    {
       languageName : "python",
       languageFileName : "py" 
    },
]
// this is simply an array of objects

myCoding.forEach((item)=>{
    console.log(item.languageName)
})