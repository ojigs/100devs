https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// Description

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


//My solution
function solution(number){
  let setNum = new Set(Array.from({length:number}, (e,i) => i ))
  const arrNum = [...setNum].filter(e => e % 3 == 0 || e % 5 == 0 )
  return arrNum.reduce((sum, curr) => sum + curr, 0)
}


//other solution
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}


function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}
