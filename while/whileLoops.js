//Ejercicio 1 Todos los números entre -10 y 19.
let i = -10; 
while(i <= 19){
    console.log(i);
    i++
};

//Ejercicio 2: Todos los números pares entre 10 y 40.
let num = 10;
while(num <= 40){
    if(num % 2 == 0){
        console.log(num);
    } 
    num++
}

//Ejercicio 3: Todos los números impares entre 300 y 333.
let numImpar = 300;
while(numImpar <= 333){
    if(numImpar % 2 == 1){
        console.log(numImpar)
    }
    numImpar++
}; 

//Ejercicio 4: Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.
let numDivisible = 5;

while (numDivisible <= 50) {
    if(numDivisible % 3 == 0 && numDivisible % 5 == 0){
        console.log('Divisibles por 3 y 5: '+ numDivisible);
    }
    numDivisible++
}