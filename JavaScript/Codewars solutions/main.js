// Description:

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
    // your code
    return `${s.split('').filter(item => item > 'm' ).length}/${s.length}`
}


// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

// Description:

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
  // your code
let years = 0;
while (principal < desired) {
  principal += principal * interest * (1 - tax);
  years++
}
return years
}
console.log(calculateYears(1000, 0.05, 0.18, 1100))


// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

function int(x) {
  if (x % 5 !== 0) {
    return Math.floor(x / 5) * 5 + 5
  }
  else {
    return Math.floor(x / 5) * 5
  }

}
console.log(int(-5))


// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

function gimme (triplet) {
  let arr = triplet.slice(0).sort((a,b) => a - b)
  return triplet.indexOf(arr[1])
}
console.log(gimme([2, 3, 1]))


// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(a, b) {
  let arr =  a.concat('', b).split('')
  let bArr = []
  for (const x of arr) {
    if (!bArr.includes(x)) {
      bArr.push(x)
    }
  }
  return bArr.sort((a,b) => a > b ? 1 : -1).toString()
}


// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// Bash note:

//     input : 2 strings with substrings separated by ,
//     output: number as a string

function mdfFile(a, b) {
  if (a1.length === 0 || a2.length === 0) return -1
  let aLength = a.map(item => item.length) 
  let bLength = b.map(item => item.length)
  let newArr = []
  for (const x of aLength) {
    for (const y of bLength) {
      newArr.push(Math.abs(x-y))
    }
  }
  return Math.max( ...newArr )
}


// This kata is the first of a sequence of four about "Squared Strings".
// You are given a string of n lines, each substring being n characters long: For example:
// s = "abcd\nefgh\nijkl\nmnop"
// We will study some transformations of this square of strings.
//     Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
//     vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
//     Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
//      hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 

// Task:
//     Write these two functions
// and
//     high-order function oper(fct, s) where
//     fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:

s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

let str = "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"

function horMirror(s) {
  return s.split('\n').reverse().map(item => item+'\n').join('').slice(0, -1)
}
console.log(horMirror(s))

function verMirror(s) {
  return s.split('\n').map(item => item.split('').reverse().join('')).map(item => item+'\n').join('')
}
console.log(verMirror(str))

function oper(fct, s) {
  return fct(s)
}
console.log(oper(verMirror, s))


//SQUARE(n)SUM
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//My solution
function squareSum(numbers){
  return numbers.reduce((sum, current) => sum + Math.pow(current, 2), 0)
}

//Other solution
function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
