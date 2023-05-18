https://www.codewars.com/kata/5c44b0b200ce187106452139/train/javascript
// Description:

// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

// Fundamentals


// My solution
function args_count(...args) {
  return args.length
}


// other solution
function args_count() {
  return arguments.length;
}
