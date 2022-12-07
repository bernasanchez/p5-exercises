// 7. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

// Ejemplo: 
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”

let middleCharacter = (str) => {
    str = str.split('') //Se puede hacer o no..
    console.log(str)
    let medio = Math.floor(str.length / 2) //saco el caracter del medio sin el decimal de la division 

    if(str.length % 2 == 0){  //pregunto si es par o impar el lengh para devolver el medio
        console.log( str[medio - 1] + str[medio]   )
    }else{
        console.log(str[medio])
    }

}
middleCharacter ('hola')
middleCharacter('plataforma5')
middleCharacter ('cosas')
