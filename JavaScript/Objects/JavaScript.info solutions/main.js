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
