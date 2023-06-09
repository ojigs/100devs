https://www.codewars.com/kata/559cc2d2b802a5c94700000c/javascript
// Description:

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
// Arrays
// Fundamentals



// My solution
function consecutive(arr) {
  if (!arr.length) return 0
  const sorted = arr.sort((a,b) => a-b)
  let min = sorted[0]
  let max = sorted[sorted.length - 1]
  let len = sorted.length - 1
  let diff = max - min + 1
  return diff - len
}



// other solution
function consecutive(arr) {
  return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr) + 1 - arr.length;
}


function consecutive(arr) {
  var sorted = arr.sort(function(a, b) {return a-b;});
  var count = 0;
  for (var i = 0; i < sorted.length - 1; i++) {
    var diff = sorted[i+1] - sorted[i]
    if (diff > 1) {
      count += diff - 1
    }  
  }
  return count;
}
