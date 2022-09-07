https://www.codewars.com/kata/58649884a1659ed6cb000072/javascript

// Description:

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


//My solution
function updateLight(current) {
  const changeObj = {
    red: 'green',
    yellow: 'red',
    green: 'yellow'
  }
  return changeObj[current]
}


//other solution
function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}
