// https://www.codewars.com/kata/57613fb1033d766171000d60/javascript
// Description:

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// Strings
// Arrays
// Fundamentals

// My solution
function uefaEuro2016(teams, scores) {
  return `At match ${teams.join(" - ")}, ${
    scores[0] === scores[1]
      ? "teams played draw."
      : (scores[0] > scores[1] ? teams[0] : teams[1]) + " won!"
  }`;
}

// other solution
function uefaEuro2016(commands, scores) {
  // your code...
  if (scores[0] == scores[1])
    return `At match ${commands[0]} - ${commands[1]}, commands played draw.`;
  if (scores[0] < scores[1])
    return `At match ${commands[0]} - ${commands[1]}, ${commands[1]} won!`;
  return `At match ${commands[0]} - ${commands[1]}, ${commands[0]} won!`;
}
