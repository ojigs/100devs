// https://www.codewars.com/kata/57b68bc7b69bfc8209000307/javascript
// Description:

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.
// Mathematics
// Fundamentals

// My solution
function average(scores) {
  return Math.round(scores.reduce((a, c) => a + c, 0) / scores.length);
}

// other solution
function av_recur(arr) {
  if (arr.length == 1) {
    return [arr[0], 1];
  }
  const score = av_recur(arr.slice(1));
  return [arr[0] + score[0], score[1] + 1];
}

function average(scores) {
  if (scores.length == 1) {
    return scores[0];
  }
  const score = av_recur(scores.slice(1));
  return Math.round((scores[0] + score[0]) / (score[1] + 1));
}
