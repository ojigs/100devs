// Description:

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"



//My solution (most of the time i was occupied with trying to come up with a solution that involved string methods only. Ended with an array structure
function nameShuffler(str){
  let tempStr = str.split(' ')
  return tempStr[1] +" " + tempStr[0]
}


//other solution
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}
