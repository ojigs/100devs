https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript
// Description

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")


// My solution
function isDigit(s) {
  if (!s.length || s === ' ') return false
  return Number.isFinite(+s)
}


// other solutionfunction isDigit(s) {
 return s==parseFloat(s);
}
