// 12. Sumatoria
// Declará una Función llamada sumattion que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
// Ejemplo:
// sumattion(3) debe retornar 6 por que hace (1 +2 +3)
// sumattion(8) debe retornar 36

let sumattion = (num) => {
    let acc = 0
    for(let i = 0; i <= num; i++){
        acc = acc + i
        console.log(acc)
    }
}
sumattion(6)