https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/javascript
// Description:

// Create a function that takes a number as an argument and returns a grade based on that number.
// Score 	Grade
// Anything greater than 1 or less than 0.6 	"F"
// 0.9 or greater 	"A"
// 0.8 or greater 	"B"
// 0.7 or greater 	"C"
// 0.6 or greater 	"D"

// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

// Fundamentals


// My solution
function grader(score) {
  return score > 1 || score < 0.6 ? 'F' :
    score >= 0.9 ? 'A' : score >= 0.8 ? 'B' : score >= 0.7 ? 'C' : 'D'
}


// other solution
function grader(score) {
  if (score === 1) return "A";
  return ["D", "C", "B", "A"][Math.floor(score*10) - 6] || "F";
}


function grader(score) {
  if (score>1||score<0.6) return 'F'
  if (score<0.7) return 'D'
  if (score<0.8) return 'C'
  if (score<0.9) return 'B'
  return 'A'
}
