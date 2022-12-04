// 3. Findshort: //FALTA RESOLVER BIEN 
// Crea una Función findShort() que tome como argumento un string. La Función debe devolver la longitud de la palabra más corta. Si recibe un string vacío, deberá retornar 0.
// Ejemplos:
// findShort("plataforma 5") ==> 1
// findShort("la mostaza es el mejor aderezo") ==> 2
// findShort("bootcamp") ==> 8

let findShort = (string) => {
    let arrayPalabras = string.split(' ')
    console.log(arrayPalabras)
    for(let i = 0; i < arrayPalabras.length; i++){
        let palabraMin = arrayPalabras[0].length
        console.log(palabraMin)

        if(palabraMin > arrayPalabras[i].length){
           palabraMin = arrayPalabras[i].length
           console.log('La palabra tiene caracteres:' , palabraMin)
        }else if(palabraMin === 0){
            console.log('El string esta vacío', palabraMin)
        }
        
    }
}
findShort("plataforma 5");
findShort("la mostaza es el mejor aderezo")
findShort("bootcamp")
findShort('')

// let numeros =  [111, 27, 31, 44, 101, 213, 33, 58];
// let numMaxMin = []; 
// function biggest_smallest(numeros){
//     let min = numeros[0];
//     let max = numeros[0];
//     numeros.forEach(valor => {
//        if(min > numeros[valor]){
//         min = numeros[valor];
//         console.log(min)
//        }

//        if(max < numeros[valor]){
//         max = numeros[valor]
//         console.log(max)
//        }
//        return [min, max]; 
//     });
    
//     console.log([min, max]); 
// }
// biggest_smallest(numeros);