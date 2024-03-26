const myNumers = [1,2,3,4,5,6,7,8,9,10]

const newNums =myNumers.map((num) =>  num+10)
console.log(newNums)

const newNums = myNumers
                .map((num)=> num*10)
                .map((num)=>num*10)
                .filter((num)=>num>= 40)

console.log(newNums);
// this above process is called chaining
// here data set gets updated with each command
// and that particular updated data set is passed on to subsequent command
// after execution of all chained commands finally data is returned
