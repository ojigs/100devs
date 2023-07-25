https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript
// Description:

// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
// Example

// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"

// Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.
// Fundamentals


// My solution
function unscrambleEggs(word){
  return word.replace(/^[aeiou]/, '')
}


// other solution
function unscrambleEggs(word){
  return word.replace(/egg/g, "");
}


const unscrambleEggs = word => word.replace(/([^aeiou])egg/gi, '$1');
