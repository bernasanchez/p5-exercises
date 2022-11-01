//Ejercicio FizzBuz Resuelto x BERNA
let i = 1;

while(i <= 100){
   
    if(i % 15 == 0){
        console.log('FizzBuzz')
        i++
    }else if(i % 5 == 0){
        console.log('Buzz')
        i++
    }else if(i % 3 == 0){
        console.log('Fizz')
        i++
    }else{
        console.log(i)
        i++
    }
}

//Ejercicio FizzBuz Resuelto x PROFES
// let i = 1;
// let final = 100;

// while (i <= 100) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// }


//EJEMPLO LOOPS ANIDADOS 
// let i = 1;
// let j = 1;
// let final = 5;

// while (i <= final) {
//   j = 1;
//   while (j <= final) {
//     console.log(i + " - " + j);
//     j++;
//   }
//   i++;
// }