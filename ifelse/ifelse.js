// Mis Primeras Condicionales
let num1 = 20;
let num2 = 10;

//Ejerc 1
if(num1 > num2){
    console.log("el num 1 es mas grande"); 
}else{
    console.log('el num 2 es mayor')
}

//Ejerc 2 : no se ejecuta porque la sentencia es false 
if(num1 === num2){
    console.log("el num1 es estrictamente igual al num2"); 
}

// Ejerc 3: Feliz o triste?
let respuesta = prompt('Estas feliz o triste?')
if (respuesta == 'triste'){
    console.log('Mucho aliento, sigue adelante!!')
}else{
    console.log('Me alegro que estes bien!!')
}

// Ejerc 4: Numero secreto
let numSecreto = 9;
let numUsuario = parseInt(prompt('Cual es el numero secreto?'))

if(numSecreto != numUsuario){
    alert("Estas equivocado!");
}else{
    alert('Felicitaciones!! Adivinaste :)')
}

// Ejerc 5: Contraseña
let contaseñaUser = prompt('Ingrese su contraseña');

if(contaseñaUser == 'Gino123'){
    alert("Bienvenido a sitio")
}else{ 
    window.location = "http://www.google.com"
}; 


