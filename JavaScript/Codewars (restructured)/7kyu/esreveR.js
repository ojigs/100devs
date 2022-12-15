https://www.codewars.com/kata/5413759479ba273f8100003d/javascript
// Description:

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)


// My solution
reverse = function(array) {
  let reversed = []
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i])
  }
  return reversed
}


/other solution
reverse = function(array) {
  return array.reduceRight(function(a, v){ return a.push(v), a }, []);
}
