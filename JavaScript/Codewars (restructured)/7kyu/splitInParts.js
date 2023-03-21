https://www.codewars.com/kata/5650ab06d11d675371000003/javascript
// Description:

// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'

// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive



// My solution
var splitInParts = function(s, partLength){
  let parts = []
  for (let i = 0; i < s.length; i+= partLength) {
    parts.push(s.slice(i, i+partLength))
  }
  return parts.join(' ')
}


// other solution
const splitInParts = (s, partLength) => 
  s.match(new RegExp(`.{1,${ partLength }}`, 'g')).join(' ');
