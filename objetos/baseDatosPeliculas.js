// Base De Datos De Películas
// En este ejercicio, deberás crear un Arreglo llamado películas, que tenga -por cada película- un Objeto con las siguientes Propiedades:
// titulo
// rating
// loHasVisto
// Usá un for loop para iterar sobre el Arreglo e imprimir un resultado en la consola que se vea como esto:
// Viste "Busqueda implacable" - 5 estrellas   
// No viste "Norbit" - 3 estrellas  
// Viste "Mini espías" - 2 estrellas  
// No viste "La vida es bella" - 5 estrellas

let peliculas = [
    {
        titulo: 'Busqueda implacable',
        rating: 5,
        loHasVisto: 'Viste'
    },
    {
        titulo: 'Norbit',
        rating: 3,
        loHasVisto: 'No Viste'
    },
    {
        titulo: 'Mini espías',
        rating: 2,
        loHasVisto: 'Viste'
    },
    {
        titulo: 'La vida es bella',
        rating: 5,
        loHasVisto: 'No Viste'
    }
];

peliculas.forEach(pelicula => {
    console.log(`${pelicula['loHasVisto']} "${pelicula['titulo']}" - ${pelicula['rating']} estrellas`)
});