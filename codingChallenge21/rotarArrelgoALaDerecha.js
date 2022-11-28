// 20. Rotación de arreglo a la derecha
// Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.
// Ejemplo: 
// rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
// rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]

// let array1 = [1, 2, 3, 4, 5] 

// let rotar = (array1, num) => {
//     let arrayNuevo = array1.slice(num +1)
//     for(let i = 0; i < array1.length; i++){
//         if(array1[i] != arrayNuevo[0] && array1[i] != arrayNuevo[1]){
//             arrayNuevo.push(array1[i])
//             console.log(arrayNuevo)
//         }
//     }
    


// }
// rotar(array1, 2)


//DEVOLUCION MANO - VER NO LO ENTIENDO 
const rotar = (arr, num) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[(i + num) % arr.length] = arr[i];
    }
    console.warn("20. Rotación de arreglo a la derecha");
    console.log(arr2);
}

rotar([1, 2, 3, 4, 5], 2);
rotar([1, 2, 3, 4, 5], 3);