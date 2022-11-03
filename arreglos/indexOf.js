


// if(amigos.indexOf("Felix")){
//     console.log('Tengo un amigo que se llama Félix');
// }else{
//     console.log('Sería bueno tener un amigo que se llame Félix')
// }

let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan", "Félix"];
function encontrarAmigo(nombre){
    
    if(nombre === 'Félix'){
        let encontrado = amigos.indexOf(nombre);
        console.log(`Tengo un amigo que se llama Félix` )
    }else{
        console.log("Sería bueno tener un amigo que se llame Félix")
    }
   
};
encontrarAmigo("Félix");