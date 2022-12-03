https://www.codewars.com/kata/57a37f3cbb99449513000cd8/javascript
// Description:

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)



// My solution
function getNumberFromString(s) {
  return +s.match(/\d/g).join('')
}


// other solution
function getNumberFromString(s) {
  return +s.replace(/\D/g, "");
}
