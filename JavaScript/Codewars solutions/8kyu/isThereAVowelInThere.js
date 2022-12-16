https://www.codewars.com/kata/57cff961eca260b71900008f/javascript
// Description:

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


// My solution
function isVow(a){
  let vowel = /[aeiou]/
  return a.map(e => ( vowel.test( String.fromCharCode(e) ) ) ? String.fromCharCode(e) : e)
}


// other solution
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)
