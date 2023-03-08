https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/javascript
// Description:
// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// Object-oriented Programming
// Fundamentals



// My solution
var Ghost = function() {
  const color = ['yellow', 'white', 'purple', 'red']
  this.color = color[Math.floor(Math.random() * color.length)]
};


// other solution
class Ghost {
  constructor() {
    this.color = [`red`, `yellow`, `purple`, `white`][Math.random() * 4 ^ 0];
  }
}
