// 1. Sin Espacio
// Creá una función que remueva los espacios del string pasado como parámetro.

// Ejemplo:
// Test: "hola como estas hoy ?"
// Output:"holacomoestashoy?"  

let sinEspacio = (frase) => {
    fraseNueva = frase.split('')
    console.log(fraseNueva)
    
    fraseNueva = fraseNueva.filter(e => e != ' ')
    console.log(fraseNueva.join(''))

}
sinEspacio('hola como estas hoy  ?')