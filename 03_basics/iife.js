//Immediately invoked function expressions(iife)
// to avoid global scope pollution

()()// general syntax where first bracket is for definition

(function chai(){
    //named iife
    console.log(`DB CONNENCTED`)
})();
// we use ; because an iife function is  followed by an iife function 

(  ()=> {
     console.log(`DB CONNECTED TWO`)   
} )()
// iife can be used with arrow function too

(  (name)=> {
    console.log(`DB CONNECTED TWO${name}`)   
} )('hitesh')
// if variable has to be passed as argument



// there is a conceptual video followed by this topic
// so view it as notes are not available to revise
// video 25 of chai and javascript