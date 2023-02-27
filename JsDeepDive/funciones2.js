var persona = {
    nombre: 'George',
    apellido: 'Lucas',
    getNombre: function() {
        var nombreCompleto = this.nombre + ' ' + this.apellido;
        return nombreCompleto;
    }
}

//ESTO DA ERROR XQ THIS APUNTA AL OBJ GLOBAL Y NO AL OBJ PERSONA
var logNombre = function() {
    console.log(this.getNombre());
}

//USANDO BIND: SOLUCIONAMOS PROBLEMA ANTERIOR Y MUESTRA EL NOMBRE 
var logNombrePersona = logNombre.bind(persona);
logNombrePersona();

//Funcion Currying
function multiplica(a, b){
    return a * b;
  }
  
var multiplicaPorDos = multiplica.bind(this, 2);
console.log(multiplicaPorDos(8))