// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//  Object destructuring

let user = {username: 'Santiago', age: 19};
let { username, age} = user;
console.log(username, user.age);

// Spread Operator

let person = { name: 'Santiago', age: 19 };
let country = 'Colombia';

let data = { id: 1, ...person, country }; // ... Propagar inforamcion
console.log(data);

// Rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);