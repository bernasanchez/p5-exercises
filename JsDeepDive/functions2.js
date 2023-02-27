// var string
// function concatenar(){
//     string = Array.prototype.slice.call(arguments)
//     string = string.join("")
//     return string
// }
// concatenar('Facundo', 'Velasco')
// concatenar('Esto', ' ', 'tendría que', ' ', 'usar join')
// console.log(string)

// var string;
// function concatenar(){
//     if(arguments.length <= 2){
//         string = arguments
//         console.log(arguments)
//         // console.log(arguments.length)
//         string = `${string[0]}${string[1]}` 
//         return string
//     }else{
//         // console.log(arguments)
//         string = ''
//         for(let i = 0; i < arguments.length; i++){
//             if(arguments[i] != ' '){
//                 // console.log(arguments[i])
//                 string += `${''} ${arguments[i]}`
//             }
//         }
//         return string
//     }
// }
// concatenar('Facundo', 'Velasco')
// concatenar('Esto', ' ', 'tendría que', ' ', 'usar join')
// console.log(string)

//Ejercicio 2: hight order functions
// var funcionParaInvocar = function() {
//     return 'Me llamaron!';
// };
// var otraFuncion = function() {
//     return ' y después a otra!';
// };

// function invocarFunciones(fn,fn2){
//     console.log(arguments)
//     return fn() + fn2()
// }

// function invocarFunciones() {
//     var resultado = ""
    
//     for(var i = 0; i < arguments.length; i++){
//         resultado += arguments[i]()
//     }
//     console.log('arguments:',arguments)
//     console.log('resultado:',resultado)
//     return resultado
// }
// invocarFunciones(funcionParaInvocar, otraFuncion)
// console.log(invocarFunciones(funcionParaInvocar, otraFuncion))


//Ejercicio 3 - `Clousures`

// function creadorDeIncrementos(a, b){
//     return a + b;
// }
// var incrementaPor2 = creadorDeIncrementos.bind(this, 2)
// var incrementaPor7 = creadorDeIncrementos.bind(this, 7)
// console.log(incrementaPor2(10)) 
// console.log(incrementaPor7(10))
// var num; 
// function creadorDeIncrementos(num){
//     var resultado = 0;
//     if (num === 2){
//       return function(num){
//         resultado = num + 2
//         return resultado
//       }
//     }else{
//       return function(num){
//         resultado += num + 7
//         console.log(resultado)
//         return resultado
//       }
//     }
// }
  
// var incrementaPor2 = creadorDeIncrementos(2);
// var incrementaPor7 = creadorDeIncrementos(7);

// console.log(incrementaPor2(8))
// console.log(incrementaPor7(10))


//Funciones Invitados
var funcionesInvitados,
arregloInvitados,
codigoSecreto;

arregloInvitados = ['Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo'],
codigoSecreto = 404;



// var creaFuncion = function() {
//   var arreglo = [];

//   for (var i=0; i < 3; i++) {
//     arreglo.push(
//       function(){
//         console.log(i);
//       }
//     )
//   }
//   return arreglo;
// }

// var arr = creaFuncion();
// console.log(arr[0]())

var ListaDeFuncionesInvitados = function() {
  var funcionesInvitados = [];
  var arregloInvitados = ['Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo'];
  var codigoSecreto = 404
  var invitado = []
  for (var i = 0; i < arregloInvitados.length; i++) {
    funcionesInvitados.push(
      function(num){
        if(num == codigoSecreto){
          return invitado[i]
        }else{
          return 'código secreto: invalido'
        }
        
      }
    )
  }
  return funcionesInvitados;
}

ListaDeFuncionesInvitados()
