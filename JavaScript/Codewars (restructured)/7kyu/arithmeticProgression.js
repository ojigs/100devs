// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/javascript
// Description:

// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.
// Example

// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

// Arrays
// Fundamentals

// My solution
function arithmeticSequenceElements(a, d, n) {
  const prog = [];
  for (let i = 0; i < n; i++) {
    prog.push(a + i * d);
  }
  return prog.join(", ");
}

// other solution
function arithmeticSequenceElements(a, r, n) {
  return Array.from({ length: n }, (_, i) => a + r * i).join(", ");
}
