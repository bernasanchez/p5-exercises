describe('Función `saludar`', function() {
  // La función saludar la tenemos que definir nosotros en nuestro archivo test.js
  // tiene que poder superar los test planteados a continuación.
  it('Debería saludar', function() {
    // En este `spec` o test pedimos que al llamar a la función `saludar`
    // el resultado sea igual (.toEqual) al string 'Hola!', osea que retorne 'Hola!'.
    expect(saludar()).toEqual('Hola!');
  });

  it('Si recibe un parámetro debería saludar a alguien', function() {
    expect(saludar('Toni')).toEqual("Hola, Toni!");
  });
});

describe('Función `sumar`', function(){

  var valor = 0;
  // La función `beforeEach` se llama una vez antes de cada unit test.
  // Los "unit tests" o "tests" empiezan con la función "it".
  beforeEach(function(){
    valor = 0;
  });

  it('sumando 4 y 5, debería dar 9', function(){

    // También podemos realizar acciones antes de la comparación final
    valor += sumar(4, 5);
    expect(valor).toEqual(9);
  });

  it('sumando 7 y 8, debería dar 15', function(){
    
    valor += sumar(7, 8);
    expect(valor).toEqual(15);
  });
})
