https://www.codewars.com/kata/57f75cc397d62fc93d000059/javascript
// Description

// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^

// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// Fundamentals
// Arrays
// Strings
// Mathematics


// My solution
function calc(x){
  let total1 = x.split('').reduce((a,c) => a + c.charCodeAt(), '')
  let total2 = total1.replace(/7/g, 1)
  let sum1 = total1.split('').reduce((a,c) => a + (+c), 0)
  let sum2 = total2.split('').reduce((a,c) => a + (+c), 0)
  return sum1 - sum2
}


// other ssolution
function calc(x){
  let sum = n => [...n].reduce((a,b) => +a + +b);
  let total1 = x.replace(/./g, x => x.charCodeAt(0));
  let total2 = total1.replace(/7/g,'1');
  return sum(total1) - sum(total2);
}


const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6
