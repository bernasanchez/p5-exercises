// 11. Arreglos
// Investigá los siguientes métodos de los arreglos y replicá su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
// 1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
// 2. “pop([1,2,3,4,5])” debe retornar 5
// 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
// 4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]

// 1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
let array = [1,2,3,4,5];
let nuevoArray; 
let logicaJoin = ((array) => {
    nuevoArray = '';
    array.forEach(elem => {
       nuevoArray += (`${elem} `)
    });
    console.log(nuevoArray);
    return nuevoArray;

})
// logicaJoin(array);
// console.log(nuevoArray)

// 2. “pop([1,2,3,4,5])” debe retornar 5
let array2 = [1,2,3,4,5];
// console.log(array2.length)
let ultimoNum;
let logicaPop = ((array2) => {
    ultimoNum = array2.slice(array2.length -1 )
    // console.log(ultimoNum)
    return ultimoNum;
})
// logicaPop(array2);
// console.log('Resultado metodo POP',ultimoNum)

// 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
let array3 = [1,2,3,4,5];
let pares = []
let logicaFilter = ((array3) => {
    for(let i = 0; i < array3.length; i++){
        if(array3[i] % 2 === 0){
            pares.push(array3[i])
        }
    }
    return pares; 

})
// logicaFilter(array3);
// console.log('Los numeros pares son: ',pares);

// 4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]
let array4 = [1,2,3,4,5]
let dobles = [];
let logicaMap = ((array4) => {
    array4.forEach((num) =>{
        dobles.push(num * 10);
        // console.log(dobles)
    })
    return dobles;

})
// logicaMap(array4)
// console.log(dobles)
