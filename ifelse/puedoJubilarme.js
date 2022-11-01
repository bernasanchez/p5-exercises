//Puedo Jubilarme? - Solucion Berna Ejercicio 2
let edadJubilacionMujeres = 60;
let edadJubilacionHombres = 65;
let sexoUsuario = prompt('Indique si es hombre o mujer?').toLocaleLowerCase();

if(sexoUsuario == 'hombre'){
    let edadUsuario = parseInt(prompt('Cuantos años tienes?'));
    if(edadUsuario >= edadJubilacionHombres){
        console.log('Felicitaciones, puedes jubilarte')
    }else{
        console.log('Tienes menos de 65 años, no puedes jubilarte')
    }
}else if(sexoUsuario == 'mujer'){
    let edadUsuario = parseInt(prompt('Cuantos años tienes?'));
    if(edadUsuario >= edadJubilacionMujeres){
        console.log('Felicitaciones, puedes jubilarte')
    }else{
        console.log('Tienes menos de 60 años, no puedes jubilarte')
    }
}else{
    console.log('Ingrese correctamente su sexo: hombre o mujer'); 
}

//Solucion de Plataforma 5 - Ejercicio 2
let genero = prompt("Hola! Eres hombre o mujer?").toLowerCase();
let edad = parseInt(prompt("Cuantos años tenes?"));
if (genero === "mujer") {
  edad > 59
    ? alert("Buenisimo Sra! Te podes jubilar")
    : alert("Perdon Sra, no te puedes jubilar ");
}
if (genero === "hombre") {
  edad > 64
    ? alert("Buenisimo Sr! Te podes jubilar ")
    : alert("Perdon Sr , no te puedes jubilar ");
}