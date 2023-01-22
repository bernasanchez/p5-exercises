//FALTA: TERMINAR CON UN GANADOR COMPARANDO ANCHO PISTA VS ANCHO AUTO
let autoRojo = document.querySelector('#autoRojo'); 
// let autoRojoAncho = document.querySelector('#autoRojo').clientWidth; 
let autoAzul = document.querySelector('#autoAzul'); 
let pistaAncho = document.querySelector('#pista').clientWidth; 

let accRojo = 0; 
let accAzul = 0;
// let llegada = autoRojoAncho + accRojo
// let marginLeftRojo = autoRojo.style.marginLeft;

window.addEventListener('keyup', function(e){
    if(e.key == 'd'){
        accRojo++; 
        autoRojo.style.marginLeft = accRojo + 'px'
    }else if(e.key == '3'){
        accAzul++; 
        autoAzul.style.marginLeft = accAzul + 'px'
    }else{
        console.log('tecla incorrecta')
    }
})



