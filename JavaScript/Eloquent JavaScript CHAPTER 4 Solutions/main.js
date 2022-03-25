let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
console.log(Object.keys(john))
console.log(Object.assign(john, pete))

const score = {visitors: 0, home: 0}
score.visitors = 1;
console.log(score)

//The sum of a range
function range(start, end) {
    let ranges = [];
    for (let i = start; i <= end; i++) {
        ranges.push(i)
    }
    return ranges
}
function sum(arr) {
    let sumOfArray = arr.reduce((sum, current) => sum + current, 0);
    return sumOfArray;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));

function range(start, end, step = start < end ? 1 : -1) {
    let ranges = [];
    if (start > end) {
        for (let i = start; i >= end; i+= step) {
            ranges.push(i)
        }
    } else {
        for (let i = start; i <= end; i+=step) {
            ranges.push(i)
        }
    }
    
    return ranges
}
console.log(range(5, 2, -1))

//Reversing an array
function reverseArray(arr) {
    let reversed = arr.sort((a, b) => b - a)
    return reversed
}
console.log(reverseArray(['A', 'B', 'C']))

function reverseArrayInPlace(arrayValue) {
    arrayValue.sort((a, b) => b - a)
}
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

//(reversing the array without using inbuilt methods)
function reverseArray(arr) {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed;
}
console.log(reverseArray(['A', 'B', 'C']))

function reverseArrayInPlace(arrayValue) {
    for (let i = 0; i < Math.floor(arrayValue.length/2); i++) {
        const tempVar = arrayValue[i]
        arrayValue[i] = arrayValue[arrayValue.length - 1 - i]
        arrayValue[arrayValue.length - 1 - i] = tempVar
    }
}
let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

A list
function arrayToList(arr) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length) {
            return result.rest = null
        }
        result = {value: arr.splice(0, 1), rest: arrayToList(arr) }
    }
    return result
}
console.log(arrayToList([1, 2, 3, 4, 5]))
