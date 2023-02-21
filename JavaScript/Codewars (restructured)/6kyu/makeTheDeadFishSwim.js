https://www.codewars.com/kata/51e0007c1f9378fa810002a9
// Description:

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Parsing
// Algorithms


// My solution
function parse( data ) {
  let arr = [], v = 0
  const op = {
    i: () => v+=1,
    d: () => v-=1,
    s: () => v**=2,
    o: () => arr.push(v)
  }
  for (let i = 0; i < data.length; i++) {
    if (op[data[i]]) {
      op[data[i]]()
    }
  }
  return arr
}



// other solution
function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);
    
    return cur;
  }, 0);
  
  return res;
}


const parse = data => {
  const Commands = {
      INCREMENT:  'i',
      DECREMENT:  'd',
      SQUARE:     's',
      OUTPUT:     'o'
  }

  var outputs = [],
      value = 0;
  
  data.split('').forEach(command => {
    switch(command) {
      case Commands.INCREMENT:  value++;                   break;
      case Commands.DECREMENT:  value--;                   break;
      case Commands.SQUARE:     value = Math.pow(value, 2);break;
      case Commands.OUTPUT:     outputs.push(value);       break;
    }
  });
  
  return outputs;
}
