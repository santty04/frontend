var estudiantes = ["Santiago", "Maria", "Daniel", "Rosa"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiante[i]);
}


// Otra forma de hacerlo
for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}


// While 
while(estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}