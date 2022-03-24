//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let nums = [10,20,30]
for (let i = 0; i < nums.length; i++) {
    nums[i] += 3;
    console.log(nums[i])
}
console.log(nums)

let words = [prompt('Give a word')];

console.log(typeof words)

//Splice method
let arr = ['i', 'will', 'attend', 'classes', 'tonight' ];

arr.splice(0, 2);
alert(arr); //['attend', 'classes', 'tonight']

arr.splice(0, 2, 'Will', 'you');
alert(arr); //['Will', 'you', 'attend', 'classes', 'tonight']

let removed = arr.splice(0, 2);
alert(removed); //['I', 'will']

arr.splice(2, 0, 'not');
alert(arr); //['I', 'will', 'not' 'attend', 'classes', 'tonight' ]


//Translate border-left-width to borderLeftWidth
function camelize(str) { 
  return str
  .split('-')
  .map ( 
  (item, i) => i == 0 ? item : item[0].toUpperCase() + item.slice(1)
  )
  .join('');
}
console.log(camelize('border-left-width'))

//Filtered in place
function filterRangeInPlace(arr, a, b) {
  let filteredArray = arr.filter(item => a <= item && item <= b)
  return filteredArray
}
console.log(filterRangeInPlace([1, 5, 3, 2, 8, 6, 4, 9], 1, 4))

function fakeBin(x){
  let arr = '7132452156721'.split('')
  console.log(arr.map(item => {
    if (item <= 5) {
      return 0
    } else if (item > 5) {
      return 1}
  }))
}
console.log(fakeBin('132452156721'))

//Sort in descending order
let arr = [5, 2, 1, -10, 8]
arr.sort((a, b) => b - a)
console.log(arr)

//Copy and sort array
let arr = ["HTML", "JavaScript", "CSS"];
let copySorted = Array.from(arr)
let sorted = copySorted.sort((a, b) => a.localeCompare(b));
console.log(sorted)
console.log(arr)

//Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(item => item.name);
console.log(names);

//Map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(item => ({
  fullname: `${item.name} ${item.surname}`, id: item.id}
));
console.log(usersMapped[0].fullname)

//Sort by age
function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];
sortByAge(arr)

console.log(arr[2].name)

//Get average age
function getAverageAge(users) {
  let ages = users.map(item => item.age);
  let sum = 0;
  // for (let i = 0; i < ages.length; i++) {
  //   sum += ages[i]
  // };
  let summedUp = ages.reduce((sum, item) => sum + item, 0)
  return summedUp/ages.length
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
console.log(getAverageAge(arr))

