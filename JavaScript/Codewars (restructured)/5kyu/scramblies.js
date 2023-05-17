https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
// Description

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// Strings
// Performance
// Algorithms


// My solution
function scramble(str1, str2) {
  const count = {}
  for (let i = 0; i < str1.length; i++) {
    count[str1[i]] = (count[str1[i]] || 0) + 1
  }
  for (let i = 0; i < str2.length; i++) {
    if (!count[str2[i]]) return false
    count[str2[i]]--
  }
  return true
}



// other solution
function scramble(str1, str2) {
 let str1Hash = {}
 let containsScramble = true
 for (const char1 of str1) {
   str1Hash[char1] ? str1Hash[char1] += 1 : str1Hash[char1] = 1
 }
 
 for (const char2 of str2) {
   str1Hash[char2] ? str1Hash[char2] -= 1 : containsScramble = false
 }
 
 return containsScramble
}
