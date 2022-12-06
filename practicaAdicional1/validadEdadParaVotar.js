// 14. Validador de edad para votar
// Escribe una Función llamada isOldEnoughToVote. Dado un número, en este caso una edad, isOldEnoughToVote retorna un booleano si la persona de esa edad tiene la edad necesaria para votar legalmente en Argentina.
// Ejemplo:
// isOldEnoughToVote(17) //output: true
// isOldEnoughToVote(13) //output: false

let isOldEnoughToVote = (edad) => {
    if(edad >= 16){
        return true
    }else{
        return false
    }

}
isOldEnoughToVote(17)