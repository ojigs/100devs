https://www.codewars.com/kata/634d0f7c562caa0016debac5
// Description:

// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

//     Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
//         If the value is the same they both perish
//         If one of the values is empty(different array lengths) the non-empty value soldier survives.
//     To survive the defending side must have more survivors than the attacking side.
//     In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
//         The initial attack power is the sum of all the values in each array.

// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true



// My solution
function hasSurvived(attackers, defenders){
  if (!attackers.length) return true
  if (!defenders.length) return false
  let attCount = 0, defCount = 0
  let attackPow = attackers.reduce((a,c) => a + c)
  let defendPow = defenders.reduce((a,c) => a + c)
  for (let i = 0; i < attackers.length; i++) {
    if (attackers[i] > defenders[i]) attCount++
    else if (attackers[i] < defenders[i]) defCount++
  }
  if (attCount === defCount) {
    return attackPow <= defendPow
  }
  return attCount < defCount
}



// other solution
function hasSurvived(attackers, defenders) {
  let attack = 0;
  let defend = 0;
  let attackSum = 0;
  let defendSum = 0;
  let i = 0;
  while (attackers[i] || defenders[i]) {
    if (!attackers[i] || attackers[i] < defenders[i]) {
      defend++;
    } else if (!defenders[i] || attackers[i] > defenders[i]) {
      attack++;
    }
    if (attackers[i]) {
      attackSum += attackers[i];
    }
    if (defenders[i]) {
      defendSum += defenders[i];
    }
    i++;
  }
  return defend === attack ? attackSum <= defendSum : defend > attack;
}
