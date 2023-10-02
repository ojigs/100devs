https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript

// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

//     0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
//     1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
//     n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

// Examples

// "1 2 3 4"  ==>  return 0, because the sequence is complete

// "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

// "2 1 3 a"  ==>  return 1, because it contains a non numerical character

// "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

// "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest

// Strings
// Fundamentals


// My solution
function findMissingNumber(sequence){
  const isNonNumeric = /\D/.test(sequence.replace(/\s/g, ""))
  if (!sequence.length) return 0
  if (isNonNumeric || sequence.slice(0,1) != 1) return 1
  const sortedSequence = sequence.split(' ').sort((a,b) => a - b)
  for (let i = 1; i < sortedSequence.length; i++) {
      if (+sortedSequence[i] !== (+sortedSequence[i-1] + 1)) {
      return +sortedSequence[i-1]+1
    }
  }
  return 0
}


// other solution
function findMissingNumber(sequence){
  if (sequence === "") return 0;
  if (!/^(\d+ )+\d+$/gi.test(sequence)) return 1;
  var arr = sequence.split(' ').map(x => +x);
  var max = Math.max(...arr);
  for(var i = 1; i < max; ++i)
    if (arr.find(x => x == i) == undefined) return i;
  return 0;
}
