// 9. Manejar dos arreglos
// Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

// Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// 		Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

let array1 = [1,2,3,4];
let array2 = ['h','o','l','a'];

let arrayHandler = ((array1, array2) => {
    let num;
    let letra; 
    for(let i = 0; i < array1.length && array2.length ; i++){
        num =  array1[i]
        letra = array2[i]
        console.log(`Soy ${num} y yo soy ${letra} `);  
    }
}) 
arrayHandler(array1, array2)


