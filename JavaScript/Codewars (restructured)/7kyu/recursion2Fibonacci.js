https://www.codewars.com/kata/5694cb0ec554589633000036/solutions/javascript
// Description:
// Do you know recursion?
// This is a kata series that you can only solve using recursion.

// ##2 - Fibonacci number

// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

// f(n) = f(n-1) + f(n-2)

// with seed values

// f(1) = 1 and f(2) = 1

// #Your task

// You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.
// Previous (Recursion #1 - Factorial) 


// My solution
const fibonacci = n => {
  if (n <= 2) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
};


// other solution
var cache = { 1 : 1, 2 : 1}

const fibonacci = n => cache[n] || (cache[n] = fibonacci(n - 1) + fibonacci(n - 2))
