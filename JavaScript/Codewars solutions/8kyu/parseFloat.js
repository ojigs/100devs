https://www.codewars.com/kata/57a386117cb1f31890000039/javascript
// Description:

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.


// My solution
function parseF(s) {
  return Number.isNaN(parseFloat(s)) ? null : parseFloat(s)
}


//other solution
const parseF = s =>  isNaN(parseFloat(s)) ? null : parseFloat(s)
