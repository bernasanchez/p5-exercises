// Desafío isUniform
// En este ejercicio deberás crear la Función isUniform que tome un Arreglo como Parámetro y devuelva true si todos los elementos del Arreglo son idénticos. De lo contrario, deberá devolver false.

// ⚠️ Importante: Salvo que sea necesario, tu Función no debe recorrer todo el Arreglo si no es idéntico. Es decir, al momento que encuentre una diferencia deberá cortar.

// Usá este código para testear tu solución:
// isUniform([1, 1, 1, 1]) // true
// isUniform([1, 2, 1, 1]) // false
// isUniform(["a", "b", "p"]) // false
// isUniform (["b", "b", "b"]) // true

let unos = [1, 1, 1, 1];
let numDistinto = [1, 2, 1, 1];
let letrasDistintas = ["a", "b", "p"]; 
letrasIguales = ["b", "b", "b"]
let nuevoArray = [];

function isUniform(numDistinto){
    // console.log(numDistinto);
    numDistinto.map((caracter) =>{
        while(numDistinto[0] == caracter){
            // console.log(numDistinto[caracter])
            nuevoArray.push(caracter); 
            return true; 
        }
        console.log('No hay coincidencia')
        return false

    })
 
}
isUniform(numDistinto);
console.log('Array final: ' ,nuevoArray)