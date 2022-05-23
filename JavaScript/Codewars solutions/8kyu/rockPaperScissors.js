// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// rockpaperscissors


//My solution
const rps = (p1, p2) => {
  if ((p1 == 'scissors' && p2 == 'paper') || (p1 == 'rock' && p2 == 'scissors') || (p1 == 'paper' && p2 == 'rock') ) {
    return 'Player 1 won!'
  } else if ((p1 == 'scissors' && p2 == 'rock') || (p1 == 'paper' && p2 == 'scissors') || (p1 == 'rock' && p2 == 'paper') ) {
    return 'Player 2 won!'
  } else {
    return 'Draw!'
  }
};


//Other solutions
const rps = (p1, p2) => {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };
  
  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};


function rps(p1, p2) {
  var choices = ['rock', 'paper', 'scissors'];
  var x = choices.indexOf(p1);
  var y = choices.indexOf(p2);
  
  if (x === y) return 'Draw!';
  if (x === 0 && y === 2) return 'Player 1 won!';
  if (x === 2 && y === 0) return 'Player 2 won!';
  if (x > y) return 'Player 1 won!'
  else return 'Player 2 won!';
}
