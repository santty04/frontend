class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    // Con # se vuelve privado y solo se puede usar en la clase
    #speak() {
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