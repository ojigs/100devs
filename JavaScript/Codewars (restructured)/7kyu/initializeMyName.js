https://www.codewars.com/kata/5768a693a3205e1cc100071f/javascript
// Description:

// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).
// Examples

// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// Strings
// Fundamentals



// My solution
function initializeNames(name){
  return name.split(' ').map((e,i,a) => i > 0 && i < a.length - 1 ? e[0]+"." : e).join(' ')
}

// other solution
function initializeNames(name){
 var n = name.split(" ");
if(n.length < 3) return name;
for(i = 1; i < n.length-1; i++){
  n[i] = n[i][0] + ".";
}
return n.join(" ");
}


const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')
