const array = [1, 'jaja', true, false, { nombre: 'Santiago', edad:19 }];


const obj = {
    nombre: 'Fulanito',
    edad: 3,
};


const object1 = {
    a: 'Santiago',
    b: 19,
    c: false,
};

console.log(Object.values(object1));

function impimirElementoPorElemento(object1) {
    const arr = Object.values(object1);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    };
}