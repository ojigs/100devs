// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/javascript
// Description:

// Implement a function that returns the minimal and the maximal value of a list (in this order).
// Fundamentals

// My solution
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// other solution
function getMinMax(arr) {
  const sorted = arr.sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
}
