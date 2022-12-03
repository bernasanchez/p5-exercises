// 5. Números Narcisistas
// Creá una función para determinar si un número es narcisista. Un número narcisista es aquél que es igual a la suma de cada uno de sus dígitos elevados a la “n” potencia (donde “n” es el número de cifras del número).
// Ejemplo 1: 153 es un número narcisista ya que 1 elevado a 3 + 5 elevado a 3 + 3 elevado a 3 = 1 + 125 + 27 = 153.

// Ejemplo 2:
// Test: 371
// Output: True
// Test: 369
// Output: False

let narcisista = (num) => {
    num =  num.toString().split('')
    console.log(num)
    
    let potencia = []
    for(let i = 0; i < num.length; i++){
        potencia.push(Math.pow(num[i], 3))
    }
    potencia = potencia.reduce((acc, item) => acc + item, 0)
    console.log(potencia)
    num = parseInt(num.join(''))

    if(potencia === num){
        console.log('Es un numero Narcicista')
        return true
    }else{
        console.log('No es un numero Narcicista')
        return false
    }
       
}
narcisista(369)