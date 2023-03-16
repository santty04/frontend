// Declarando
class User {};

// Instancia de una clase
// const newUser = newUser();

class user {
    // Methods
    greeting() {
        return 'Hello!';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user {
    // Constructor
    constructor() {
        console.log('Nuevo usuario');
    }
    greeting() {
        return 'Hello!';
    }
}

const santiago = new user();

// this hace referencia al elemento padre que lo contiene
class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// Setters and getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('Santiago', 19);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);