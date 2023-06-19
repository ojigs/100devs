// Description:

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// Arrays
// Fundamentals



// My solution
function largest(n, array) {
    return n == 0 ? [] : array.sort((a, b) => a - b).slice(-n);
}


// other solution
function largest(n,xs){
  return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}
