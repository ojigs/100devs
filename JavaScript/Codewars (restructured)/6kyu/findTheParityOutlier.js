https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
// Description

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// Algorithms



// My solution
function findOutlier(integers){
  const odd = integers.filter(e => e%2)
  const even = integers.filter(e => !(e%2))
  if (odd.length > 1) {
    return even[0]
  }
  return odd[0]
}


// other solution
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
} //using ternary operator instead of if-else statement
