https://www.codewars.com/kata/5808e2006b65bff35500008f/javascript// Description:

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


//My solution
function position(letter){
  let alphs = 'abcdefghijklmnopqrstuvwxyz'
  return `Position of alphabet: ${alphs.indexOf(letter) + 1}`
}


//other solution
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}
