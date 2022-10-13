https://www.codewars.com/kata/5626b561280a42ecc50000d1/solutions/javascript
//Description

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases (input -> output):

// 1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// 90, 100 --> []

// Enjoy it!!


//My solution
function sumDigPow(a, b) {
  //funtion to find Eureka!
  //for a range of numbers a, b; edge cases? no floats
  //return array of digits such that sum of each digit raise to power is equal to digit
  //sumDigPow(1, 10) --> [1,2,3,4,5,6,7,8,9]
  //sumDigPow(1, 10) --> [1,2,3,4,5,6,7,8,9, 89]
  //splt digits, iterate over each,  logic compare
  let cache = []
  for (let i = a; i <= b; i++) {
      let n = i.toString().split('').map(Number)
        n = n.reduce((acc, curr, i) => acc + Math.pow(curr, i+1) )
      if (n === i) {
        cache.push(n)
      }
  }
  return cache
}


//other solution
function filterFunc(n) {
  return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
}

function *range(a, b) {
  for (var i = a; i <= b; ++i) yield i;
}

function sumDigPow(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}
