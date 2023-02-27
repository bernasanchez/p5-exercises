
// En este modulo vamos a usar los conceptos Programacion Funcional para crear
// funciones que iteren sobre distintas colecciones.

// La función `map` toma un Arreglo y realiza una función para cada uno de sus
// elementos, devolviendo un nuevo arreglo con cada elemento transformado.
describe("La función map", function() {

  beforeEach(function() {
    // Primero nos aseguramos de que no usen la función map de JavaScript.
    spyOn(Array.prototype, 'map').and.callThrough();
  });


  it('creamos una función que tome un elemento y devuelva el doble.', function () {
    expect(duplicar(15)).toEqual(30);
  });
  // Ahora usamos nuestra función `duplicar` sobre un arreglo usando nuestra
  // implementación de `map`.

  it("toma la función duplicar y la aplica para el arreglo", function() {
    expect(map([1, 2, 3], duplicar)).toEqual([2, 4, 6]);
  });

  it("también toma una función triplicar", function() {
    // Acá creamos una función anónima que podemos pasar directamente como parámetro.
    expect(map([1, 2, 3], function(elem) {
      return elem * 3;
    })).toEqual([3, 6, 9]);
  });

  it('No debería usar Array.prototype.map', function () {
    map([1, 2, 3], duplicar);
    expect(Array.prototype.map.calls.any()).toEqual(false)
  });
});


// `filter` toma un arreglo y una función y filtra el arreglo de acuerdo a dicha función.
// Si la función pasada devuelve `true` para un elemento nos vamos a quedar con ese valor,
// si no, lo descartamos.
describe("La funcón filter", function() {

  beforeEach(function() {
    spyOn(Array.prototype, 'filter').and.callThrough();
  });

  // `filtroPar` devuelve `true` si el valor es par.
  var filtroPar = function(element) {
    return (element % 2 === 0)
  };
  
  // `filtroImpar` devuelve `true` si el numero es impar
  var filtroImpar = function(element) {
      return !filtroPar(element);
    };

  it("Filtra un arreglo por sus pares", function() {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], filtroPar)).toEqual([2, 4, 6, 8]);
  });

  it("Filtra un arreglo por sus impares", function() {

    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], filtroImpar)).toEqual([1, 3, 5, 7]);
  });

  it('No debería usar Array.prototype.filter', function () {
    filter([1, 2, 3, 4, 5, 6, 7, 8], filtroImpar);
    expect(Array.prototype.filter.calls.any()).toEqual(false)
  });
});

// `contains` se fija que la colección tenga un elemento que concuerde con el pasado por parámetro
describe("La función contains", function() {
  it("debería devolver `true` si la colección contiene el valor pedido", function() {
    expect(contains([1, 2, 3], 2)).toEqual(true);
    // Como conseguíamos los valores de un Objeto?
    expect(contains({
      moe: 1,
      larry: 3,
      curly: 9
    }, 3)).toEqual(true);
  });

  it("debería devolver `false` si la colección no tiene el valor pedido", function() {
    expect(contains([1, 3, 9], 2)).toEqual(false);
  });
});

describe("la función `cuentaPalabras` (para usar mas adelante)", function() {
  it("Cuenta las palabras separadas por espacios de una oración", function() {
    expect(cuentaPalabras("esta frase tiene 5 palabras")).toEqual(5);
  });
});

// Reduce recibe un Arreglo y combina los valores de este en un solo valor
// final, de acuerdo a la función pasada por parámetro.
describe("La función reduce", function() {
  var palabras;
  beforeEach(function() {
    // No usen la función reduce de JavaScript
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  it("Puede sumar todo un arreglo", function() {
    var suma = function(a, b) {
      return a + b;
    };
    // Reduce toma el Arreglo y un valor inicial, y los combina con una función
    expect(reduce([3, 5, 7], 0, suma)).toEqual(15);
  });

  it("La suma empieza a partir del valor inicial", function() {
    var multiplicacion = function(a, b) {
      return a * b;
    };
    expect(reduce([3, 5, 2], 2, multiplicacion)).toEqual(60);
  });

  it("Puede contar el numero de palabras que hay en todo el Arreglo", function() {
    palabras = ["esta es la linea 1", "y acá hay otra linea más"];
    // La función cuentaPalabrasReduce la tienen que armar ustedes, se imaginan
    // que otra función tienen que usar ahí?
    expect(reduce(palabras, 0, cuentaPalabrasReduce)).toEqual(11);
  });

  it('No debería usar Array.prototype.reduce', function () {
    reduce(palabras, 0, cuentaPalabrasReduce);
    expect(Array.prototype.reduce.calls.any()).toEqual(false)
  });


});

// Usemos reduce dentro de una función `suma` que tome un array de enteros
describe("La función suma", function() {
  it("Usa reduce para sumar los números del arreglo", function() {
    spyOn(window, 'reduce').and.callThrough();
    expect(suma([1, 2, 3])).toEqual(6);
    expect(reduce).toHaveBeenCalled();
  });
});


// Veamos un par de funciones para pensar.
// La función `every` y la función `any` sirven para evaluar un Arreglo y llevarlo
// a una respuesta `true` o `false`.
describe("La función every", function() {
  // `every` aplica la función que pase por parámetro a cada uno de los elementos del arreglo,
  // si cada iteración retorna `true`, `every` retornará `true`, con que una sola iteración retorne `false`
  // entonces `every` retornará false.

  // Usen la función reduce que implementamos antes.
  beforeEach(function() {
    spyOn(Array.prototype, 'every').and.callThrough();
    spyOn(window, 'reduce').and.callThrough();
  });

  var esPar = function(num) {
    return num % 2 === 0;
  };

  var pasarValor = function(i) {
    return i;
  };

  it("Debería poder manejar arreglos vacíos", function() {
    // Esto no vas a dar una pista de cual debe ser el valor por defecto.
    expect(every([], pasarValor)).toEqual(true);
  });

  it("Debería devolver `true` si todos los valores son pares", function() {
    expect(every([0, 10, 28], esPar)).toEqual(true);
  });

  it("Debería devolver `false` si hay aunque sea un valor impar", function() {
    expect(every([0, 11, 28], esPar)).toEqual(false);
  });

  it('No debería usar Array.prototype.every', function () {
    every([1,2,3], esPar);
    expect(Array.prototype.every.calls.any()).toEqual(false)
  });

  it('Debería re-usar la función reduce que creamos antes', function(){
    every([0, 10, 28], esPar)
    expect(reduce).toHaveBeenCalled();
  });
});

describe("La función any", function() {
  // La función `any` en contraposición a `every` retornara `true` si tan solo una de las iteraciones
  // retornara true, y solo retornara `false` si todas las iteraciones retornaran `false`.
  beforeEach(function() {
    spyOn(window, 'reduce').and.callThrough();
  });

  var esPar = function(number) {
    return number % 2 === 0;
  };

  it("Debería poder manejar arreglos vacíos", function() {
    expect(any([])).toEqual(false);
  });

  it("Debería devolver `false` si ningún valor es par", function() {
    expect(any([1, 11, 29], esPar)).toEqual(false);
  });

  it("Debería devolver `true` si aunque sea un valor es par", function() {
    expect(any([1, 10, 29], esPar)).toEqual(true);
  });

  it('Debería re-usar la función reduce que creamos antes', function(){
    any([0, 10, 28], esPar)
    expect(reduce).toHaveBeenCalled();
  });

});
