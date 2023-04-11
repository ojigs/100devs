https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript
// Description

// Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO'] 

// which represents:

// should return: "Total land perimeter: 24".

// Following input:

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']

// which represents:

// should return: "Total land perimeter: 18"
// Fundamentals



// My solution
function landPerimeter(arr) {
  let perimeter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'X') {
        // Check top neighbor
        if (i === 0 || arr[i-1][j] === 'O') perimeter++;
        // Check bottom neighbor
        if (i === arr.length-1 || arr[i+1][j] === 'O') perimeter++;
        // Check left neighbor
        if (j === 0 || arr[i][j-1] === 'O') perimeter++;
        // Check right neighbor
        if (j === arr[i].length-1 || arr[i][j+1] === 'O') perimeter++;
      }
    }
  }
  return `Total land perimeter: ${perimeter}`;
}



// other solution
function landPerimeter(arr) {
  let count = 0;
  for(let y=0; y<arr.length; y++) {
    for(let x=0; x<arr[0].length; x++) {
      if(arr[y][x] === "X") {
        if(y === 0               || arr[y-1][x] !== "X") count++;
        if(y === arr.length-1    || arr[y+1][x] !== "X") count++;
        if(x === 0               || arr[y][x-1] !== "X") count++;
        if(x === arr[0].length-1 || arr[y][x+1] !== "X") count++;
      }
    }
  }
  return "Total land perimeter: " + count;
}
