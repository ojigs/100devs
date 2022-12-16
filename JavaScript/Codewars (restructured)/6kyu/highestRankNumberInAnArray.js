https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
// Description

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// Arrays
// Fundamentals



// My solution
function highestRank(arr){
  let high, freq = 0, obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1
    } else {
      obj[arr[i]] = 1
    }
  }
  
  Object.entries(obj).forEach(e => {
    if (freq <= e[1]) {
      freq = e[1]
      high = +e[0]
    }
  })
  
  return high
}


// other solution
function highestRank(arr){
  var high,max=0,rec={}
  for(var x of arr){
    rec[x]=(rec[x]||0)+1
    if(rec[x]>max){
      max=rec[x]
      high=x
    }
  }
  return high
}
