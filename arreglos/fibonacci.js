// Fibonacci
// 🤓 ¿Qué Es La Serie Fibonacci?
// La sucesión de Fibonacci comienza con los números 0 y 1. A partir de estos, «cada término es la suma de los dos anteriores». Por ejemplo, los primeros diez números de la serie son: 0,1,1,2,3,5,8,13,21,34
// 👉 Ejercicio
// En este ejercicio deberás escribir una Función que acepte un número X (que indica la posición) y que devuelva otro número (el que se encuentra en esa posición) en la serie de Fibonacci. En otras palabras, imprimirá el número que está en la posición contando X cantidad de lugares.
// Serie: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
// Fibonacci (2): 1
// Fibonacci (5): 3
// Fibonacci (8): 13

let N = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
// console.log(serie); 


// let indexNumber = serie.indexOf(13) 
// console.log(indexNumber)
// let encontrarIndex = function(number){
//     if(number === serie.indexOf(number)){
//         console.log(number)
//     }else{
//         console.log('El numero no se encuentra en el array')
//     }
    
// }
// encontrarIndex();

// let numero = 8; 
// let encontrarIndex = serie.findIndex(num => num === numero);
// console.log(encontrarIndex)

//RESOLUCION PROBLEMA P5 - (NO LO ENTENDI)
function fibonacci(N) {
    let i = N
    let resultado = 0
    let siguiente = 1
    while (i > 1) {
        siguiente = siguiente + resultado;
        resultado = siguiente - resultado;
        i--
    }
    return resultado
}
console.log(fibonacci(2)) 