// Camino Al Oscar
//1 Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
//2 Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
//3 Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
//4 Creá un Objeto vacíó llamado peliculaPorActor.
//5 Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
//6 Adaptá tu código para que pueda haber más de una película por cada actor.
let actoresVocales = []
let actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher']

let peliculas = []

let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
}
//1 Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
let vocales = ["A", "E", "I", "O", "U"];
actoresPrincipales.forEach(actor => {
    let palabras = actor.split(" ");
    // console.log(palabras) DIVIDIMOS CADA NOMBRE EN DOS PALABRAS (CLAVE)
    let nombre = palabras[0];
    let apellido = palabras[1];
    if(vocales.includes(nombre[0]) || vocales.includes(apellido[0])){
        actoresVocales.push(actor);
    }
})
console.log('Actores con nombre o apellido con vocal: ', actoresVocales); 

//2 Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales y...
//3 Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
for(let propiedad in actoresPrincipalesPorPelicula){
    actoresPrincipales.push(actoresPrincipalesPorPelicula[propiedad]);
    peliculas.push(propiedad);
}
console.log('Total de actores de ambos arrays: ', actoresPrincipales); 
console.log('Array de peliculas ' , peliculas);

//4 Creá un Objeto vacíó llamado peliculaPorActor.
let peliculaPorActor = {}; 
//5 Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
for(let propiedad in actoresPrincipalesPorPelicula){
    let pelicula = propiedad;
    let actor = actoresPrincipalesPorPelicula[propiedad];
    peliculaPorActor[actor] = pelicula;
    //Para el punto 6 seria
    peliculaPorActor[actor] = [pelicula];
}
console.log('Peliculas por Actor: ', peliculaPorActor)
