// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My solution
function solution(str){
  return str.split('').reverse().join('')
}


//Other solutions
const solution = s => [...s].reverse().join('')



function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
