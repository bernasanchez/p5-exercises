// 4. Números Mayores
// Creá una función que reciba un arreglo de números y devuelva otro arreglo con los dos números mayores, donde el primero sea el menor de ambos números.
// Ejemplo:
// Test: [6,5,83,5,3,18]
// Output : [18, 83] 
let array = [6,5,83,5,3,18]
let mayores = (array) => {
    let ordenados = array.sort((a,b) => (a - b))
    console.log(ordenados)
    console.log(array.slice(array.length - 2))
}
mayores(array)
