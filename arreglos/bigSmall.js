// Biggest Smallest
// En este ejercicio deberás:
// 1- Escribir una Función llamada biggest_smallest que tenga un Argumento (que haga referencia a un Arreglo de números).
// 2- Utilizar el método forEach() para encontar el número más grande y el número más chico.
// 3- La función debe devolver por consola un Arreglo que contenga los números mínimo y máximo.
// 💡 Ejemplo:
// [111, 27, 31, 44, 101, 213, 33, 58]
// // Salida: 27, 213

let numeros =  [111, 27, 31, 44, 101, 213, 33, 58];
let numMaxMin = []; 

function biggest_smallest(numeros){
    let min = numeros[0];
    let max = numeros[0];
    numeros.forEach(valor => {
       if(min > numeros[valor]){
        min = numeros[valor];
        console.log(min)
       }

       if(max < numeros[valor]){
        max = numeros[valor]
        console.log(max)
       }
       return [min, max]; 
    });
    
    console.log([min, max]); 
}
biggest_smallest(numeros);