// contarDeA_n
// En este ejercicio deberás escribir una Función llamada contarDeA_n que tenga los Parámetros contar_de_a y contar_hasta. Además, deberá escribir en la consola los números desde el 1 hasta contar_hasta en intervalos de contar_de_a.

function contar(contar_de_a, contar_hasta){
    let acumulador = 1;
    while(acumulador <= contar_hasta){
        console.log(acumulador);
        acumulador += contar_de_a
    }
}
console.log( contar(2, 20)) 