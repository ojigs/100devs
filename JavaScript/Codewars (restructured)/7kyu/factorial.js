https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/javascript
// Description:

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.
// Algorithms
// Fundamentals



//My solution
function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError()
  if (n === 0) return 1
  return n * factorial(n-1)
}


function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError()
  if (cache[n]) {
    return cache[n]
  }
  let result = n * factorial(n - 1)
  cache[n] = result
  return result
}

let cache = { '0': 1}


//other solution
function factorial(n){

 if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
  }
return n<2 ? 1 : n*factorial(n-1);
}
