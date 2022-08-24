// Description:
// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// Note

// Please don't post issue about difficulty or duplicate.



//My solution (I overthought this stuff)
function remove (string) {
  //coding and coding....
  const arr = string.split('')
  if (arr[arr.length - 1] == '!') {
    arr.pop()
    return arr.join('')
  }
  return arr.join('')
}


//other solution
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}


const remove = s => s.replace(/!$/, '');
