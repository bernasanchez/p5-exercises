// Ejercicio 1
let nombre = "berna";
let edad = 30;
let cumpleaños = "25 de nov";
let ciudad = "Córdoba";
let ocupacion = "docente";
let pasatiempos = "deportes";

console.log(
    "Mi nombre es " + nombre + " tengo " + edad + " años y cumplo el dia " 
     + cumpleaños + "vivo en la ciudad de " + ciudad + "soy " + ocupacion + 
    "y mi pasatiempo es hacer "  + pasatiempos); 

// Ejercicio 2
let texto = prompt("Ingrese un texto breve");
console.log("La cantidad de letras que contiene el texto es:" ,texto.length); 

// Ejercicio 3: calcular la edad del usuario
let edadUsuario = parseInt(prompt("Cuantos años tienes?"));
let diasVividos = edadUsuario * 365;
console.log("la cantidad de dias que viviste son: ", diasVividos); 

// Ejercicio 4: Suma de Valores
let num1 = parseInt(prompt("Ingresa un numero: "));
let num2 = parseInt(prompt("Ingresa un otro numero: "));
let resultado = num1 + num2;

console.log("El resultado de la suma es: ", resultado);

// Calculador De Abastecimiento De Por Vida
// Ejercicio 1
let edadBerna = 30;
let edadMaxima = 90;
let snackFavorito = "pringles";
let snackPorDia = 20;
let precioPorUnidad = 5; 

let snackPorComer = ((edadMaxima - edadBerna)*365) * 20; 
let gastoTotalSnacks = (snackPorComer * precioPorUnidad)
// alert("Necesitarás " + snackPorComer + " snacks para que te alcancen hasta los "+ edadMaxima + " años"); 

console.log("Comeras la cantidad de : " , snackPorComer , "hasta los 90 años"); 
console.log("Gastaras en toda tu vida la cifra de " + gastoTotalSnacks + " en snacks"); 

// Ejercicio 2
let diasViaje = 15;
let presupuestoTotal = 200000;
let cantidadComidas = (diasViaje * 4);

let presupuestoDiario = presupuestoTotal / cantidadComidas
console.log("Podés gastar " + presupuestoDiario + " en cada comida para que te alcance la plata durante los " + diasViaje +  " días de viaje");



// Template Strings  
// Ejercicio 1
let nombre2 = "Gabriela";
let profesion = "programadora";
let oracion = `${nombre2} es ${profesion}`;
console.log(oracion);

// Ejercicio 2
let productoComprado = prompt("Que articulo va a llevar?");
let cantidadComprada = parseInt(prompt('Cuantas unidades va a llevar?'));
let precioArticulo = parseInt(prompt('Que precio tiene el articulo?'));

let totalAPagar = 
        `<div>El total a pagar es $
        ${cantidadComprada * precioArticulo} 
        </div>`

console.log(totalAPagar); 