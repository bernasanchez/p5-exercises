// EJERCICIO 3

// Mayores de: escribí una función que reciba dos parámetros, el primero un arreglo de personas que contenga información personal, entre ellas su edad, y como segundo parámetro un número que represente la edad límite que querés buscar. La función deberá devolver un nuevo arreglo pero solo con las personas que superan esa edad o tienen la misma.

const usuarios = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "age": 38,
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "age": 15,
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "age": 5,
  },
{
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "age": 56,
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "age": 22,
  },
{
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "age": 45,
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "age": 18,
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "age": 17,
  },
{
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "age": 31,
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "phone": "024-648-3804",
    "age": 28,
  }
]
console.log(usuarios[0]['age'])
let mayores = (usuarios, edadLimite) => {
    let mayoresDe = []
    for(let i = 0; i <= usuarios.length; i++){
        
        if(usuarios[i]['age'] >= edadLimite){
            mayoresDe.push(usuarios[i])
            console.log(mayoresDe)
        }
    }
}
mayores(usuarios, 30)

// // debería retornar
// [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "age": 38,
//   },
//   {
//     "id": 4,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "age": 56,
//   },
//   {
//     "id": 6,
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "age": 45,
//   },
//   {
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "age": 31,
//   }
// ]