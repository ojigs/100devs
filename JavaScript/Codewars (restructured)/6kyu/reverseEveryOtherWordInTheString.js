// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
// Description

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
// Arrays
// Fundamentals


// My solution
function reverse(str){
  return str.split(' ').map((e,i) => i%2 ? e.split('').reverse().join('') : e).join(' ').trim()
}


// other solution
function reverse(string) {
  return string
    .split` `
    .map((w, i) => i & 1 ? [...w].reverse().join`` : w)
    .join` `
    .trim();
}
