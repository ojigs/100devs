// Description:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My solution
function find_average(array) {
  return array.reduce((sum, curr) => sum + curr, 0)/array.length || 0
}

//other solution
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}
