// 2. Filterlist
// Crea una Función llamada filterList() que tome como argumento un Arreglo de strings y números. La Función debe retornar un nuevo Arreglo sólo con los números. Si el Arreglo filtrado no posee números, tendrá que retornar el siguiente mensaje: "lista de números vacía". En este caso, no se puede usar el método filter().
// Ejemplos:
// filterList([1,2, "a, "b]) ==> [1, 2]
// filterList([1, "a", "b", 0, 15]) ==> [1,0,15]
// filterList(["x", "y", "z"]) ==> "lista de números vacía"

let array = [1, 2,'a','b'];

let filterList = (array) => {
    let listaNum = []
    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) === 'number'){
            listaNum.push(array[i])
        }else{
            console.log('Lista de numeros vacía')
        }
    }
    console.log('Los numeros son: ',listaNum)
}
filterList(array)
filterList([1, "a", "b", 0, 15])
filterList(["x", "y", "z"])

