https://www.codewars.com/kata/54bb6f887e5a80180900046b/javascript
// Description:
// Longest Palindrome

// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.
// Example:

// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// Fundamentals



//My solution
longestPalindrome=function(s){
  let longest = 0
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromMiddle(s, i, i);
    let len2 = expandFromMiddle(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > longest) {
      left = i - ((len - 1) / 2);
      right = i + (len / 2);
      longest = len;
    }
  }
  return longest;
}

// helper function
function expandFromMiddle(s, left, right) {
  if (s === null || left > right) return 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}


// other solution
longestPalindrome=function(s){
  var a = s.split('');
  var length = 0;
  a.forEach(function(c, i){
    length = Math.max(exploreArrayForImpairPalindrome(i, a), length);
    length = Math.max(exploreArrayForPairPalindrome(i, a), length);
  });
  return length;
}

exploreArrayForImpairPalindrome=function(i, a){
  var length = 1;
  var iter = 1;
  while(thoseValuesAreEquals(i,i,a,iter)){
    length+=2;
    iter++;
  }
  return length;
}

exploreArrayForPairPalindrome=function(i, a){
  var length = 0;
  var iter = 0;
  while(thoseValuesAreEquals(i,i+1,a,iter)){
    length+=2;
    iter++;
  }
  return length;
}

thoseValuesAreEquals=function(i1, i2, a, iter){
  return a[i1-iter] && a[i1-iter]===a[i2+iter];
}


