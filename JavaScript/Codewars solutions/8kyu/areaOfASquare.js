https://www.codewars.com/kata/5748838ce2fab90b86001b1a/javascript
// Description:

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
// Fundamentals
// Mathematics


// My solution
function squareArea(A){
  return ((2 * A / Math.PI)**2)
}



// other solution
squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);
