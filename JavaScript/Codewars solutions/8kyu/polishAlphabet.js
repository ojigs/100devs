https://www.codewars.com/kata/57ab2d6072292dbf7c000039/javascript
// Description:

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// Strings
// Fundamentals


// My solution
function correctPolishLetters (string) {
  const dict = {
    ą : "a",
    ć : "c",
    ę : "e",
    ł : "l",
    ń : "n",
    ó : "o",
    ś : "s",
    ź : "z",
    ż : "z"
  }
  return string.split('').map(e => dict[e] ? dict[e] : e).join('')
}


// other solution
function correctPolishLetters (string) {
  var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
  return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}
