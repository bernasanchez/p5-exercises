// 1. ToTime
// Crea una Función llamada toTime() que tome como argumento un número entero (segundos). La Función debe convertir el valor recibido en un string ("") que describe cuántas horas y minutos comprenden esa cantidad de segundos.
// El resultado debe tener el siguiente formato: "X hora (s) y X minuto (s)".
// Ejemplos:
// toTime(3600) ==> "1 hour(s) and 0 minutes(s)"
// toTime(3500) ==> "0 hour(s) and 58 minutes(s)"
// toTime(323500) ==> "89 hour(s) and 51 minutes(s)"

let toTime = (segundos) => {
    let minutos = segundos / 60
    console.log('Son el total de :',Math.floor(minutos), 'minutos')
    let horas = minutos / 60
    console.log('Son el total de :',  Math.floor(horas), 'horas')
}
toTime(3600); 
toTime(3500); "0 hour(s) and 58 minutes(s)"
toTime(323500)