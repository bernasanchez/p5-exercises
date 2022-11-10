// Registro En P5
// Creá un objeto con las propiedades que debe contener cada nuevo usuario que se registra en P5:
// Usuario
// Edad
// Dirección
// Fecha de nacimiento
// Contraseña

let usuario = {
    usuario: 'berna@gmail.com', 
    edad: 30,
    direccion: 'primero de mayo 240',
    fechaDeNacimiento: '25/11/1991',
    contraseña: '1234Plataforma5'
};

// Variable miAuto
//1 Creá una Variable llamada miAuto y asignale un Objeto vacío.
//2 Asignale a miAuto una Propiedad marca, que a su vez contenga un String.
//3 Agregá una Propiedad año que contenga un número entero.
//4 Agregá una Propiedad nuevo que contenga un booleano.
//5 Creá una Variable llamada propertyKey y asignale el String "modelo"
//6 Agregá la Propiedad modelo al Objeto miAuto.
//7 Creá una Variable llamada anotherPropertyKey y dale el Valor "precio".
//8 Cuantificá el Valor de tu auto.
//9 Asigná la String "color" a una Variable nueva llamada nextProperty.
//10 Usá la variable nextProperty para añadir el color a tu auto.
//11 Usá el loop for...in para iterar sobre el Objeto miAuto y que muestre en la consola el key y el value de cada Propiedad.

let miAuto = {}
miAuto['marca'] = 'Bmw';
miAuto['año'] = 2022;
miAuto.nuevo = true;
let propertyKey = 'modelo';
miAuto[propertyKey] = 'serie 1';
let anotherPropertyKey = 'precio';
miAuto[anotherPropertyKey] = 1000000;
let nextProperty = 'color';
miAuto[nextProperty] = 'rojo';

console.log(miAuto);
for(let propiedades in miAuto){
    console.log(`${propiedades}: ${miAuto[propiedades]}`); 
}

