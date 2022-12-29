https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript
// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} } 
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 

// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D) 
// or
// [ [N_1, D] ... [N_n, D] ] 
// or
// [ (N_1', D) , ... (N_n, D) ] 
// or
// {{N_1, D} ... {N_n, D}} 
// or
// "(N_1, D) ... (N_n, D)"

// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

// Example:

// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]

// Note:

// Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

// Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.
// Note for Bash:

// input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12"
// Fundamentals
// Algorithms
// Mathematics



// My solution
function convertFrac(lst){
//   Parameters: input is a 2d array of numerator and denometor pairs
//   Return: To return a transformed 2d array with a common denominator, such that each pair is an equal fraction to the equivalent air in the original array
//   Examples: [[1,2], [1,3], [1,4]] --> [[6,12], [4,12], [3,12]]
//   Pseodocode: single out array elements in the second index which is the denominator
//   reduce it, i.e programmatically take the L.C.M
//   multiply the original fraction by the common denominator
//   return the result of the multiplication as the numerator
//   return the common denominator as the second index in the array
  if (!lst.length) return ''
  let denArr = []
  lst.forEach(e => denArr.push(e[1]))
//   Euclid algo for greatest common denominator
  const gcd = (a, b) => a ? gcd(b%a, a): b
//   get the l.c.m
  let D = denArr.reduce((a, c) => a * c / gcd(a, c))
  return lst.map(e => `(${Math.round(e[0]/e[1]*D)},${D})`).join('')
}


// other solution
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}
