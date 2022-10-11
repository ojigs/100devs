https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/javascript
// Description:
// Kata Task

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that



//My solution
var humanYearsCatYearsDogYears = function(humanYears) {
  let dogYears = 0, catYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    if (i ==  1) {
      dogYears += 15
      catYears += 15
    } else if (i == 2) {
      dogYears += 9
      catYears += 9
    } else {
      dogYears += 5
      catYears += 4
    }
  }
  return [humanYears, catYears, dogYears]
}



//other solution
var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}
