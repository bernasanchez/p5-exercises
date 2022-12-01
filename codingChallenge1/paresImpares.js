// 1. Pares e Impares
// Creá una Función llamada paresEimpares que reciba 3 parámetros. Los dos primeros números y el tercero una palabra (string ).
//La Función tiene que mostrar en la consola los números entre el uno y el primer parámetro que recibe, pero debe, en primer lugar, mostrar todos los números pares y, luego, los impares.

// Además, cuando el número sea divisible por el segundo parámetro pasado a la Función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro.

// let paresEImpares = (num1, num2, palabra) => {
//     for(let i = 1; i <= num1; i++){
//         if(i % 2 == 0){
//             console.log("Pares", i)
//         }      
//     }
//     for(let j = 1; j < num1; j++){
//         if(j % 2 == 1){
//             console.log('Impares',j)
//         }else if(j % num2 == 1){
//             console.log(palabra)
//         }
//     }
// }
// paresEImpares(10,7,"prueba")  

// Solución MANO: 
const paresEImpares = (num1, num2, str) => {
    for (let i = 1; i <= num1; i++) {
        if (i % 2 === 0) {
            if (i % num2 === 0) {
                console.log(str);
            } else {
                console.log(i);
            }
        }
    }
    for (let i = 1; i <= num1; i++) {
        if (i % 2 !== 0) {
            if (i % num2 === 0) {
                console.log(str);
            } else {
                console.log(i);
            }
        }
    }
};

console.warn('Pares e Impares');
// paresEImpares(10,7,"prueba");
paresEImpares(20,5,"hola");
// paresEImpares(15,3,"chau");  


// Ejemplo:
// paresEImpares(10,7,"prueba")  
// 2
// 4
// 6
// 8
// 10
// 1
// 3
// 5
// ’Prueba’
// 9
