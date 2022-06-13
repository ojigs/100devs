// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//my solution
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

//other solution
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
