// https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/javascript
// Description

// Introduction

// Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

// Task

// Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

// The Board
// Rules

// 1.  There are two players and both start off the board on square 0.

// 2.  Player 1 starts and alternates with player 2.

// 3.  You follow the numbers up the board in order 1=>100

// 4.  If the value of both die are the same then that player will have another go.

// 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

// 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

// 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

// 8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

// Returns

// Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

// Return Game over! if a player has won and another player tries to play.

// Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

// Good luck and enjoy!
// Kata Series

// If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.

// Rank
// Maze Runner

// Rank
// Scooby Doo Puzzle

// Rank
// Driving License

// Rank
// Connect 4

// Rank
// Vending Machine

// Rank
// Snakes and Ladders

// Rank
// Mastermind

// Rank
// Guess Who?

// Rank
// Am I safe to drive?

// Rank
// Mexican Wave

// Rank
// Pigs in a Pen

// Rank
// Hungry Hippos

// Rank
// Plenty of Fish in the Pond

// Rank
// Fruit Machine

// Rank
// Car Park Escape

// My solution
class SnakesLadders {
  constructor() {
    this.player1 = 0;
    this.player2 = 0;
    this.playerTurn = 1;
    this.gameOver = false;
    this.ladders = {
      2: 38,
      7: 14,
      8: 31,
      15: 26,
      21: 42,
      28: 84,
      36: 44,
      51: 67,
      71: 91,
      78: 98,
      87: 94,
    };
    this.snakes = {
      16: 6,
      46: 25,
      49: 11,
      62: 19,
      64: 60,
      74: 53,
      89: 68,
      92: 88,
      95: 75,
      99: 80,
    };
  }

  play(die1, die2) {
    if (this.gameOver) return "Game over!";

    let player = this.playerTurn === 1 ? this.player1 : this.player2;
    let newPosition = player + die1 + die2;
    let message;
    if (newPosition > 100) {
      newPosition = 200 - newPosition;
    }
    if (this.ladders[newPosition]) {
      newPosition = this.ladders[newPosition];
    }
    if (this.snakes[newPosition]) {
      newPosition = this.snakes[newPosition];
    }
    if (this.playerTurn === 1) {
      this.player1 = newPosition;
    } else {
      this.player2 = newPosition;
    }
    if (newPosition === 100) {
      this.gameOver = true;
      return `Player ${this.playerTurn} Wins!`;
    }
    message = `Player ${this.playerTurn} is on square ${newPosition}`;
    if (die1 !== die2) {
      this.playerTurn = this.playerTurn === 1 ? 2 : 1;
    }
    return message;
  }
}

// other solution
function SnakesLadders() {
  this.snakes = {
    16: 6,
    46: 25,
    49: 11,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80,
  };
  this.ladders = {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94,
  };
  this.playerPlaces = { 1: 0, 2: 0 };
  this.currentPlayer = 1;
  this.gameOver = false;
}

SnakesLadders.prototype.play = function (die1, die2) {
  //detect playing after game over
  if (this.gameOver) return "Game over!";

  //calculate normal move
  this.playerPlaces[this.currentPlayer] += die1 + die2;

  //check win condition
  if (this.playerPlaces[this.currentPlayer] == 100) {
    this.gameOver = true;
    return "Player " + this.currentPlayer + " Wins!";
  } else if (this.playerPlaces[this.currentPlayer] > 100)
    //handle bounce-back
    this.playerPlaces[this.currentPlayer] =
      100 - (this.playerPlaces[this.currentPlayer] - 100);

  //handle landing on a snake
  if (this.snakes[this.playerPlaces[this.currentPlayer]])
    this.playerPlaces[this.currentPlayer] =
      this.snakes[this.playerPlaces[this.currentPlayer]];

  //handle landing on a ladder
  if (this.ladders[this.playerPlaces[this.currentPlayer]])
    this.playerPlaces[this.currentPlayer] =
      this.ladders[this.playerPlaces[this.currentPlayer]];

  var result =
    "Player " +
    this.currentPlayer +
    " is on square " +
    this.playerPlaces[this.currentPlayer];

  //change players only if the two dice are different
  if (die1 !== die2) this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;

  return result;
};
