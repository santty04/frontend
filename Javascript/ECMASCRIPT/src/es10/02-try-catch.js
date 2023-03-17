try {
    hello()
} catch (error) {
    console.log(error);
}

try {
    anotherFn()
} catch {
    console.log('Este es un error');
}