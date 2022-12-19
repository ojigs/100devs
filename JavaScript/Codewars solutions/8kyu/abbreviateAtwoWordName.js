// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript
// Description:

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
// Strings
// Fundamentals

// My solution
function abbrevName(name) {
  return name
    .split(" ")
    .map((e) => e[0].toUpperCase())
    .join(".");
}

// other solution
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
