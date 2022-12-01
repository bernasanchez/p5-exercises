// 2. Index o Value
// Creá una Función llamada min que tome dos parámetros: un Arreglo de números desordenados y un string que sea "index" o "value".
// Si el string es "value", la Función deberá imprimir el número más chico del Arreglo. Si el string es "index", la Función devolverá el índice (la posición) del número más chico en el Arreglo.

let array = [5,8,2,3,4,9,1,18]; 
let numMenor = Math.min(...array)
let min1 = (array, palabra) => {
  //  array.sort(function(a,b){return a - b}) //Ordenar numeros con sort (no es necesario)
  //  console.log(array)
    if(palabra === 'index'){
      console.log(array.indexOf(numMenor))
    }else if(palabra === 'value'){
      console.log(numMenor)
    }
}
min1([5,8,2,3,4,9,1,18], 'index');
min1([5,8,2,3,4,9,1,18], "value")

// Ejemplo:
// min([5,8,2,3,4,9,1,18], "index") debe retornar 6 
// (porque es el índice del 1, que es el menor)
// min([5,8,2,3,4,9,1,18], "value") debe retornar 1 
// (porque 1 es el menor número)


// Solución MANO:
const min = (arr, str) => {
  let min = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
          index = i;
      }
  }
  if (str === "index") {
      return index;
  } else if (str === "value") {
      return min;
  }
}

console.warn('Index o Value');
console.log(min([5,8,2,3,4,9,1,18], "index"));
console.log(min([5,8,2,3,4,9,1,18], "value"));