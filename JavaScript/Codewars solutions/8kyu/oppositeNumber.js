// Description:

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//my solution (apparently i overthought this kata)
function opposite(number) {
  return Math.sign(number) ? -number : number; 
}


//other solution
function opposite(number) {
  return(-number);
}
