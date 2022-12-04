// 6. Gravity Flip
// Creá una Función llamada flip que reciba como primer parámetro un string (“ascendente” o “descendente”) y como segundo parámetro un Arreglo numérico desordenado. Además, la Función debería ordenar y retornar el Arreglo de acuerdo a la condición recibida por parámetro.
// Ejemplos:
// flip('ascendente', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
// flip('descendente', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]

let flip = (str, array) => {

    if(str === 'ascendente'){
        let ordenar = array.sort((a, b) => a - b)
        console.log(ordenar)
    }else if(str === 'descendente'){
        let ordenar = array.sort((a, b) => b - a)
        console.log(ordenar)
    }else{
        console.log('Debe ingresar un array')
    }

}
flip('ascendente', [3, 2, 1, 2]);
flip('descendente', [1, 4, 5, 3, 5])