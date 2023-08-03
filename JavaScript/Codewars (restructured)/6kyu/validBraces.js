https://www.codewars.com/kata/5277c8a221e209d3f6000b56
// Description:

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// What is considered Valid?

// A string of braces is considered valid if all braces are matched with the correct brace.
// Examples

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// Algorithms


// My solution
function validBraces(braces){
  const hash = {
    "}": "{",
    ")": "(",
    "]": "[",
  }
  const arr = []
  for (const char of braces) {
    if (hash[char]) {
      if (arr.pop() !== hash[char]) {
        return false
      }
    } else {
      arr.push(char)
    }
  }
  return arr.length === 0
}


// other solution
function validBraces(str){
	var prev = "";
	while (str.length != prev.length) {
            prev = str;
            str = str
                .replace("()", "")
                .replace("[]", "")
                .replace("{}", "");                
    }
    return (str.length === 0);
}
