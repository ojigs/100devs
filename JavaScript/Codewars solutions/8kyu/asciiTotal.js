https://www.codewars.com/kata/58f0ba42e89aa6158400000e/javascript
// Description:

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291
// Fundamentals


// My solution
function uniTotal (string) {
  return [...string].reduce((a,c) => a + c.charCodeAt(), 0)
}


// other solution
function uniTotal(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count += str.charCodeAt(i);
  }
  return count;
}
