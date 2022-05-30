// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//My solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
  
}


//Other solutions
function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}



