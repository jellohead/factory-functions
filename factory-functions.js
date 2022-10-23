// factory-functions.js

// factory function
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name);
console.log(jeff.sayHello)
jeff.sayHello();

// constructor
const Person = function (name, age) {
    this.sayHello = () => console.log('hello!');
    this.name = name;
    this.age = age;
};

const bob = new Person('Bob', 23);
console.log(bob.name);
console.log(bob.age);
console.log(bob.sayHello);
bob.sayHello();

// scope
const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
};

const taco = FactoryFunction('taco');

// printString(); // ERROR!!
// capitalizeString(); // ERROR!!
// taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"

// more scope examples
const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

const counter = counterCreator();

counter();
counter();
counter();
counter();
counter();

// inheritance with factories
const PersonAgain = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return { sayName };
}

const Nerd = (name) => {
    // simply create a PersonAgain and pull out the sayName function with destructuring assignment syntax!
    const { sayName } = PersonAgain(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return { sayName, doSomethingNerdy };
}

const george = Nerd('george');

george.sayName(); //my name is george
george.doSomethingNerdy(); // nerd stuff


// module pattern: (Immediately Invoked Function Expression)
// write a function, wrap it in parentheses, then immediately
// call the function by adding () to the end of it
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add,
        sub,
        mul,
        div,
    };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476
calculator.div(21, 7);
console.log(calculator.div(21, 7));



