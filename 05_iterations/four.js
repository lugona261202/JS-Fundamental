const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}
//using key we get key, then using key in datastructure we get value

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(`${key} is position/index for ${programming[key]}`)
}


const map = new Map ()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
        console.log(key)
}
// this loop does not work on map 
// as map is not an iteratable structure







