https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/javascript
// Description:

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
// Arrays
// Fundamentals


//MY SOLUTION
function sumOfDifferences(arr) {
  if (arr.length < 2) return 0
  arr = arr.sort((a,b) => b - a).map((e,i,a) => e - a[i + 1])
  arr.pop()
  return arr.reduce((a,c) => a + c)
  }


//other solution
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}


const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);
