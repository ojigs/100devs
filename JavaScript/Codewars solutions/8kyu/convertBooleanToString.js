// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//My solution
function booleanToString(b){
  //your code here
  return b.toString()
}


//other solutions
function booleanToString(b){
  return b ? 'true' : 'false';
}


function booleanToString(b){
  if (typeof b == 'boolean') {
    return String(b);
  }
}
