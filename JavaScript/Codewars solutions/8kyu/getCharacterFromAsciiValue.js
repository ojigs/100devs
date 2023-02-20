https://www.codewars.com/kata/55ad04714f0b468e8200001c/javascript
// Description:

// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)

// should return:

// 'A'

// For ASCII table, you can refer to http://www.asciitable.com/
// Fundamentals


// My solution
function getChar(c){
  return String.fromCharCode(c)
}


// other solution
const getChar = String.fromCharCode; //manipulations :D
