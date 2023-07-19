// https://www.codewars.com/kata/585a033e3a36cdc50a00011c
// Description:

// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

// Strings
// Fundamentals

// My solution
function freqSeq(str, sep) {
  let hash = {},
    result = "";
  for (const char of str) {
    hash[char] = (hash[char] || 0) + 1;
  }
  const outputArray = [];
  for (const char of str) {
    outputArray.push(hash[char]);
  }

  return outputArray.join(sep);
}

// other solution
function freqSeq(str, sep) {
  return str
    .split("")
    .map((v, i, arr) => arr.filter((vi) => vi === v).length)
    .join(sep);
}
