https://www.codewars.com/kata/59727ff285281a44e3000011/javascript
// Description:

// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
// Fundamentals



// My solution
function bandNameGenerator(str) {
  if (str[0].toLowerCase() === str.slice(-1)) {
    return `${str[0].toUpperCase()}${str.slice(1).repeat(2)}`
  }
  return `The ${str[0].toUpperCase()}${str.slice(1)}`
}


// other solution
const bandNameGenerator = s => s[0] != s[s.length-1] ? "The " + s[0].toUpperCase() + s.slice(1) :
       s[0].toUpperCase() + s.slice(1) + s.slice(1);
