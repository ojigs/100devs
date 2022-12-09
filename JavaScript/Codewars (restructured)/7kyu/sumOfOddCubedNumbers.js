https://www.codewars.com/kata/580dda86c40fa6c45f00028a/javascript
// Description:

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
// Fundamentals
// Functional Pr



// My solution
function cubeOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) return undefined
  }
  return arr.reduce((a, c) => a + (c % 2 ? c**3 : 0), 0) 
}


// other solution
let cubeOdd = a => {
  var isNumeric = a.every(x=>!isNaN(x))
  return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
}
