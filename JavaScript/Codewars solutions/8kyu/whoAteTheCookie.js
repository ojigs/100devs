https://www.codewars.com/kata/55a996e0e8520afab9000055/javascript
// Description:

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!
// Fundamentals


// My solution
function cookie(x){
  let name = typeof x === 'string'? 'Zach' : typeof x === 'number' ? 'Monica' : 'the dog'
  return `Who ate the last cookie? It was ${name}!`
}


// other solution
function cookie(x){
  return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}
