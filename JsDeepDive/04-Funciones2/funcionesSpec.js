describe('La propiedad arguments', function() {
  it('`concatenar` me permite unir dos strings', function() {
    var string = concatenar('Facundo ', 'Velasco');
    expect(string).toEqual('Facundo Velasco');
  });

  // Recuerden que arguments se parece a un Array pero no lo es.
  it('Nos permite pasar todos los argumentos que queramos', function() {
    var string = concatenar('Esto', ' ', 'tendría que', ' ', 'usar join');
    expect(string).toEqual('Esto tendría que usar join');
  });
});

// Vamos a trabar con los conceptos de que las funciones son objetos y los puedo
// ir pasando entre scopes.
// Para eso es que me sirve saber que son `high-order functions`.
describe('higher-order functions', function() {

  var funcionParaInvocar = function() {
      return 'Me llamaron!';
    };

  it('Puedo pasar una función como argumento', function() {

    // Crear una función que invoque sus parámetros y retorne el valor.
    expect(invocarFunciones(funcionParaInvocar)).toEqual('Me llamaron!');

    var otraFuncion = function() {
      return ' y después a otra!';
    };
    // `invocarFunciones` debería llamar a tantas funciones como argumentos sean pasados,
    // y retornar sus respuestas concatenadas
    expect(invocarFunciones(funcionParaInvocar, otraFuncion)).toEqual('Me llamaron! y después a otra!');
  });
});

// Ahora repasemos los conceptos de `clousures`.
// Un `clousure` genera un entorno que pueden guardar variables declaradas al momento
// de ser definidas, luego ese scope desaparece pero la función que devuelve sigue
// teniendo acceso a su información.
// Pongamoslo en practica.

describe('creadorDeIncrementos', function() {
  it(`Debería crear y devolver una función, que en base al argumento que reciba, aumente dicha cantidad de números`, function() {
    var incrementaPor2 = creadorDeIncrementos(2);
    var incrementaPor7 = creadorDeIncrementos(7);
    // Ahora usemos esa función que creamos y tendria que incrementar por 2.
    expect(incrementaPor2(5)).toEqual(7);
    expect(incrementaPor7(3)).toEqual(10);
  });
});

// Cuando hablamos de `decorator functions` nos referimos a funciones que toman otras funciones para
// cambiar algunos de sus comportamientos y devolver una nueva version de estas, sin haber modificado
// la original.

// En esta oportunidad vamos a tomar una funcion y asegurarnos que solo pueda correr una vez, no
// importa cuantas veces la llamemos.
describe('invocacionUnica', function() {
  
  var incrementar, num;

  beforeEach(function(){
    num = 0;
    incrementar = invocacionUnica(function() {
      num++;
    });
  })


  it('La función debería incrementar una única vez', function() {
  
    // Una vez que corremos esta función por primera vez, no deberia volver a tener efecto
    incrementar();
    incrementar();
    incrementar();
    incrementar();

    expect(num).toEqual(1);
  });

  it('La propia funcion registra que se ejecute y no un ente externo', function() {
     
    var decrementar = invocacionUnica(function() {
      num--;
    })

    incrementar();
    incrementar();
    incrementar();

    decrementar();
    decrementar();

    expect(num).toEqual(0);
  })

});

