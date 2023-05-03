https://www.codewars.com/kata/5809b62808ad92e31b000031/javascript
// Description:

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.
// Examples

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// Strings
// Fundamentals



// My solution
function calculate(str) {
 return eval(str.replace(/plus/g, '+').replace(/minus/g, '-')) + ''
}


// other solution
function calculate(str) {
  let numbers = str.split(/plus|minus/);
  let operations = str.match(/[a-z]+/g);
  let sum = parseInt(numbers[0]);
  for(let i = 0, len = operations.length; i < len; i++){
    switch(operations[i]){
      case "plus":
        sum += parseInt(numbers[i+1]);
        break;
      case "minus":
        sum -= parseInt(numbers[i+1]);
        break;
    }
  }
  return sum+"";
}
