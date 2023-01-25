https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/javascript
// Description:

// Complete the function which returns the weekday according to the input number:

//     1 returns "Sunday"
//     2 returns "Monday"
//     3 returns "Tuesday"
//     4 returns "Wednesday"
//     5 returns "Thursday"
//     6 returns "Friday"
//     7 returns "Saturday"
//     Otherwise returns "Wrong, please enter a number between 1 and 7"

// Fundamentals


// My solution
function whatday(num) { 
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
return day[num - 1] || 'Wrong, please enter a number between 1 and 7'
}


// other solution
function whatday(num) { 
  let days = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  }
  return days[ num ] || 'Wrong, please enter a number between 1 and 7';
}
