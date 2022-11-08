// Lista de Súper - Parte III

let listaDeSuper3 = ['pan', 'leche', 'frutas'];
let listaDeSuper4 = ['azucar', 'atun', 'crema']
//1 Usá un for Loop y mostrá cada ítem de listaDeSuper en la consola.
for(let i = 0; i < listaDeSuper3.length; i++){
    console.log(listaDeSuper3[i]); 
}
//2 Refactoreá tu código de manera tal que el for loop viva dentro de una Función que se llame logItems. La Función deberá tomar un Arreglo como Parámetro e imprimir sus elementos en la consola.
let logItems = (listaDeSuper3) => {
    for(let i = 0; i < listaDeSuper3.length; i++){
        console.log(listaDeSuper3[i]); 
    }
}
logItems(listaDeSuper3);

//3 Invocá logItems 2 veces, pasando listaDeSuper la primera vez y otro Arreglo la segunda vez (deberás crear uno nuevo).
logItems(listaDeSuper4); 

//4 Refactoreá el código de logItems para que use .forEach() en vez de un for loop.
let logItems2 = (listaDeSuper4) => {
    listaDeSuper4.forEach(prod => {
        console.log(prod)
    });
}
logItems2(listaDeSuper4);

