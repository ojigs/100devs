https://www.codewars.com/kata/56eb0be52caf798c630013c0/javascript
// Description:

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// Date Time


// My solution
function unluckyDays(year){
  let count = 0
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13)
    if (date.getDay() === 5) count++
  }
  return count
}


// other solution
function unluckyDays(year){
	return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
}
