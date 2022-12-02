https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript
// Description:

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// My solution
function grow(x){
  return x.reduce((a,c) => a*c)
}


// other solution
const grow = x => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};
