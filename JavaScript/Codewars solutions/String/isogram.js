https://www.codewars.com/kata/54ba84be607a92aa900000f1
// Description:

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)


//My solution
function isIsogram(str){
  return str.toLowerCase().split('').every((e,i,a) => a.indexOf(e) === a.lastIndexOf(e))
}


//other solutionn
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}


function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}


function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
