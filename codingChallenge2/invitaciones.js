// 3. Invitaciones
// Declará una función que reciba una lista de personas invitadas a una fiesta y que filtre a los mayores de 18 años.
// Ejemplo:
// Test: [{Kath:20},{Javi:31},{Mario:10},{Paz:9}]

let lista =  [
    {Kath:20},
    {Javi:31},
    {Mario:10},
    {Paz:9}
]
let fiesta = (lista) => {
   for(let i = 0; i < lista.length; i++){
        for (const propiedad in lista) {
            if (lista[propiedad] >= 18){
                console.log(propiedad)
            }         
        }
   }
    
}
fiesta(lista);



// Output 1 (opción simple): [{Kath: 20}, {Javi: 31}]
// Output 2 (opción compleja): ["Kath","Javi"] 