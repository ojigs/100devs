// https://www.codewars.com/kata/571f1eb77e8954a812000837/javascript
// Description:

// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

// You can define the object attributes during initialization, like this:

// var animal={name:"dog"}

// you can also set/get some properties after the object definition, like this:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")

// Task

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}

// and return a string like this:

// "This white dog has 4 legs."

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// My solution
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// other solution
function animal({ name, legs, color }) {
  return `This ${color} ${name} has ${legs} legs.`;
}
