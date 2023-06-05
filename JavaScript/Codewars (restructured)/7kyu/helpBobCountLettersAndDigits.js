https://www.codewars.com/kata/5738f5ea9545204cec000155/javascript
// Description:

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1
// Strings
// Fundamentals



// My solution
function countLettersAndDigits(input) {
  return input.split(/[A-Za-z0-9]/g).length - 1
}


// other solution
function countLettersAndDigits(s) {
  return s.replace(/[^a-z\d]/gi,"").length;
}
