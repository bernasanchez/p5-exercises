// Ejercicio Par o Impar 
let numUser = parseInt(prompt('Ingresa un numero'));

if(numUser % 2 == 0){
    console.log('Ingresaste un numero par')
}else{
    console.log('Ingresaste un numero impar')
}

//Agregá Caminos
let edad = parseInt(prompt('Ingresa tu edad'));

if(edad < 0){
    console.log('Error, su edad no es valida')
}else if(edad >= 18 && edad < 21){
    console.log('Bienvenido/a al bar!')
}else if(edad >= 21){
    console.log('Felicitaciones, eres mayor de edad!')
    if(edad % 2 == 0){
        console.log('Tu edad es par')
    }else{
        console.log('Sabías que tu edad es impar?')
    }
}else{
    console.log('Eres menor de edad, no puede ingresar al bar')
}