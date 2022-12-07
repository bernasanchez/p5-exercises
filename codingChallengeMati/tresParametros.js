// Tres parámetros: Siguiendo con el ejercicio anterior, se pide crear una Función con 3 parámetros: num1, num2 y palabra. 
// Muestre por consola los números del 1 al 50 teniendo en cuenta que: 
// si el número es par hay que multiplicarlo por el primer parámetro;
// si es impar hay que dividirlo por el segundo parámetro y mostrar la palabra.


let parametros = (num1, num2, palabra) => {

    for(let i = 1; i <= 50; i++){
        let multiplicado; 
        let dividido; 
        if(i % 2 == 0){
            multiplicado = i*num1
            console.log(multiplicado)
        }else if(i % 2 == 1){
            dividido = i / num2
            console.log(dividido, palabra)
        }else{
            console.log(i)
        }
    }


}
parametros(10, 2, "P5")

// Ejemplo de output:
// fn (10, 2, "P5")
// /*
// 0.5 'P5'
// 20
// 1.5 'P5'
// 40
// 2.5 'P5'
// 60
// 3.5 'P5'
// 80
// 4.5 'P5'
// 100