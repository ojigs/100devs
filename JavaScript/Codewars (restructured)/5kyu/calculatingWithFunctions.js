https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// Description

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));



//My solution
function zero() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 0
  }
  return Math.floor(eval(`0 ${arguments[0]}`))
}
function one() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 1
  }
  return Math.floor(eval(`1 ${arguments[0]}`))
}
function two() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 2
  }
  return Math.floor(eval(`2 ${arguments[0]}`))
}
function three() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 3
  }
  return Math.floor(eval(`3 ${arguments[0]}`))
}
function four() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 4
  }
  return Math.floor(eval(`4 ${arguments[0]}`))
}
function five() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 5
  }
  return Math.floor(eval(`5 ${arguments[0]}`))
}
function six() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 6
  }
  return Math.floor(eval(`6 ${arguments[0]}`))
}
function seven() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 7
  }
  return Math.floor(eval(`7 ${arguments[0]}`))
}
function eight() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 8
  }
  return Math.floor(eval(`8 ${arguments[0]}`))
}
function nine() {
  console.log(arguments[0])
  if (!arguments.length) {
    return 9
  }
  return Math.floor(eval(`9 ${arguments[0]}`))
}

function plus() {
  console.log(arguments[0], '+')
  return `+ ${arguments[0]}`
}
function minus() {
  console.log(arguments[0], '-')
  return `- ${arguments[0]}`
}
function times(arg) {
  console.log(arguments[0], '*')
  return `* ${arguments[0]}`
}
function dividedBy() {
  console.log(arguments[0], '/')
  return `/ ${arguments[0]}`
}


//other solutions
function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}}
