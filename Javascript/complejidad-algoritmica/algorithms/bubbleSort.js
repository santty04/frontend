/**
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */
 function bubbleSort(arreglo) {
    let longitud = arreglo.length; // O(n)
    for (let i = 0; i < longitud; i++) { // O(1)
      for (let j = 0; j < longitud; j++) { // O(1)
        if (arreglo[j] > arreglo[j + 1]) { 
          let temporal = arreglo[j]; // O(1)
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = temporal; 
        }
      }
    }
    return arreglo;
  }