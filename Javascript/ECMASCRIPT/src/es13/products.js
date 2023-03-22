import fetch from "node-fetch";
console.log("Hola");

const response = await fetch('https://api.escuelajs.co/api/v1/products');
console.log("Chao");
const products = await response.json();
console.log("Enviando...");
export { products };