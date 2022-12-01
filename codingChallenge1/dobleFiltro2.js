// 4. Doble Filtro II
// Ahora, refactorizá la Función doubleFilter que recibirá los mismos tres parámetros pero, en vez de devolver un arreglo con los nombres de los países que cumplan con las condiciones, devolverá un Objeto:
// con una key ‘nombres’ que tendrá como valor un arreglo con los nombres de los países;
// y otra llamada ‘población total’ cuyo valor sea la suma de las poblaciones de los países filtrados.
// Ejemplo:

// doubleFilter (paises, "sudamerica", 30000000) 
// debe retornar 
// {nombres: ["argentina", "brasil"],
// población total: 340000000
// }

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
    let arrayPaises = []
    let objetoNuevo = {}
    for(let i = 0; i < paises.length; i++){
        if(paises[i]['continente'] === continente && paises[i]['poblacion'] >= poblacion){
            objetoNuevo['nombre'] = [paises[i]['nombre']]
            objetoNuevo['población total'] = paises[i]['poblacion']
        }
    }
    
    console.log(objetoNuevo)

}
doubleFilter(paises, 'sudamerica', 40000000)
// doubleFilter(paises, 'oceania', 8000000)
// doubleFilter(paises, 'asia', 8000000)

//SOLUCION MANO (USANDO MAP Y REDUCE)
const doubleFilter2 = (paises, continente, poblacion) => {
    let paisesFiltrados = paises.filter(pais => pais.continente === continente && pais.poblacion >= poblacion);
    let nombres = paisesFiltrados.map(pais => pais.nombre);
    let poblacionTotal = paisesFiltrados.reduce((acumulador, pais) => acumulador + pais.poblacion, 0);
    return {
        nombres,
        poblacionTotal
    }
}

console.warn('Doble Filtro II');
console.log(doubleFilter2(paises, "sudamerica", 30000000)); // {nombres: ["argentina", "brasil"], población total: 340000000}
console.log(doubleFilter2(paises, "asia", 30000000)); // {nombres: ["china", "tailandia", "vietnam"], población total: 156000000}