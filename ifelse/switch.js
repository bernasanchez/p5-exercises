//Ejercicio 1: Traductor de palabras
let palabra = prompt('Ingrese una palabra').toLocaleLowerCase(); 
switch (palabra) {
    case 'casa':
        console.log('Casa = Home')
        break;
    case 'perro':
        console.log('Perro = Dog')
        break;
    case 'pelota':
        console.log('Pelota = Ball')
        break;
    case 'casa':
        console.log('Casa = Home')
        break;
    case 'arbol':
        console.log('Arbol = Tree')
        break;
    case 'genio':
        console.log('Genio = Genius')
        break;
    default:
        console.log('La palabra ingresada es incorrecta')
        break;
}


// Ejercicio 1: Calificá la pelicula
alert(
    'Valora la pelicula en: 1.Muy Mala, 2.Mala, 3.Mediocre, 4.Buena, 5.Muy Buena'
    )
let valoracion = parseInt(prompt('Valore de pelicula del 1 al 5'));

switch (valoracion) {
    case 1:
        console.log('Calificaste la película como Muy Mala. Lo lamentamos mucho')
        break;
    case 2:
        console.log('Calificaste la película como Mala. Lo lamentamos mucho')
        break;
    case 3:
        console.log('Calificaste la película como Mediocre. Lo lamentamos mucho')
        break;
    case 4:
        console.log('Calificaste la película como Buena. Nos alegramos mucho')
        break;
    case 5:
        console.log('Calificaste la película como Muy Buena. Muchas gracias!!')  
        break;
        
    default:
        console.log('Por favor, ingrese un numero del 1 al 5. Gracias')
        break;
}