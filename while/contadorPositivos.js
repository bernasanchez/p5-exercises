//Contador De Positivos
// Crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
// Al terminar, mostrale un mensaje con la cantidad de números positivos que ingresó.

let numEntero = parseInt(prompt('Ingrese un numero entero: '));
let acumuladorNum = 0; 

while (numEntero > 0) {
    acumuladorNum++ ;
    numEntero = parseInt(prompt('Ingrese un numero entero: '));
}
alert('Cantidad de numeros enteros ingresados: ' + acumuladorNum); 
console.log('Cantidad de numeros enteros ingresados: ' + acumuladorNum);