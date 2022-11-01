https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript
// Description

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

//     Math.round()
//     Math.ceil()
//     Math.floor()


//My solution
Math.round = function(number) {
  let min = number.toString().split('.')
  if (min[1] && min[1][0] >= 5) {
    min[0] = +min[0] + 1
  }
  return +min[0]
};

Math.ceil = function(number) {
  if (Number.isInteger(number)) return number
  let max = number.toString().split('.')
  return +max[0] + 1
};

Math.floor = function(number) {
  if (Number.isInteger(number)) return number
  let min = number.toString().split('.')
  return +min[0]
};



//other solution
Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};
