// https://www.codewars.com/kata/54fb963d3fe32351f2000102
// Description:

// The Collatz Conjecture states that for any positive natural number n, this process:

//     if n is even, divide it by 2
//     if n is odd, multiply it by 3 and add 1
//     repeat

// will eventually reach n = 1.

// For example, if n = 20, the resulting sequence will be:

// [ 20, 10, 5, 16, 8, 4, 2, 1 ]

// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.

// For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture
// Mathematics
// Algorithms

// My solution
function collatz(n) {
  let arr = [n];
  while (n > 1) {
    if (!(n % 2)) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    arr.push(n);
  }
  return arr.length;
}

// other solution
function collatz(n) {
  var l = 1;
  while (n > 1) {
    l++;
    n = n % 2 == 0 ? n / 2 : n * 3 + 1;
  }
  return l;
}

function collatz(n) {
  if (n === 1) return 1;
  else if (n % 2 === 0) return 1 + collatz(n / 2);
  else return 1 + collatz(3 * n + 1);
}
