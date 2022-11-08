// Poema Desordenado
// En este ejercicio deberás ordenar el poema del Martín Fierro. En una parte dice:
// "Los hermanos sean unidos porque ésa es la ley primera, tengan unión verdadera, en cualquier tiempo que sea, porque si entre ellos se pelean los devoran los de ajuera"
let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos"

//1 Usá .split(' ') en poemaDesordenado y guardalo en un Arreglo llamado arregloDesordenado.
let arregloDesordenado = poemaDesordenado.split(' ');
console.log(arregloDesordenado);

//2 Instanciá un nuevo Arreglo llamado arregloOrdenado.
let arregloOrdenado = []; 

//3 Mientras que el largo de arregloDesordenado sea mayor que 0, sacá el primer y el último elemento y guardalo en arregloOrdenado.
while(arregloDesordenado.length > 0){
    arregloOrdenado.push(arregloDesordenado.shift()); //Los - Primer elemento
    arregloOrdenado.push(arregloDesordenado.pop()); //hermanos - Ultimo elemento
}
console.log('El arreglo ordenado es: ', arregloOrdenado)

// 👩‍🏫 ¿Cómo sería la condición si usaras un for loop o un while loop?

//4 Creá la Variable poemaOrdenado y dale el valor de un String usando arregloOrdenado y el método .join(' ').
let poemaOrdenado = console.log(arregloOrdenado.join(' ')); //join pasa a string los valores de un arreglo 