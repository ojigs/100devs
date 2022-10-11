https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/javascript
// Description:

// Write a function that checks if a given string (case insensitive) is a palindrome.


//My solution
function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}
