https://www.codewars.com/kata/58539230879867a8cd00011c/javascript
// Description:

// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
// Fundamentals


// My solution
function findChildren(dancingBrigade) {
	const mothers = dancingBrigade.match(/[A-Z]/g).sort();
  const children = dancingBrigade.match(/[a-z]/g).sort();
  const result = [];

  for (let i = 0; i < mothers.length; i++) {
    result.push(mothers[i]);
    const numChildren = (dancingBrigade.match(new RegExp(mothers[i], 'gi')) || []).length - 1;
    console.log(numChildren)
    result.push(...children.splice(0, numChildren));
  }

  return result.join('');
}


// other solution
const findChildren = dancingBrigade =>
  [...dancingBrigade].sort((a, b) => a.localeCompare(b, `kf`, {caseFirst: `upper`})).join(``);


function findChildren(dancingBrigade){
  return dancingBrigade.toLowerCase()
                       .split('')
                       .sort()
                       .map((v,i,a)=>{ return (i === 0 || v !== a[i-1]) ? v.toUpperCase() : v;})
                       .join('');
};
