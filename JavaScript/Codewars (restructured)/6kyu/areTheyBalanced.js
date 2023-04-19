https://www.codewars.com/kata/57fb44a12b53146fe1000136/javascript
// Description:

// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
// Examples

// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

// Fundamentals


// My solution
function balance(left,right){
  let weight = {"!": 2, "?": 3}
  let leftWeight = [...left].reduce((a,c) => a + weight[c], 0)
  let rightWeight = [...right].reduce((a,c) => a + weight[c], 0)
  return leftWeight === rightWeight ? "Balance" :
          leftWeight > rightWeight ? "Left" : "Right"
}


// other solution
function balance(left,right) {
  const weight = s => [...s].map(c => c === '!' ? 2 : c === '?' ? 3 : 0).reduce((s, x) => s + x, 0);
  let diff = weight(left) - weight(right);
  return diff === 0 ? 'Balance' : diff > 0 ? 'Left' : 'Right';
}
