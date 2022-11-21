// 7. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

// Ejemplo: 
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”

let palabra = 'plataforma5'
let guardarLetra; 
let middleCharacter = ((palabra) => {

    let letraBorrada = palabra.split('')
    guardarLetra = letraBorrada.splice((letraBorrada.length -1)/2, 1)
    console.log(guardarLetra)
    return guardarLetra; 
   
})

middleCharacter(palabra); 
console.log(guardarLetra)