// veamos este caso más complicado
// primero, tomo una función que retorna otra funcion distinta
function loggerMaker(greetings) {
    console.log(greetings) //bs: aca esta el Hola de 'loggerMaker'
    return function (name) {
     // y en la segunda función tomo un nuevo valor para completar el log
      console.log(greetings + ' ' + name)
    }
  }
  
  // decir hola va a ser una función también
  var decirHola = loggerMaker('Hola')
  decirHola('Facu') // Hola Facu



// var obj = {prop: 37};
// // declaramos la función
// function loguea() {
//   return this.prop;
// }
// //agregamos la función como método del objeto `o`
// obj.f = loguea;
// console.log(obj.f());// 37
// console.log(obj)
// // el resultado es el mismo!

// var obj = {
//     nombre: 'Objeto',
//     log   : function(){
//       this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
//       console.log(this); // obj
  
//       var that = this; // Guardo la referencia a this
  
//       var cambia = function( str ){
//         that.nombre = str;  // Uso la referencia dentro de esta funcion
//       }
  
//       cambia('Otra vez!');
//       console.log(this);
//     }
// }
// console.log(obj.log)


