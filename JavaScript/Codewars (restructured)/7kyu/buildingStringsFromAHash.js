// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/javascript
// Description:

// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

// Strings
// Fundamentals

// My solution
function solution(pairs) {
  return Object.entries(pairs)
    .map((e) => e.join(" = "))
    .join();
}

// other solution
function solution(pairs) {
  return Object.keys(pairs)
    .map(function (k) {
      return k + " = " + pairs[k];
    })
    .join(",");
}
