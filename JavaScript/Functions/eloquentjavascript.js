//CHAPTER 3
//Creat a function that logs the number of cows and chickens to the console, with the name of the animal in front. The number of cows and chickens should have minimum of three digits. The numbers are padded with zero at the front if they are less than three digits
function printFarmInventory(cows, chickens) {
    //Converting cows and chicken numbers to Strings so we can add numbers in front of them without invoking the arithmetic operator 
    let cowString = String(cows);
    let chickenString = String(chickens);
    //Trying out a FOR loop
    for (let i = 1; i < 3; i++) {
        if (cowString.length < 3) {
            cowString = 0 + cowString;
        }
        if (chickenString.length < 3) {
            chickenString = 0 + chickenString;
        }
    }
    console.log(`${cowString} Cows`)
    console.log(`${chickenString} Chickens`)
}
printFarmInventory(7, 11)

//Minimum
//Write a function that takes in two parameters and return the minimum of the two
function minimumNumber(a, b) {
    console.log(Math.min(a, b))
}
minimumNumber(1, -5)

//Recursion
//Write a function to check whether or not an argument passed is even or odd. It should return a boolean in either case
function isEven(n) {
    if (n === 0) {
        return true
    } else if (n === 1) {
        return false
    } else if (n < 0) {
        return isEven(2-n)
    } else {
        return isEven(n-2)
    }
}
console.log(isEven(-100))

//Bean Counting
//Write a function that takes in a single parameter, and logs the number of upper case Bs in the string on the console
function countBs(param) {
    param = String(param)
    let availBs = ''
    for (let i = 0; i < param.length; i++) {
        if (param[i] === 'B') {
            availBs += 'B'
        }
    }
    return availBs.length
}
console.log(countBs('BBC'))
//Write a function similar to the above, but takes two parameters, the later one defining what letter should be counted
function countChar(target, charac) {
    let availChar = ''
    for (let i = 0; i < target.length; i++) {
        if (target[i] === charac) {
            availChar += charac
        }
    }
    return availChar.length
}
console.log(countChar('kakkerlak', 'k'))
//Improve the first function such that it makes use of the second function to arrive at a solution
function countBs(param) {
    param = String(param)
    return countChar(param, 'B')
}
console.log(countBs('BBC'))
