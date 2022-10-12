https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
//Description

// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

//     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

//     F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

//     F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

// F(n) being the smallest one such as F(n) * F(n+1) > prod.
// Some Examples of Return:

// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 

// Note:

//     You can see examples for your language in "Sample Tests".




//My solution
function productFib(prod){
  function fib(n, undefined){
    if(fib.cache[n] === undefined){
        fib.cache[n] = fib(n-1) + fib(n-2);
    }

    return fib.cache[n];
  }
fib.cache = [0, 1, 1];
fib(1000)
  let n  = Math.floor(Math.sqrt(prod))
  console.log()
  for (let i = 0; i < n; i++) {
    if (fib(i) * fib(i+1) === prod) {
      return [fib(i), fib(i + 1), true]
    } else if (fib(i) * fib(i+1) < prod && fib(i+1) * fib(i+2) > prod ) {
      return [fib(i+1), fib(i+2), false]
    }
  }
}


//other solution
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}
