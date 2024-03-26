/*const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item)=>{
    console.log(item)
    return item
})
console.log(values)
// returning values is not done this way

const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums =myNums.filter ((num) => num>4)
console.log(newNums)
// the call back function is similar just it is implicit type and as line of code is only 1 no parenthisis are added

const newNums1 = []
myNums.forEach((num)=>{
    if(num>4){
        newNums1.push(num)
    }
})
console.log(newNums1)
// this method is when u want to use for each only
// then we have to externally filter it

*/
//filter method can be used in more ways
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((bk)=>bk.genre ==='history')
//console.log(userBooks)

const userBooks1 = books.filter((bk)=>{
    return  bk.publish>=1995 &&bk.genre==="history"
    
    })
console.log(userBooks1)





