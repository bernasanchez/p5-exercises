// EJERCICIO 1 
// Par por diez: muestre por consola los números del 1 al 50 teniendo en cuenta que si el número es par hay que multiplicarlo por 10.
// Ejemplo de output:
// 1
// 20
// 3
// 40
// 5
// 60
// 7
// 80
// 9
// 100
// let i = 1
// let porDiez; 

//SOLUCION CON FOR Y WHILE 

// while(i <= 50){

//     if(i % 2 == 0){
//         porDiez = i * 10
//         console.log(porDiez)
//     }else{
//         console.log(i)
//     }

//     i++
// }

for(let i = 1; i <= 50; i++ ){
    let numPorDiez; 
    if(i % 2 === 0){
        numPorDiez = i*10
        console.log(numPorDiez)
    }else{
        console.log(i)
    }
}
