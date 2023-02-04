https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/javascript
// Description:
// Definition

// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task

// Given a number, Find if it is Disarium or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

//     Number passed is always Positive .
//     Return the result as String

// Input >> Output Examples

// disariumNumber(89) ==> return "Disarium !!"

// Explanation:

//     Since , 81 + 92 = 89 , thus output is "Disarium !!"

// disariumNumber(564) ==> return "Not !!"

// Explanation:

// Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
// Fundamentals
// Mathematics


// My solution
function disariumNumber(n){
  return n.toString().split('').reduce((a,c,i) => a + (+c)**(i+1), 0) === n ?
    'Disarium !!' : 'Not !!' 
}


// other solution
function disariumNumber(n){
  let number = n.toString();
  let sum = 0;
  
  for (let i=0; i<number.length; i++){
    sum += Math.pow(number[i], i+1);
  }
  
  return n === sum ? "Disarium !!" : "Not !!";
}
