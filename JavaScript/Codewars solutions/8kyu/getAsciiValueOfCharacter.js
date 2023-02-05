// https://www.codewars.com/kata/55acfc59c3c23d230f00006d/javascript
// Description:

// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/
// Fundamentals

// My solution
function getASCII(c) {
  return c.charCodeAt();
}

// others solution
function getASCII(chars) {
  return [...chars]
    .map((char) => char.charCodeAt())
    .reduce((curr, prev) => prev + curr);
}
