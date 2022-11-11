https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/javascript
// Description:
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Notes

//     Array/list will contain positives only .
//     Array/list will always have even size

// Input >> Output Examples

// minSum({5,4,2,3}) ==> return (22) 

// Explanation:

//     The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

// minSum({12,6,10,26,3,24}) ==> return (342)

// Explanation:

//     The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

// minSum({9,2,8,7,5,4,0,6}) ==> return (74)

// Explanation:

//     The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74



// My solution
function minSum(arr) {
//   given an array, array may likely have an even length
//   return the minimum sum that results from summing products of two integers in the array
//   [4,4,2,3] --> 22 //(5*2) + (4*3)   = 22
//   sort the array from biggest to smallest or otherwise
//   multiply digits at mirror positions in the array
//   sum them up and return the value
  arr = arr.sort((a,b) => b - a)
  let n = arr.length
  let sum = 0
  for (let i = 0; i < n/2; i++) {
    sum += arr[i] * arr[n - 1 - i]
  }
  return sum
}


// other solution
const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);


function minSum(arr) {
  return arr.sort( (a,b) => a-b )
            .slice(0, arr.length/2)
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}
