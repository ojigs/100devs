https://www.codewars.com/kata/57faa6ff9610ce181b000028/javascript
// Description:

// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

// For example:

// x=
// [[_,_,_,_,_,_]
// [_,_,_,_,@,_]
// [@,_,_,_,_,_]]

// bags = 2, cap = 2

// return --> 'Clean'
// Fundamentals
// Strings
// Arrays
// Mathematics



// My solution
function crap(x, bags, cap){
  let trash = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i].includes('D')) {
      return 'Dog!!'
      break;
    }
    let crap = x[i].filter(c => c==='@').length
    trash += crap
  }
  return trash <= bags * cap ? 'Clean' : 'Cr@p'
}


// other solution
function crap(x, bags, cap){
  var yard = x.reduce( (a, b) => a.concat(b) );
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}


crap=(a,b,c)=>(a+"").includes("D")?"Dog!!":(a+"").split("@").length-1<=b*c?"Clean":"Cr@p"
