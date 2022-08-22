// Description:

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



//My solution
// complete the function
function solution(string) {
  //given a string
  //return a modified string with camelCasing broken up
  //'breakCamelCase' should return 'break Camel Case'
  //test logic for camel case
  //replace camel Case with a space
  //return modified string
  if (string.length > 0) {
    return string.split('')
      .map(e => e == e.toUpperCase() ? ` ${e}` : e)
      .join('')
  }
  return ''
}



//other solution
// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}



// complete the function
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}
