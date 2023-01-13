https://www.codewars.com/kata/57a049e253ba33ac5e000212/javascript
// Description:

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial
// Fundamentals



/My solution
function factorial(n){
  if (n <= 1) {
    return 1
  } 
  return n * factorial(n-1)
}


// other solution
const factorial = n => n ? factorial(n - 1) * n : 1;


function factorial(n){
  let answer = 1;
  
  while (n > 0) {
    answer *= n;
    n--;
  }
  
  return answer;
}
