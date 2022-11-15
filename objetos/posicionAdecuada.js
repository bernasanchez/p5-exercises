// Posición Adecuada (RESUELTO POR P5 PERO NO FUNCIONA)
// Tenés un array de objetos con el nombre y la edad de distintas personas. Este arreglo debe ser ordenado agregando una propiedad llamada posicion. Esta propiedad ubica a las personas en su posición adecuada, de menor a mayor.
//Desordenado 
// [ { nombre: "Alba", edad: 15 },
//   { nombre: "Estrella", edad: 30 },
//   { nombre: "Belen", edad: 20 },
//   { nombre: "Santiago", edad: 4 },
//   { nombre: "Katherine", edad: 55 }]
//Solucion 
// [ { nombre: 'Santiago', edad: 4, posicion: 0 },
//   { nombre: 'Alba', edad: 15, posicion: 1 },
//   { nombre: 'Belen', edad: 20, posicion: 2 },
//   { nombre: 'Estrella', edad: 30, posicion: 3 },
//   { nombre: 'Katherine', edad: 55, posicion: 4 }]

let arrayInput =
    [{ "nombre": "Alba", "edad": 15 },
    { "nombre": "Estrella", "edad": 30 },
    { "nombre": "Belen", "edad": 20 },
    { "nombre": "Santiago", "edad": 4 },
    { "nombre": "Katherine", "edad": 55 }]


const posicionAdecuada = (personas) => {
    let personasConIndice = [];

    let i = 0
    while (personas.length) {
      let menorPersona = personas[i];
      for (let j = 0; j < personas.length; j++) {
        if (menorPersona.edad > personas[j].edad) {
          menorPersona = personas[j];
        }
      }
      // elimino el elemento de personas, obteniendo su indice en el arreglo
      personas.splice(personas.indexOf(menorPersona), 1);
      menorPersona.posicion = personasConIndice.length;
      personasConIndice.push(menorPersona);
    }

    return personasConIndice
}

//test
posicionAdecuada(arrayInput);
console.log(arrayInput); 