// Cadena de Caracteres
// Creá una función llamada cadenaDeCaracteres que reciba un texto como parámetro. La función deberá generar un array donde cada palabra será un nuevo elemento (no debe contar los espacios).

// Posteriormente, deberá mostrar la siguiente información:

// Número de palabras.
// Primera palabra.
// Última palabra.
// Toda está información se deberá mostrar a través de console.log de manera independiente.

let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa"

let cadenaDeCaracteres = (texto) => {
    let arrayPalabras = [];
    arrayPalabras = texto.split(' ')
    console.log('Array Palabras: ',arrayPalabras)
    
    console.log('El texto contiene', arrayPalabras.length , 'palabras')  
    let primeraPalabra = arrayPalabras[0];
    console.log('Primera palabra:', primeraPalabra); 
    let ultimaPalabra = arrayPalabras[arrayPalabras.length - 1 ];
    console.log('Ultima palabra:',ultimaPalabra); 
}
cadenaDeCaracteres(texto);

//RESUELTO POR P5
const cadenaDeCaracteres2 = (texto) => {
  let newText = texto.split(" ");

  console.log(`El texto contiene ${newText.length} palabras`);

  console.log(`La primera palabra es ${newText[0]}`);

  console.log(`La última palabra es ${newText[newText.length - 1]}`);
}
cadenaDeCaracteres2(texto);