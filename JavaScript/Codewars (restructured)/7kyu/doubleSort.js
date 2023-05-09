https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript
// Description

// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.
// Fundamentals
// Strings
// Arrays
// Sorting



// My solution
function dbSort(a){
  const num = a.filter(e => typeof e === "number").sort((a,b) => a - b)
  const str = a.filter(e => typeof e === "string").sort((a,b) => a.localeCompare(b))
  return num.concat(str)
}


// other solution
const dbSort = array => array.sort((a, b) => (typeof(a) == 'string') - (typeof(b) == 'string') || (a > b) - (a < b));
