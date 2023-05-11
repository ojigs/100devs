https://www.codewars.com/kata/596f72bbe7cd7296d1000029/javascript
// Description:

// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
// Examples

// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7

// The input will always be an array.
// Arrays
// Recursion
// Fundamentals



// My solution
function deepCount(a){
  return a.reduce((acc,cur) => acc + (Array.isArray(cur) ? deepCount(cur) : 0), a.length)
}



// other solution
function deepCount(a){
  let count = a.length;
  for (let i=0; i<a.length; i++) {
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}
