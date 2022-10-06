https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/javascript
// Description:

// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// Fundamentals


//My solution
var countSheep = function (num){
  return [...Array(num)].map((e, i) => `${i + 1} sheep...`).join('')
}


//other solution
var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}
