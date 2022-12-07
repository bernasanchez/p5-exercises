// EJERCICIO 5
// Sum array: escribí una función sumArray que tome dos parámetros, un arreglo de números ordenados y un número. La función devolverá true, si cualquier combinación de dos números dentro del arreglo suman el número del segundo parámetro. Sino, devolverá false.
// Ejemplo:
// // debe retornar true porque 2+11 suman 13
// sumArray([2,5,7,10,11,15,20], 13)
// // debe retornar false
// sumArray([2,5,7,10,11,15,20], 14)

// let sumArray = (array, num) => {
//     let numSuma = array[0]
    
//     for(let i = 1; i < array.length; i++ ){
//         if((numSuma + array[i]) === num){
//             console.log(true)
//             return true
//         }else{
//             console.log(false)
//         }
        
//     }
   
// }
// sumArray([2,5,7,10,11,15,20], 13)
// console.log(sumArray([2,5,7,10,11,15,20], 14))
// sumArray([2,5,7,10,11,15,20], 14)



// EJERCICIO 5
// Sum array: escribí una función sumArray que tome dos parámetros, un arreglo de números ordenados y un número. La función devolverá true, si cualquier combinación de dos números dentro del arreglo suman el número del segundo parámetro. Sino, devolverá false.
// Ejemplo:
// debe retornar true porque 2+11 suman 13
sumArray([2,5,7,10,11,15,20], 13)
// debe retornar false
sumArray([2,5,7,10,11,15,20], 14)

function sumArray(arr, num) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // Tuve que hacer una comprobación dentro del for para que no sumé el mismo número
            if (i === j) {
                // No sabía que existía el continue, lo busqué en google jaja.
                // Se puede hacer diferente obvio, pero está bueno siempre hacer algo nuevo jaja
                continue;
            }
            // Acá imprime las operación que va haciendo para ver si está bien.
            // Me sirvió para darme cuenta que estaba sumando el mismo número y ambos ejemplos me daban true.
            console.log('Arr[i]', arr[i], 'Arr[j]', arr[j], 'Suma', arr[i] + arr[j]);
            // La operación en cuestión    
            if (arr[i] + arr[j] === num) {
                result = true;
            }
        }
    }
    // Retornamos el resultado final por consola
    return console.log(result);
}
