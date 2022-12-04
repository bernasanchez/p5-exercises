// 7. getPlanetName
// Creá una Función llamada getPlanetName que reciba como parámetro un número. La Función debería retornar el nombre del planeta correspondiente al número recibido por parámetro.
// Planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno.
// Ejemplos:
// getPlanetName(2) => 'Venus'
// getPlanetName(4) => 'Marte'
// getPlanetName(7) => 'Urano'

let getPlanetName = (num) => {
   
    let planetas = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno']
    const buscador = planetas.find(element => element == planetas[num - 1] )
    console.log(buscador)
   
}
getPlanetName(2)
getPlanetName(4)
getPlanetName(7)