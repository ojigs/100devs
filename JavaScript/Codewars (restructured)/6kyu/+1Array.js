https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/javascript
// Description:

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//     the array can't be empty
//     only non-negative, single digit integers are allowed

// Return nil (or your language's equivalent) for invalid inputs.
// Examples

// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer
// Fundamentals
// Arrays
// Algorithms


// My solution
function upArray(arr){
  if (!(arr.every(e => e >= 0 && e <= 9)) || !arr.length) return null
  
  for (let i = arr.length - 1; i >= 0; i-- ) {
    if (arr[i] + 1 > 9) {
      if (arr[i] + 1 > 9 && i === 0) {
        arr[i] = 0
        arr.unshift(1)
      } else {
        arr[i] = 0
      }
    } else {
      arr[i] += 1
      break;
    }
  }
  return arr
}



// other solution
function upArray(arr) {
  if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null
  
  let i = arr.length - 1
  
  while (i >= 0 && arr[i] == 9)
    arr[i--] = 0
  
  if (i < 0)
    arr.unshift(1)
  else
    arr[i]++
  
  return arr
}
