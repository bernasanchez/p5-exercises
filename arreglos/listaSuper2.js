let listaDeSuper2 = ['pan', 'leche', 'frutas'];
//1 Agregá dos nuevos productos al final de la lista.
listaDeSuper2.push('gaseosa', 'chocolate');

//2 Agregá dos productos al principio de tu lista.
listaDeSuper2.unshift('cigarrillos', 'dentifrico');

//3 Determiná cuán largo es el Arreglo en este momento.
console.log(listaDeSuper2.length);

//4 Sacá un producto y guardalo en una Variable que se llame noHabia.
let noHabia = listaDeSuper2.pop();
console.log(noHabia); 

//5 Sacá un producto y guardalo en otra Variable que se llame comprado.
let comprado = listaDeSuper2.shift();

//6 ¿Cuán largo es el Arreglo ahora?
console.log(listaDeSuper2.length);

