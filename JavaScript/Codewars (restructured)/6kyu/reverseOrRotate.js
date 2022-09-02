// Description

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

//     sz is <= 0 or if str is empty return ""
//     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Examples:

// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"

// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".



//My solution
function revrot(str, sz) {
    //P: Given a string of digits and a chunk size
    //R: Return a modified string such that the original string is broken into chunks of sizes and joined together
    //E: "123456", 5 --> "54321"
    //   "12345678987654", 6 --> "23456187549"
    //Pseuodocode:
    //Break the string into chunks of sizes sz
    //Discard any chunk less than sz size
    //For each chunk, if sum of cube of digits is a multiple of 2, reverse the chunk
    //Else shift the first digit and push it behind the chunk. 1234 becomes 2341
    //Join all chunks and return it as a string
    
  if (sz <= 0 || !str || sz > str.length) return ''; 
    let arr = []
    for (let i = 0; i < str.length; i+=sz) {
      let chunk = str.slice(i, (i+sz))
      if (chunk.length < sz) {
        continue
      }
      arr.push(chunk.split(''))
    }
    
    function sum(a) {
      return a.reduce((sum, curr) => sum + curr**3, 0)
    }
    
    for (const chunk of arr) {
      if (!(sum(chunk)%2)) {
        chunk.reverse()
      } else {
        chunk.push(chunk.shift())
      }
    }
    
    return arr.map(e => e.join(''))
               .join('')
  }
