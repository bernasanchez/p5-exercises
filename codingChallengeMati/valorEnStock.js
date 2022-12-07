// EJERCICIO 4
// Valor en stock: escribí una función valorStock que tome un arreglo de productos como parámetro.    La función debe devolver un nuevo arreglo con objetos que tengan el nombre de cada producto y el valor total del stock
// Ejemplo:

const productos = [
  { name: "Televisor", price: 100, stock: 50,},
  { name: "Computadora", price: 500, stock: 50 },
  { name: "Celular", price: 1000, stock: 10 },
];


let valorStock = (productos) => {
    let listaProductos = []
    for(let i = 0; i < productos.length; i++){
        let nombre = productos[i].name
        let precio = productos[i].stock * productos[i].price
        listaProductos.push(
            (`${nombre} ${precio}`)
        )
        console.log({nombre, precio})
        
       
    }    
    console.log(listaProductos)
} 
valorStock(productos);

// valorStock(productos); // Debe retornar
[
  { Televisor: 5000 },
  { Computadora: 25000 },
  { Celular: 10000 }
]