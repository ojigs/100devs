// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My solution
function getCount(str) {
    let vowelsCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a,e,i,o,u]/gi)) {
            vowelsCount++
        }
    }
    return vowelsCount;
}



//other solutions
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}


function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length:0;
}
