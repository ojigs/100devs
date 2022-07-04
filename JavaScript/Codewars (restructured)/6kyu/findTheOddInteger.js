// Description:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


//My solution
function findOdd(A) {
  //happy coding!
  let obj = {}
  //For every element of the array, check if the element is present in the object
  //if it is, increment the value by 1, else add the element as a key in the object and give it a value of 1
  for (let i = 0; i < A.length; i++) {
    A[i] in obj ? obj[A[i]]++ : obj[A[i]] = 1
  }
  //Loop through the object and find the key whose value is an odd number
  //Return the key
  for(key in obj) {
    if (obj[key] % 2 !== 0) {
      return +key
    }
  }
}
