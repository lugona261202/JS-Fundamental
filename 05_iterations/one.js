// for 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
// general syntax
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
     console.log(`inner loop value ${j} and inner loop ${i}`)  
     console.log(i + `*` + j +`=` + i*j)      
    }
    
}

let myArray = {"flash","batman","superman"}
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// break and continue

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`)
        break
    }
    console.log(`value of i is ${index}`)
    
}
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`)
        continue
    }
    console.log(`value of i is ${index}`)
    
}
// during itertion 5 code will be executed till continue is not encountered
// as contniue is encountered we skip furter codes and move to next iteration(6)
// but we do not entirely exit out of the for loop like in break

