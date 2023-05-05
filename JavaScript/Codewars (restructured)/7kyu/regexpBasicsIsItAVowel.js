https://www.codewars.com/kata/567bed99ee3451292c000025/javascript
// Description:

// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
// Regular Expressions
// Fundamentals



// My solution
String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this)
};


// othter solution
String.prototype.vowel = function() {
  return /^[aeiouAEIOU]$/.test(this);
};
