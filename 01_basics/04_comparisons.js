//general comparators =>the also convert during comparison
 console.log(2>1)
 console.log(2>=1)
 console.log(2<1)
 console.log(2==1)
 console.log(2!=1)

 console.log("2">1)
 console.log("02">1)
 // javascript converts automatically and compares 
 //but prefer not to compare differenct data types

 console.log(null>0)
 console.log(null==0)
 console.log(null>=0)
 // here all give false except last because
 // == and >= work differently for null
 // >= converts null to number and as = also exists so it returns true
 //== does not covert null to 0 hence false

 console.log(undefined==0)
 console.log(undefined >=0)
 //in case of undefined it is not converted to 0 
 // hence for every comparison result will be false

 //=== this does not allow conversion during comparison

 console.log("2"===2)
 //will always return false

