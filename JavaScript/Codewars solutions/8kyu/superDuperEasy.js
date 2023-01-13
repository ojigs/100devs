https://www.codewars.com/kata/55a5bfaa756cfede78000026/javascript
// Description:

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


// My solution
function problem(x){
  return typeof x === 'number' ? x*50+6 : 'Error'
}


// other solution
const problem = x =>
  Number.isFinite(x) ? x * 50 + 6 : `Error`;
