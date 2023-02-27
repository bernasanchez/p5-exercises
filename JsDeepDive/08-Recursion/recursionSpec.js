// Dado un número n el factorial de este numero es
// n * (n-1) * (n-2) * ... * 1
// entonces el factorial de 3 seria `3 * 2 * 1 = 6`
describe('La función factorial', function() {
  
  // La versión iterativa de esta función es seguramente
  // la cual mas conocen, usando for o while loops.
  describe('La versión iterativa', function() {
    it('resuelve el factorial correctamente', function() {
      var resultado = factorialIterativo(10),
        esperado = 3628800;
      expect(resultado).toEqual(esperado);
    });
    it('no se llama a si misma', function() {
      spyOn(window, 'factorialIterativo').and.callThrough();
      factorialIterativo(5);
      expect(factorialIterativo.calls.count()).toEqual(1);
    });
  });
  // Una función recursiva plantea un caso base con el
  // sabe cuando no tiene que seguir invocándose nuevamente.
  describe('La versión recursiva', function() {
    it('puede manejar el caso base', function() {
      expect(factorial(0)).toEqual(1);
    });
    it('resuelve el factorial correctamente', function() {
      expect(factorial(10)).toEqual(3628800);
    });
    // Acá es donde testeamos que la función sea recursiva
    // Sabemos que para ser llamada recursiva tiene que
    // llamarse repetidas veces.
    it('Se invoca n + 1 veces', function() {
      // El numero de veces que se llama a la función depende
      // de como hayas construido tu caso base.
      // Si el número de invocaciones difiere revisa como esta
      // planteado el caso base
      spyOn(window, 'factorial').and.callThrough();
      var n = 5;
      factorial(n);
      expect(factorial.calls.count()).toEqual(n + 1);
    });
  });
});

// En ka secuencia de fibonacci el primer y segundo elemento
// son ambos igual a 1.

// Cada uno de los siguientes números son la suma de los dos
// anteriores, por ejemplo el tercer numero sera 2 (1+1)
// y el siguiente 3 (1+2), y así sucesivamente.
describe('fibonacci recursivo', function() {
  it('puede manejar el caso base', function() {
    // Cuando n es 1 ó 0 sabemos exactamente que devolver
    expect(fib(0)).toEqual(1);
    expect(fib(1)).toEqual(1);
  });
  it('resuelve correctamente el tercer elemento de fibonacci', function() {
    expect(fib(2)).toEqual(2);
  });
  it('se invoca a si mismo', function() {
    // Necesario para una función recursiva
    spyOn(window, 'fib').and.callThrough();
    fib(2);
    expect(fib.calls.count()).toBeGreaterThan(1);
  });
  it('resuelve correctamente cualquier elemento de la succesion de fibonacci', function() {
    expect(fib(22)).toEqual(28657);
  });

  // El siguiente test debería pasar si manejaste correctamente
  // la recursion de la función, si no posiblemente tengas que
  // re factorear tu caso base.
  it('se invoca a si mismo fib(n)*2-1 veces', function() {
    spyOn(window, 'fib').and.callThrough();
    var n = 10;
    var fibN = fib(n);
    expect(fib.calls.count()).toEqual(fibN * 2 - 1);
  });
});


// La función de factoreo es distinta a la factorial, no nos confundamos

// En la función factores, buscamos obtener los mínimos denominadores del
// número pasado por parámetro osea los números primos divisores exactos
// del dicho número, si multiplicamos todos los mínimos denominadores el 
// resultado es el número en si.

// factores(4) = [2,2] / 2x2 = 4
// factores(18) = [2,3,3] / 2x3x3 = 18
describe('factores recursivo', function() {
  it('pasando un numero primo devuelve el mismo', function() {
    // fíjense que devuelve un arreglo de números
    expect(factores(3)).toEqual([3]);
    expect(factores(11)).toEqual([11]);
  });
  it('resuelve correctamente los factores de un número', function() {
    expect(factores(8)).toEqual([2,2,2]);
    expect(factores(18)).toEqual([2,3,3]);
  });
  it('todos los valores del arreglo son primos', function() {
    expect(factores(134)).toEqual([2,67]);
  });
  it('se invoca a si mismo', function() {
    // Necesario para una función recursiva
    spyOn(window, 'factores').and.callThrough();
    factores(2);
    expect(factores.calls.count()).toBeGreaterThan(1);
  });
});
