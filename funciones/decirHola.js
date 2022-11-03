//Ejercicio Decir hola
// En este ejercicio deberás crear una Función que muestre en la consola un saludo.
// Luego, deberás refactorizar la Función para que tome por Parámetro un nombre y salude a esa persona cuando la ejecutes.
// Por último, ejecutá tu Función con varios nombres.

// function decirHola(){
//     console.log('Hola Plataforma 5'); 
// }
// decirHola(); 

// function decirHola(nombre){
//     console.log('Hola ' + nombre + '!');
// }
// decirHola('Berna')

// decirHola('Mauro');
// decirHola('Pablo')

//ARROW FUNCTIONS

// Ejercicio 1
// En este ejercicio deberás convertir las siguientes Funciones a Arrow Functions:
function sumarLosTres(num1, num2, num3) {
    return num1 + num2 + num3
}   
let sumarLosTres = (num1, num2, num3) => num1 + num2 + num3;

function cuadrado(num) {
    return num * num
}
let cuadrado = num => num * num;
   
function decirHola() {
    console.log('¡Hola!');
}
let decirHola = () => console.log('Hola!'); 

// Ejercicio 2
// En este ejercicio deberás convertir la siguiente Función a una Arrow Function.
function saludar (nombre) {
    if (nombre === undefined) {
      return "hola anónimo";
    } else {
      return "hola " + nombre;
    }
}

let saludar = nombre => {
    if (nombre === undefined) {
        return "hola anónimo";
      } else {
        return "hola " + nombre;
      }
}

let exclamar = nombre => console.log( `${nombre}`)