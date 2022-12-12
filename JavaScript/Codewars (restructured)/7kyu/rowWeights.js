https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/javascript
// Description:
// Scenario

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes

//     Array size is at least 1.
//     All numbers will be positive.
//     Input >> Output Examples

// rowWeights([13, 27, 49])  ==>  return (62, 27)

// Explanation:

// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

// Explanation:

// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)

// Explanation:

// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
// Fundamentals
// Arrays



// My solution
function rowWeights(array){
  let team1 = 0, team2 = 0 
  for (let i = 0; i < array.length; i+=2) {
    team1 += array[i]
    team2 += array[i+1] || 0
  }
  return [team1, team2]
}


/other solution
function rowWeights(array){
  var arr = [0, 0];
  for (var i = 0; i < array.length; i++) {
    i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
  }
  return arr;
}
