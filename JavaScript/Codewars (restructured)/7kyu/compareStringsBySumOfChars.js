https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/javascript
// Description

// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.
// Examples:

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

// Mathematics
// Strings
// Fundamentals


// My solution
function compare(s1, s2) {
  const sum = (str) => {
    // check if string contains characters other than letters
    if (str === null || !(/^[a-zA-Z]*$/.test(str))) {
      str = ""
    }
    return str.toUpperCase().split('').reduce((a, c) => a + c.charCodeAt(), 0)
  }
  return sum(s1) === sum(s2)
}


// other solution
function compare(s1, s2) {
  if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
    return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
           s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
  return true;
}
