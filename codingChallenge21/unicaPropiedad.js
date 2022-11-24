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
let oneProperty = ((arreglo, propiedad ) => {
    if(arreglo['name'] == propiedad['name']){
        console.log(arreglo)
    }

   
})
oneProperty(arreglo, propiedad);
