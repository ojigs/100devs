// https://www.codewars.com/kata/570a6a46455d08ff8d001002/javascript
// Description:

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway
// Fundamentals


// My solution
function noBoringZeros(n) {
    const arrayN = Array.from(String(n))
    while (arrayN[arrayN.length - 1] === '0') {
      arrayN.pop()
    }
    return +(arrayN.join(''))
}


// other solution
function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
}


function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
}