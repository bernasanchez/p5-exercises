// 1. Loop de pares //VER SOLUCION
// Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100, mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

// for(let i = 0; i <= final; i++){
    
    //     if(i % 2 === 0 && i != 0){
        //         console.log('El numero',i, 'es par');
        //     }else{
            //         console.log('Numero: ', i);
            //     }
            
            // };
let final = 100;
let num = 2; 
let loopDePares = ((num) => {
    for(let i = 0; i <= final; i++){
        let suma = i + num
        console.log('Num',i)
        // console.log('El numero es: ', i)
        if((suma) % 2 === 0 && i != 0){
            console.log('El numero',suma, 'es par');
        }
        
    }

});
loopDePares(num);