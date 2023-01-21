https://www.codewars.com/kata/5963c18ecb97be020b0000a2/javascript
// Description

// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Write a function that takes an array of integers as an argument and returns the median of those integers. 


// My solution
function median(array) {
  let sortedArr = array.sort((a,b) => a - b)
  if (array.length%2) {
    return sortedArr[Math.floor(array.length/2)]
  } else {
    let mid1 = sortedArr[Math.floor(array.length/2)]
    let mid2 = sortedArr[Math.floor(array.length/2) - 1]
    return (mid1 + mid2)/2
  }
}


// other solution
var median = (arr) => {
  const start = arr.length/2 + 0.9|0
  const end = arr.length % 2 ? 1 : 2
  return arr.sort((i,j) =>i-j).slice(start-1, start+end-1).reduce((a,b)=> a+b)/end
}
