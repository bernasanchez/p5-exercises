// 5. Doble Filtro III
// En esta oportunidad, la Función doubleFilter debe retornar un Objeto que, además de tener las keys "nombres" y "población total", tenga una key "mayor" y una "menor" en la que guarde el nombre de los países con mayor y menor población respectivamente.

// Ejemplo:

// doubleFilter(paises, "sudamerica", 30000000) 
// //debe retornar 
// {
// nombres: ["argentina", "brasil"] ,
// población total: 340000000,
// mayor: ‘brasil’,
// menor: ‘argentina’
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
// Solución:
const doubleFilter3 = (paises, continente, poblacion) => {
    let paisesFiltrados = paises.filter(pais => pais.continente === continente && pais.poblacion >= poblacion);
    let nombres = paisesFiltrados.map(pais => pais.nombre);
    let poblacionTotal = paisesFiltrados.reduce((acumulador, pais) => acumulador + pais.poblacion, 0);
    let mayor = paisesFiltrados.reduce((mayor, pais) => mayor.poblacion > pais.poblacion ? mayor : pais);
    let menor = paisesFiltrados.reduce((menor, pais) => menor.poblacion < pais.poblacion ? menor : pais);
    return {
        nombres,
        poblacionTotal,
        mayor: mayor.nombre,
        menor: menor.nombre
    }
}

console.warn('Doble Filtro III');
console.log(doubleFilter3(paises, "sudamerica", 30000000)); // {nombres: ["argentina", "brasil"], población total: 340000000, mayor: "brasil", menor: "argentina"}
console.log(doubleFilter3(paises, "asia", 30000000)); // {nombres: ["china", "tailandia", "vietnam"], población total: 156000000, mayor: "china", menor: "vietnam"}