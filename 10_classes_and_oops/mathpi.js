Object.getOwnPropertyDescriptor(Math,"PI")
//here the  key is pi not math
// using it we can get descritption of it 
// look into it once

console.log(Math.PI)
Math.PI=5
console.log(Math.PI)
// even though we tried to overwrite the value
// but that did not happen

const chai ={
    name : 'ginger chai',
    price:250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
// remember while using this method pass property of object 
// as that is the key

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})

for (let [key,value] of Object.entries(chai)){
    console.log(`${key} : ${value}`)
}
// this also enlists the functions
// to avoid that we put an if else condition
for (let [key,value] of Object.entries(chai)){
    if(typeof value!== 'function'){
    console.log(`${key} : ${value}`)
    }
}





