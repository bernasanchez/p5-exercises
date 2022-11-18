// Promedio de Estudiantes
// Deberás crear una función llamada promedio que reciba un array de objetos de alumnos y un estado (aprobado y desaprobado). La función calculará el promedio de cada estudiante y filtrará sólo a los alumnos con el estado pasado por parámetro.
// Es decir, devolverá un nuevo array de objetos:

//1 Con una key de tipo nombre completo, donde esté su nombre y apellido.
//2 Otra de tipo estado que diga aprobado o desaprobado.
//3 Y una última donde esté su promedio.
let alumnos = [
    {
      nombre: "Mariano Damian",
      apellido: "Hernandez",
      notas: [8, 7, 9, 10, 6],
    },
    {
      nombre: "Ramiro",
      apellido: "Diaz",
      notas: [1, 3, 8, 2, 1],
    },
    {
      nombre: "Ana",
      apellido: "Armella",
      notas: [5, 7, 9, 4, 2],
    },
    {
      nombre: "Romina",
      apellido: "Almeda",
      notas: [10, 6, 7, 5, 9],
    },
    {
      nombre: "Denis",
      apellido: "Tolaba",
      notas: [10, 10, 9, 9, 10],
    },
    {
      nombre: "Hugo",
      apellido: "Castellano",
      notas: [2, 3, 3, 6, 1],
    },
    {
      nombre: "Analia Daiana",
      apellido: "Fonseca",
      notas: [4, 3, 4, 5, 2],
    },
    {
      nombre: "Francisco Daniel",
      apellido: "Samir",
      notas: [5, 5, 6, 4, 2],
    },
]

// function promedio(alumnos){
//     // let i = 0;
//     // let listaFinal = []
//     // while(i < alumnos.length){
//     //     let nombreCompleto = [alumnos[i]['nombre'] + ' ' + alumnos[i]['apellido']]
//     //     i++
//     //     listaFinal.push(nombreCompleto);
//     //     console.log(listaFinal); 
//     // }
//   //   let listaFinal = []
//   // for(let i = 0; i < alumnos.length; i++){
    
//   //   listaFinal.nombreCompleto = alumnos[i]['nombre'] + ' ' + alumnos[i]['apellido']
//   //   let promedio = alumnos[i]['notas'].reduce((total, nota) => total + nota, 0)
//   //   listaFinal.promedio = promedio / alumnos[i]['notas'].length
//   //   listaFinal.estado = (function(promedio){
//   //     if(promedio < 6){
//   //       listaFinal.estado = 'desaprobado'
//   //     }
//   //     return listaFinal.estado
//   //   })

//   // }
//   // console.log(listaFinal)
//   let listaFinal = []
//   alumnos.forEach((alumno, i) => {
//     listaFinal.nombreCompleto = alumno['nombre'] + ' ' + alumno['apellido']
//   });
//   console.log(listaFinal)


// }
// promedio(alumnos)


//RESUELTO POR P5
function promedio(array, estado) {
  let newArray = [];

  array.forEach((element) => {
    let notas = element.notas;
    let i = 0;

    notas.map((e) => (i += e));

    let promedio = i / notas.length;

    let objeto = {
      nombreCompleto: `${element.nombre} ${element.apellido}`,
      promedio: Math.round(promedio),
    };

    objeto.promedio > 5
      ? (objeto.estado = "aprobado")
      : (objeto.estado = "desaprobado");

    if (objeto.estado == estado) 
    newArray.push(objeto);
  });

  return newArray;
}

console.log(promedio(alumnos, "desaprobado")) 
