// 🚀Software Factory
// Pensemos que somos una software factory (empresa de desarrollo) y tenemos un cliente que tiene varios artículos de tecnología. Este cliente nos plantea dos necesidades para su negocio:
//1 Conocer el valor total de cada artículo según sus cantidades (es decir, cuál es el valor total de todos sus televisores, por ejemplo).
//2 Imprimir una lista que separe cada artículo con su respectiva suma total de valores en sus respectivos Objetos.

// ¿Cómo realizar estos pedidos?
// Crearás una nueva Función, en la cual su argumento haga referencia a un Arreglo de productos del ecommerce (el cual nuestro cliente ya nos brinda).
let ecommerce = [
    {nombre: "Samsung TV", precio: 6000, articulos:10}, 
    {nombre: "DELL notebook", precio: 4000, articulos:30 },
    {nombre:"Auriculares Sony", precio: 1500, articulos:15},
    {nombre:"Monitor Philips", precio:12000, articulos:20},
    {nombre:"Teclado logitech", precio: 3000, articulos:5}
]
// {Samsung TV: 60000}
// {DELL notebook: 120000}
// {Auriculares Sony: 22500}
// {Monitor Philips: 240000}
// {Teclado logitech: 15000}


const calcularMontoTotal = (ecommerce) => ecommerce.precio * ecommerce.articulos

const listarProductosTotal = (ecommerce) => {
    // console.log(ecommerce);
    let productosDetalleTotal = []
    
    for (producto of ecommerce) {
        productosDetalleTotal.push({[producto.nombre] : calcularMontoTotal(producto)})
    }

    console.log(productosDetalleTotal); 
    return productosDetalleTotal

}

listarProductosTotal(ecommerce)



