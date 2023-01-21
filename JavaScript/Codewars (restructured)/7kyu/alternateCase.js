https://www.codewars.com/kata/57a62154cf1fa5b25200031e/javascript
// Description:

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
// Fundamentals


// My solution
function alternateCase(s) {
  let arr = s.split('')
  return arr.map(e => e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase()).join('')
}


// other solution
const alternateCase = s =>
  s.replace(/\w/g, val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]());
