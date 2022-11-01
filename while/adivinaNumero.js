//Adiviná Un Número
// Crear un programa para que el usuario adivine un número generado al azar.

// Para eso, seguí estas indicaciones:
//1 Usá el método prompt para pedirle al usuario que ingrese un número (n), que esté entre el 1 y el 10.
//2 Usá parseInt(n) para convertir el String en un Number.
//3 Generá un número random entre 1 y el Valor ingresado por el usuario (n).
//4 Pedile al usuario que descubra cuál es el número generado al azar.
//5 Decile si acertó, si es mayor o si es menor.
//6 Repetí el proceso hasta que adivine el número.
//7 Cuando lo descubra, felicitalo y usá un contador que le indique cuántas oportunidades usó para adivinar el número correcto.

//1 pedir numero a usuario
let numUser = parseInt(prompt('Ingrese un numero del 1 al 10'));
//2 generar numero random entre 1 y numUser 
// let numRandom = Math.floor(Math.random()*numUser) + 1; 
// console.log('El numero random es: ' + numRandom);
// let numRandomUser; 


//Hacer 2 condiciones en un while?
//Ej. Mientras numUser == number && numUser >=1 && numUser <= 10

/*
while(numUser == NaN){
    numUser = parseInt(prompt('Ingrese un numero del 1 al 10'));


    numRandomUser = parseInt(prompt('Adiviná cual es el numero Random:'));
    if(numRandomUser === numRandom){
        console.log('Acertaste!');
        console.log('Numero User: ' + numRandomUser + ' Num Random: ' + numRandom); 
        break;
    }else if(numRandomUser > numRandom){
        console.log('Tu numero elegido es mayor al numero random');
        console.log('Numero User: ' + numRandomUser + ' Num Random: ' + numRandom); 
        numRandomUser = parseInt(prompt('Adiviná cual es el numero Random:'));
    }else{
        console.log('Tu numero elegido es menor al numero random')
        console.log('Numero User: ' + numRandomUser + ' Num Random: ' + numRandom); 
        numRandomUser = parseInt(prompt('Adiviná cual es el numero Random:'));
    }

}
alert('Debe ingresar un numero entre 1 y 10'); 

*/