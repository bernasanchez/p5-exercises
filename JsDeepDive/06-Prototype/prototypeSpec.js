describe('Clase Mamífero', function() {
  var miMamifero;

  // Mamífero es una función constructora.
  beforeEach(function() {
    miMamifero = new Mamifero('Manny');
  });

  it('`miMamifero` es una instancia de Mamífero', function(){
    expect(Object.getPrototypeOf(miMamifero)).toEqual(Mamifero.prototype);
  });

  it('Debería tomar un nombre como parámetro', function() {
    expect(miMamifero.nombre).toEqual('Manny');
  });

  it('Debería tener un Arreglo llamado descendencia', function() {
    expect(miMamifero.descendencia).toEqual([]);
  });
  
  it('Toma su nombre en base al parametro pasado', function() {
    var otroMamifero = new Mamifero('Toby');

    expect(otroMamifero.nombre).toEqual('Toby');
  })

  // El prototype de miMamifero ([[Prototype]] || __proto__) esta relacionado a Mamifero.prototype.
  it("Debería tener una propiedad `saludar()` en su prototype", function() {
    expect(miMamifero.saludar()).toEqual("Hola, mi nombre es Manny");
    // Esta función deberían ser de Mamifero.prototype.
    expect(miMamifero.hasOwnProperty('saludar')).toEqual(false);
  });

  it('Debería tener una función `nuevoHijo()`', function() {
    var hijo;
    hijo = miMamifero.nuevoHijo();
    expect(hijo.nombre).toEqual('Manny Jr');
    expect(miMamifero.descendencia).toEqual([hijo]);

    // Esta función deberían ser de Mamifero.prototype.
    expect(miMamifero.hasOwnProperty('nuevoHijo')).toEqual(false);
  });

  it('El hijo recibe su nombre en relacion a su padre', function() {
    var perro = new Mamifero('Perro');
    var perrito = perro.nuevoHijo();

    expect(perrito.nombre).toEqual('Perro Jr')
  })
});

// Las instancias de Gato deberían heredar de Mamífero, osea que todas las propiedades
// que tenga un Mamífero también las tendrá un Gato.
describe('Clase Gato', function() {
  var gato;

  // Gato es un `constructor function`.
  beforeEach(function() {
    spyOn(Mamifero, 'call').and.callThrough();
    gato = new Gato('Capitán', 'Blanco');
  });

  // Recuerdan como funcionan .call() o .apply()
  it('Debería llamar a la función constructor de Mamífero', function() {
    // Dentro del constructor de Gato, tendríamos que llamar al constructor de mamífero `Mamifero.call`
    // y darle las propiedades básicas a Gato.
    expect(Mamifero.call).toHaveBeenCalled();
  });

  it('Debería haber un Arreglo llamado descendencia y una propiedad nombre heredada de Mamífero', function() {
    expect(gato.descendencia).toEqual([]);
    expect(gato.nombre).toEqual('Capitán');
  });

  it('Debería tener una propiedad color', function() {
    expect(gato.color).toEqual('Blanco');
  });
  
  it('Toma su nombre en base al parametro pasado', function() {
    var otroGato = new Mamifero('Manny');

    expect(otroGato.nombre).toEqual('Manny');
  })
  
  // Probamos que new Mamifero ó Object.create(Mamifero) fueron usados para armar el `prototype chain`
  it('Debería usar Object.create para heredar los métodos del Mamífero', function() {
    expect(typeof Gato.prototype.saludar).toEqual('function');
    expect(Gato.prototype.descendencia).toEqual(undefined);
  });

  it('Deberia tener la propiedad constructor en el prototype que haga referencia a si mismo', function() {
    expect(Gato.prototype.constructor).toEqual(Gato);
  });

  // Por mas que heredemos las propiedades de Mamifero podemos sobre escribirlas para
  // que realicen acciones propias de nuestra clase (Polimorfismo)
  it("Debería tener su propiedad nuevoHijo que acepte un color", function() {
    var batman = gato.nuevoHijo('Negro');
    expect(gato.descendencia).toEqual([batman]);
    expect(batman.nombre).toEqual('Capitán Jr');
    expect(batman.color).toEqual('Negro');

  });

  // Investigamos la propiedad constructor
  it('El `nuevoHijo` de gato debería ser un Gato y no un Mamífero', function() {
    var JScat = gato.nuevoHijo('Amarillo');
    expect(JScat instanceof Gato).toEqual(true);
    expect(JScat.constructor).toEqual(Gato);
  });

  it('Una instancia de Gato debería tener acceso a `Mamifero.prototype.saludar` en su prototype chain', function(){
    var garfield = new Gato('Garfield', 'Naranja');
    expect(garfield.saludar()).toEqual('Hola, mi nombre es Garfield');
  });

});
