https://www.codewars.com/kata/57a6633153ba33189e000074

// Description:

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


//My solution
const orderedCount = function (text) {
  return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
}


//other solution
const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
