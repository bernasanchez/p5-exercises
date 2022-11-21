// 3. Sumatoria
// 	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

// Ejemplo: 
// sumattion(3) debe retornar 6 porque hace (1 +2 +3)
// sumattion(8) debe retornar 36

let i = 0; //variable inicio
let final = 10; //variable corte
let acc = 0; //acumulador 

//Usamos while para que mientras i sea menor que final, vaya sumando el accumulador 
let sumattion = ((final) => {
    while(i <= final){
        acc += i
        i++
        console.log(i)
    }
    console.log(acc)
    return acc
    
}); 

console.log(sumattion(final)) 