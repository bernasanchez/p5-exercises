// 12. Mínima Suma
// Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

// Ejemplo: 
// minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
// minSum([1, 10, 43, 900, 20, 8]) debe retornar 9

let arrayNumeros = [7, 6, 5, 4, 3, 2, 1];
let arrayNumeros2 = [1, 10, 43, 900, 20, 8]
let suma = 0;
let minSum = ((arrayNumeros) => {
    arrayNumeros.sort((a,b) => a - b)
    console.log(arrayNumeros)
    suma = arrayNumeros[0] + arrayNumeros[1]
    return suma
})
minSum(arrayNumeros);
console.log(suma)

//OTRA FORMA DE SOLUCIONARLO
let array = [1, 10, 43, 900, 20, 8]; 
function minimaSuma(array) {
    let arr = [];
    while (arr.length != 2) {
      let masChico = array[0];
      for (let p = 0; p < array.length; p++) {
        if (masChico > array[p]) {
          masChico = array[p];
        }
      }
      arr.push(masChico);
      array.splice(array.indexOf(masChico), 1);
    }
    return console.log('Minina Suma', (arr[0] + arr[1]));
}
minimaSuma(array); 

