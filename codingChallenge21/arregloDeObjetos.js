// 13. Arreglo de objetos
// Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` y que contenga el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

// let objetos = {};
// let num = 3;
// let i = 1 
// let arrayObjetos = []
// let arregloDeObjetos = ((num) => {
//     let arrayNumeros = []
//     while(i <= num){
//         arrayNumeros.push(i)
//         i++
//     }
//     console.log('Array Numeros: ',arrayNumeros)
   
//     for(let j = 0; j < arrayNumeros.length; j++){
//         // console.log('Array Numeros FOR', arrayNumeros[j])
//         objetos.valor = arrayNumeros[j]
//         arrayObjetos.push(objetos);
//         console.log(objetos)
//     }
//     console.log(arrayObjetos)

// })
// arregloDeObjetos(num); 

let propiedad = 'valor'
let num = 10;
let i = 1 
let arrayObjetos = []
let arregloDeObjetos = ((num) => {
    let arrayNumeros = []
    while(i <= num){
        arrayNumeros.push(i)
        i++
    }
    console.log('Array Numeros: ',arrayNumeros)
   
    for(let j = 0; j < arrayNumeros.length; j++){
        // console.log('Array Numeros FOR', arrayNumeros[j])
        arrayObjetos.push(
            {[`${propiedad}`]: arrayNumeros[j]}
        )
    }
    // console.log(arrayObjetos)
    return arrayObjetos
})
arregloDeObjetos(num); 
console.log('Array de Objetos Final:',arrayObjetos); 