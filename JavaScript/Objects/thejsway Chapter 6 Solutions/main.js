//Adding character experience
const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength, and ${this.xp} XP points`;
    }
}
aurora.xp += 15

console.log(aurora.describe())

//Modelling a dog
const dog = {
    name: 'Fang',
    species: 'boarhound',
    size: 75,
    bark() {
        return 'Grrr! Grrr!'   
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Modelling a circle
const r = Number(prompt("Enter the circle radius:"));
const circle = {
    radius: r,
    circumference() {
        return (2 * Math.PI * this.radius)
    },
    area() {
        return (Math.PI * this.radius**2)
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

//Modelling a bank account
const account = {
    name: 'Alex',
    balance: 0,
    credit(num = 0) {
       return this.balance += num
    },
    describe() {
        return `Owner: ${this.name}, balance ${this.credit()}`
    }
}

console.log(account.describe())
account.credit(250)
console.log(account.describe())
account.credit(-80)
console.log(account.describe())
