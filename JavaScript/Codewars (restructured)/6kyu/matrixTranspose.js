https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript
// Description

// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |

// is

// | 1 4 |
// | 2 5 |
// | 3 6 |

// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.
// Mathematics
// Algebra
// Matrix
// Algorithms


// My solution
function transpose(matrix) {
  let arr = []
  for (let i = 0; i < matrix[0].length; i++) {
    arr.push([])
    for (let j = 0; j < matrix.length; j++) {
      arr[i].push(matrix[j][i])
    }
  }
  return arr
}


//other solution
var transpose = m => m[0].map((_, i) => m.map(r => r[i]));

