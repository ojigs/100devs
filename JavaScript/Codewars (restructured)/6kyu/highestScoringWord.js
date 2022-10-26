https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript
// Description:

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



//My solutions
function high(x){
  const alp = '0abcdefghijklmnopqrstuvwxyz'
  const score = (el) => el.split('').reduce((a, c) => a + alp.indexOf(c), 0)
  return x.match(/\w+/g).reduce( (a,c) => score(c) > score(a) ? c : a,'')
}

function high(x){
  let alp = 'abcdefghijklmnopqrstuvwxyz'.split('').map((e, i) => [e, i+1])
  const dict = new Map(alp)
  let scores = x.split(' ').map((e, i) => e.split('').reduce((a, c) => a + dict.get(c), 0))
  console.log(scores)
  const maxScore = Math.max(...scores)
  const scoreIndex = scores.findIndex(e => e === maxScore)
  return x.split(' ')[scoreIndex]
}



//other solutions
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
