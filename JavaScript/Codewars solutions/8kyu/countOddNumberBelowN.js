// Description:

// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// Expect large Inputs!


//My solution
function oddCount(n){
  return Math.floor(n/2)
}

//This kata was designed to work like a math problem. First instict was to use a for loop but got execution timeout. Tried arrays, same thing, then I settled for this math solution and that solved it
