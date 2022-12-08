https://www.codewars.com/kata/59c633e7dcc4053512000073/javascript
// Description

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// For C: do not mutate input.

// More examples in test cases. Good luck!

// If you like this Kata, please try:

// Word values

// Vowel-consonant lexicon
// Strings
// Fundamentals

// Suggest kata description edits


// My solution
function solve(s) {
  const arr = s.split(/[aeiou]/g).filter(e => e.length)
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    let sum = 0 
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i].charCodeAt(j) - 96
    }
    if (sum > max) max = sum
  }
  return max
};


// other solution
function solve(s) {
  return Math.max(...s.match(/[^aeiou]+/g).map(x => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0)))
}
