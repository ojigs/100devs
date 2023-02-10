https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascript
// Description

// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.
// Examples:

// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2

// You can assume that the two input strings are of equal length.
// Algorithms


// My solution
function hamming(a,b) {
  let count = 0
	a.split('').forEach((e, i) => e !== b[i] ? count++ : null)
  return count
}


// other solution
function hamming(a,b) {
  return a.split('').filter(function(v,i) {return a[i]!=b[i]}).length;
}


const hamming = (a, b) =>
  [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0);
