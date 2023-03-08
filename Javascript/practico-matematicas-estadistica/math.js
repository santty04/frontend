console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    };
}

console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    };
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});
console.groupEnd('Triangulo');


// Circulo
console.group('Circle');


const radioCirculo =  3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
});

function calcularCirculo (radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);


    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(3)
    };
}

console.groupEnd('Circle');


// Triangulo Isosceles
// h = raiz cuadradsa de a al cuadrado - b al cuadrado sobre 4 

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triangulo Isosceles');
    } else {
        return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) / 4);

    }
}

// Teorema de pitagoras
// a al cuadrado = h al cuadrado + (b/2) al cuadrado

const calcularAlturaTrianguloEscaleno = (ladoBase, lado2, lado3) => {
    const semiperimetro = (ladoBase + lado2 + lado3) / 2;
    return {
      altura: (2 / ladoBase) * Math.sqrt(semiperimetro *
            (semiperimetro - ladoBase) *
            (semiperimetro - lado2) *
            (semiperimetro - lado3)
        ),
    };
  };