// Creemos una función que retorne un objeto con las propiedades descriptas más
// abajo, ¿porque usaríamos clousures para esto? porque no esta permitido guardar
// nada mas que esos métodos.
// ¿Podríamos generar un entorno cerrado del cual leer y modificar información?
describe('Contextos compartidos', function() {
  var obj;

  beforeEach(function(){
    obj = objetoConClousure();
  })


  it('Debería devolver un Objeto con cuatro métodos', function() {

    expect(typeof obj.incremento).toBe('function');
    expect(typeof obj.incrementoPor10).toBe('function');
    expect(typeof obj.pedirValor).toBe('function');
    expect(typeof obj.cambiarValor).toBe('function');
    // Vamos a testear que solo estemos guardando en el objeto los métodos pedidos.
    // El valor que va a llevar el estado actual solo tiene que estar en el scope
    // de `objetoConClousure` y no ser accesible para nadie excepto los elementos
    // declarados en el clousure.
    expect(Object.keys(obj).length).toBe(4);
  });

  it('Debería permitir a `incremento`, `incrementoPor10`, y `pedirValor` trabajar sobre el mismo valor', function() {

    obj.incremento();
    obj.incrementoPor10();
    expect(obj.pedirValor()).toEqual(11);
  });

  it('El método `cambiarValor` debería pisar el valor actual', function(){
    obj.incrementoPor10();
    obj.incremento();

    obj.cambiarValor(7.5);

    expect(obj.pedirValor()).toEqual(7.5);
  });

});

describe('La lista secreta', function(){
  describe('Función `ListaDeFuncionesInvitados`', function() {
    var funcionesInvitados,
        arregloInvitados,
        codigoSecreto;

    beforeEach(function(){
      arregloInvitados = ['Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo'],
      codigoSecreto = 404;

      funcionesInvitados = ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto);

    });

    it('`ListaDeFuncionesInvitados` debería retornar un Arreglo', function() {
      expect(Array.isArray(funcionesInvitados)).toEqual(true);
    });

    it('El largo de este Arreglo debería ser del mismo largo que el original', function() {
       expect(funcionesInvitados.length).toEqual(6);
    });

    it('Cada indice del Arreglo debería ser una función', function(){
      // .every se fija que cada iteración del arreglo devuelva true,
      // en este caso nuestra pregunta es si `typeof fn === 'function'`
      var soloFunciones = funcionesInvitados.every(function(fn){
        if (typeof fn === 'function'){
          return true;
        }
      });
      expect(soloFunciones).toEqual(true);
    });

    it('Las funciones en `funcionesInvitados` devuelve un invitado de `arregloInvitados` al pasarle el código', function(){
      var invitado = funcionesInvitados[0](codigoSecreto);

      expect(invitado).toEqual('Facu');
    });

    it('Debería devolver el string `código secreto: invalido` si el código es incorrecto', function() {
      var invitado = funcionesInvitados[1](8910);

      expect(invitado).toEqual('código secreto: invalido');
    });

    it('functions in the `guestNameFunction` do not have additional property or methods attached(use closure)', function(){
      var funcionTercerInvitado = funcionesInvitados[2];

      expect(Object.keys(funcionTercerInvitado).length).toEqual(0);
    });

    it('`ListaDeFuncionesInvitados` no usa ningún método de Array.prototype', function(){
      spyOn(Array.prototype, 'forEach').and.callThrough();
      spyOn(Array.prototype, 'map').and.callThrough();

      ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto);

      expect(Array.prototype.forEach.calls.any()).toEqual(false);
      expect(Array.prototype.map.calls.any()).toEqual(false);

    });

  });

  describe('`armarListaDeInvitados`', function() {

    var funcionesInvitados,
        arregloInvitados,
        codigoSecreto;

    beforeEach(function() {
      arregloInvitados = ['Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo'],
      codigoSecreto = 404;

      funcionesInvitados = ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto);
    });

    it('`armarListaDeInvitados` debería ser una función', function() {
      expect(typeof armarListaDeInvitados === 'function').toEqual(true);
    });

    it('`armarListaDeInvitados` debería devolver un Arreglo de strings', function() {
      var listaOficial = armarListaDeInvitados(funcionesInvitados, codigoSecreto);

      var sonString = listaOficial.every(function(name) {
        return typeof name === 'string';
      });

      expect(Array.isArray(listaOficial)).toEqual(true);
      expect(sonString).toEqual(true);

    });

    it('`listaOficial` debería tener la lista original de invitados', function() {
      var listaOficial = armarListaDeInvitados(funcionesInvitados, codigoSecreto);

      expect(listaOficial).toEqual(['Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo']);

    });
  });
})

