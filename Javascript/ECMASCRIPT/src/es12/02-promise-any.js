const promise1 = Promise.reject("Ups promesa 1 falló")
const promise3 = Promise.resolve("Promesa 3")
const promise2 = Promise.resolve("Promesa 2")

Promise.any([ promise1, promise3,  promise2])
    .then(response => console.log(response));