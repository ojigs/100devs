// https://www.codewars.com/kata/5558cc216a7a231ac9000022/javascript
// Description

// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
// Examples

// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

// Arrays
// Fundamentals

// My solution
function duplicates(arr) {
  const duplicates = [];
  const seen = new Set();
  const values = new Set();

  for (const element of arr) {
    const key = typeof element === "number" ? element : JSON.stringify(element);
    if (values.has(key) && !seen.has(key)) {
      duplicates.push(element);
      seen.add(key);
    }
    values.add(key);
  }

  return duplicates;
}

// other solution
function duplicates(arr) {
  return arr.reduce(function (prev, cur, i, a) {
    if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
      prev.push(cur);
    }
    return prev;
  }, []);
}
