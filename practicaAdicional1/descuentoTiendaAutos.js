// 15. Descuento tienda de autos
// Declará una Función llamada descuento para una tienda de autos. La Función debe recibir como parámetro marca y modelo. Si el auto a la venta es un Ford Fiesta, el descuento es de un 5%. Si el auto a la venta es un Ford Focus, el descuento es del 10%.
// Ejemplo:
// descuento(“ford”,”fiesta”) //output: “5% de descuento”
// descuento(“ford”,”focus”) //output: “10% de descuento”

let descuento = (marca, modelo) => {

    if(marca === 'ford' && modelo === 'fiesta'){
        console.log('5% de descuento')
    }else{
        console.log('10% de descuento')
    }

}
descuento('ford', 'fiesta')
descuento('ford', 'focus')