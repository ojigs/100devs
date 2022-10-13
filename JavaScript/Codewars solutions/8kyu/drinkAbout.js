https://www.codewars.com/kata/56170e844da7c6f647000063/javascript
// Description:

//     Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

//     Children under 14 old.
//     Teens under 18 old.
//     Young under 21 old.
//     Adults have 21 or more.

// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


//My solution
function peopleWithAgeDrink(old) {
  //function to return drink type
  //we get a number, parameter not dtring, 
  //return toddy || coke || beer || whisky
  //13 --> drink toddy
  //21 --> drink whisky
  // use conditionals, if/else statements, switch-case, 
  if (old < 14) return 'drink toddy'
  else if (old < 18) return 'drink coke'
  else if (old < 21) return 'drink beer'
  else return 'drink whisky'
};


// other solution
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"
