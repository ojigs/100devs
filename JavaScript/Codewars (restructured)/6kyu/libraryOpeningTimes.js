https://www.codewars.com/kata/56898ff4c115980dd8000051/train/javascript// Description

// You are frantically studying for your exams. To do so you need to frequently visit the library to get your revision time in.

// You will be given a string as a parameter letting you know the current time. The passed string will be given in the form:

// "Monday 12:35"

// Your task is to create a function which lets you know either:

// -When the library closes if it is open or,

// -When the library opens if it is closed.

// If the library is closed and opens later in the current day, you want your return string to say:

// "Library opens: today XX:XX"

// Where "XX:XX" is the time the library opens in a 24 hour format.

// If the library is closed and opens the next day, you want your return string to say:

// "Library opens: WEEKDAY XX:XX"

// Where "WEEKDAY" is the next day that the library opens.

// If the library is open, you want to return:

// "Library closes at XX:XX"

// Where "XX:XX" is the time that the Library closes.

// You can see the opening times of the library below.

// Opening Times -
// Monday:  08:00 - 20:00 
// Tuesday:  08:00 - 20:00
// Wednesday:  08:00 - 20:00
// Thursday:  08:00 - 20:00
// Friday:  08:00 - 20:00
// Saturday:  10:00 - 18:00
// Sunday:  12:00 - 16:30

// Some things to note:

// -The string given will always be in the form "WORD XX:XX" Where "X" will always be a digit from 1-9.

// -Capitalisation of the passed string should not affect the outcome.

// -The time is given in a 24 hour format (your return string should also be in this format).

// -If the first word of the passed string is not a weekday or the time is invalid your function should return "Invalid time!".

// -The format of your returned weekday should start with a capital, with all other characters in lower case eg Monday.

// -The first letter of the returned string should always be a capital.

// Examples:

// openingTimes("Monday 09:30"); //returns "Library closes at 20:00" 

// openingTimes("Saturday 00:00"); //returns "Library opens: today 10:00"

// openingTimes("Tuesday 20:00"); //returns "Library opens: Wednesday 08:00"

// openingTimes("MoNDay 07:59"); //returns "Library opens: today 08:00"

// openingTimes("Tuesday 13:61"); //returns "Invalid time!"

// openingTimes("wednsay 12:40"); //returns "Invalid time!"

// Happy coding!


// My solution
function openingTimes(str) {
  //array from string
  const strArr = str.split(' ')
	
  //Regex test time meets 24 hour format
  let re = /^(?:[01]\d|2[0-3]):(?:[0-5]\d$)/.test(strArr[1])
  
  //validate weekday
  let weekday = strArr[0].substring(0,1).toUpperCase() + strArr[0].substring(1).toLowerCase()
  
  //weekdays array
  let weekdaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  
  const schedule = {
    'Monday': { 'open': '08:00', 'close': '20:00' },
    'Tuesday': { 'open': '08:00', 'close': '20:00' },
    'Wednesday': { 'open': '08:00', 'close': '20:00' },
    'Thursday': { 'open': '08:00', 'close': '20:00' },
    'Friday': { 'open': '08:00', 'close': '20:00' },
    'Saturday': { 'open': '10:00', 'close': '18:00' },
    'Sunday': { 'open': '12:00', 'close': '16:30' },
  }
  
  if (!re || weekdaysArr.indexOf(weekday) < 0) return 'Invalid time!'
  
  let openOrClose
  let dayIndex = weekdaysArr.indexOf(weekday)

  switch (re) {
      case strArr[1] >= schedule[weekday].open && strArr[1] < schedule[weekday].close: 
        openOrClose = 'closes at ' + schedule[weekday].close 
        break;
      case strArr[1] < schedule[weekday].open: 
        openOrClose = 'opens: today ' + schedule[weekday].open
        break;
      case strArr[1] >= schedule[weekday].close:
        openOrClose = 'opens: ' + (weekdaysArr[dayIndex + 1] || 'Monday') + ' ' + schedule[(weekdaysArr[dayIndex + 1] || 'Monday')].open
        break;
  }

  
  return `Library ${openOrClose}`
  
}


// other solution
function openingTimes(str) {
	let match = str.toLowerCase().match(/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday) ((\d\d):(\d\d))$/i)
  if (match === null) return 'Invalid time!'
  let [day, time, hr, min] = match.slice(1)
  if (hr >= '24' || min >= '60') return 'Invalid time!'
  
  let days = 'monday tuesday wednesday thursday friday saturday sunday'.split(' ')
  day = days.indexOf(day)
  let outputDays = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday Monday'.split(' ')
  let open = '08:00 08:00 08:00 08:00 08:00 10:00 12:00 08:00'.split(' ')
  let close = '20:00 20:00 20:00 20:00 20:00 18:00 16:30'.split(' ')
  if (time < open[day]) return 'Library opens: today ' + open[day]
  if (time < close[day]) return 'Library closes at ' + close[day]
  return 'Library opens: ' + outputDays[day+1] + ' ' + open[day+1]
}


function openingTimes(str) {
  const times = {
    Monday: {open: "08:00", close: "20:00"},
    Tuesday:  {open: "08:00", close: "20:00"},
    Wednesday:  {open: "08:00", close: "20:00"},
    Thursday:  {open: "08:00", close: "20:00"},
    Friday:  {open: "08:00", close: "20:00"},
    Saturday:  {open: "10:00", close: "18:00"},
    Sunday:  {open: "12:00", close: "16:30"},
  }
  const convert = (s) => s.split(":").reduce((a,c) => +a + c/60);
  const tomorrow = (today) => Object.keys(times)[(Object.keys(times).indexOf(today) + 1)%7];
  const [day_unfiltered,time] = str.split(/ /);
  const day = day_unfiltered.toLowerCase().replace(/^./, (match) => match.toUpperCase());
  const [hh,mm] = time.split(/:/);
  if (!times[day] || hh > 23 || mm > 59) return "Invalid time!"
  if (convert(time) < convert(times[day].open)) return `Library opens: today ${times[day].open}`
  if (convert(time) < convert(times[day].close)) return `Library closes at ${times[day].close}`
  if (convert(time) >= convert(times[day].close)) return `Library opens: ${tomorrow(day)} ${times[tomorrow(day)].open}`
}
