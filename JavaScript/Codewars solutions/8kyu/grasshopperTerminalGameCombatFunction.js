https://www.codewars.com/kata/586c1cf4b98de0399300001d/javascript
// Description:

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.


// My solution
function combat(health, damage) {
  return health - damage >= 0 ? health - damage : 0
    0
}


// other solution
const combat = (health, damage) => Math.max(0, health - damage);
