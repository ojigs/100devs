// Introduction

// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!

// Task

// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]

// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point

//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

// Rules

// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.


//My solution
function mazeRunner(maze, directions) {
  let arr = []
  let row, col
  console.log(directions)
  
    //searrch start position
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] == 2) {
          row = i
          col = j
        }
      }
    } 

    //update arr with elements in the path of directions
    for (let k = 0; k < directions.length; k++) {
      if (directions[k] == 'N') {
        if (maze[row-1] == undefined) {
          arr.push(undefined)
        } else {
          arr.push(maze[row-1][col])
          row-- 
        }
        
      } else if (directions[k] == 'S') {
        if (maze[row+1] == undefined) {
          arr.push(undefined)
        } else {
          arr.push(maze[row+1][col])
          row++
        }
        
      } else if (directions[k] == 'E') {
          arr.push(maze[row][col+1])
          col++
        
      } else if (directions[k] == 'W') {
          arr.push(maze[row][col-1])
          col--
        
      }
    }
  
    console.log(arr)
    //loop through arr and define logic for finish, dead, and lost
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == undefined || arr[i] == 1) {
        return 'Dead'
      } 
      if (arr[i] == 3) {
        return 'Finish'
      } 
      if ((arr[i] == 0 && i == arr.length - 1) || (arr[i] == 2 && i == arr.length - 1)) {
        return 'Lost'
      }
    }

}


//other solution
function mazeRunner(maze, dirs) {
  var y = maze.findIndex(arr => arr.includes(2));
  var x = maze[y].indexOf(2);
  var curPos;
  for (var i = 0; i < dirs.length; i++) {
    if (dirs[i] === 'N') y--;
    if (dirs[i] === 'S') y++;
    if (dirs[i] === 'W') x--;
    if (dirs[i] === 'E') x++;
    if (!maze[y]) return 'Dead';
    curPos = maze[y][x];
    if (curPos === 3) return 'Finish';
    if (curPos === 1 || curPos === undefined) return 'Dead';
  }
  return 'Lost';
}
