// 5. sumEvenNumbers
// Creá una Función llamada sumEvenNumbers que reciba como primer parámetro un Arreglo numérico. La Función debería filtrar solo los números pares y retornar la suma de dichos números.
// Ejemplos:
// sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  => 30
// sumEvenNumbers([1,3,5,7])  => 0

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [1,3,5,7]
let sumEvenNumbers = (array) => {
    let pares = array.filter(num => num % 2 === 0);
    console.log('Los numeros pares son: ', pares)
    let suma = pares.reduce((acc, total) => acc +  total, 0)
    console.log('Total suma pares:', suma)
}
sumEvenNumbers(array)
sumEvenNumbers(array2)