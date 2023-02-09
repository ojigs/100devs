https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/javascript
// Description:

// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
// Fundamentals


// My solution
function sameCase(a, b){
  let codeA = a.charCodeAt()
  let codeB = b.charCodeAt()
  console.log(codeA, codeB)
  if ((codeA >= 65 && codeA <= 90 && codeB >= 65 && codeB <= 90) ||
     (codeA >= 97 && codeA <= 122 && codeB >= 97 && codeB <= 122)) {
    return 1
  } else if ((codeA >= 97 && codeA <= 122 && codeB >= 65 && codeB <= 90) || 
            codeA >= 65 && codeA <= 90 && codeB >= 97 && codeB <= 122) {
    return 0
  } else {
    return -1
  }
} // convoluted :o


// others solution
function sameCase(a, b){
 if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
  }else{
    return 0
  }
}
