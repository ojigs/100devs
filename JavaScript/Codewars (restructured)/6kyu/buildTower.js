// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


//My solution
function towerBuilder(n) {
  let arr = []
  const width = (2 * n) -1;
  const mid = Math.floor(width / 2);

  for(let i = 0; i < n; i++) {
      let block = '';
      for(let j = 0; j < width; j++) {
          if(j < mid - i || j > mid + i) {
              block += ' ';
          } else {
              block += '*';
          }
      }
      arr.push(block);
  }
  return arr
}
