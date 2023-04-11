https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
// Description

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
// Examples

// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// Mathematics
// Fundamentals


// My solution
function squares(x, n) {
  if (n <= 0) return []
  const arr = [x]
  for (let i = 1; i < n; i++) {
    arr[i] = arr[i-1]**2
  }
  return arr
}


// other solution
function squares(x, n) {
	return Array.from({length: n}, (v, k) => Math.pow(x, Math.pow(2, k)))
}
