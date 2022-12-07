https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/javascript
// Description:

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:

// Input:

// > 6

// Output:

//     0+1+2+3+4+5+6 = 21

// Input:

// > -15

// Output:

//     -15<0

// Input:

// > 0

// Output:

//     0=0

// Fundamentals


// My solution
var SequenceSum = (function() {
  let arr = []
  function SequenceSum() {
    console.log(arr.length)
  }

  SequenceSum.showSequence = function(count) {
    for (let i = 0; i <= count; i++) {
      arr.push(i)
    }
    return arr
  };

  return SequenceSum;

})();




// other solution
class SequenceSum {
  static showSequence(n) {
    return n < 0
      ? `${n}<0`
      : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
  }
}
