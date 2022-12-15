https://www.codewars.com/kata/57eaeb9578748ff92a000009/javascript
// Description:

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
// Fundamentals
// Strings
// Arrays


// My solution
function sumMix(x){
  return x.reduce((a,c) => a + (+c),0)
}


// other solution
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}
