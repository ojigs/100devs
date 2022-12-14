https://www.codewars.com/kata/57eaec5608fed543d6000021/javascript
// Description:

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.



// My solution
function divCon(x){
  return x.reduce((a,c) => typeof c === 'string' ? a - (+c) : a + c, 0)
}


// other solution
function divCon(x){
  let numValue = 0;
  let strValue = 0;
  
  for(let i = 0; i < x.length; i++) {
    if(typeof(x[i]) === 'string' ) {
      strValue += parseFloat(x[i]);
    } else if(typeof(x[i]) === 'number' ) {
      numValue += x[i];
    }
  }
  return numValue - strValue;
}
