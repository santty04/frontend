/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O( 1 )
 */
 function linearSearch(arreglo, clave) {
    for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
      if (arreglo[indice] === clave) { 
        return indice; 
      }
    }
    return -1; 
  }