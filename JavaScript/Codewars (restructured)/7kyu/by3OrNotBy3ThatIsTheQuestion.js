// https://www.codewars.com/kata/59f7fc109f0e86d705000043/javascript
// Description:

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

// Try to avoid using the % (modulo) operator.
// Arrays
// Strings
// Fundamentals

// My solution
function divisibleByThree(str) {
  let sum = 0;
  for (const char of str) {
    sum += parseInt(char);
  }
  while (sum >= 10) {
    let digitSum = 0;
    while (sum > 0) {
      digitSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = digitSum;
  }
  return sum === 0 || sum === 3 || sum === 6 || sum === 9;
}

// other solution
function divisibleByThree(str) {
  return str.split("").reduce((a, b) => parseInt(a) + parseInt(b)) % 3 === 0;
}
