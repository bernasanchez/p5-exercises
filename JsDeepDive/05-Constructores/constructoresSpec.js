// Info https://es.wikipedia.org/wiki/Notaci%C3%B3n_polaca_inversa

// Creemos una nueva función constructora que nos devuelva un objeto
// calculadora pero en vez notación infija que sea notación polaca inversa
describe('Calculadora que use notación polaca inversa', function() {
  var calculadora;

  beforeEach(function() {
    // Fijemos nos como esta invocada la función constructora, es un factory function?
    calculadora = new CalculadoraNPI();
  });

  it('Sumo dos números', function() {
    // Infija: 2 + 3
    // Postfija: 2 3 +
    calculadora.agregar(2);
    calculadora.agregar(3);
    calculadora.sumar();
    expect(calculadora.valor()).toEqual(5);
  });

  it('Sumo de a tres números', function() {
    // Infija: 2+3+4
    // Postfija: 2 3 4 + +
    calculadora.agregar(2);
    calculadora.agregar(3);
    calculadora.agregar(4);
    calculadora.sumar();
    expect(calculadora.valor()).toEqual(7);
    calculadora.sumar();
    expect(calculadora.valor()).toEqual(9);
  });

  it('Resto con dos números', function() {
    // Infija: 2-3
    // Postfija: 2 3 -
    calculadora.agregar(2);
    calculadora.agregar(3);
    calculadora.restar();
    expect(calculadora.valor()).toEqual(-1)
  })

  it('Suma y resta', function() {
    // Infija: 2 + 3 - 4
    // Postfija: 2 3 4 - +
    calculadora.agregar(2);
    calculadora.agregar(3);
    calculadora.agregar(4);
    calculadora.restar();
    expect(calculadora.valor()).toEqual(-1);
    calculadora.sumar();
    expect(calculadora.valor()).toEqual(1);
  });

  it('Multiplicación y división', function() {
    // Infija: 2 * 3 / 4
    // Postfija: 2 3 4 / *
    calculadora.agregar(2);
    calculadora.agregar(3);
    calculadora.agregar(4);
    calculadora.dividir();
    expect(calculadora.valor()).toEqual(0.75);
    calculadora.multiplicar();
    expect(calculadora.valor()).toEqual(1.5);
  });

  // Los siguientes specs son para testear si se arroja una excepción.
  // Para poder hacerlo nosotros vamos a usar el `throw statment`, pueden
  // ver mas información en https://mzl.la/1CkHpEM

  it("Arroja un error cuando no hay suficientes números", function() {
    expect(function() {
      calculadora.sumar();
    }).toThrow('La calculadoraNPI necesita por lo menos 2 números');

    expect(function() {
      calculadora.restar();
    }).toThrow('La calculadoraNPI necesita por lo menos 2 números');

    expect(function() {
      calculadora.multiplicar();
    }).toThrow('La calculadoraNPI necesita por lo menos 2 números');

    expect(function() {
      calculadora.dividir();
    }).toThrow('La calculadoraNPI necesita por lo menos 2 números');
  });

  it('Los métodos deberían estar en CalculadoraNPI.prototype', function() {
    expect(typeof CalculadoraNPI.prototype.sumar).toEqual('function');
    expect(typeof CalculadoraNPI.prototype.restar).toEqual('function');
    expect(typeof CalculadoraNPI.prototype.dividir).toEqual('function');
    expect(typeof CalculadoraNPI.prototype.valor).toEqual('function');
  });

  it('La calculadora debería ser una instancia de CalculadoraNPI', function() {
    // ¿Se acuerdan de instanceof?
    expect(calculadora instanceof CalculadoraNPI).toEqual(true);
  });

});
