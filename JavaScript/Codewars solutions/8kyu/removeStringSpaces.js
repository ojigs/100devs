// Description:

// Simple, remove the spaces from the string, then return the resultant string.
// Fundamentals
// Strings
// Arrays


//my solution
function noSpace(x){
  return x.split(' ').join('')
}

//other solution
function noSpace(x){
  return x.replace(/\s/g, '');
}
