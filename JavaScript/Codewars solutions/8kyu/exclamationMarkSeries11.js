https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/javascript
// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


// My solution
function replace(s){
  return s.replace(/[aeiou]/gi, '!')
}


// other solution
const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');
