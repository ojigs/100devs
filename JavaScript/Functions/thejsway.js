//BELOW ARE MY SOLUTIONS TO THE TASKS IN THEJSWAY REPOSITORY UNDER THE FUNCTIONS CHAPTER

//Improved hello
// Program ask user for first and last name; call function and show its result
function sayHello(firstName, lastName) {
    firstName = prompt("What's your first name?")
    lastName = prompt("What's your last name?")
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
alert(sayHello())

//Number Squaring
//Use Function declaration; Use Function Expression; Update program so it shows square of every number from 0 - 10
function square1(x) {
    x *= x;
    return x;
}
alert(square1(2))

const square2 = x => x *= x;
alert(square2(2))

function square1() {
    for (let i = 0; i <= 10; i++) {
        let x = i
        x *= x;
        alert(x);
    }
}
square1()

//Minimum of two numbers
//Assuming Math.min function does't exist, a program to return the minimum of two numbers
function min(x, y) {
    if (x > y) return y;
    else return x;
}

//Calculator
//Program offers the four basic arithmetic operations; addition, subtraction, multiplication, division
function calc(x,operator,y) {
    let result;
    if (operator == "+") {
        result = x + y;
    }
    else if (operator == "-") {
        result = x - y;
    }
    else if (operator == "*") {
        result = x * y;
    }
    else if (operator == "/") {
        result = x / y;
    }
    alert(result)
}
calc(4, "+", 6)

//Circumference and area of a circle
//Two function, one for area, another for circumference. Uses user input for radius
//Circumference
function getCircum(r) {
    r = prompt("Input the radius for the circle to obtain the circumference");
    const result = 2 * Math.PI * r;
    const message = `The circumference of the circle is ${result}`;
    alert(message);
}
//Area
const getArea = r => {
    r = prompt("Input the radius for the circle to obtain the area");
    const result = Math.PI * r**2;
    const message = `The area of the circle is ${result}`;
    alert(message);
}
getCircum()
getArea()
