// Matemática Simple
// En este ejercicio deberás crear:

//1 Una función que se llame triplicador que tome un número como input (osea, como Parámetro) y retorne el triple de ese valor.
//2 Una función multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.
//3 Una función division que tome dos números como Parámetros y devuelva el resultado de dividir el primero por el segundo.
//4 Una función resto que tome dos números como Parámetros y devuelva el resultado del módulo del primero sobre el segundo.

// Por último, calculá el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3.
// ⚠️Importante: Usá solamente las funciones que escribiste antes, sin otros operadores.

function triplicador(num){
    return num *= 5
}
console.log( triplicador(3));

function multiplicador(num1, num2){
    return num1 * num2
}
console.log(multiplicador(2,4)); 

let division = (n1, n2) => {
    return n1 / n2
}
console.log(division(30, 5));

let resto = (numero1 , numero2) => {
    return numero1 % numero2
}
console.log(resto (10, 5)); 


