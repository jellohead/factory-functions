// factory-functions.js

// inheritance with factories
const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return { sayName };
}

const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax!
    const { sayName } = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return { sayName, doSomethingNerdy };
}

const jeff = Nerd('jeff');

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff


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



