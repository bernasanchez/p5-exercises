//// Cambiar color del h1 en un intervalo de tiempo
// Traemos el elemento h1
let h1 = document.querySelector('h1');

// Seteamos el intervalo
setInterval(function() {
    // Traemos el color random
    let color = getRandomColor();
    // Cambiamos el color del h1 y otros parámetros
    h1.style.display = 'block';
    h1.style.color = color;
    h1.style.transition = 'all 250ms ease';
    h1.style.fontFamily = 'monospace';
    h1.style.textAlign = 'center';
    h1.style.fontSize = '50px';
    
    // Funcion autoejecutable para hacer uppercase o lowercase random
    (function() {
        let random = Math.round(Math.random());
        if (random === 0) {
            h1.style.textTransform = 'uppercase';
            h1.style.fontSize = '40px';
        } else {
            h1.style.textTransform = 'lowercase';
            h1.style.fontSize = '60px';
        }
    }
    )();
}, 700);

// Creamos la función que nos devuelve un color random
function getRandomColor() {
    // Generamos un número random
    var random = Math.floor(Math.random() * 16777215).toString(16);
    // Retornamos el color en formato hexadecimal
    return '#' + random;
}

//// Cambiamos el fondo de color y centramos los elementos del body
// Traemos el body
let body = document.querySelector('body');
let html = document.querySelector('html');

// Centramos los elementos del body
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.flexDirection = 'column';
body.style.height = '100vh';

// Seteamos * para que tome el 100% del ancho y alto
body.style.margin = '0';
body.style.padding = '0 80px';

// Seteamos el color del html
// Seteamos el intervalo
setInterval(function() {
    // Traemos el color random
    let color2 = getRandomColor2();
    html.style.backgroundColor = color2;
}, 700);

// Creamos la función que nos devuelve un color random
function getRandomColor2() {
    // Generamos un número random
    var random = Math.floor(Math.random() * 16777215).toString(16);
    // Retornamos el color en formato hexadecimal
    return '#' + random;
}


//// Mensaje en consola
console.log('%c¿Cómo viene ese portfolio? vamos que te tiro el dominio si no! jaja', 'color: #fff; background-color: blue; font-size: 20px; padding: 10px; border-radius: 5px;');