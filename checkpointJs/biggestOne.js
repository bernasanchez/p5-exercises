// The Biggest One
//1 Creá una función que reciba como parámetros dos números y una palabra.
//2 Si hay un número más grande que otro retorna el más alto. En caso de que sean iguales retorna la inicial y la última letra del tercer parámetro.
// biggestOne(16,2,"Haz") // 16
// biggestOne(3,3,"Haz") // Hz

// let num1 = 25;
// let num2 = 91;
// let palabra = 'berna';

// let biggest = ((num1, num2, palabra) => {
//     if(num1 > num2){
//         console.log(num1);
//         return num1
        
//     }else if(num2 > num1){
//         return num2
//     }else if(num1 == num2){
//         palabra.split('')
//         console.log(palabra[0])
//         console.log(palabra[palabra.length -1])
//     }
// }) 

// biggest(num1, num2, palabra);

//SOLUCION
function big(num1, num2, palabra){
    if(num1 > num2){
        console.log(num1);
        return num1
    }else if(num2 > num1){
        console.log(num2)
        return num2
    }else if(num1 == num2){
        palabra.split('')
        console.log(palabra[0])
        console.log(palabra[palabra.length -1])
    }
}

big(40, 40, 'berna')

//RESUELTO POR P5
function biggestOne(n1,n2,str){
    if(n1 > n2){
      return n1
    } else if(n2 > n1){
      return n2
    } else{
      return str[0] + str[str.length - 1]
    }
  }
  biggestOne(3,3,"Haz")