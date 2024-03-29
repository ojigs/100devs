// https://www.codewars.com/kata/57ed56657b45ef922300002b/javascript
// Description:

// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

// The Office I - Outed
// The Office II - Boredeom Score
// The Office IV - Find a Meeting Room
// The Office V - Find a Chair
// Fundamentals
// Strings
// Arrays

// My solution
function broken(x) {
  return x.replace(/[01]/g, (m) => (m === "1" ? "0" : "1"));
}

// other solution
function broken(x) {
  return x
    .split("")
    .map((a) => (a == "0" ? "1" : "0"))
    .join("");
}

// more solution
const broken = (x) => x.replace(/\d/g, (val) => val ^ 1);
