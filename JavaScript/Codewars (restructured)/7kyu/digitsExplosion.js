https://www.codewars.com/kata/585b1fafe08bae9988000314/javascript
// Description:

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// explode("312")

// should return :

// "333122"

// explode("102269")

// should return :

// "12222666666999999999"

// Strings
// Regular Expressions
// Fundamentals



// My solution
function explode(s) {
  return s.split('').map(e => e.repeat(e)).join('')
}



// other solution
function explode(s) {
  return s.split('').map(e => e.repeat(e)).join('')
}
