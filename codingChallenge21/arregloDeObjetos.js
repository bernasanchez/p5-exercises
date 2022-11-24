// 13. Arreglo de objetos
// Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` y que contenga el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

let objetos = {};
let num = 3;
let i = 1 
let acc = 0; 
let arrayObjetos = []
let arregloDeObjetos = ((num) => {
    let arrayNumeros = []
    while(i <= num){
        arrayNumeros.push(acc = i)
        i++
        console.log('Array Numeros: ',arrayNumeros)
    }
    
    for(let j = 0; j < arrayNumeros.length; j++){
        console.log('Array Num en For', arrayNumeros)
        objetos.valor = arrayNumeros[j]
        arrayObjetos.push(objetos);
        console.log(objetos)
    }
    console.log(arrayObjetos)

})
arregloDeObjetos(num); 