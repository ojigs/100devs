https://www.codewars.com/kata/545991b4cbae2a5fda000158/javascript
// Description:

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
// Fundamentals


// My solution
function include(arr, item){
  return arr.includes(item)
}


// other solution
function include(arr, item) {
  return arr.indexOf(item) !== -1;
}


