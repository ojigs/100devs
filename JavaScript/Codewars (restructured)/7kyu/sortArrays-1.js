https://www.codewars.com/kata/51f41b98e8f176e70d0002a8/train/javascript
// Description

// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
// Sorting
// Arrays
// Fundamentals


// My solution
function sortme (names) {
  return names.sort((a, b) => a > b ? 1 : -1)
}


// other solution
// input: names - unsorted array
// output: sorted array
sortme = function( names ){
  return names.sort()
}
