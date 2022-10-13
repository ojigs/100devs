https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
//Description

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)

// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


//My solution
function dataReverse(data) {
  //function reverse data
  //given array of data; data in multiples of 8; data always binary, array
  //to return bytes with their order reversed
  //[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0] --> [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
  //break data into equal parts of 8; slice along 8 digits, reverse, join
  let cache = []
  for (let i = 0; i < data.length; i+=8) {
    cache.push(data.slice(i, i+8))
  }
  return cache.reverse().flatMap(e => e)
}


//other solution
const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};
