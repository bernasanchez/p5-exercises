// 18. {value: key} kelue: vay
// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.
// 	Ejemplo:
// reverseKeys(344) debería devolver “error, input can’t be a number”
// reverseKeys([ ]) debería devolver “error, input can’t be an Array”
// reverseKeys(‘hola’) debería devolver “error, input can’t be a string”

// console.log(prueba['nombre'])
// reverseKeys(prueba) debería devolver:
// {
    // santi: ‘nombre’, 
    // edad: 22,
    // 'de otro planeta': nacionalidad,
    // documento: 44444444
    // }
    
let prueba = {
    nombre: 'santi',
    edad: 22,
    nacionalidad: 'de otro planeta',
    documento: 44444444
}
let reverseKeys = (obj) => {
    let nuevoObjeto = {}
    if( typeof(obj) !== 'object'){
        console.log('Error, input cant be a: ', typeof(obj))
    }else{
        for(let propiedad in obj){
            // console.log(typeof(obj[propiedad]))
           if(typeof obj[propiedad]  === 'string'){
                nuevoObjeto[obj[propiedad]] = propiedad;
           }else{
                nuevoObjeto[[propiedad]] = obj[propiedad];
           }
        }
    }
    console.log(nuevoObjeto)
}
reverseKeys(prueba)
// reverseKeys('hola')
// reverseKeys([])

