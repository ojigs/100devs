https://www.codewars.com/kata/580878d5d27b84b64c000b51/javascript

// Description:

// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]

// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.
// Mathematics
// Fundamentals



// My solution
function sumTriangularNumbers(n) {
  return Array.from({length: n}, (e,i) => (i+1)*(i+2)/2).reduce((a,c) => a + c, 0)
}


// other solution
function sumTriangularNumbers(n) {
  return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}


function sumTriangularNumbers(n) {
var sum = 0;  
for(var i = 1; i <= n; i++)
{
sum += (i*(i+1))/2;
}
return sum;
}
