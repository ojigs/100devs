https://www.codewars.com/kata/5a3e1319b6486ac96f000049/javascript
// Description:
// Definition

// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Task

// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".
// Notes

//     Number passed is always Positive.
//     Return the result as String

// Input >> Output Examples

// strong_num(1) ==> return "STRONG!!!!"

// Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

// strong_num(123) ==> return "Not Strong !!"

// Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

// strong_num(2)  ==>  return "STRONG!!!!"

// Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

// strong_num(150) ==> return "Not Strong !!"

// Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
// Fundamentals
// Mathematics


// My solution
function strong(n) {
  const det = { 0: 1, 1: 1, 2: 2, 3: 6, 4: 24, 5: 120, 6: 720, 7: 5040, 8: 40320, 9: 362880 }
  let strength = [...n.toString()].reduce((a,c) => a + det[c], 0)
  return strength === n ? 'STRONG!!!!' : 'Not Strong !!'
}


// other solution
function strong(n) {
  let arr = String(n).split("");
  
  let sum = 0;
  
  function factorial(fnNum){
    if(fnNum <= 1){
      return 1;
    }else{
      return fnNum * factorial(fnNum - 1);
    }
  }
  
  for(let i = 0; i < arr.length; i++){
    sum += factorial(arr[i]);
  }
  
  return n == sum ? "STRONG!!!!" : "Not Strong !!"; 
}
