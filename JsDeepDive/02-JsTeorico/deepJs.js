
// NO TOCAR ESTE ARCHIVO

// VAYAN DIRECTO A LOS TEST

function scopes() {
  var a = 'hola'
  function otroScope() {
    var a = 5
    function unUltimoScope() {
      a = false;
      return a;
    }
  }
  a = otroScope();
  return a;
}

function bloque(){
  var nombre = 'Facu';

  function cambio(){
    var nombre = 'Toni';
  }

  if (true) {
    var nombre = 'Guille';
  }
  
  cambio();
  return nombre;
}

function igualdad() {
  
  var foo, bar, bazz = 3;

  foo = bar = bazz;
  return foo;
}

function boolean(bool) {
  var foo = 1,
      bar = 2,
      bazz = 3;

  if (bool){
    return foo < bar < bazz;

  } else {
    return bar < foo < bazz;

  }
}


// NO TOCAR ESTE ARCHIVO

// VAYAN DIRECTO A LOS TEST
