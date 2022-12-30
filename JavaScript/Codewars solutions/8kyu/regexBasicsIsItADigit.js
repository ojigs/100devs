https://www.codewars.com/kata/567bf4f7ee34510f69000032/javascript
// Description:

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


// My solution
String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
};


//others olution
String.prototype.digit = function() {
  return /^\d$/.test(this);
};
