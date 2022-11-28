// 14. Arreglo de objetos 
// Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
// arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]

let arrayObjetos = []; 
let num = 3; 
let palabra = 'chau';
let arregloDeObjetos = ((num, palabra) => {
    console.log(palabra)
    let i = 1; 
    // let acc = 0; 
    while(i <= num ){
        arrayObjetos.push(
            {[`${palabra}`]: i }
        )
        i++
        // objetos[palabra] = acc + i
        // console.log(objetos)
        // arrayObjetos.push(objetos);

    }
    // return arrayObjetos    
})
arregloDeObjetos(num, palabra); 
console.log('Arreglo de Objetos:', arrayObjetos);



//RESOLUCION MANO
// const arregloDeObjetos = (num) => {
//     let array = [];
//     for (let i = 1; i <= num; i++) {        
//         array.push({["valor"]: i});
//     }
//     return array;
// }

// console.log(arregloDeObjetos(10));