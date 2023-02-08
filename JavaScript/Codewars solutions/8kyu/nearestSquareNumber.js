https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/javascript
// Description:

// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers
// Fundamentals
// Mathematics



// My solution
function nearestSq(n){
  let sqrt = Math.sqrt(n)
  let low = Math.floor(sqrt)
  let high = Math.ceil(sqrt)
  return sqrt === n ? n : sqrt - low > high - sqrt ? high**2 : low**2
}


// other solution
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
// Now this solution got me "lolling" :D
