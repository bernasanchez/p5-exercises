// Simulación del Array.join()
// En este ejercicio deberás crear una Función llamada join que reciba un Arreglo y simule el comportamiento del método Array.join().
// ⚠️Importante: No podés usar el método Array.join() original.
// Por ejemplo:
// join(["h","o","l","a"]) debe retornar el string "hola".
// join(["c","h","a","u"]) debe retornar el string "chau".
// 🚀 Ejercicio Nivelatorio: Este ejercicio es similar a los de preparación para el Coding Challenge. No te preocupes si necesitás dedicarle más tiempo.

let array = ["h","o","l","a"];
let arrayNuevo = []; 
let i = 0; //index para contar vueltas

// let join = (array) => {
    
//     while(array.length > 0){
//         arrayNuevo.push(array.shift())
//         i++
//     }
    
//     console.log('El array nuevo es ', arrayNuevo )
// }

// join(array);
// console.log('Array Original ' ,array); 

//RESOLUCION P5

const join = (arreglo, joiner) => {
    let result = `${arreglo[0]}`
    let limit = arreglo.length - 1
    for (let i = 1 ;i <= limit; i++){
        result+=`${joiner}${arreglo[i]}`
    }
    return result
}

//test
console.log(join(["c","h","a","u"],""))
console.log(join(["h","o","l","a"],""))

