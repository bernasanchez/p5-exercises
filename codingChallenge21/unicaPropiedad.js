// 15. Única propiedad
// Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como propiedad al string pasado como parámetro. 

// Ejemplo: 
//  var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
// oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
// oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]

let arreglo = [ 
    { name: 'lucas', edad: 20 }, 
    { name: 'santi', edad: 22 } 
]

let nuevoArreglo = [];
let propiedad = 'name'
let oneProperty = (arreglo, propiedad ) => {
    // console.log(propiedad); 
    for(let i = 0; i < arreglo.length; i++){
        nuevoArreglo.push(
            {[propiedad]: arreglo[i][`${propiedad}`] }
        )
    }
}
oneProperty(arreglo, propiedad);
console.log('Arreglo con una propiedad: ',nuevoArreglo); 
