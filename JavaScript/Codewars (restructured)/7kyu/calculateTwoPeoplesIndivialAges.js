// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/javascript
// Description:

// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

//     sum < 0
//     difference < 0
//     Either of the calculated ages come out to be negative

// Fundamentals
// Algorithms
// Arrays

// My solution
function getAges(sum, difference) {
  let x = (sum + difference) / 2;
  let y = (sum - difference) / 2;
  if (sum < 0 || difference < 0 || x < 0 || y < 0) return null;
  return [x, y];
}

// other solution
function getAges(sum, difference) {
  let average = 0;
  if (sum < 0 || difference < 0 || sum - difference < 0) return null;
  else average = (sum - difference) / 2;

  return [average + difference, average];
}
