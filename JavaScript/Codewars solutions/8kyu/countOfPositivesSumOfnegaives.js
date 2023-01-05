https://www.codewars.com/kata/576bb71bbbcf0951d5000044/javascript
// Description:

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



// My solution
function countPositivesSumNegatives(input) {
  if (!input || !input.length) return []
  let arr = [], pos = 0, sumOfNeg = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) sumOfNeg += input[i]
    else if (input[i] > 0) pos++
  }
  arr.push(pos, sumOfNeg)
  return arr
}


/other solution
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((arr, n) => {
    if (n > 0) arr[0]++;
    if (n < 0) arr[1] += n;
    return arr;
  }, [0, 0]);
}
