https://www.codewars.com/kata/56a29b237e9e997ff2000048/train/javascript
// Description

// Escape the room

// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
// Fundamentals


// My solution
var rooms = {
  name: {prop1: 'Name', prop2: 'nAme', prop3: 'naMe'},
  description: {prop1: 'Description', prop2: 'dEscription', prop3: 'deScription'},
  completed: {prop1: 'Completed', prop2: 'cOmpleted', prop3: 'coMpleted'}
}


// other solution
const rooms = {
  bedroom: {
    name: 'Bedroom',
    description: 'For... sleeping',
    completed: true,
  },
  bathroom: {
    name: 'Bathroom',
    description: 'This will get you clean',
    completed: false,
  },
  kitchen: {
    name: 'Kitchen',
    description: 'Hungry? Why wait?',
    completed: true,
  },
}
