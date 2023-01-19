https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
// Description:

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// Strings
// Arrays
// Ciphers
// Fundamentals



// My solution
function decipherThis(str) {
  return str
    .split(" ")
    .map((e) => {
      // Get all string after number
      let parsed = e.replace(/\d+/, "");
      if (parseInt(e) == e) return String.fromCharCode(e);
      if (parsed.length === 1) return String.fromCharCode(parseInt(e)) + parsed;
      if (parsed.length >= 2) {
        return e.replace(
          /^(\d+)(.)(.*)(.)$/,
          (m, p1, p2, p3, p4) => String.fromCharCode(p1) + p4 + p3 + p2
        );
      }
    })

    .join(" ");
}


// other olution
function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}
