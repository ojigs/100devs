https://www.codewars.com/kata/580a4734d6df748060000045/javascript
// Description:

// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.



//My solution
function isSortedAndHow(array) {
  const asc = []
  const desc = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= array[i+1]) {
      asc.push(1)
      continue
    } else if (array[i] >= array[i+1]) {
      desc.push(1)
      continue
    } 
  }
  return desc.length && desc.length === array.length - 1 ? 'yes, descending'
                  : asc.length && asc.length === array.length - 1 ? 'yes, ascending'
                  : 'no'
}



//other solution
function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}


const isSortedAndHow = array => {
  let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
  let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
  
  return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}
