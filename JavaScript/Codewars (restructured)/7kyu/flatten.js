https://www.codewars.com/kata/5250a89b1625e5decd000413/javascript
// Description:

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// Functional Programming
// Arrays
// Fundamentals



// My solution
var flatten = function (array){
  return array.flat(1)
}


// other solution
const flatten = (array) => [].concat(...array);
