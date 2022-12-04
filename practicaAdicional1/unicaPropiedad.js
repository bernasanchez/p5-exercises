// 11. Única propiedad
// Creá una Función llamada oneProperty que reciba un Arreglo de Objetos como parámetro y un string. Deberá retornar un nuevo Arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string.
// Ejemplo:
// var arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ] 
// oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ] 
// oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]

let arreglo = [ { name: 'lucas', edad: 20 }, { name: 'santi', edad: 22 } ] 

let oneProperty = (arreglo, propiedad) => {
    let arregloNuevo = []
    for(let i = 0; i < arreglo.length; i++){
        arregloNuevo.push(
            {[propiedad] : arreglo[i][propiedad]}
        )
    }
    console.log(arregloNuevo)
}
oneProperty(arreglo, 'name'); 
oneProperty(arreglo, 'edad'); 