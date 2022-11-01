// Burro-Mático
// En este ejercicio deberás crear un programa que ayude al Burro a preguntar al usuario "¿Ya merito llegamos?".
// Si el usuario responde “Si”, el programa deberá darle un mensaje de bienvenida a Muy Muy Lejano. Sino, deberá mostrarle, nuevamente, el mensaje del Burro.
// ⚠️Importante: El programa deberá identificar como verdadero tanto “Si”, como “SI”, como “si”.

let mensajeBurro = prompt('Ya merito llegamos?');

while (!(mensajeBurro === 'Si' || mensajeBurro === 'SI' || mensajeBurro === 'si')) {
    mensajeBurro = prompt('Ya merito llegamos?');
}
alert('Bienvenido a Muy Muy Lejano');