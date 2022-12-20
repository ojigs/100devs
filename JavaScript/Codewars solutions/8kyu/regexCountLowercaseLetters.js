https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
// Description

// Your task is simply to count the total number of lowercase letters in a string.
// Examples

// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26


// My solution
function lowercaseCount(str){
  return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0
}


// other solution
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}
