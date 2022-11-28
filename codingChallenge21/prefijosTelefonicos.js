// 17. Prefijos Telefónicos
// 	Utils:
// 	var prefijos = [54, 55, 56, 57, 58]
//  var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
// Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:
// Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
// ejemplo : 
// {
// 	54: “Argentina”,
// 	55: ”Brasil”,
// 	56: ”Ecuador”,
// 	57: ”Colombia”
// }
let prefijos = [54, 55, 56, 57, 58];
let paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]


let validarPrefijo = (num) => {
    let caracteristicas = {}
    for(let i = 0; i < prefijos.length; i++){
        caracteristicas[prefijos[i]] = paises[i] //recorro los dos arrays y los meto en un object 
    }
    console.log('Prefijos Telefonicos',caracteristicas)
 
    // num = num.split('')
    switch (num[0]+num[1]) {
        case '54':
            console.log('El numero pertenece a: ', caracteristicas['54'])
            break;
        case '55':
            console.log('El numero pertenece a: ', caracteristicas['55'])
            break;
        case "56":
            console.log('El numero pertenece a: ', caracteristicas['56'])
            break
        case "57":
            console.log('El numero pertenece a: ', caracteristicas['57'])
            break
        case "58":
            console.log('El numero pertenece a: ', caracteristicas['58'])
            break
        default:
            console.log('El número no pertenece a nuestros países')
            break;
    }
    

}
validarPrefijo('54812345678')


// Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
// En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”
// Ejemplo: 
// validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
// validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
// validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”
