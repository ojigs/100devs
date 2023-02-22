https://www.codewars.com/kata/593c9175933500f33400003e/javascript
// Description:

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)

// should return

// [5.0, 10.0, 15.0]

// Mathematics
// Fundamentals


// My solution
function multiples(m, n){
  return Array.from({length: m}, (_,i) => n*(i+1))
}


// other solution
function multiples(m, n){
  var arr=[];
  for (var i=1; i<=m; ++i)
    arr.push(n*i);
  return arr;
}
