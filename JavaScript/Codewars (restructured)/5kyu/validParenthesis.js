https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
// Description

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100


//My solution
function validParentheses(parens) {
  const map = {')' : '('}
  let stack = []
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i])
    } else if (stack[stack.length - 1] === map[parens[i]]) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length ? false : true
}


//other solution
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
