https://www.codewars.com/kata/56582133c932d8239900002e/javascript
// Description:

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
// Example

// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 

// The most frequent number in the array is -1 and it occurs 5 times.
// Data Structures
// Fundamentals



// My solution
function mostFrequentItemCount(collection) {
  let obj = collection.reduce((a,c) => {
    a[c] = a[c] ? a[c] + 1 : 1
    return a
  }, {})
  return Math.max(...Object.values(obj), 0) 
}


// other solution
function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;
  
  var count = Object.create(null);
  
  collection.forEach( item => {
    count[item] = (count[item] || 0) + 1;
  });
  
  return Math.max(...Object.values(count));
}


// More solution
function mostFrequentItemCount(c) {
  return c.length ? Math.max(...c.map(x=>c.filter(y=>y==x).length)) : 0;
}
