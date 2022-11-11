https://www.codewars.com/kata/55f73f66d160f1f1db000059/javascript
// Description:
// Combine strings function

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')

// returns:

// 'James Stevens'



// My solution
function combineNames (a, b) {
  return `${a} ${b}`
}


// other solution
const combineNames = (...names) => names.join(' ');
