https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
// Description

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


// My solution
function firstNonRepeatingLetter(s) {
  let lower = s.toLowerCase()
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i]) && 
        s.toLowerCase().indexOf(s[i]) === s.toLowerCase().lastIndexOf(s[i]) &&
        s.toUpperCase().indexOf(s[i]) === s.toUpperCase().lastIndexOf(s[i]))
      return s[i]
  }
  return ''
}


// other solution
function firstNonRepeatingLetter(s) {
  var t=s.toLowerCase();
  for (var x=0;x<t.length;x++)
    if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
      return s[x];
  return "";
}


function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}
