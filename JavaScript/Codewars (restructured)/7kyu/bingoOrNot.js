// Description:

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
// Games
// Arrays
// Fundamentals

// My solution
function bingo(a) {
  const bingo = ["B", "I", "N", "G", "O"];
  return bingo.every((e) =>
    a.some((num) => String.fromCharCode(64 + num) === e)
  )
    ? "WIN"
    : "LOSE";
}

// other solution
const bingo = (ar) =>
  [2, 7, 9, 14, 15].every((e) => ar.includes(e)) ? "WIN" : "LOSE";
