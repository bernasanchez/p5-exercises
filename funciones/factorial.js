//Factorial()
// Deberás crear una Función factorial que reciba un número y devuelva el factorial de este número.
// Por ejemplo, si hacemos factorial(5) la Función deberá hacer la operación 5x4x3x2x1 y devolver el resultado: 120.




// Para hacer el ejercicio, tené en cuenta estas indicaciones:
//1 Deberás hacer una Variable para almacenar el resultado.
//2 Deberás usar un Loop hasta alcanzar el número que recibís como input.
//3 En cada vuelta del Loop deberás actualizar el resultado para no caer en un Loop infinito.
//4 En caso de que el usuario ingrese 0 o un número negativo, deberás generar acciones compatibles con la definición del Factorial de un Número.

// let num; 
// let i = 1; //1 es donde inicia el loop 
// let acumulador = 1; //el factorial que va multiplicando a i 
// let resultado = 0; //va sumando el resultado de las multiplicaciones 

// while(i <= 5){
    
//     acumulador *= i;
//     resultado =  acumulador; 
//     // console.log(resultado);
//     i++
//     console.log('acumulador: ' + acumulador)
//     console.log('factorial ' + i)
// }

// console.log(resultado); 

function factorial(num){

    while((isNaN(num) || num < 0)){
        alert('Debe ingresar un numero entero positivo');
        num =  prompt('Ingrese un numero entero positivo');
    }
    num = parseInt(num);
    let i = 1; //1 es donde inicia el loop 
    let acumulador = 1; //el factorial que va multiplicando a i 
    let resultado = 0; //va sumando el resultado de las multiplicaciones 
    
    if(num === 0 || num === 1){
       return resultado = 1; 
    }else{
        while(i <= num){
    
            acumulador *= i;
            resultado =  acumulador; 
            // console.log(resultado);
            i++
            console.log('acumulador: ' + acumulador)
            console.log('factorial ' + i)
        }
        return resultado
    }
}

console.log('El resultado es: ' + factorial('f'))  


