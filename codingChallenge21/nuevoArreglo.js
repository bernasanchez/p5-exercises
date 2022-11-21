// 5. Nuevo Arreglo
// Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

// Ejemplo: 
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

let arrayNuevo = []
let num = 10;
let nuevoArreglo = ((num) => {
    for(let i = 1; i <= num; i++){
        // console.log(i)
        arrayNuevo.push(i); 
    }
    return arrayNuevo;
})
nuevoArreglo(num); 
console.log('Nuevo Arreglo' , arrayNuevo);