// 19. Palíndromo
// Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.
// Ejemplo: 
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

let palindromo = (palabra) => {
    
    let palabra2 = palabra.split('').reverse()
    palabra2 = palabra2.join('')

    if(palabra === palabra2){ //Tiene que ser estrictamente igual
        console.log('las palabras son palindromos')
        return true
    }else{
        console.log('las palabras no son palindromos')
        return false
    }
    
}
palindromo('ana'); 
palindromo("anilina");
palindromo("enrique")