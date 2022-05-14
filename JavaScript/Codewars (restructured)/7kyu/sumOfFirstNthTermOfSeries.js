// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

//My Solution
function SeriesSum(n)
{
  // Happy Coding ^_^
  let arr = []
  let r = 1
  for (let i = 0; i < n; i++) {
      arr.push(1/r)
      r += 3
  }
 return (arr.reduce((sum, curr) => sum + curr, 0)).toFixed(2)
      
}

//Other solutions
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}


function SeriesSum(n)
{
  var s = 0;
  while(n) {
    s += 1/(1 + 3 * --n);
  }
  return s.toFixed(2);
}
