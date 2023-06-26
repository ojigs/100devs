https://www.codewars.com/kata/55805ab490c73741b7000064/javascript
// Description:
// back·ro·nym

//     An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

//     "Biodiversity Serving Our Nation", or BISON

// (from https://en.oxforddictionaries.com/definition/backronym)

// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

// dict["P"] == "perfect"

// Examples

// "dgm" ==> "disturbing gregarious mustache"

// "lkj" ==> "literal klingon joke"

// Fundamentals
// Strings



// My solution
var makeBackronym = function(string){
  return string.toUpperCase().split('').map(e => dict[e]).join(' ')
};


// other solution
const makeBackronym = string =>
  [...string].map(val => dict[val.toUpperCase()]).join(` `);
