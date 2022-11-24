// 10. Mezclar arreglos 
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

// Ejemplo: 
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]


let array1 = [1,2,3,4];
let array2 = ['h','o','l','a'];
let array3 = ['h','p']
let array4 = [1,2,3,4]
let arrayFiltrado = [];

let mezclarArreglos = ((array1, array3)=>{
    let num;
    let letra;
    let arrayMezclado = []; 
    for(let i = 0; i < array1.length && array3.length; i++){
        num = array1[i]
        letra = array3[i]
        arrayMezclado.push(num)
        arrayMezclado.push(letra)
        console.log('Array Sin Filtro', arrayMezclado)  
    }
    arrayFiltrado = arrayMezclado.filter(elem => elem != undefined)
    console.log('Array Filtrado' ,arrayFiltrado)  
    return arrayFiltrado

})

mezclarArreglos(array1, array3);
console.log(arrayFiltrado)


