// Reduce : Ejercicios
// Ejercicio 1
// Teniendo un Arreglo de números al azar (llamado numbers), usá .reduce() para obtener la multiplicación total de todos los números.
let numbers = [6, 1, 34, 94, 3, 17];
const mul = numbers.reduce((accumulador,num) => accumulador * num, 1);  
console.log('Multiplicacion total ' , mul); // debería mostrar 977976

// Ejercicio 2
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un nuevo Arreglo que contenga solo los números impares.
let numeros = [3, 7, 6, 13, 2, 24, 99];
let impares = [];
impares = numeros.reduce(function(acc, num){
    if(num % 2 == 1){
        acc.push(num)
    };
    return acc;
}, impares); //Coloco el array donde quiero que vayan o [] directamente
console.log('Numeros impares ', impares) // [3, 7, 13, 99]

// Ejercicio 3
// Teniendo un Arreglo de números (llamado numbers), usá .reduce() para obtener el máximo valor que posea el Arreglo.
let numbers2 = [5, 4, 1, 9, 2]
let max = numbers2.reduce(() => Math.max(...numbers2));
console.log(max) // debería mostrar 9

// Ejercicio 4
// Completá la Función join que reciba un Arreglo de números y retorne un String con todos los números concatenados.
let join = arr => {
    return arr.join("");
}
console.log( join( [1,2,3] ) ) // "123"

// Ejercicio 5
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un Arreglo con los mismos números pero eliminando los repetidos.
// let numeros3 = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11]
// let sinRepetidos = numeros3.reduce(() => {
    
// })

// console.log(sinRepetidos)
// // debería mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

// Ejercicio 6
// Teniendo un Arreglo llamado notasDeTPs(con números del 1 al 10), usá .reduce() para calcular la nota promedio final de todos los trabajos prácticos de este curso.
let notasDeTPs = [4, 7, 8, 5, 10]
let notaFinal = notasDeTPs.reduce((total, notas) => total + notas, 0)

console.log('Cantidad de notas ', notasDeTPs.length)
console.log(notaFinal/notasDeTPs.length)
// debería mostrar 6.8