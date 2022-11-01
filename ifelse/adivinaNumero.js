//Adivina el numero secreto 
let numeroSecreto = 9;
let numeroUsuario = parseInt(prompt('Cual es el numero secreto?'));

if(numeroSecreto === numeroUsuario){
    alert('Adivinaste! El numero secreto es: ' + numeroSecreto);
}else{
    alert('Te equivocaste, intentalo nuevamente')
    if(numeroUsuario > numeroSecreto){
        console.log('El numero ingresado es mayor que el numero secreto');
    }else{
        console.log('El numero ingresado es menor que el num secreto')
    }
}; 