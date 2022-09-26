https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
//Description

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,


//My solution
function moveZeros(arr) {
  //Using filter and concat
//   const notZeros = arr.filter(e => e !== 0)
//   let zeros = arr.filter(e => e === 0)
//   arr = notZeros.concat(zeros)
//   return arr
  //Let's sort
  return arr.sort((a,b) => b === 0 ? -1 : 1)
}


//other solution
var moveZeros = function (arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}


let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));
