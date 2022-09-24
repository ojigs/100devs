https://www.codewars.com/kata/524f5125ad9c12894e00003f/javascript
// Description:
// Task:

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.
// Examples:

// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)


//My solution
function remainder(n, m){
  return n > m ? n % m : m % n
}


//other solution
function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  var min = Math.min(a,b);
  var max = Math.max(a,b);

  return min ? max % min : NaN;
}
