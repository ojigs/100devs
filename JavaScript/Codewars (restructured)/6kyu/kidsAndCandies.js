https://www.codewars.com/kata/56cca888a9d0f25985000036/train/javascript
// Description overhauled by V

// I've invited some kids for my son's birthday, during which I will give to each kid some amount of candies.

// Every kid hates receiving less amount of candies than any other kids, and I don't want to have any candies left - giving it to my kid would be bad for his teeth.

// However, not every kid invited will come to my birthday party.

// What is the minimum amount of candies I have to buy, so that no matter how many kids come to the party in the end, I can still ensure that each kid can receive the same amount of candies, while leaving no candies left?

// It's ensured that at least one kid will participate in the party.



// My solution
function candiesToBuy( kids ){
    let ans = 1;
    for (let i = 2; i <= kids; i++) {
        ans = (ans * i) / gcd(ans, i);
    }
    return ans;
}

function gcd(a, b) {
    if (a == 0) {
        return b;
    }
    return gcd(b % a, a);

}



// other solution
const candiesToBuy = (() => {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);
  return n => Array(n).fill(0).reduce((acc, _, i) => lcm(acc, i + 1), 1);
})();


function candiesToBuy( kids ){
  let total = 1;
  let lastTotal = 1;
  for (let i = kids; i > 1; i--) {
    while (total % i !== 0) {
      total += lastTotal;
    }
    lastTotal = total;
  }
  return total;
}
