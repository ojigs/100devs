https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript
// Description

// Example:

// What is the remainder when 1234567 is divided by 13?

// 7      6     5      4     3     2     1  (digits of 1234567 from the right)
// ×      ×     ×      ×     ×     ×     ×  (multiplication)
// 1     10     9     12     3     4     1  (the repeating sequence)

// Therefore following the method we get:

//  7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

// We repeat the process with the number 178:

// 8x1 + 7x10 + 1x9 = 87

// and again with 87:

// 7x1 + 8x10 = 87

// From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).
// Task:

// Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

// thirt(1234567) calculates 178, then 87, then 87 and returns 87.

// thirt(321) calculates 48, 48 and returns 48
// Fundamentals
// Algorithms
// Mathematics



// My solution
function thirt(n) {
  const len = Math.log(n) * Math.LOG10E + 1 | 0
  const nToString = n.toString()
  let sum = 0
  for (let i = 0; i < len; i++) {
    let divRule = 10**i % 13 
    sum += divRule * nToString[len - i - 1]
  }
  return sum === n ? sum : thirt(sum)
}



// other solution
function thirt(n) {
  const nums = [1,10,9,12,3,4]
  var sum = (''+n).split('').reverse().reduce((sum,v,i) => sum + v * nums[i%nums.length], 0)
  return sum === n ? n : thirt(sum)
}
