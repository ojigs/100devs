https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript
// Description

// Write a simple regex to validate a username. Allowed characters are:

//     lowercase letters,
//     numbers,
//     underscore

// Length should be between 4 and 16 characters (both included).



// My solution
function validateUsr(username) {
  res =  /^[a-z0-9_]{4,16}$/.test(username) 
  return res
}


// other solution
function validateUsr(username) {
  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */
  const validator = /^[a-z0-9_]{4,16}$/;
  
  return validator.test(username);
}
