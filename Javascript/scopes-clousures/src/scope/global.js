// variables

var a; // declarando
var b = 'b'; // Declaramos y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; // Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();



function countries() {
    country = 'Colombia'; // global
    console.log(country);
}
countries();
console.log(country);