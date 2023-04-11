https://www.codewars.com/kata/57e8fba2f11c647abc000944/javascript
// Description:

// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!
// Fundamentals
// Arrays
// Strings


// My solution
function fireFight(s){
  return s.replace(/Fire/gi, "~~")
}


// other solution
const fireFight = s =>
  s.replace(/Fire/g, `~~`);
