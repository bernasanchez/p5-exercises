// Conversión (NO TERMINADO - VER 2DO IF)
// Deberás creas una función llamada conversion la cual reciba una temperatura en grados Fahrenheit pasada por parámetro y la pase a Celsius (y viceversa). Luego deberá mostrar la siguiente información:
// Si la temperatura está entre 14°F/32°F o -10°C/0°C, debe retornar "Temperatura baja".
// Si la temperatura está entre 33°F/68°F o 1°C/20°C, debe retornar "Temperatura adecuada".
// Si la temperatura está entre 69°F/95°F o 21°C/35°C, debe retornar "Temperatura alta".
// Si ingresa un valor inválido o una temperatura fuera de ese rango, debe retornar "Temperatura desconocida".

let temperatura = ' 0C' 

let conversor = (temperatura) =>{
    // console.log(typeof(temperatura));
    console.log(temperatura);
    if(temperatura.includes('C')){
        let centigrados = parseInt(temperatura)
        // console.log(typeof(centigrados)) 
        let fahrenheit = (centigrados*1.8) + 32
        console.log('Fahrenheit: ', fahrenheit);
        return fahrenheit
    }else if(temperatura.includes('F')){
        let fahrenheit = parseInt(temperatura)
        // console.log(typeof(centigrados)) 
        let centigrados = (fahrenheit - 32) / 1.8
        console.log('Centigrados: ', centigrados);
        return centigrados;
    }else{
        console.log('Ingrese correctamente una temperatura')
    }
    

    //VER TEMA TEMPERATURA..
    if((fahrenheit >= 14 && fahrenheit <= 32)){
        console.log('Temperatura baja', fahrenheit)
    }else{
        console.log('temperatura media')
    }
  
  
}

conversor(temperatura)

// RESUELTO POR P5 

function conversion(temperatura) {
  if (temperatura.includes("C")) {
    let calculo = Math.round(1.8 * parseInt(temperatura) + 32);
    if (calculo >= 14 && calculo <= 32) {
      return `${calculo}°F, Temperatura baja`;
    } else if (calculo >= 33 && calculo <= 68) {
      return `${calculo}°F, Temperatura adecuada`;
    } else if (calculo >= 69 && calculo <= 95) {
      return `${calculo}°F, Temperatura alta`;
    } else {
      return "Temperatura desconocida";
    }
  } else {
    let calculo = Math.round((parseInt(temperatura) - 32) / 1.8);
    if (calculo >= -10 && calculo <= 0) {
      return `${calculo}°C, Temperatura baja`;
    } else if (calculo >= 1 && calculo <= 20) {
      return `${calculo}°C, Temperatura adecuada`;
    } else if (calculo >= 21 && calculo <= 35) {
      return `${calculo}°C, Temperatura alta`;
    } else {
      return "Temperatura desconocida";
    }
  }
}