https://www.codewars.com/kata/54a2e93b22d236498400134b/solutions/javascript
// Description

// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------

// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)



// My solution
function presses(phrase) {
  phrase = phrase.toLowerCase()
  let arr = [['1'], ['a','b','c','2'], ['d','e','f','3'], ['g','h','i','4'], ['j','k','l','5'],
            ['m','n','o','6'], ['p','q','r','s','7'],['t','u','v','8'],['w','x','y','z','9'], [' ','0']]
  let sum = 0
  for (let i = 0; i < phrase.length; i++) {
    let index = arr.findIndex(e=>e.includes(phrase[i]))
    let pos = arr[index].indexOf(phrase[i]) + 1
    sum += pos
  }
  return sum
}


// other solution
function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;
  
  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });
  
  return total;
      
}
