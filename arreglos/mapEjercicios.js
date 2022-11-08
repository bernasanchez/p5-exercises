//Ejercicio 1
// Tenemos un arreglo de números en la variable numbers y deberás crear uno nuevo que contenga el doble de cada número, usando .map().
let numbers = [3, 7, 13, 99];
// CODEA LA SOLUCIÓN 
let dobles = numbers.map(num => num * 2)

console.log('Array original ', numbers); // [3, 7, 13, 99]
console.log('Dobles con Map: ', dobles); // [6, 14, 26, 198]

// Ejercicio 2
// Tenemos un arreglo en la variable frases con varias sentencias al azar. Usá la función map() para que cada frase empiece y termine con signos de exclamación.
let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// CODEA LA SOLUCIÓN
let frasesExclamadas = frases.map(frase => `¡${frase}!`);

console.log('Array original ' ,frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log('Array con signos ' ,frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]