// 9. Loop de pares.
// Creá una Función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100, mostrando en la consola cada número del loop.
// En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

let loopDePares = (num) => {
    for(let i = 0; i <= 100; i++){
        let suma = i + num
        if((suma) % 2 == 0 ){
            console.log(i)
            console.log('El numero', suma , 'es par')
        }else{
            console.log(i)
        }
    }
}
loopDePares(10)