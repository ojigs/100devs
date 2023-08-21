// https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript
// Description:

// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
// Fundamentals
// Strings
// Arrays

// My solution
function gordon(a) {
  return a
    .toUpperCase()
    .replace(/A/g, "@")
    .replace(/[eiou]/gi, "*")
    .split(" ")
    .map((e) => e + "!!!!")
    .join(" ");
}

// other solution]
const gordon = (s) =>
  s
    .toUpperCase()
    .replace(/\w+/g, `$&!!!!`)
    .replace(/[AEIOU]/g, (val) => (val === `A` ? `@` : `*`));
