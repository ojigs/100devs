https://www.codewars.com/kata/54dba07f03e88a4cec000caf/javascript
// Description:

// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined

// Use method prototypes to enable all Dogs to bark.
// Fundamentals


// My solution
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
Dog.prototype.bark = () => "Woof"



