// Aumentar La Nota
// Tenés una lista de estudiantes con su desempeño académico actual. Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.
let estudiantes = [
    { Estudiante: "Juan", nota: 6 },
    { Estudiante: "Mario", nota: 8 },
    { Estudiante: "Julia", nota: 10 },
    { Estudiante: "Sofia", nota: 2 }
]

let notaFinal = estudiantes.map((estudiante, index) => {
    // console.log(`${index}: ${[estudiante['nota']]}`); 
    
    if(estudiante['nota'] < 6){
        console.log(`${estudiante['Estudiante']}: estas desaprobado/a`)
    }else if(estudiante['nota'] >= 5 && estudiante['nota'] < 10) {
        estudiante['nota'] += 2;
    }else{
        console.log(`${estudiante['Estudiante']}: Felicitaciones!!`)
    }
    return estudiante; 
})

console.log(notaFinal)



