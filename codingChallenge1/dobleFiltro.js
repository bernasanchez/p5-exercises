// 3. Doble Filtro
// Creá una Función llamada doubleFilter que reciba como parámetro un Arreglo de Objetos, un continente, y un número de población. La Función filtra el Arreglo solo con los países que sean del continente pasado por parámetro, y además, los que su población sea mayor o igual a la del último parámetro.

// Deberá devolver un Arreglo con los nombres de los países de los objetos que cumplan con la condición.
// /Utils:
let paises = [
    {
         nombre: "argentina",
         continente: "sudamerica",
         poblacion: 40000000
    },
    {
             nombre: "brasil",
         continente: "sudamerica",
         poblacion: 300000000
    },
    {
        nombre: "venezuela",
    continente: "sudamerica",
    poblacion: 25000000
    },
    {
        nombre: "chile",
    continente: "sudamerica",
    poblacion: 10000000
    },
    {
        nombre: "australia",
    continente: "oceania",
    poblacion: 18000000
    },
    {
        nombre: "nueva zelanda",
    continente: "oceania",
    poblacion: 8000000
    },
    {
        nombre: "china",
    continente: "asia",
    poblacion: 1000000000
    },
    {
        nombre: "tailandia",
    continente: "asia",
    poblacion: 32000000
    },
    {
        nombre: "vietnam",
    continente: "asia",
    poblacion: 23000000
    },
    {
        nombre:"españa",
    continente: "europa",
    poblacion: 29000000
    },
    {
        nombre: "alemania",
    continente: "europa",
    poblacion: 33000000
    },
    {
        nombre: "francia",
    continente: "europa",
    poblacion: 65000000
    },
    {
        nombre: "portugal",
    continente: "europa",
    poblacion: 4000000
    },
    {
        nombre: "grecia",
    continente: "europa",
    poblacion: 12000000
    },
]
let continente = 'sudamerica'

let doubleFilter = (paises, continente, poblacion) => {
    let arrayNuevo = []
    for(let i = 0; i < paises.length; i++){
        if(paises[i]['continente'] === continente && paises[i]['poblacion'] >= poblacion){
            arrayNuevo.push(paises[i]['nombre'])
        }
    }
    console.log(arrayNuevo)

}
doubleFilter(paises, 'sudamerica', 40000000)
doubleFilter(paises, 'oceania', 8000000)
doubleFilter(paises, 'asia', 8000000)

// Solución  MANO (Usando Filter y Map):
const doubleFilter2 = (arr, continente, poblacion) => {
    let paisesFiltrados = arr.filter((pais) => {
        return pais.continente === continente && pais.poblacion >= poblacion;
    });
    return paisesFiltrados.map((pais) => pais.nombre);
}

console.warn('Doble Filtro');
console.log(doubleFilter2(paises, "sudamerica", 30000000)); // ["argentina", "brasil"]
console.log(doubleFilter2(paises, "asia", 30000000)); // ["china", "tailandia", "vietnam"]
console.log(doubleFilter2(paises, "europa", 30000000)); // ["españa", "alemania", "francia", "grecia"]










// let doubleFilter = (paises, continente, poblacion) => {
//     let arregloPaises = [];
   
//    arregloPaises = paises.filter(pais => pais['continente'] == 'sudamerica')
//    console.log(arregloPaises)

//    arregloPaises = arregloPaises.filter(paises => paises['poblacion'] <= poblacion )
//     console.log(arregloPaises)
// }
// doubleFilter(paises, 'sudamerica' , 40000000 )




