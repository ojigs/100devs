// https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript
// Description:

// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.
// Bits
// Fundamentals

// My solution
function reverseBits(n) {
  let binary = n.toString(2);
  let reversed = binary.split("").reverse().join("");
  return parseInt(reversed, 2);
}

// other solution
function reverseBits(n) {
  const binaryReverse = n.toString(2).split("").reverse().join("");
  return parseInt(binaryReverse, 2);
}
