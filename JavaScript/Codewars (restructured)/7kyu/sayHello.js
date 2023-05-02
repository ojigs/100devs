https://www.codewars.com/kata/55955a48a4e9c1a77500005a/javascript
// Description:

// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

// Fundamentals



// My solution
function greet(name) {
  return name ? `hello ${name}!` : null
}


// other solution
function greet(name) {
  if( name == "" || name == undefined ) { return null; }
  return "hello " + name + "!";
}
