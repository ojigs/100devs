https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/javascript
// Description:

// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null

// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).
// Fundamentals


// My solution
function calculate(num1, operation, num2) {
  if (operation === '/' && num2 === 0) return null
  let operand = {
    '*': num1 * num2,
    '+': num1 + num2,
    '-': num1 - num2,
    '/': num1 / num2
  }
  return operand.hasOwnProperty(operation) ? operand[operation] : null
}


// other solution
function calculate(num1, operation, num2) {
  var ops = {
    '+': function(x, y) { return x + y; },
    '-': function(x, y) { return x - y; },
    '*': function(x, y) { return x * y; },
    '/': function(x, y) { return y === 0 ? null : x / y; }
  };
  return (ops[operation] || function() { return null; })(num1, num2);
}


function calculate(a, o, b) {
 switch(o) {
    case '+':
        return a+b;
    case '-':
        return a-b;
    case '*':
        return a*b;
    case '/':
        return b===0?null:a/b;
    default:
        return null;
}
}
