//Ejemplo While con Strings
let palabraMagica = "¡Ábrete, sésamo!"
let intento = prompt("Dígame, ¿cuál es la Palabra Mágica?")

while(intento != palabraMagica){
  alert("Esa palabra es incorrecta")
  intento = prompt("Inténtelo nuevamente")
  } 
alert("¡Bienvenido a La Caverna De Los 40 Ladrones!")


//Variables Acumuladoras 
let i = 1
let final = 5
let acumulador = 0

while(i <= final){
  acumulador += i
  i++
}
  
console.log(acumulador)