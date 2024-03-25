  // dates

  let myDate = new Date()
  console.log(myDate)
  // the format is not understandable
  console.log(myDate.toString())
  console.log(myDate.toLocaleString())
  console.log(myDate.toDateString())
  console.log( typeof myDate)
  // we know that all non primitive type have return type as object

  let myCreatedDate = new Date (2023,0,23)
  console.log(myCreatedDate.toDateString())
  // date will be as jan 23 2023
  // months start from 0

  let myCreatedDate2 = new Date(2023,0,23,5,3)
  console.log(myCreatedDate2.toLocaleString())
  // time is also visible

  let myCreatedDate3 = new Date("04-29-2023")
  console.log(myCreatedDate3.toDateString())
  // in this method month start from 01
  // this is mm-dd-yyyy format used in India

  let myTimeStamp = Date.now()
  console.log(myTimeStamp)
  // timestamp is used later in debugging measuring intervals etc.
  
  console.log(myCreatedDate3.getTime())
  // another way to get time just like timestamp
  console.log(Date.now())
  // this gives us date with time in a long number
  // time is till milli seconds

  console.log(Date.now()/1000)
  // to get the time in seconds

  console.log(Math.floor(Date.now()/1000))
  // time will be in seconds and will be rounded off

  let newDate = new Date()
  console.log(newDate)
  console.log(newDate.getDay)
  // tnis way we can get more specific information
  console.log(newDate.getMonth+1)
  // for us it starts from 0 but for user it starts from 1

  newDate.toLocaleString('default',{
    weekday:"long",
  })
  // we can get attributes of date in more specific way 
  // by declaring it as object we can get more specific information



