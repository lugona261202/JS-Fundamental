const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,currval) {
    console.log(`acc:${acc} and currval`)
    return acc + currval
},0)
// here normal function is used not arrow function hence call back syntax is different
// here initial value has to be mentioned before last parenthesis preceeded by a ,
// rest syntax can be different depending it is arrow implicit or explicit
const myTotal = myNums.reduce(()=>acc + cur ,0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+ item.price ,0)

console.log(priceToPay)



