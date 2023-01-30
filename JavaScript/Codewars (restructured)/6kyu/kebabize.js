https://www.codewars.com/kata/57f8ff867a28db569e000c4a/javascript
// Description

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

// Notes:

//     the returned string should only contain lowercase letters

// Fundamentals
// Strings
// Regular Expressions


// My solution
function kebabize(str) {
  console.log(str)
  return str.replace(/\d/g, '')
            .replace(/(.)([A-Z])/g, (m, p1, p2) => p1 + '-'+p2)
            .toLowerCase()
}


// other solution
function kebabize(str) {

  var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
  return nonumber.join('-').toLowerCase();

}

