https://www.codewars.com/kata/51c8991dee245d7ddf00000e
// Description:

// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


//My solution
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}


//other solution
function reverseWords(str){
  var reverse = [];
  var words = str.split(" ");
  for(let i=words.length-1; i>=0; i--){
    reverse.push(words[i]);
    
  }
  return reverse.join(" ")
}
