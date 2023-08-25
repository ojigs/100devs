https://www.codewars.com/kata/57faece99610ced690000165/javascript
// Description:
// Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// Fundamentals


// My solution
function remove (string) {  
  return string.replace(/!+$/, "")
}


// other solution
function remove(s)
{
    while(s && s.slice(-1) == "!") 
    { 
        s = s.slice(0,-1) 
    }
    return s;
}
