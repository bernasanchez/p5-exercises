// 16. Guerra de palabras
//  Utils: 
//  var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
// Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).
// Ejemplo:
// warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
// warWord(“love”, “friendship”) debe retornar “friendship”

let abc = {
    a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,
    k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,
    s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26
}


//1° Sumar el valor de la palabra
//2° Comparar ambos valores y sacar la ganadora
let warWord = (palabra1, palabra2) => {
    // palabra1 = palabra1.split('')
    // console.log(palabra1)
    let suma1 = 0
    for(let i = 0; i < palabra1.length; i++){
        // console.log(abc[palabra1[i]])
        suma1 += abc[palabra1[i]]
        // console.log('Total Palabra 1: ',suma1)
    }
    let suma2 = 0
    for(let i = 0; i < palabra2.length; i++){
        // console.log(abc[palabra2[i]])
        suma2 += abc[palabra2[i]]
        // console.log('Total Palabra 2: ',suma2)
    }
    if(suma1 > suma2){
        console.log('La palabra ganadora es: ',palabra1)
    }else{
        console.log('La palabra ganadora es: ',palabra2)
    }

}
warWord('hola','chau')
warWord('love','friendship')