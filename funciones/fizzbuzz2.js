// Desafío FizzBuzz II
// Deberás escribir una nueva versión de FizzBuzz (fizzBuzz2) que tome dos Strings como Argumento y reimplemente el FizzBuzz original. Elegí una palabra para cada String (palabra1 y palabra2) que reemplace a Fizz y a Buzz.
// Para completar este ejercicio, deberás:

//1 Lograr que fizzBuzz2 devuelva un String con los números separados por comas.
//2 Mejorar la Función para que el usuario pueda decidir hasta qué número tiene que contar fizzBuzz2.
//3 Mejorar la Función para que el usuario pueda ingresar fizz_num y buzz_num para que la sustitución de palabras ocurra en los números múltiplos de los nuevos argumentos de entrada (en vez de solo 3 y 5).

// ⚠️Importante: Intentá no ayudarte con tu código anterior de Fizzbuzz.

//FIZZBUZZ ORIGINAL 
// let i = 1;
// let final = 100;
// while(i <= final){
//     if(i % 15 == 0){
//         console.log('fizzbuzz')
//     }else if(i % 5 == 0){
//         console.log('buzz')
//     }else if( i % 3 == 0){
//         console.log('fizz')
//     }else{
//         console.log(i)
//     }
//     i++
// }

//FIZZBUZZ 2 

let contador = 1;
let finalContador = parseInt(prompt('Ingrese el numero final del contador: '))
function fizzBuzz2(palabra1, palabra2, resto1, resto2){
    while(contador <= finalContador){
        if(contador % 15 == 0){
            console.log(`${palabra1 + ' ' + palabra2}`)
        }else if(contador % resto1 == 0){
            console.log(`${palabra1}`)

        }else if(contador % resto2 == 0){
            console.log(`${palabra2}`)
        }else{
            console.log(contador)
        };
        contador++
    }
    
}
fizzBuzz2('Belgrano', 'Campeon', 3, 5 );