https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript
// Description:
// Fix the function

// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?
// Fundamentals


//Given
function addFive(num) {
  var total = num + 5
  return num
}


//Fixed
function addFive(num) {
  var total = num + 5
  return total
}
