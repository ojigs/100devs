https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
//Description

// You need to write regex that will validate a password to make sure it meets the following criteria:

//     At least six characters long
//     contains a lowercase letter
//     contains an uppercase letter
//     contains a digit
//     only contains alphanumeric characters (note that '_' is not alphanumeric)


//My solution
// assign your RegExp to REGEXP
const REGEXP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;


//other solution
function validate(password) {
  if(password.length <6) return false;
  var lowerCase="abcdefghijklmnopqrstuvwxyz";
  var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number="0123456789";
  var index = [-1,-1,-1];
  for(i = 0; i< password.length; i++){
    if(lowerCase.indexOf(password.charAt(i)) >= 0){
      index[0] = lowerCase.indexOf(password.charAt(i));
    }else {
      if(upperCase.indexOf(password.charAt(i)) >= 0){
        index[1] = upperCase.indexOf(password.charAt(i));
      }
      else{
        if(number.indexOf(password.charAt(i)) >= 0){
          index[2] = number.indexOf(password.charAt(i));
        }else return false;
      }
    }
  }
  if(index[0] === -1 || index[1] === -1 || index[2] === -1){
    return false;
  }
  return true;
}
