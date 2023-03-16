
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Santiago', 'David', 'Ana', 'Ulises', 'Yennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);