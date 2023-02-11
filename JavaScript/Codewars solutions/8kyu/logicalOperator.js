https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
// Decsription

// Your Task

// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
// Examples

//     booleans = [True, True, False], operator = "AND"

//     True AND True -> True
//     True AND False -> False
//     return False

//     booleans = [True, True, False], operator = "OR"

//     True OR True -> True
//     True OR False -> True
//     return True

//     booleans = [True, True, False], operator = "XOR"

//     True XOR True -> False
//     False XOR False -> False
//     return False

// Input

//     an array of Boolean values (1 <= array_length <= 50)
//     a string specifying a logical operator: "AND", "OR", "XOR"

// Output

// A Boolean value (True or False).
// Arrays
// Fundamentals



// My solution
function logicalCalc(array, op){
  let operator = {
    AND: (a, c) => a && c, 
    OR: (a, c) => a || c, 
    XOR: (a, c) => a ^ c ? true : false
  }
  return array.reduce((a,c) => operator[op](a, c)) 
}


// other solution
var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}


function logicalCalc(array, op){
  return array.reduce(ops[op]);
}
