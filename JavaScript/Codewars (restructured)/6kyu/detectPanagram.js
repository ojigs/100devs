// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//My solution
function isPangram(string){
    //given a string
    //return true or false
    //create an array that contains all leters of the alphabet
    //search the string to see if it includes all letters
    
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    string = string.toLowerCase()
    return alphabets.every(item => string.includes(item))


}



//Other solutions
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}
