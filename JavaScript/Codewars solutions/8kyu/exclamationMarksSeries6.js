// https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
// Description:

// Remove n exclamation marks in the sentence from left to right. n is positive integer.
// Examples

// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// Fundamentals

// My solution
function remove(s, n) {
  for (let i = 0; i < n; i++) {
    s = s.replace("!", "");
  }
  return s;
}

// other solution
function remove(s, n) {
  return n > 0 ? remove(s.replace("!", ""), n - 1) : s;
}
