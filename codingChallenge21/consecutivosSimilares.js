// 21. Consecutivos similares
// Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 
// Ejemplo: 
// consecutivosSimilares(“AAAA”) debe retornar 3
// consecutivosSimilares(“BBBBB”) debe retornar 4
// consecutivosSimilares(“ABABABAB”) debe retornar 0
// consecutivosSimilares(“BABABA”) debe retornar 0
// consecutivosSimilares(“AAABBB”) debe retornar 4

let consecutivosSimilares1 = (palabra) => {

    palabra = palabra.split('')
    let suma = []
    for(let i = 0; i < palabra.length; i++){
        // console.log(palabra[i])
        if(palabra[i] === palabra[i+1]){
            suma.push(palabra[i+1])
            console.log(suma)
        }
        
    }
    console.log(suma.length)

}
// consecutivosSimilares1('AAAA'); 
// consecutivosSimilares1('BBBBB'); 
// consecutivosSimilares('ABABABAB'); 
// consecutivosSimilares('“AAABBB”');

//RESOLUCION MARIANO
const consecutivosSimilares = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            count++;
        }
    }
    console.warn("21. Consecutivos similares");
    console.log(count);
}

consecutivosSimilares("AAAA");
consecutivosSimilares("BBBBB");