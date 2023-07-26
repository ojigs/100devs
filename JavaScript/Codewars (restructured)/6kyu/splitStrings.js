https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// Description:

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Regular Expressions
// Strings
// Algorithms


// My solution
function solution(str){
  if (!str) return []
  return str.match(/.{1,2}/g)?.map(pair => pair.padEnd(2, '_'));
}


// other solution
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
