 const marvel_heroes = ["thor", "ironman","spiderman"]
 const dc_heores = ["superman","flash","batman"]

 marvel_heroes.push(dc_heores)
 // the array of dc is itself stored in marvel
 

  console.log(marvel_heores)
  console.log(marvel_heroes[3][1])

  const allHeroes = marvel_heroes.concat(dc_heores)
  // this returns a new combined array
  // so preferable declare a new array
  console.log(marvel_heroes)

  const all_new_heroes = [...marvel_heroes, ...dc_heores]
  console.log(all_new_heroes)
  // this method is more preferable than concat
  // more than 2 arrays can be added this way

  const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

  const real_another_array = another_array.flat(infinity)
  // in parameter this accepts upto which depth do u wish to flatten array
  // for safe side we use infinity , so it flattens till all possible level

  console.log(real_another_array)

  console.log(Array.isArray("Hitesh"))

  console.log(Array.from("Hitesh"))
  // makes array from mshatever data is given
  console.log(Array.from({name:"hitesh"}))
  // important case
  // in case of object empty array is returned
  // we need to specify whether array should be made of keys or vlaues

  let score1 = 100
  let score2 = 200
  let score3 = 300

  console.log(Array.of(score1,score2,score3))





