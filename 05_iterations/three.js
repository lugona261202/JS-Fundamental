// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

// Maps 

const map = new Map ()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
// map data structure store data in form of key and values
// only unique elements are stored duplicate items are discarded
console.log(map)

for (const [key,value] of map) {
    console.log(key,`:-`,value)
}
// this key , value is destructuring of map element to get both distinctly

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}

for (const [key,val] of myObject) {
    console.log(key,`:-`,value)
}
// but this objects can not be iterated upon this way
// for of loop is useless for them





