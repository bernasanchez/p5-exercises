// Números Duplicados
// Veamos el siguiente código:
// let numeros = [2, 4, 5, 37, 0]
// let numeros_duplicados = {} 
// // Después debería quedar así { 0: 0, 2: 4, 4: 8, 5: 10, 37: 74}

//1 Recorré el Arreglo numeros y poné cada número (2, 4, 5, 37, 0) como una Propiedad del Objeto numeros_duplicados. 
//2 El Valor de cada Propiedad deberá ser ese número multiplicado por dos.

let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};

numeros.forEach((num) => { //A cada num del array numeros 
    numeros_duplicados[num] = num*2 
    //1 Le asigno el param (num) como propiedad del objeto y 
    //2 luego a esa propiedad le doy el valor num*2, osea el doble del valor 
})
console.log('Los numeros duplicados son: ',numeros_duplicados);

//RESUELTO POR P5 
//CONCEPTOS IMPORTANTES: Como completamos un objeto desde x parametros?
//1° Poner el nombre de tu objeto, ej. numeros_duplicados
//2° Dentro del objeto(poner []): numeros_duplicados[queQuieroEnLaKey]
//3° A la derecha (=): queQuieroEnValue. Ej n_dupli[num[i]] = num*2

for(let i = 0; i < numeros.length; i++){
    numeros_duplicados[numeros[i]] = numeros[i]*2 
}
console.log('Duplicados con For Loop ', numeros_duplicados);