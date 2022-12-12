https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
// Description

// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

//     square() must return a copy of the array, containing all values squared
//     cube() must return a copy of the array, containing all values cubed
//     average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
//     sum() must return the sum of all array values
//     even() must return an array of all even numbers
//     odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!
// Example

// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]



// My solution
Array.prototype.square = function () {
  const squaredArr = []
  for (let i = 0; i < this.length; i++) {
    squaredArr.push(this[i]**2)
  }
  return squaredArr
}

Array.prototype.cube = function () {
  const cubedArr = []
  for (let i = 0; i < this.length; i++) {
    cubedArr.push(this[i]**3)
  }
  return cubedArr
}

Array.prototype.sum = function () {
  let sum = 0
  for (let i = 0; i < this.length; i++) {
    sum += this[i]
  }
  return sum
}

Array.prototype.average = function () {
  let sum = 0
  for (let i = 0; i < this.length; i++) {
    sum += this[i]
  }
  return sum/this.length
}

Array.prototype.even = function () {
  const evenArr = []
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) evenArr.push(this[i])
  }
  return evenArr
}

Array.prototype.odd = function () {
  const oddArr = []
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2) oddArr.push(this[i])
  }
  return oddArr
}



// other solution
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }
