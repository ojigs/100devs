//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function arrayOfNumbers(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}
console.log(arrayOfNumbers(10))

//Create an array of numbers and find the average of all the numbers
let nums = [10,20,30]
let sum = 0
nums.forEach(item => sum = sum + item)
console.log(sum / nums.length)
