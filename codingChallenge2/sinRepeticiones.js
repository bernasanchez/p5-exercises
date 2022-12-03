// 2. Sin Repeticiones
// Creá una función que reciba un arreglo con números repetidos y devuelva otro sin números reiterados.

// Ejemplo:

// Test: [1,2,2,2,3,3,4,5]
// Output : [1,2,3,4,5] 

let array = [1,2,2,2,3,3,4,5]
//FORMAS PARA ELIMINAR ELEMENTOS REPETIDOS 
// 1 FILTER + INDEX OF 
let result = array.filter((item, index) => {
    return array.indexOf(item) === index;
})
console.log(result)

//METODO SET
const dataArray = new Set(array); //Creo cont con new set(array)
let result2 = [...dataArray]; //Guardamos result en una variable con la const desestructurada 
console.log(result2); 

//METODO REDUCE
let data = [1,2,2,2,3,3,4,5]

const result3 = data.reduce((acc, item) => {
    if(!acc.includes(item)){
        acc.push(item)
    }
    return acc;  
}, []);
console.log('RESULT CON REDUCE', result3)