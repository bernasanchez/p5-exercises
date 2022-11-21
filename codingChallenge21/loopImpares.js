// 2. Loop de impares con palabra //VER SOLUCION

// Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100, mostrando en la consola cada número del loop. 
// Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
let final = 100;
let num = 4; 
let palabra = 'soy un numero impar'
let loopDeImpares = ((num, palabra) => {
    for(let i = 0; i <= final; i++){
        let suma = i + num
        // console.log('Numero: ', i)
        // console.log('El numero es: ', i)
        if((suma) % 2 === 0 && i != 0){
            console.log('El numero',suma, 'es par');
        }else if((suma) % 2 === 1 && i != 0){
            console.log('N° Impar: ', suma , 'palabra:', palabra)
        }else{
            console.log('Numero : ', i)
        }
        
    }

});
loopDeImpares(num, palabra);