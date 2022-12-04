// 4. AbbrevName
// Crea una Función llamada abbrevName que reciba como parámetro un string (""). Este string tiene que incluir un espacio. La Función deberá convertir el string recibido en iniciales.
// Ejemplos:
//  abbrevName("Sam Harris") ==> "S.H"
//  abbrevName("Evan Cole") ==> "E.C"
//  abbrevName("David Mendieta") ==> "D.M"

let abbrevName = (str) => {
    str = str.split(' '); 
    console.log(str);

    let nuevoStr = str.map(palabra => {
       return `${palabra[0]}`
    })
    nuevoStr = nuevoStr.join('.')
    console.log(nuevoStr)

}
abbrevName("Sam Harris")
abbrevName("Evan Cole")
abbrevName("David Mendieta")