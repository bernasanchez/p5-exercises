//Par o Impar 
//Crear un programa que le pregunte al usuario un número y que le devuelva un mensaje que indique si es par o impar. 
//El programa terminará si el usuario ingresa un 0 o un número negativo.

let numUser = parseInt(prompt('Ingrese un numero por favor: '));
while (!(numUser === 0 || numUser < 0)) {
   if(numUser % 2 === 0){
        console.log('El numero: ' + numUser + ' es par')
   }else{
        console.log('El numero: ' + numUser + ' es impar') 
   }
    numUser = parseInt(prompt('Ingrese un numero por favor: '));
}

alert('El numero ingresado es 0 o menor a 0'); 

