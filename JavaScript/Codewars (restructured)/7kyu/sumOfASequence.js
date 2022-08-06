// Description:

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)


//My solution
const sequenceSum = (begin, end, step) => {
  let seq = []
  for (let i = begin; i <= end; i+=step) {
    seq.push(i)
  }
  return seq.reduce((sum, current) => sum + current, 0)
};


//other solution
const sequenceSum = (begin, end, step) => {
  var sum = 0;
  for(var i=begin;i<=end;i+=step)
  {
    sum += i;
  }
  return sum;
};


//Recursive solution
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};
