// Ejercicios: Filter

// Ejercicio 1
// Usando .filter(), completá la Función mayoresOIgualesA5 para que reciba un Arreglo de números y retorne un nuevo Arreglo (solo con números que sean mayores o iguales a 5).
// let arr = [3, 6, 8, 21]; 
// // let notas = arr.filter(num => num >= 6)
// // console.log(notas);
// let mayoresOIgualesA5 = arr => {
//     let numeros = arr.filter(num => num >= 6)
//     return numeros;
// } 
// console.log('Los numeros mayores son', mayoresOIgualesA5(arr)); // [6, 8, 21]

// Ejercicio 2
// Tenemos un Arreglo de números en la Variable numbers. Usando .filter(), creá un nuevo Arreglo que contenga solo los números pares.
// let numbers = [3, 7, 6, 13, 2, 24, 99];
// let pares = []; 
// numbers.filter(function(num){
//     if(num % 2 == 0){
//         console.log(num)
//         pares.push(num); 
//         return pares; 
//     }else{
//         return []
//     };
// })
// console.log(pares); // [6, 2, 24]

// Ejercicio 3
// Tenemos un Arreglo de palabras al azar en la Variable palabras. Usando .filter(), deberás separar en un nuevo Arreglo aquellas palabras que no tengan más de 3 letras.
let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']
const palabrasCortas = [];
palabras.filter(
    (palabra) =>
    palabra.length <=3 ? 
    // console.log(palabra);
    palabrasCortas.push(palabra)
    :  null
)
console.log(palabrasCortas); // [ 'Et', 'Sed', 'At' ]

// Ejercicio 4
// Tenemos un Arreglo en una Variable mix con varios elementos, de distintos tipos de datos. Usando .filter(), creá un nuevo Arreglo con todos los elementos que sean Strings y guardalo en la Variable soloStrings.
const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [ 1, 2, 3],
    'Dolore.'
   ];
let soloStrings = []; 

soloStrings = mix.filter(function(oracion){
    if(typeof(oracion) == 'string'){
        console.log(oracion); 
        soloStrings.push(oracion);
        return soloStrings; 
    }
})

console.log(soloStrings); // [ 'Ut vero.', 'Diam rebum nonumy et. 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]
