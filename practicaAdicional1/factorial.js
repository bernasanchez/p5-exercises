// 8. Factorial
// Creá una Función que pida al usuario un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
// Ejemplo:
// !5 = 5*4*3*2*1 = 120

let factorial = () => {
    let num = parseInt(prompt('Ingrese un numero entero mayor que 0'))
    while(!(num > 0)){
        num = parseInt(prompt('Ingrese un numero entero mayor que 0'))
    }

    let acc = 1 
    for(let i = 0; i < num; i++){
        acc +=  acc*i
        console.log(acc)
    }

}
factorial()


