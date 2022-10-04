https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/javascript
// Description:

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


//My solution
function distinct(a) {
  return a.filter((e,i,a) => a.indexOf(e) === i);
}


//other solution
function distinct(a) {
  return [...new Set(a)];
}
