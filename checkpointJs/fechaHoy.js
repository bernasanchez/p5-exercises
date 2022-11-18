// RESUELTO POR P5 - (NO VEO EL RESULTADO)
// Fecha De Hoy
// Escribí una función que indique si la fecha de hoy es par o impar.


function whatDay() {
 let day = new Date().getDate();
 if (day % 2) {
   return "El día de hoy es impar";
 } else {
   return "El dia de hoy es par";
 }
}
whatDay();