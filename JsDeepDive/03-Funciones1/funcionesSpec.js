// En este ejercicio vamos a tener que hacer una función que cree un objeto
// que funcione como calculadora. 
// La función va a tener que retornar el objeto a usar.

describe("Funciones ", function() {
  var calculadora;

  // Vamos a llamar a la función `crearCalculadora` y guardar su resultado
  // en una variable. Con los propios test vamos a poder darnos una idea de
  // que es lo que tiene que tener nuestra calculadora.

  beforeEach(function() {
    // La función crearCalculadora se va a ejecutar una vez por cada test,
    // entonces cada spec tendrá una calculadora inicializada en cero.
    calculadora = crearCalculadora();
  });

  it("El valor inicial debería ser 0", function() {
    // Analicemos un poco este `spec`, nos dice que el objeto `calculadora`
    // va a tener un método `valor` que retorna el valor actual de la calculadora
    // y ya sabemos que eso empieza en cero.
    // ¿Como podríamos hacer para mantener ese valor?
    expect(calculadora.valor()).toEqual(0);
  });

  it("Puedo agregar un valor", function() {
    calculadora.sumar(2);
    expect(calculadora.valor()).toEqual(2);
  });

  it("Puedo sumar dos números", function() {
    calculadora.sumar(2);
    calculadora.sumar(3);
    expect(calculadora.valor()).toEqual(5);
  });

  it("Puedo sumar cualquier cantidad de valores", function() {
    calculadora.sumar(2);
    calculadora.sumar(3);
    calculadora.sumar(4);
    expect(calculadora.valor()).toEqual(9);
  });

  it("Puedo restar valores", function() {
    calculadora.restar(2);
    expect(calculadora.valor()).toEqual(-2);
  });

  it("Puedo sumar y restar números", function() {
    calculadora.sumar(3);
    calculadora.restar(2);
    expect(calculadora.valor()).toEqual(1);
  });

  it("Puedo resetear el resultado", function() {
    calculadora.sumar(5);
    calculadora.sumar(10);
    calculadora.restar(7);
    calculadora.reset();
    expect(calculadora.valor()).toEqual(0);
  })
});
