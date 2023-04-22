// https://www.codewars.com/kata/5878520d52628a092f0002d0/javascript
// Description:

// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

// You may assume the input only contain English alphabet and spaces.
// Fundamentals

// My solution
function stringTransformer(str) {
  return str
    .split("")
    .map((e) => (e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()))
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}

// other solution
function stringTransformer(str) {
  var s = "";
  for (var i = 0; i < str.length; ++i)
    if (str[i] == str[i].toLowerCase()) s += str[i].toUpperCase();
    else s += str[i].toLowerCase();
  return s.split(" ").reverse().join(" ");
}
