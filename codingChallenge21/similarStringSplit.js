// 6. Similar String.split()
// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original. Si no sabés cómo funciona, Google puede ayudarte.
// Importante: No podés usar el String.split()

// Ejemplo: 
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

let palabra = 'hola';
let arraySplit = []
let split = (() => {
    for(let i = 0; i <= palabra.length; i++){
        arraySplit.push(palabra[i])
        // console.log(arraySplit)
    }
    return arraySplit; 

});


console.log(split(palabra)) 

