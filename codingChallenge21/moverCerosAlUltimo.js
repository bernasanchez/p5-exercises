// 8. Mover ceros a lo último
// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

// Ejemplo: 
// moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

let array = [1,2,0,1,0,1,0,3,0,1];
let arrayOrdenado = []
let arrayCeros = [];
let moveZeros = ((array) => {

    array.forEach(elemento => {
        
        if(elemento !== 0){
            arrayOrdenado.push(elemento);
            console.log('Array sin Ceros', arrayOrdenado);
            return arrayOrdenado; 
        }else{
            arrayCeros.push(elemento);
            console.log('Array DE CEROS', arrayCeros); 
            return arrayCeros; 
        }
    })
    arrayCeros.map(e => arrayOrdenado.push(e))
    console.log('Array con ceros', arrayOrdenado)
})
moveZeros(array); 
console.log(arrayOrdenado)