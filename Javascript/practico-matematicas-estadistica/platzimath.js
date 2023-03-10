const PlatziMath = {};


PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2)
}


PlatziMath.esImpar = function esImpar(lista) {
    return lista.length %2
}

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaOrdenadaMaxNumber[0];
    // console.log(listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber);
    // console.log('La moda es: ' + listaOrdenadaMaxNumber[0]);
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada)
    const listaEsPar = esPar(lista);

    if(listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista / 2;

        const listaMitades = [];
        listaMitades.push(lista(indexMitad1ListaPar));
        listaMitades.push(lista(indexMitad2ListaPar));
        listaMitades.push();
        calcularPromedio(listaMitades);
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length % 2) + 1;
        const medianaListaImpar = lista(indexMitadListaImpar);
        console.log(indexMitadListaImpar);
        console.log(lista(medianaListaImpar));
        return lista(indexMitadListaImpar);
    }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    // Metodo reduce

    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor
    }

    const sumaLista = lista.reduce(sumarTodosElementos);

    const promedio = sumaLista / lista.length;
    console.log(lista);
    // return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        // if(valorAcumulado > nuevoValor){
        //     return 1;
        // } else if(valorAcumulado == nuevoValor){
        //     return 0;
        // } else if(valorAcumulado < nuevoValor){
        //     return -1;
        // }
        
       return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    
    
    
    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
       return valorAcumulado[1] - nuevoValor[1];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
       
    return lista;
}