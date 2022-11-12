// Desafío + 27 🎂
// Tenemos un Arreglo de Objetos, donde cada uno representa a una persona. Usando .filter(), creá un nuevo Arreglo con las personas que tengan más de 27 años.
// console.log(personasConMasDe27);
// [{ nombre: 'Ana', edad: '28' }, { nombre: 'José', edad: '31' }]
let personas = [ 
    { nombre: 'Ana', edad: '28'},
    { nombre: 'María', edad: '24' }, 
    { nombre: 'José', edad: '31' },
];

let personasConMasDe27 = personas.filter(function(persona){
    if(persona['edad'] >= 27){
        console.log(persona)
        return persona; 
    }else{
        console.log('Los menores de 27 son: ', persona['nombre']); 
    }
}); 
console.log('Las mayores de 27 son: ', personasConMasDe27);
