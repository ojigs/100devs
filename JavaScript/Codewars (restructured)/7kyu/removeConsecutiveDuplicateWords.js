https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
// Description

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// Strings
// Regular Expressions
// Algorithms



// My solution
const removeConsecutiveDuplicates = s => s.split(' ').filter((e,i,a) => e != a[i+1]).join(' ')


// other solution
const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')
