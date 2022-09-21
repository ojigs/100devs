https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
//Description

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!
// Arrays
// Strings
// Regular Expressions
// Algorithms

//My solution
function createPhoneNumber(numbers){
  const numToString = numbers.join('')
  const b1 = numToString.slice(0, 3)
  const b2 = numToString.slice(3, 6)
  const b3 = numToString.slice(6)
  return `(${b1}) ${b2}-${b3}`
}


//other solution
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}


function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
