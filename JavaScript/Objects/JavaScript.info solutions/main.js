//My solutions to the tasks under Objects basics chapter

//Hello Object
const user = {}
user.name =  'John',
user.surname =  'Smith',
user.name = 'Pete';
delete user['name']

//Chheck for emptiness
const isEmpty = obj => {
    for (let key in obj) {
        return false
    }
    return true
} 
let schedule = {};
console.log( isEmpty(schedule) );

schedule["8:30"] = "get up";
console.log(schedule)
console.log( isEmpty(schedule) );

//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum)

//Multiply numeric property value by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == Number) {
            obj[key] *= 2
        }
    }
}  
multiplyNumeric(menu);
console.log(menu)


//Create a calculator
let calculator = {
    read() {
        this.num1 = Number(prompt("What's the first operand?"))
        this.num2 = Number(prompt("What's the second operand?"))
    },
    sum() {
        return this.num1 + this.num2
    },
    mul() {
        return this.num1 * this.num2
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Chaining
// Modify the code of up, down and showStep to make the calls chainable, like this: ladder.up().up().down().showStep().down().showStep()
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();


//CONSTRUCTORS
//Create new calculator
function Calculator() {
  this.read = function() {
    this.value1 = Number(prompt("What's the first value?", 0));
    this.value2 = Number(prompt("What's the second value?", 0));
  }
  this.sum = function() {
    return this.value1 + this.value2
  }
  this.mul = function() {
    return this.value1 * this.value2
  }
}

let calculator = new Calculator()

calculator.read()

alert( "Sum=" + calculator.sum() );

alert( "Mul=" + calculator.mul() );

//Create a new Accumulator
function Accumulator(startingValue) {
  this.value = startingValue 
  this.read = function() {
    this.addNum = Number(prompt('?',0))
    this.value += this.addNum
  }
}

let accumulator = new Accumulator(1)

accumulator.read();
accumulator.read();

alert(accumulator.value);
