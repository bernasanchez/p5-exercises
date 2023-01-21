// Seleccionar Fondo
//1 Creá un input en tu HTML.
//2 Cuando el usuario ingrese un color en el input (por ejemplo, "red") y haga enter, el color de fondo deberá tomar ese color.
//3 Si el usuario presiona la tecla para borrar, el color deberá ser blanco otra vez.
// Extra Credit
// Ahora, adaptá tu código para que el usuario escriba en el input el color de fondo en español. Limitá tu código a colores primarios.
// 🚀 Desafío: Evitá usar if...else o switch... ¿Cómo lo harías?

//Variables
let fondo = document.querySelector('body');
let colorInput = document.querySelector('input'); 

// Funciones
colorInput.addEventListener('change', function(){
    let colorIngresado = this.value //colorIngresado.value (idem)
    // console.log(colorIngresado)
    fondo.style.background = colorIngresado; 
    
})

colorInput.addEventListener('keydown', function(e){
    if(e.key === 'Backspace'){
        fondo.style.background = 'white'
    }
})

//Variables: colores en español
// colorInput.addEventListener('change', function(){
   
//     if(colorIngresado == colorFondoAmarillo){
//         fondo.style.background = "red"
//     }
// })