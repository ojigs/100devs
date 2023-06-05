https://www.codewars.com/kata/5697fb83f41965761f000052/javascript
// Description:

// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

// Fundamentals


// My solution
function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(e => e.length > n)
}


// other solution
const filterLongWords = (sentence, n) => sentence.split(/\s/g).filter( wd => wd.length > n )
