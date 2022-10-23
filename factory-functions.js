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
