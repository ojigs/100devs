https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
// Description

// Introduction

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// Alphabet war Collection
// Alphavet war
// Alphabet war - airstrike - letters massacre
// Alphabet wars - reinforces massacre
// Alphabet wars - nuclear strike
// Alphabet war - Wo lo loooooo priests join the war


// My solution
function alphabetWar(fight) {
   let left = { 'w': 4, 'p': 3, 'b': 2, 's': 1}
   let right = { 'm': 4, 'q': 3, 'd': 2, 'z': 1}
   let war = 0
   for (let i = 0; i < fight.length; i++) {
     if (left[fight[i]]) {
       war += left[fight[i]]
     } else if (right[fight[i]]) {
       war -= right[fight[i]]
     } else {
       war += 0
     }
   }
  
  return war > 0 ? 'Left side wins!' : war < 0 ? 'Right side wins!' : "Let's fight again!"

}


// other solution
function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}
