
https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/train/javascript// Description

// dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".
// Task:

//     function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
//     function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.

// Examples:

// mean("London", data), 51.19(9999999999996) 
// variance("London", data), 57.42(833333333374)

// Notes:

//     if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

//     Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

//     Shell
//         Shell tests only variance.
//         In "function "variance" $1 is "data", $2 is "town".

//     A ref: http://www.mathsisfun.com/data/standard-deviation.html

//     data and data1 (can be named d0 and d1 depending on the language; see "Sample Tests:") are adapted from: http://www.worldclimate.com

// Fundamentals
// Strings



// My solution
function mean(town, strng) {
  let towns = strng.split('\n')
  for (let i = 0; i < towns.length; i++) {
    let townName = towns[i].split(':')[0]
    if (townName === town) {
      let rainData = towns[i].split(':')[1].split(',').map(e => +e.split(' ')[1])
      let sum = rainData.reduce((a,c) => a + c) 
      return sum/rainData.length
    }
  }
  return -1
}

function variance(town, strng) {
  let towns = strng.split('\n')
  for (let i = 0; i < towns.length; i++) {
    let townName = towns[i].split(':')[0]
    if (townName === town) {
      let rainData = towns[i].split(':')[1].split(',').map(e => +e.split(' ')[1])
      let avg = mean(town, strng)
      let sum = rainData.reduce((a,c) => a + (c - avg)**2, 0) 
      return sum/rainData.length
    }
  }
  return -1
}


// other solution
Math.sum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

Math.mean = function(arr) {
  return Math.sum(arr) / arr.length;
}

Math.variance = function(arr) {
  let mean = Math.mean(arr)
  , deltas = arr.map((value) => Math.pow(value - mean, 2));
  
  return Math.mean(deltas);
}

function parse(town, str) {
  let match = str.match(new RegExp(town + ':.*?(?:\n|$)', 'i'));
  
  if (!match) return [];
  return match.pop().match(/\d+(\.\d+)/g).map(Number);
}

function mean(town, str) {
  let history = parse(town, str);
  return history.length ? Math.mean(history) : -1;
}

function variance(town, str) {
  let history = parse(town, str);
  return history.length ? Math.variance(history) : -1;
}
