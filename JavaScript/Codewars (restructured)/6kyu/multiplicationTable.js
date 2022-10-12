https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
//Description

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


//My solution
multiplicationTable = function(size) {
  return Array.from({length: size})
              .map((e, i) => [...Array(size)]
                             .map((el, ind) => (ind + 1) * (i+1)))
}



//other solution
multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}


